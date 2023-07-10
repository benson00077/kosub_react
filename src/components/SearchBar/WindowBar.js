import React, { useState } from 'react'
import SearchInput from './SearchInput'
import LanguageSelector from './LanguageSelector'
import Circles from './Circles'
import { LANGUAGE_LABLE } from '../../data/constant'

function WindowBar(props) {
  const [queryLanguage, setQueryLanguage] = useState(Object.keys(LANGUAGE_LABLE)[0])

  return (
    <div className="flex flex-col md:flex-row items-center px-6 border-b-[1px] border-stone-400 border-opacity-25">
      <div className="hidden lg:block">
        <Circles />
      </div>
      <LanguageSelector setQueryLanguage={setQueryLanguage} />
      <SearchInput queryLanguage={queryLanguage} seteIfRerenderSearchPage={props.seteIfRerenderSearchPage} />
    </div>
  )
}

export default WindowBar
