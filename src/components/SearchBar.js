import React, { useContext, useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { SearchContext } from './SearchContext';
import useFetch from './useFetch';


function SearchBar({ seteIfRerenderSearchPage }) {

    const [SearchResult, setSearchResult] = useContext(SearchContext)
    const [query, setQuery] = useState("")
    const inputRef = useRef(null)
    let history = useHistory()
    const [fetchResponse, { fetch_search }] = useFetch(null)

    const submitHandler = e => {
        e.preventDefault()
        seteIfRerenderSearchPage(true)

        axios
            .get(`http://127.0.0.1:5000/sub/query/${SearchResult['queryLanguage']}?word=${query}`)
            .then(res => {
                setSearchResult({ ...SearchResult, mainQuery: query, result: res.data, result_number: res.data['id'].length })
            })
            .catch(err => {
                console.log(err)
            })

        setQuery('')
        history.push("/search")

        // fetch_search(SearchResult.queryLanguage, query)

        // const apifetch = async () => {
        //     const res = fetch_search(SearchResult.queryLanguage, query)
        //     return
        // }

        // apifetch()
        //     .then (() => console.log(1))
        //     .then (() => console.log(fetchResponse.post))
        //     .then (() => console.log(2))
        //     // await setSearchResult({...SearchResult, mainQuery: query, result: fetchResponse.post, result_number: fetchResponse.post['id'].length })
        //     .then (() => history.push("/search"))
        //     .then (() => console.log(3))
    }

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <React.Fragment>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="Search"
                    value={query}
                    onChange={e => {
                        setQuery(e.target.value)
                    }}
                    ref={inputRef}>
                </input>
            </form>
        </React.Fragment>
    )
}

export default SearchBar
