import React, { useContext } from 'react'
import { SearchContext } from '../../SearchContext'
import { UserContext } from '../../UserContext'
import styles from './appCards.module.css'
import useIfSelectSentence from '../../useIfSelectSentence'


function AppCards({ ...rest }) {

    const [searchResult] = useContext(SearchContext)
    const [userInfo] = useContext(UserContext)

    const [ifsentences_SelectedList, ifSentence_Selected_ClickHandler] = useIfSelectSentence(searchResult['result']['id'])

    const Line_Select_Handler = e => {
        let selected_line = "";
        if (e.target.localName === "div") {
            selected_line = e.target.firstElementChild
        }
        if (e.target.localName === "p") {
            selected_line = e.target
        }
        const dataId = selected_line.getAttribute('data-id')
        const dataIndex = selected_line.getAttribute('data-index')
        rest.sentenceID_ClickHandler(dataId)
        ifSentence_Selected_ClickHandler([dataIndex])
    }

    // appCard section
    const appCardRenderer = (koList, zhList, enList, idList, noResult) => {
        return (
            // event Delegation --- (X)
            // in React No Need, see more
            // https://dev.to/thawsitt/should-i-use-event-delegation-in-react-nl0
            <div>
                {noResult ? 'no result found' : ''}
                {idList && idList.map(
                    (each, i) =>
                        <div onClick={e => Line_Select_Handler(e)}
                            className={`${styles.appCardOneSubtextRow} ${ifsentences_SelectedList[i] ? styles.appCardOneSubtextRow_isSelected : ''}`}>
                            {rest.koShow ? <p data-id={idList[i]} data-index={i}>{koList[i]}</p> : ''}
                            {rest.zhShow ? <p data-id={idList[i]} data-index={i}>{zhList[i]}</p> : ''}
                            {rest.enShow ? <p data-id={idList[i]} data-index={i}>{enList[i]}</p> : ''}
                        </div>
                )}
            </div>
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
