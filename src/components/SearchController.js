import React, { useContext }from 'react'
import axios from 'axios'
import ContentWrapperSearch from './ContentWrapperSearch'
import { SearchContext } from './SearchContext'

function SearchController({user, seteIfUpdateMySentencePage, ifUpdateMySentencePage}) {

    const [searchResult, setSearchResult] = useContext(SearchContext)
    
    const SentencebookPush = (myList) => {
        if (user) {
            let pushData = myList.map((eachSentenceID) => (
                {id: user, sentence_id: eachSentenceID, query: searchResult['mainQuery']}
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

    const loadingUI_loader_css = {
        position: 'fixed',
        top: '45vh',
        left: '85vh',
        margin: '0 0 2em',
        height: '100px',
        width: '20%',
        text_align: 'center',
        padding: '1em',
        margin: '0 auto 1em',
        display: 'inline-block',
        vertical_align: 'top'
    }

    const loadingUI = () => {
        return (
            <div style={loadingUI_loader_css}>
                <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="40px" height="40px" viewBox="0 0 50 50" style={{enable_background: 'new 0 0 50 50'}}>
                  <path fill="white" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
                    <animateTransform attributeType="xml"
                    attributeName="transform"
                    type="rotate"
                    from="0 25 25"
                    to="360 25 25"
                    dur="0.6s"
                    repeatCount="indefinite"/>
                  </path>
                </svg>  
            </div>
        )
    }
    
    return (
        <React.Fragment>

            {searchResult.isLoading 
                ? loadingUI()
                : <ContentWrapperSearch 
                    headerTitle="Context" 
                    sectionTitle={"Search Information"}
                    sectionInfo={`Query : ${searchResult['mainQuery']}`}
                    sectionInfo2={`Result : ${searchResult['result_number']} sentneces found`}
    
                    SentencebookPush={SentencebookPush}   
    
                    headerButton={'close'}
                    />}
            

        </React.Fragment>
    )

}

export default SearchController
