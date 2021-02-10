import React, { useState } from 'react'
import ApiButton from './ApiButton'
import AppCards from './AppCards'
import ShowHideHandler from './ShowHideHandler'

function ContentWrapperMySentence({koList, zhList, enList, idList, ...rest}) {
        
    // state for Sentence content button
    const [koShow, setKoShow] = useState(true)
    const [zhShow, setZhShow] = useState(true)
    const [enShow, setEnShow] = useState(true)

    return (
    <div className="content-wrapper">  

        <div>
            <ShowHideHandler
            koShow={koShow}
            zhShow={zhShow}
            enShow={enShow}
            setKoShow={setKoShow} 
            setZhShow={setZhShow} 
            setEnShow={setEnShow}/>
            
            <ApiButton 
            sentencesID_SelectedList={rest.sentencesID_SelectedList}/>
        </div>

        <div className="content-section">
        <div className="content-section-title">{rest.sectionTitle}</div>
        <div className="apps-card">

        <AppCards koList={koList} zhList={zhList} enList={enList} idList={idList}
                      koShow={koShow} zhShow={zhShow} enShow={enShow}
                      sentenceID_ClickHandler={rest.sentenceID_ClickHandler}/>

        </div>
        </div>


    </div>
)
}

export default ContentWrapperMySentence
