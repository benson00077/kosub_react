import React, {useContext, useEffect} from 'react'
import { SearchContext } from './SearchContext'
import styles from './appCards.module.css'
import useIfSelectSentence from './useIfSelectSentence'

function AppCards({...rest }) {

    const [SearchResult, setSearchResult] = useContext(SearchContext)
    console.log('----- AppCatds SearchResult ------')
    console.log(SearchResult)
    
    // const [ ifsentences_SelectedList, ifSentence_Selected_ClickHandler ] = useIfSelectSentence(idList)
    const [ ifsentences_SelectedList, ifSentence_Selected_ClickHandler ] = useIfSelectSentence(SearchResult['result']['id'])
    //     console.log('------ ifsentences_SelectedList ------')
    //     console.log(ifsentences_SelectedList)


    
    
    // useEffect(() => {
    //     // return () => {
    //     //     cleanup
    //     // }
    // }, [searchInfo['result']])

    // appCard section
    const appCardRenderer = (koList, zhList, enList, idList) => {
        return (
            <React.Fragment>
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
                    {appCardRenderer(SearchResult['result']['ko'], SearchResult['result']['zh'], SearchResult['result']['en'], SearchResult['result']['id'])}
                </div>

                <div className="app-card-buttons">
                    <button className="content-button status-button"> ^ </button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AppCards
