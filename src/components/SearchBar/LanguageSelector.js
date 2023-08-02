import React, { useState, useContext } from 'react'
import { LANGUAGE_LABLE } from '../../data/constant'

function LanguageSelector({ setQueryLanguage }) {
  const [isActive, setIsActive] = useState([true, false, false])

  const clickHandler = (language, i) => {
    setQueryLanguage(language)
    let tempList = [false, false, false]
    tempList[i] = true
    setIsActive([...tempList])
  }
  // ml-[10vw]
  return (
    <>
      <div class="flex flex-row justify-end flex-grow">
        <h3 class="px-2.5 lg:px-5 py-3 md:py-5 text-amber-50 border-b-2 border-stone-400"> Search In </h3>
        {Object.keys(LANGUAGE_LABLE).map((each, i) => (
          <h3
            class={`${
              isActive[i] ? 'text-zinc-50 border-b-2 border-stone-400' : 'text-zinc-400'
            } px-2.5 lg:px-5 py-3 md:py-5`}
            key={each}
            onClick={() => clickHandler(each, i)}
          >
            {LANGUAGE_LABLE[each]}
          </h3>
        ))}
      </div>
    </>
  )
}

export default LanguageSelector
