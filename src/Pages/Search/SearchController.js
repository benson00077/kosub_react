import React, { useContext } from 'react'
import axios from 'axios'
import ContentWrapperSearch from './ContentWrapperSearch'
import { SearchContext } from '../../context/SearchContext'
import Spinning from '../../components/Spinning'

function SearchController({ user, seteIfUpdateMySentencePage, ifUpdateMySentencePage }) {
  const [searchResult] = useContext(SearchContext)

  const sentencebookpush_root_url = 'https://kosub-api-pro.herokuapp.com'

  const SentencebookPush = (myList) => {
    if (user) {
      let pushData = myList.map((eachSentenceID) => ({
        id: user,
        sentence_id: eachSentenceID,
        query: searchResult['mainQuery'],
      }))
      axios
        .post(`${sentencebookpush_root_url}/sub/sentencebook`, pushData)
        .then((res) => {
          if (res.data.isAddedToSentencebook) {
            window.alert('Added to Sentence Book!')
            seteIfUpdateMySentencePage(!ifUpdateMySentencePage)
          } else {
            window.alert('Oops! some error occur.') // BackEnd error
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
    if (!user) {
      window.alert('Please Log in !')
    }
  }

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
          SentencebookPush={SentencebookPush}
          headerButton={'Close'}
        />
      )}
    </React.Fragment>
  )
}

export default SearchController
