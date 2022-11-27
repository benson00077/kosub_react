import React, { useEffect, useRef } from 'react'
import styles from './apiButton.module.css'

// function ApiButtons({sentencesID_SelectedList, toggleDrawer, SentencebookPush}) {
function ApiButtons({
  sentencesID_SelectedList,
  setIsDrawerOpen,
  isDrawerOpen,
  SentencebookPush,
  SentencebookDel,
  fetch_drawer,
}) {
  const buttonRef_mySentenceBook = useRef(null)
  const buttonRef_fetchContext = useRef(null)
  // const history = useHistory()
  // history.push('/mysentnece') redirect

  // CSS for svg img
  const img_apibutton_style1 = { fill: 'rgba(218, 46, 136, 0.75)' }
  const img_apibutton_style2 = { fill: 'rgba(80, 250, 240, 0.5)' }

  useEffect(() => {
    const len = sentencesID_SelectedList.length

    // Button UI : Add to mySentence
    if (len >= 1) {
      buttonRef_mySentenceBook.current.disabled = false
    } else {
      buttonRef_mySentenceBook.current.disabled = true
    }

    // Button UI : Fetch Context of selected sentence
    if (len === 1) {
      buttonRef_fetchContext.current.disabled = false
    } else {
      buttonRef_fetchContext.current.disabled = true
    }
  }, [sentencesID_SelectedList])

  return (
    <React.Fragment>
      {SentencebookPush ? (
        <button
          className={styles.apiButton}
          ref={buttonRef_mySentenceBook}
          onClick={() => SentencebookPush(sentencesID_SelectedList)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" style={img_apibutton_style1}>
            <path d="M10 3.22l-.61-.6a5.5 5.5 0 00-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 00-7.78-7.77l-.61.61z" />
          </svg>
          Favorite
        </button>
      ) : (
        ''
      )}

      {SentencebookDel ? (
        <button
          className={styles.apiButton}
          ref={buttonRef_mySentenceBook}
          onClick={() => SentencebookDel(sentencesID_SelectedList)}
        >
          <svg viewBox="0 0 20 20" style={img_apibutton_style2}>
            <path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z" />
          </svg>
          Delete
        </button>
      ) : (
        ''
      )}

      <button
        className={styles.apiButton}
        ref={buttonRef_fetchContext}
        onClick={() => {
          if (sentencesID_SelectedList.length !== 0) {
            fetch_drawer(sentencesID_SelectedList[0])
            setIsDrawerOpen(!isDrawerOpen)
          } else {
            window.alert("Please select a sentence to see it's context")
          }
        }}
      >
        <svg viewBox="0 0 20 20" style={img_apibutton_style2}>
          <path d="M16 2h4v15a3 3 0 01-3 3H3a3 3 0 01-3-3V0h16v2zm0 2v13a1 1 0 001 1 1 1 0 001-1V4h-2zM2 2v15a1 1 0 001 1h11.17a2.98 2.98 0 01-.17-1V2H2zm2 8h8v2H4v-2zm0 4h8v2H4v-2zM4 4h8v4H4V4z" />
        </svg>
        Context
      </button>
    </React.Fragment>
  )
}

export default ApiButtons
