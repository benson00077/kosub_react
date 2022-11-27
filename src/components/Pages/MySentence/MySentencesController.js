import React, { useEffect, useContext } from 'react'
import axios from 'axios'
import ContentWrapperMySentence from './ContentWrapperMySentence'
import { UserContext } from '../../UserContext'

function MySentencesController({ isLoggedIn, user, ifUpdateMySentencePage, seteIfUpdateMySentencePage, ...rest }) {
  const mysentence_root_url = 'https://kosub-api-pro.herokuapp.com'
  const [userInfo, setUserInfo] = useContext(UserContext)

  useEffect(() => {
    axios
      .get(`${mysentence_root_url}/sub/sentencebook?id=${user}`)
      .then((res) => {
        // setMatch(res.data)
        setUserInfo({ ...userInfo, mysentence: res.data, mysentence_number: res.data['id'].length })
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ifUpdateMySentencePage])

  const SentencebookDel = (myList) => {
    if (user) {
      let delData = myList.map((eachSentenceID) => ({ id: user, sentence_id: eachSentenceID }))
      axios
        .post(`${mysentence_root_url}/sub/sentencebook/del`, delData)
        .then((res) => {
          if (res.data.isDeletedFromSentencebook) {
            window.alert('Deleted From Sentence Book!')
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
      {/* <ContentWrapperMySentence koList={match.ko} zhList={match.zh} enList={match.en} idList={match.id}
                sentenceID_ClickHandler={sentenceID_ClickHandler} sentencesID_SelectedList={sentencesID_SelectedList} /> */}
      <ContentWrapperMySentence SentencebookDel={SentencebookDel} headerTitle="Context" />
    </React.Fragment>
  )
}

export default MySentencesController
