import React, { useState, useEffect} from 'react'
import Drawer from './Drawer'
import styles from './contentWrapperSearch.module.css'
import ShowHideHandler from './ShowHideHandler'
import ApiButton from './ApiButton'
import AppCards from './AppCards'
import ApiButtons from './ApiButtons'

function ContentWrapperSearch({...rest}) {

  // state for Sentence content button
  const [koShow, setKoShow] = useState(true)
  const [zhShow, setZhShow] = useState(true)
  const [enShow, setEnShow] = useState(true)
  
  return (
    <div className="content-wrapper">
      <div className={`${styles.contentWrapperHeaderSearchpage} ${rest.isDrawerOpen ? styles.contentWrapperHeaderSearchpage__isopen: ''}`}>
        <div className="content-wrapper-context">
          <h3 className="img-content">
            {rest.headerImg}
            {rest.headerTitle}
          </h3>
          <div className="content-text">
              <Drawer 
                drawerKo={rest.drawerResponseKo} 
                drawerZh={rest.drawerResponseZh} 
                drawerEn={rest.drawerResponseEn} 
                drawerId={rest.drawerResponseId}/>
              {rest.headerContent}
          </div>
          <button className="content-button" onClick={rest.headerButtonHandler}>{rest.headerButton}</button>
        </div>  
        <img className="content-wrapper-img" src="https://assets.codepen.io/3364143/glass.png" alt=""></img>
      </div>
    

        <div>
          <ShowHideHandler 
            koShow={koShow}
            zhShow={zhShow}
            enShow={enShow}
            setKoShow={setKoShow} 
            setZhShow={setZhShow} 
            setEnShow={setEnShow}/>
            
          <ApiButton 
            sentencesID_SelectedList={rest.sentencesID_SelectedList}
            toggleDrawer={rest.toggleDrawer}
            SentencebookPush={rest.SentencebookPush}/>
          
          <ApiButtons
            sentencesID_SelectedList={rest.sentencesID_SelectedList}
            toggleDrawer={rest.toggleDrawer}
            SentencebookPush={rest.SentencebookPush}/>
        </div>


    
      <div className="content-section">
        <div className="content-section-title">{rest.sectionTitle}</div>
        <div className="apps-card">

        {/* {appCardsRenderer(rest.ko, rest.zh, rest.en)} */}
        <AppCards koList={rest.ko} zhList={rest.zh} enList={rest.en} idList={rest.id} 
                  koShow={koShow} zhShow={zhShow} enShow={enShow}
                  sentenceID_ClickHandler={rest.sentenceID_ClickHandler}/>

        </div>
      </div>
 

    </div>
  )
}

export default ContentWrapperSearch
