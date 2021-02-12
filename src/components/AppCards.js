import React, {useState, useEffect} from 'react'
import styles from './appCards.module.css'
import useSelectSentence from './useSelectSentence'

function AppCards({koList, zhList, enList, idList, ...rest}) {


    const [{sentencesID_SelectedList, ifsentences_SelectedList}, {sentenceID_ClickHandler, ifSentence_Selected_ClickHandler}] = useSelectSentence(idList)

    console.log('------ sentnecesID_SelectedList ------')
    console.log(sentencesID_SelectedList)
    console.log('------ ifsentences_SelectedList ------')
    console.log(ifsentences_SelectedList)

    // appCard section
    const appCardRenderer = (koList, zhList, enList) => {
        return (
        <React.Fragment>
        {idList && idList.map(
            (each, i) =>  
            <div 
            className={`${styles.appCardOneSubtextRow} ${ifsentences_SelectedList[i] ? styles.appCardOneSubtextRow_isSelected : ''}`}
            onClick={() => {
                sentenceID_ClickHandler(idList[i])
                ifSentence_Selected_ClickHandler([i])
            }} 
            key={i}>
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
          <button className="content-button status-button"> ^ </button>
          </div>
      </div>
      </React.Fragment>
    )
}

export default AppCards
