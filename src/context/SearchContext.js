import React, { useState } from 'react'

export const SearchContext = React.createContext()

export const SearchContextProvider = (props) => {
  const [searchResult, setSearchResult] = useState({
    queryLanguage: 'ko',
    mainQuery: '',
    /** 
     *  @type {SentenceResult[]} 
     */
    result: [],
    result_number: 0,
    isLoading: false,
    noResult: false,
  })
  // status: unsearched, searched, noResult, isLoading

  return <SearchContext.Provider value={[searchResult, setSearchResult]}>{props.children}</SearchContext.Provider>
}

/**
 * @typedef {Object} SentenceResult
 * @property {number} timeId - The unique identifier for the sentence.
 * @property {Array} subtitles - An array of Korean subtitles.
 * @property {Array} subtitlesZh - An array of Chinese subtitles.
 * @property {Array} subtitlesEn - An array of English subtitles.
 */