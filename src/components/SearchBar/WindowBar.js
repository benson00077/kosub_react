import React, { useState } from 'react'
import SearchInput from './SearchInput'
import LanguageSelector from './LanguageSelector'
import Circles from './Circles'
import { LANGUAGE_LABLE } from '../../data/constant'

function WindowBar(props) {
  const [queryLanguage, setQueryLanguage] = useState(Object.keys(LANGUAGE_LABLE)[0])

  return (
    <div class="flex flex-col md:flex-row items-center px-6 border-b-[1px] border-stone-400 border-opacity-25">
      <div class="hidden lg:block">
        <Circles />
      </div>
      <LanguageSelector setQueryLanguage={setQueryLanguage} />
      <SearchInput queryLanguage={queryLanguage} />
    </div>
  )
}

export default WindowBar
