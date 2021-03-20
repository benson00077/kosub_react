import React, { useContext, useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { SearchContext } from './SearchContext';
import useFetch from './useFetch';


function SearchBar({ seteIfRerenderSearchPage }) {

    const [searchResult, setSearchResult] = useContext(SearchContext)
    const [query, setQuery] = useState("")
    const inputRef = useRef(null)
    let history = useHistory()
    const [fetchResponse, { fetch_search }] = useFetch(null)

    const submitHandler = e => {
        e.preventDefault()
        seteIfRerenderSearchPage(true)

        // axios
        //     .get(`http://127.0.0.1:5000/sub/query/${searchResult['queryLanguage']}?word=${query}`)
        //     .then(res => {
        //         setSearchResult({ ...searchResult, mainQuery: query, result: res.data, result_number: res.data['id'].length })
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })


        // Fetching datas
        // TESTING......模擬遠端叫資料等待時間
        setSearchResult(
            {...searchResult, 
            isLoading: true}
        )

        fetch_search(searchResult.queryLanguage, query)
        // setTimeout(() => {
        //     console.log('async fetching testing...')
        //     console.log('REMEMBER: to REFACTORING fake fetching waiting block here')
        //     console.log('Since fetch_search would be put to event loop ... as a cb function')
        //     fetch_search(searchResult.queryLanguage, query)
        // }, 2000)

        history.push("/search")
    }

    // listening to axios fetching status
    useEffect(() => {
        // fetched sccesfully
        if (Object.keys(fetchResponse.post) != 0) {
            // console.log(fetchResponse.post)
            // console.log(query)

            setSearchResult(
                {...searchResult,   
                mainQuery: query, 
                result: fetchResponse.post, 
                result_number: fetchResponse.post['id'].length, 
                isLoading: false,
                noResult: false }
            )
            setQuery('')
        }
        // fetch error
        if (!fetchResponse.isLoading && fetchResponse.error) {
            // console.log(fetchResponse)
            // console.log(query)
            setSearchResult(
                {...searchResult,
                mainQuery: query,
                isLoading: false,
                noResult: true}
            )
            setQuery('')
        }
    }, [fetchResponse])


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
