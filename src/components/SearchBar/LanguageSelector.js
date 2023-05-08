import React, { useState, useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'

function LanguageSelector({ value }) {
  const [isActive, setIsActive] = useState([true, false, false])
  const [SearchResult, setSearchResult] = useContext(SearchContext)

  let checkLabel = ['한국어', '中文', 'English']

  const clickHandler = (language, i) => {
    setSearchResult({ ...SearchResult, queryLanguage: language })
    let tempList = [false, false, false]
    tempList[i] = true
    setIsActive([...tempList])
  }
  // ml-[10vw]
  return (
    <>
     <div className="flex flex-row justify-end flex-grow">
      <h3 className="px-2.5 lg:px-5 py-3 md:py-5 text-amber-50 border-b-2 border-stone-400"> Search In </h3>
      {value.map((each, i) => (
        <h3 className={`${isActive[i] ? 'text-zinc-50 border-b-2 border-stone-400' : 'text-zinc-400'} px-2.5 lg:px-5 py-3 md:py-5`} 
          key={i} 
          onClick={() => clickHandler(each, i)}>
          {' '}
          {checkLabel[i]}{' '}
        </h3>
      ))}
      </div>
    </>
  )
}

export default LanguageSelector
