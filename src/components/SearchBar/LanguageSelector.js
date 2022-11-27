import React, { useState, useContext } from 'react'
import { SearchContext } from '../SearchContext'

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

  return (
    <React.Fragment>
      <h3 className="isActive"> Search In </h3>
      {value.map((each, i) => (
        <h3 className={isActive[i] ? 'isActive' : ''} key={i} onClick={() => clickHandler(each, i)}>
          {' '}
          {checkLabel[i]}{' '}
        </h3>
      ))}
    </React.Fragment>
  )
}

export default LanguageSelector
