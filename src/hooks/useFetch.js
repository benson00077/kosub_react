import { useReducer } from 'react'
import axios from 'axios'
import { API_ROOT_URL, ERR_MESSAGES, KOREAN_POS_TAG } from '../data/constant'

function useFetch() {
  const initialState = {
    isLoading: true,
    error: '',
    post: {},
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
          error: ERR_MESSAGES,
        }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const fetch_mysentencebook = (user) => {
    axios
      .get(`${API_ROOT_URL}/sub/sentencebook?id=${user}`)
      .then((res) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_ERROR' })
      })
  }

  const fetch_search = (queryLanguage, mainQuery, posTag) => {
    const params = {
      pos: mainQuery,
      tag: queryLanguage === 'ko' ? posTag : null,
    }
    axios
      .get(`${API_ROOT_URL}/sentences/${queryLanguage}`, { params })
      .then((res) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_ERROR' })
      })
  }

  const fetch_drawer = (id) => {
    axios
      .get(`${API_ROOT_URL}/sub/search/all?id=${id}&contextrange=5000`)
      .then((res) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_ERROR' })
      })
  }

  return [state, { fetch_mysentencebook, fetch_search, fetch_drawer }]
}

export default useFetch
