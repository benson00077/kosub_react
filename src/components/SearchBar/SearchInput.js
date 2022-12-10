import React, { useContext, useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { SearchContext } from '../SearchContext'
import useFetch from '../useFetch'

function SearchInput({ seteIfRerenderSearchPage }) {
  const [searchResult, setSearchResult] = useContext(SearchContext)
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)
  let history = useHistory()
  const [fetchResponse, { fetch_search }] = useFetch(null)

  const submitHandler = (e) => {
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
    setSearchResult({ ...searchResult, isLoading: true })

    fetch_search(searchResult.queryLanguage, query)
    // setTimeout(() => {
    //     console.log('async fetching testing...')
    //     console.log('REMEMBER: to REFACTORING fake fetching waiting block here')
    //     console.log('Since fetch_search would be put to event loop ... as a cb function')
    //     fetch_search(searchResult.queryLanguage, query)
    // }, 2000)

    history.push('/search')
  }

  // listening to axios fetching
  useEffect(() => {
    // fetched sccesfully, pass fetched result to global search result
    if (Object.keys(fetchResponse.post) != 0) {
      // console.log(query)
      setSearchResult({
        ...searchResult,
        mainQuery: query,
        result: fetchResponse.post,
        result_number: fetchResponse.post['id'].length,
        isLoading: false,
        noResult: false,
      })
      setQuery('')
    }
    // fetch error
    if (!fetchResponse.isLoading && fetchResponse.error) {
      // console.log(query)
      setSearchResult({
        ...searchResult,
        result: { id: [], ko: [], zh: [], en: [] },
        result_number: 0,
        mainQuery: query,
        isLoading: false,
        noResult: true,
      })
      setQuery('')
    }
  }, [fetchResponse])

  return (
    <div className="my-2 md:my-0" >
      <form onSubmit={submitHandler}>
        <input
          className="w-full h-full border-none pt-2 pb-2 pr-20 pl-16 bg-zinc-800 rounded-md text-amber-50 text-xl shadow-[0_0_0_2px_rgba(134,140,160,0.2)]"
          type="text"
          placeholder="e.g. 감사하다"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
          }}
          ref={inputRef}
        ></input>
      </form>
    </div>
  )
}

export default SearchInput
