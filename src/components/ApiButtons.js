import React, { useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './apiButton.module.css'
import useFetch from './useFetch'


// function ApiButtons({sentencesID_SelectedList, toggleDrawer, SentencebookPush}) {
function ApiButtons({sentencesID_SelectedList, toggleDrawer, SentencebookPush}) {

    
  const buttonRef_mySentenceBook = useRef(null)
  const buttonRef_fetchContext = useRef(null)
  const history = useHistory() // history.push('/mysentnece') redirect
  
  const [fetchResponse, {fetch_drawer}] = useFetch(null)

  
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

            <button 
              className={styles.apiButton} 
              ref={buttonRef_mySentenceBook}
              onClick={() => SentencebookPush(sentencesID_SelectedList)}>
                Add to my Sentence Book 
            </button>

            <button 
              className={styles.apiButton} 
              ref={buttonRef_fetchContext} 
              onClick={() => fetch_drawer(sentencesID_SelectedList[0])}>
                See Context of selected sentence
            </button>

            {fetchResponse ? <button>'fetchResponse'</button> : ''}

        </React.Fragment>
    )
}

export default ApiButtons
