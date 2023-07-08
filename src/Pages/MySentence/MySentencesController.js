import React from 'react'
import ContentWrapperMySentence from './ContentWrapperMySentence'

function MySentencesController({ isLoggedIn, user, ifUpdateMySentencePage, seteIfUpdateMySentencePage, ...rest }) {

  return (
    <React.Fragment>
      {/* <ContentWrapperMySentence koList={match.ko} zhList={match.zh} enList={match.en} idList={match.id}
                sentenceID_ClickHandler={sentenceID_ClickHandler} sentencesID_SelectedList={sentencesID_SelectedList} /> */}
      <ContentWrapperMySentence
        sectionTitle="My Favorite Sentences"
        sectionInfo="Selected : "
        ifUpdateMySentencePage={ifUpdateMySentencePage}
      />
    </React.Fragment>
  )
}

export default MySentencesController
