import React, {useState, useEffect} from 'react'
import styles from './appCards.module.css'

function AppCards({koList, zhList, enList, idList, ...rest}) {


    // state for Sentence UI
    const [SentenceIsSelected, setSentenceIsSelected] = useState([])
    // state for Sentence content button

    
    // sentences in appCards UI section 
    let responseLength = 0
    if (idList) {
        responseLength = idList.length
    }
    // let responseLength = idList ? idList.length : 0
    

    // Initialize Array: [... , true, true]: include {responseLength}  of true  
    useEffect(() => {
        if (idList) {
        let SentenceSelectionSwitcher = Array.from(Array(responseLength), ele => false) 
        setSentenceIsSelected([...SentenceSelectionSwitcher])
        }
    }, [idList])
    
    
    // sentences in appCards UI section 
    const SentenceBooleanList_ClickHandler  = (beforeSwitch, i) => {
        const afterSwitch = [...beforeSwitch]
        afterSwitch[i] = !beforeSwitch[i]
        return afterSwitch
    }


    // appCard section
    const appCardRenderer = (koList, zhList, enList) => {
        return (
        <React.Fragment>
        {koList && koList.map(
            (each, i) =>  
            <div 
            className={`${styles.appCardOneSubtextRow} ${SentenceIsSelected[i] ? styles.appCardOneSubtextRow_isSelected : ''}`}
            onClick={() => { 
                rest.sentenceID_ClickHandler(idList[i])
                let afterSwitch = SentenceBooleanList_ClickHandler(SentenceIsSelected ,i)
                setSentenceIsSelected([...afterSwitch])
            }} 
            key={idList[i]}>
                {rest.koShow? <p>{koList[i]}</p> : ''}
                {rest.zhShow? <p>{zhList[i]}</p> : ''}
                {rest.enShow? <p>{enList[i]}</p> : ''}
            </div>
        )}
        </React.Fragment> 
        )}
  
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
    )
}

export default AppCards
