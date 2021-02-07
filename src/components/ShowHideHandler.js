import React from 'react'

function ShowHideHandler( {koShow, zhShow, enShow, setKoShow, setZhShow, setEnShow} ) {

    
    const showHideHandler = (target, setTarget) => {
        if (target) {
            setTarget(!target)
        } else {
            setTarget(!target)
        }
    }

    
    return (
        <React.Fragment>
        <div onClick={() => showHideHandler(koShow, setKoShow)}><h4>Hide Korean</h4></div>
        <div onClick={() => showHideHandler(zhShow, setZhShow)}><h4>Hide Chinese</h4></div>
        <div onClick={() => showHideHandler(enShow, setEnShow)}><h4>Hide English</h4></div>
        </React.Fragment>
    )
}

export default ShowHideHandler