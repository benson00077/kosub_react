import React, { useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './apiButton.module.css'


function ApiButton({sentencesID_SelectedList, toggleDrawer}) {

    
  const buttonRef_mySentenceBook = useRef(null)
  const buttonRef_fetchContext = useRef(null)
  const history = useHistory()
  
  
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
              ref={buttonRef_mySentenceBook}>
                Add to my Sentence Book 
            </button>

            <button 
              className={styles.apiButton} 
              ref={buttonRef_fetchContext} 
              onClick={() => toggleDrawer(sentencesID_SelectedList[0])}>
                See Context of selected sentence
            </button>

        </React.Fragment>
    )
}

export default ApiButton
