import React, { useState } from 'react'
import ApiButton from './ApiButton'
import ApiButtons from './ApiButtons'
import AppCards from './AppCards'
import ShowHideHandler from './ShowHideHandler'
import useSelectSentenceId from './useSelectSentenceId'

import styles from './contentWrapperSearch.module.css'
import Drawer from './Drawer'
import useFetch from './useFetch'


function ContentWrapperMySentence({ koList, zhList, enList, idList, SentencebookDel, ...rest }) {

    // state for Sentence content button
    const [koShow, setKoShow] = useState(true)
    const [zhShow, setZhShow] = useState(true)
    const [enShow, setEnShow] = useState(true)

    // pass to ApiButton & AppCards
    const [sentencesID_SelectedList, sentenceID_ClickHandler] = useSelectSentenceId(rest.id)

    // pass to Drawer & ApiButton
    const [fetchResponse, { fetch_drawer }] = useFetch(null)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return (
        <div className="content-wrapper" id="content-wrapper">

            <div className={`${styles.contentWrapperHeaderSearchpage} ${isDrawerOpen ? styles.contentWrapperHeaderSearchpage__isopen : ''}`}>
                <div className={styles.contentWrapperContext}>
                <h3 className="img-content">
                    {rest.headerImg}
                    {rest.headerTitle}
                </h3>
                <div className="content-text">
                    <Drawer
                    isLoading = {fetchResponse.isLoading}
                    drawerKo={fetchResponse.post.ko}
                    drawerZh={fetchResponse.post.zh}
                    drawerEn={fetchResponse.post.en}
                    drawerId={fetchResponse.post.id} />
                    {rest.headerContent}
                </div>
                <button className="content-button" onClick={()=> setIsDrawerOpen(false)}>{rest.headerButton}</button>
                </div>
                <img className="content-wrapper-img" src="https://assets.codepen.io/3364143/glass.png" alt=""></img>
            </div>
            
            
            <div className={styles.buttons}>
                <ShowHideHandler
                    koShow={koShow}
                    zhShow={zhShow}
                    enShow={enShow}
                    setKoShow={setKoShow}
                    setZhShow={setZhShow}
                    setEnShow={setEnShow} />

                <ApiButtons
                    SentencebookDel={SentencebookDel}
                    isDrawerOpen={isDrawerOpen}
                    setIsDrawerOpen={setIsDrawerOpen}
                    sentencesID_SelectedList={sentencesID_SelectedList}
                    fetch_drawer={fetch_drawer} />
            </div>

            <div className="content-section">
                <div className="content-section-title">{rest.sectionTitle}</div>
                <div className="apps-card">

                    <AppCards controller='mysentence'
                        koShow={koShow} zhShow={zhShow} enShow={enShow}
                        sentenceID_ClickHandler={sentenceID_ClickHandler} />

                </div>
            </div>


        </div>
    )
}

export default ContentWrapperMySentence
