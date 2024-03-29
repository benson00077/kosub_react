import { useReducer } from 'react'
import axios from 'axios'
import { API_ROOT_URL, ERR_MESSAGES, KOREAN_POS_TAG } from '../data/constant'

function useFetch() {
  const initialState = {
    isLoading: true,
    error: '',
    post: [], //[{}]
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_SUCCESS':
        return {
          isLoading: false,
          post: action.payload,
          error: '',
        }
      case 'FETCH_ERROR':
        return {
          isLoading: false,
          post: [],
          error: ERR_MESSAGES[action.statusCode],
        }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchFavoriteSpeeches = (jwt) => {
    // axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`
    const config = { headers: { Authorization: `Bearer ${jwt}` } }
    axios
      .get(`${API_ROOT_URL}/users/favorite`, config)
      .then((res) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_ERROR' })
      })
  }

  const postFavoriteSpeeches = async (jwt, selectedIds) => {
    const data = { ids: selectedIds }
    const config = { headers: { Authorization: `Bearer ${jwt}` } }
    return axios
      .post(`${API_ROOT_URL}/users/favorite`, data, config)
      .then((res) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
        return res.data
      })
      .catch((err) => {
        if (!err.response) {
          return dispatch({ type: 'FETCH_ERROR', statusCode: 503 })
        }
        const isUnauthorized = err.response.status === 401
        if (isUnauthorized) dispatch({ type: 'FETCH_ERROR', statusCode: 401 })
        else console.error(err.response.data)
      })
  }

  const delFavoriteSpeeches = async (jwt, selectedIds) => {
    const data = { ids: selectedIds }
    const config = { headers: { Authorization: `Bearer ${jwt}` } }
    return axios
      .delete(`${API_ROOT_URL}/users/favorite`, { data: data, ...config })
      .then((res) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
        return res.data
      })
      .catch((err) => {
        if (!err.response) {
          dispatch({ type: 'FETCH_ERROR', statusCode: 503 })
          console.error(err.message)
        }
        console.error(err.response.data)
      })
  }

  const fetchSearch = async (queryLanguage, mainQuery, posTag) => {
    const params = {
      pos: mainQuery,
      tag: queryLanguage === 'ko' ? posTag : null,
    }
    return axios
      .get(`${API_ROOT_URL}/sentences/${queryLanguage}`, { params })
      .then((res) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
        return res.data
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_ERROR', statusCode: 503 })
        console.error(err.message)
        const errMsg = ERR_MESSAGES[503].split('\n')
        return [{ timeId: -1, subtitles: [errMsg[0]], subtitlesZh: [errMsg[1]], subtitlesEn: [errMsg[2]] }]
      })
  }

  const fetchCtxOfSpeach = async (jwt, timeId) => {
    const timeRange = 3
    const config = { headers: { Authorization: `Bearer ${jwt}` } }
    return axios
      .get(`${API_ROOT_URL}/sentences/context?timeId=${timeId}&timeRange=${timeRange}`, config)
      .then((res) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
        return res.data
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_ERROR' })
      })
  }

  return [state, { fetchFavoriteSpeeches, postFavoriteSpeeches, delFavoriteSpeeches, fetchSearch, fetchCtxOfSpeach }]
}

export default useFetch
