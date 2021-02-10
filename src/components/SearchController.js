import React, { useState }from 'react'
import axios from 'axios'
import ContentWrapperSearch from './ContentWrapperSearch'

function SearchController({ko, zh, en, id, user, mainQuery, seteIfUpdateMySentencePage, ifUpdateMySentencePage}) {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [drawResponse, setDrawResponse] = useState({})
    const [sentencesID_SelectedList, setSentencesID_SelectedList] = useState([])

    
    // Sentencebook Push Handler
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



    // Drawer Handler
    const toggleDrawer = (id) => {
        setIsDrawerOpen(!isDrawerOpen)
        if (Object.keys(drawResponse).length === 0){
        axios
            .get(`http://127.0.0.1:5000/sub/search/all?id=${id}&contextrange=5000`)
            .then(res => {
                console.log(res)
                setDrawResponse(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        } else {
            setIsDrawerOpen(!isDrawerOpen)
            setDrawResponse({})
        }
    }

    const headerButtonHandler = () => {
        setIsDrawerOpen(false)
        setDrawResponse({})
    }

    
    return (
        <React.Fragment>
            
            <ContentWrapperSearch 
                isSearchController={true} 
                ko={ko} zh={zh} en={en} id={id}
                sentenceID_ClickHandler={sentenceID_ClickHandler}
                headerTitle="Context" 
                sectionTitle="Query Result"

                sentencesID_SelectedList={sentencesID_SelectedList}
                toggleDrawer={toggleDrawer}
                SentencebookPush={SentencebookPush}

                
                isDrawerOpen={isDrawerOpen}     
                drawerResponseKo={drawResponse.ko} 
                drawerResponseZh={drawResponse.zh} 
                drawerResponseEn={drawResponse.en} 
                drawerResponseId={drawResponse.id}
                headerButton={'close'}
                headerButtonHandler={headerButtonHandler}
                />

        </React.Fragment>
    )

}

export default SearchController
