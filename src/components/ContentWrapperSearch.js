import React, { useState } from 'react'
import Drawer from './Drawer'
import styles from './contentWrapperSearch.module.css'
import ShowHideHandler from './ShowHideHandler'
import ApiButton from './ApiButton'
import AppCards from './AppCards'
import ApiButtons from './ApiButtons'
import useSelectSentenceId from './useSelectSentenceId'
import useFetch from './useFetch'

function ContentWrapperSearch({ ...rest }) {

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


  return (
    <div className="content-wrapper">
      <div className={`${styles.contentWrapperHeaderSearchpage} ${isDrawerOpen ? styles.contentWrapperHeaderSearchpage__isopen : ''}`}>
        <div className={styles.contentWrapperContext}>
          <h3 className="img-content">
            {rest.headerImg}
            {rest.headerTitle}
          </h3>
          <div className="content-text">
            {/* <Drawer
              drawerKo={rest.drawerResponseKo}
              drawerZh={rest.drawerResponseZh}
              drawerEn={rest.drawerResponseEn}
              drawerId={rest.drawerResponseId} /> */}
            <Drawer
              isLoading={fetchResponse.isLoading}
              drawerKo={fetchResponse.post.ko}
              drawerZh={fetchResponse.post.zh}
              drawerEn={fetchResponse.post.en}
              drawerId={fetchResponse.post.id} />
            {rest.headerContent}
          </div>
          <button className="content-button" onClick={() => setIsDrawerOpen(false)}>{rest.headerButton}</button>
        </div>
        {/* <img className="content-wrapper-img" src="" alt=""></img> */}
      </div>


      <div className={styles.dropdownParent}>
      <button onClick={() => setIsButtonsShow(!isButtonsShow)}>...</button>
      </div>
      <div className={isButtonsShow ? styles.dropdown__isactive : styles.dropdown}>

        <ShowHideHandler
          koShow={koShow}
          zhShow={zhShow}
          enShow={enShow}
          setKoShow={setKoShow}
          setZhShow={setZhShow}
          setEnShow={setEnShow} />

        <ApiButtons
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
          SentencebookPush={rest.SentencebookPush}
          sentencesID_SelectedList={sentencesID_SelectedList}
          fetch_drawer={fetch_drawer} />

        {/* {isButtonsShow
          ?
          <React.Fragment>
            <ShowHideHandler
              koShow={koShow}
              zhShow={zhShow}
              enShow={enShow}
              setKoShow={setKoShow}
              setZhShow={setZhShow}
              setEnShow={setEnShow} />

            <ApiButtons
              isDrawerOpen={isDrawerOpen}
              setIsDrawerOpen={setIsDrawerOpen}
              SentencebookPush={rest.SentencebookPush}
              sentencesID_SelectedList={sentencesID_SelectedList}
              fetch_drawer={fetch_drawer} />
          </React.Fragment>
          : ''
        } */}
      </div>



      <div className="content-section">
        <div className="content-section-title">{rest.sectionTitle}</div>
        <div className="apps-card">
          <AppCards controller='search'
            koShow={koShow} zhShow={zhShow} enShow={enShow}
            sentenceID_ClickHandler={sentenceID_ClickHandler} />

        </div>
      </div>


    </div>
  )
}

export default ContentWrapperSearch
