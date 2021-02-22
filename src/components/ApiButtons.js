import React, { useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './apiButton.module.css'


// function ApiButtons({sentencesID_SelectedList, toggleDrawer, SentencebookPush}) {
function ApiButtons({ sentencesID_SelectedList, setIsDrawerOpen, isDrawerOpen, SentencebookPush, SentencebookDel, fetch_drawer }) {


    const buttonRef_mySentenceBook = useRef(null)
    const buttonRef_fetchContext = useRef(null)
    const history = useHistory() // history.push('/mysentnece') redirect

    useEffect(() => {
        const len = sentencesID_SelectedList.length

        // Button UI : Add to my Sentence Book 
        if (len >= 1) {
            buttonRef_mySentenceBook.current.disabled = false
        } else {
            buttonRef_mySentenceBook.current.disabled = true
        }

        // Button UI : See Context of selected sentence
        if (len === 1) {
            buttonRef_fetchContext.current.disabled = false
        } else {
            buttonRef_fetchContext.current.disabled = true
        }
    }, [sentencesID_SelectedList])


    return (
        <React.Fragment>
            
            {SentencebookPush
                ? <button
                    className={styles.apiButton}
                    ref={buttonRef_mySentenceBook}
                    onClick={() => SentencebookPush(sentencesID_SelectedList)}>
                    love
                 </button>
                : ''
            }

            {SentencebookDel
                ? <button
                    className={styles.apiButton}
                    ref={buttonRef_mySentenceBook}
                    onClick={() => SentencebookDel(sentencesID_SelectedList)}>
                    Del
                 </button>
                : ''
            }


            <button
                className={styles.apiButton}
                ref={buttonRef_fetchContext}
                onClick={() => {
                    fetch_drawer(sentencesID_SelectedList[0])
                    setIsDrawerOpen(!isDrawerOpen)
                }}>
                Context
            </button>

        </React.Fragment>
    )
}

export default ApiButtons
