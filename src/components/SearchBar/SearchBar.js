import React from 'react'
import SearchInput from './SearchInput'
import LanguageSelector from './LanguageSelector'
import Circles from './Circles'

function SearchBar(props) {
  return (
    <div className="flex flex-row items-center px-6 border-b-[1px] border-stone-400 border-opacity-25">
      <Circles/>
      <LanguageSelector value={['ko', 'zh', 'en']} />
      <SearchInput seteIfRerenderSearchPage={props.seteIfRerenderSearchPage} />
    </div>
  )
}

export default SearchBar
