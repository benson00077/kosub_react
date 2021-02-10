import React, { useState, useEffect} from 'react'
import Drawer from './Drawer'
import styles from './contentWrapperSearch.module.css'
import ShowHideHandler from './ShowHideHandler'
import ApiButton from './ApiButton'

function ContentWrapperSearch({isSearchController, isAboutController, isHomeController, ...rest}) {


  // sentences in appCards UI section 
  let responseLength = 0
  if (rest.id) {
      responseLength = rest.id.length
  }
  const [SentenceIsSelected, setSentenceIsSelected] = useState([])
  

  useEffect(() => {
    // Initialize Array: [... , true, true]: include {responseLength}  of true  
    if (rest.id) {
      let SentenceSelectionSwitcher = Array.from(Array(responseLength), ele => false) 
      setSentenceIsSelected([...SentenceSelectionSwitcher])
    }
  }, [rest.id])
  
  
  // sentences in appCards UI section 
  const SentenceBooleanList_ClickHandler  = (beforeSwitch, i) => {
    const afterSwitch = [...beforeSwitch]
    afterSwitch[i] = !beforeSwitch[i]
    return afterSwitch
  }


  
  
  // App Card content state
  const [koShow, setKoShow] = useState(true)
  const [zhShow, setZhShow] = useState(true)
  const [enShow, setEnShow] = useState(true)


  // appCard section
  const appCardRenderer = (koList, zhList, enList) => {
    return (
      <React.Fragment>
      {koList && koList.map(
          (each, i) =>  
          <div 
          className={`${styles.appCardOneSubtextRow} ${SentenceIsSelected[i] ? styles.appCardOneSubtextRow_isSelected : ''}`}
          onClick={() => { 
            rest.sentenceID_ClickHandler(rest.id[i])
            let afterSwitch = SentenceBooleanList_ClickHandler(SentenceIsSelected ,i)
            setSentenceIsSelected([...afterSwitch])
          }} 
          key={rest.id[i]}>
              {koShow? <p>{koList[i]}</p> : ''}
              {zhShow? <p>{zhList[i]}</p> : ''}
              {enShow? <p>{enList[i]}</p> : ''}
          </div>
      )}
      </React.Fragment> 
    )}
  
  const appCardsRenderer = (koList, zhList, enList) => {
    return (
      <React.Fragment>
      <div className={styles.appCardOne}>
          <span>
          {rest.appCardImg}
          {rest.appCardTitle}
          </span>

          <div className={styles.appCardOneSubtext}> 
              { appCardRenderer(koList, zhList, enList) } 
          </div>
          
          <div className="app-card-buttons">
          <button className="content-button status-button">^</button>
          </div>
      </div>
      </React.Fragment>
    )}
  
  
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
        </div>


    
      <div className="content-section">
        <div className="content-section-title">{rest.sectionTitle}</div>
        <div className="apps-card">

        {appCardsRenderer(rest.ko, rest.zh, rest.en)}
        
        </div>
      </div>
 

    </div>
  )
}

export default ContentWrapperSearch
