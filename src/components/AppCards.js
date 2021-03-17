import React, { useContext } from 'react'
import { SearchContext } from './SearchContext'
import { UserContext } from './UserContext'
import styles from './appCards.module.css'
import useIfSelectSentence from './useIfSelectSentence'


function AppCards({ ...rest }) {

    const [searchResult] = useContext(SearchContext)
    const [userInfo] = useContext(UserContext)

    const [ifsentences_SelectedList, ifSentence_Selected_ClickHandler] = useIfSelectSentence(searchResult['result']['id'])

    // appCard section
    const appCardRenderer = (koList, zhList, enList, idList, noResult) => {
        return (
            <React.Fragment>
                {noResult ? 'no result found' : ''}
                {idList && idList.map(
                    (each, i) =>
                        <div
                            className={`${styles.appCardOneSubtextRow} ${ifsentences_SelectedList[i] ? styles.appCardOneSubtextRow_isSelected : ''}`}
                            onClick={() => {
                                rest.sentenceID_ClickHandler(idList[i])
                                ifSentence_Selected_ClickHandler([i])
                            }}
                            key={i}>
                            {rest.koShow ? <p>{koList[i]}</p> : ''}
                            {rest.zhShow ? <p>{zhList[i]}</p> : ''}
                            {rest.enShow ? <p>{enList[i]}</p> : ''}
                        </div>
                )}
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            
            <div className={styles.appCardOne}>
                <span>
                    {rest.appCardImg}
                    {rest.appCardTitle}
                </span>

                <div className={styles.appCardOneSubtext}>
                    {/* {appCardRenderer(koList, zhList, enList)} */}
                    {rest.controller === 'search' &&
                        appCardRenderer(
                            searchResult['result']['ko'], 
                            searchResult['result']['zh'], 
                            searchResult['result']['en'], 
                            searchResult['result']['id'],
                            searchResult['noResult']
                        )}
                    {rest.controller === 'mysentence' &&
                        appCardRenderer(userInfo['mysentence']['ko'], userInfo['mysentence']['zh'], userInfo['mysentence']['en'], userInfo['mysentence']['id'])}
                </div>

                {/* <div className="app-card-buttons" >
                    <button className="content-button status-button"> ^ </button>
                </div> */}
            </div>
        </React.Fragment>
    )
}

export default AppCards
