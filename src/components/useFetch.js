import React, { useReducer, useEffect, useRef } from 'react'
import axios from 'axios'

function useFetch() {

    const root_url = 'https://kosub-api-pro.herokuapp.com'

    const initialState = {
        isLoading: true,
        error: '',
        post: {}
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'FETCH_SUCCESS':
                return {
                    isLoading: false,
                    post: action.payload,
                    error: ''
                }
            case 'FETCH_ERROR':
                return {
                    isLoading: false,
                    post: {},
                    error: 'Something went wrong'
                }
            default:
                return state

        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)


    const fetch_mysentencebook = (user) => {
        axios
            .get(`${root_url}/sub/sentencebook?id=${user}`)
            .then((res) => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
            })
            .catch((err) => {
                dispatch({ type: 'FETCH_ERROR' })
            })
    }

    const fetch_search = (queryLanguage, mainQuery) => {
        axios
            .get(`${root_url}/sub/query/${queryLanguage}?word=${mainQuery}`)
            .then((res) => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
                console.log('fethcing response in fetch_search function')
                console.log(res)
                console.log(state)
            })
            .catch((err) => {
                dispatch({ type: 'FETCH_ERROR' })
                // console.log(err)
            })
    }

    const fetch_drawer = (id) => {
        axios
            .get(`${root_url}/sub/search/all?id=${id}&contextrange=5000`)
            .then((res) => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
            })
            .catch((err) => {
                dispatch({ type: 'FETCH_ERROR' })
            })
    }

    return [state ,  { fetch_mysentencebook, fetch_search, fetch_drawer }]
}

export default useFetch
