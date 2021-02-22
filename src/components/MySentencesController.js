import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import ContentWrapperMySentence from './ContentWrapperMySentence'
import { UserContext } from './UserContext'


function MySentencesController({ isLoggedIn, user, ifUpdateMySentencePage, ...rest }) {

    const [match, setMatch] = useState({}) // Match result from api
    const [sentencesID_SelectedList, setSentencesID_SelectedList] = useState([])

    const [userInfo, setUserInfo] = useContext(UserContext)


    // Sentencebook select Handler
    const sentenceID_ClickHandler = (id) => {
        let tempList = []
        // cancel selection or push selection to list
        if (sentencesID_SelectedList.includes(id)) {
            tempList = sentencesID_SelectedList.filter(ele => ele !== id)
        } else {
            tempList = [...sentencesID_SelectedList, id]
        }
        // setSentencesID_SelectedList([...new Set(tempList)])
        setSentencesID_SelectedList([...tempList])
    }

    useEffect(() => {
        axios
            .get(`http://localhost:5000/sub/sentencebook?id=${user}`)
            .then((res) => {
                // setMatch(res.data)
                setUserInfo({...userInfo, mysentence: res.data, mysentence_number: res.data['id'].length})
            })
            .catch((err) => {
                console.log(err)
            })
    }, [ifUpdateMySentencePage])
    
    return (
        <React.Fragment>
            {/* <ContentWrapperMySentence koList={match.ko} zhList={match.zh} enList={match.en} idList={match.id}
                sentenceID_ClickHandler={sentenceID_ClickHandler} sentencesID_SelectedList={sentencesID_SelectedList} /> */}
            <ContentWrapperMySentence
                sentenceID_ClickHandler={sentenceID_ClickHandler} sentencesID_SelectedList={sentencesID_SelectedList} />    
        </React.Fragment>
    )
}

export default MySentencesController
