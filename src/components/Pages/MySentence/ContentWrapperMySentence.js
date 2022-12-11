import React, { useState } from 'react'
import ApiButtons from '../Shared/ApiButtons'
import AppCards from '../Shared/AppCards'
import ShowHideHandler from '../Shared/ShowHideHandler'
import useSelectSentenceId from '../../useSelectSentenceId'

import styles from '../Search/contentWrapperSearch.module.css'

import Drawer from '../Shared/Drawer'
import useFetch from '../../useFetch'

function ContentWrapperMySentence({ koList, zhList, enList, idList, SentencebookDel, ...rest }) {
  // if show sentence output
  const [koShow, setKoShow] = useState(true)
  const [zhShow, setZhShow] = useState(true)
  const [enShow, setEnShow] = useState(true)

  // if show buttons for sentnece manipulating
  const [isButtonsShow, setIsButtonsShow] = useState(false)

  // pass to ApiButton & AppCards
  const [sentencesID_SelectedList, sentenceID_ClickHandler] = useSelectSentenceId(rest.id)

  // pass to Drawer & ApiButton
  const [fetchResponse, { fetch_drawer }] = useFetch(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  // CSS for svg img for dropdownParent button
  const img_dropdownparent_style = { width: '40', fill: 'rgba(255, 255, 255, 0.582)' }

  return (
    <div className="content-wrapper" id="content-wrapper">
      <div
        className={`${styles.contentWrapperHeaderSearchpage} ${
          isDrawerOpen ? styles.contentWrapperHeaderSearchpage__isopen : ''
        }`}
      >
        <div className={styles.contentWrapperContext}>
          <h3 className="img-content">
            {rest.headerImg}
            {rest.headerTitle}
          </h3>
          <div className="content-text">
            <Drawer
              isLoading={fetchResponse.isLoading}
              drawerKo={fetchResponse.post.ko}
              drawerZh={fetchResponse.post.zh}
              drawerEn={fetchResponse.post.en}
              drawerId={fetchResponse.post.id}
            />
            {rest.headerContent}
          </div>
          <button className="content-button" onClick={() => setIsDrawerOpen(false)}>
            {rest.headerButton}
          </button>
        </div>
        {/* <img className="content-wrapper-img" src="" alt=""></img> */}
      </div>

      <div className={styles.dropdownParent} onClick={() => setIsButtonsShow(!isButtonsShow)}>
        <svg viewBox="0 0 20 20" style={img_dropdownparent_style}>
          <path d="M3.94 6.5L2.22 3.64l1.42-1.42L6.5 3.94c.52-.3 1.1-.54 1.7-.7L9 0h2l.8 3.24c.6.16 1.18.4 1.7.7l2.86-1.72 1.42 1.42-1.72 2.86c.3.52.54 1.1.7 1.7L20 9v2l-3.24.8c-.16.6-.4 1.18-.7 1.7l1.72 2.86-1.42 1.42-2.86-1.72c-.52.3-1.1.54-1.7.7L11 20H9l-.8-3.24c-.6-.16-1.18-.4-1.7-.7l-2.86 1.72-1.42-1.42 1.72-2.86c-.3-.52-.54-1.1-.7-1.7L0 11V9l3.24-.8c.16-.6.4-1.18.7-1.7zM10 13a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
        {/* </button> */}
      </div>
      <div className={isButtonsShow ? styles.dropdown__isactive : styles.dropdown}>
        <ShowHideHandler
          koShow={koShow}
          zhShow={zhShow}
          enShow={enShow}
          setKoShow={setKoShow}
          setZhShow={setZhShow}
          setEnShow={setEnShow}
        />

        <ApiButtons
          SentencebookDel={SentencebookDel}
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
          sentencesID_SelectedList={sentencesID_SelectedList}
          fetch_drawer={fetch_drawer}
        />
      </div>

      <div className="content-section">
        <div className="content-section-title">{rest.sectionTitle}</div>
        <div className="apps-card">
          <AppCards
            controller="mysentence"
            koShow={koShow}
            zhShow={zhShow}
            enShow={enShow}
            sentenceID_ClickHandler={sentenceID_ClickHandler}
          />
        </div>
      </div>
    </div>
  )
}

export default ContentWrapperMySentence
