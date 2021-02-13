import React, { useContext }from 'react'
import axios from 'axios'
import ContentWrapperSearch from './ContentWrapperSearch'
import { SearchContext } from './SearchContext'

function SearchController({user, seteIfUpdateMySentencePage, ifUpdateMySentencePage}) {

    const [SearchResult, setSearchResult] = useContext(SearchContext)
    
    const SentencebookPush = (myList) => {
        if (user) {
            let pushData = myList.map((eachSentenceID) => (
                {id: user, sentence_id: eachSentenceID, query: SearchResult['mainQuery']}
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
                headerTitle="Context" 
                sectionTitle={`Query Result: ${SearchResult['result_number']} sentneces found`}

                SentencebookPush={SentencebookPush}   

                headerButton={'close'}
                />

        </React.Fragment>
    )

}

export default SearchController
