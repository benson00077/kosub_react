import React, { useContext } from 'react'
import axios from 'axios'
import ContentWrapperSearch from './ContentWrapperSearch'
import { SearchContext } from '../../context/SearchContext'
import Spinning from '../../components/Spinning'

function SearchController() {
  const [searchResult] = useContext(SearchContext)

  return (
    <React.Fragment>
      {searchResult.isLoading ? (
        <Spinning />
      ) : (
        <ContentWrapperSearch
          headerTitle="Context"
          sectionTitle={'Search Information'}
          sectionInfo={`Query : ${searchResult['mainQuery']}`}
          sectionInfo2={`Result : ${searchResult['result_number']} sentences found`}
          sectionInfo3={`Selected : `}
          headerButton={'Close'}
        />
      )}
    </React.Fragment>
  )
}

export default SearchController
