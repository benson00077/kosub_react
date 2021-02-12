import React, { useState }from 'react'
import axios from 'axios'
import ContentWrapperSearch from './ContentWrapperSearch'

function SearchController({ko, zh, en, id, user, mainQuery, seteIfUpdateMySentencePage, ifUpdateMySentencePage}) {

    const SentencebookPush = (myList) => {
        if (user) {
            let pushData = myList.map((eachSentenceID) => (
                {id: user, sentence_id: eachSentenceID, query: mainQuery}
            ))
            axios
                .post("http://127.0.0.1:5000/sub/sentencebook", pushData)
                .then((res) => {
                    if (res.data.isAddedToSentencebook) {
                        window.alert("Added to Sentence Book!")
                        seteIfUpdateMySentencePage(!ifUpdateMySentencePage)
                    } else {
                        window.alert("Oops! some error occur.") // BackEnd error
                    }
                })        
                .catch((err) => {
                    console.log(err)
                })
        }
        if(!user) {
            window.alert("Please Log in !")
        }
    }
    
    return (
        <React.Fragment>
            
            <ContentWrapperSearch 
                isSearchController={true} 
                ko={ko} zh={zh} en={en} id={id}
                headerTitle="Context" 
                sectionTitle="Query Result"

                SentencebookPush={SentencebookPush}   

                headerButton={'close'}
                />

        </React.Fragment>
    )

}

export default SearchController
