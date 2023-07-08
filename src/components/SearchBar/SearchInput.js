import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SearchContext } from '../../context/SearchContext'
import useFetch from '../../hooks/useFetch'

function SearchInput({ seteIfRerenderSearchPage }) {
  const [searchResult, setSearchResult] = useContext(SearchContext)
  const [query, setQuery] = useState('')
  let navigate = useNavigate()
  const [fetchResponse, { fetch_search }] = useFetch(null)

  const submitHandler = (e) => {
    e.preventDefault()
    seteIfRerenderSearchPage(true)
    setSearchResult({ ...searchResult, isLoading: true })
    fetch_search(searchResult.queryLanguage, query)
    navigate('/search')
  }

  // listening to axios fetching
  useEffect(() => {
    setQuery('')
    const isNoResult = !fetchResponse.isLoading && fetchResponse.error === ''
    const isErr = !fetchResponse.isLoading && fetchResponse.error !== ''
    const errMsgs = fetchResponse.error.split('.')
    const result = {
      ...searchResult,
      mainQuery: query,
      result: isErr
        ? [{ timeId: -1, subtitles: [errMsgs[0]], subtitlesZh: [errMsgs[1]], subtitlesEn: [errMsgs[2]] }]
        : fetchResponse.post,
      result_number: fetchResponse.post.length,
      isLoading: false,
      noResult: isNoResult || isErr,
    }
    setSearchResult(result)
    return
  }, [fetchResponse])

  return (
    <div className="my-2 md:my-0">
      <form onSubmit={submitHandler}>
        <input
          className="w-full h-full border-none pt-2 pb-2 pr-20 pl-16 bg-zinc-800 rounded-md text-amber-50 text-xl shadow-[0_0_0_2px_rgba(134,140,160,0.2)]"
          type="text"
          placeholder="e.g. 감사하다"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
          }}
        ></input>
      </form>
    </div>
  )
}

export default SearchInput
