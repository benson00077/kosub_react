import React, { useState } from 'react'


function LanguageSelector({value, setQueryLanguage}) {
  
  const [isActive, setIsActive] = useState([true, false, false])

  let checkLabel = ['한국어', '中文', 'English']

  const clickHandler = (language, i) => {
    setQueryLanguage(language)
    let tempList = [false, false, false]
    tempList[i] = true
    setIsActive([...tempList])
  }
  
  return (
      <React.Fragment>
        <h3 className="isActive"> Search In </h3>
        {value.map( (each, i) => (
          <h3 className={isActive[i] ? 'isActive' : ''} key={i} onClick={() => clickHandler(each, i)} > {checkLabel[i]} </h3>
        ))}
      </React.Fragment>
  )
}

export default LanguageSelector



