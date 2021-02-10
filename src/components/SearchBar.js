import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';


function SearchBar({queryLanguage, mainQuery, setMainQuery, setResult, seteIfRerenderSearchPage}) {

    const inputRef = useRef(null)
    let history = useHistory()

    const submitHandler = e => {
        e.preventDefault()
        seteIfRerenderSearchPage(true)

        axios
            .get(`http://127.0.0.1:5000/sub/query/${queryLanguage}?word=${mainQuery}`)
            .then(res => {
                setResult({})
                setResult(res.data)
                inputRef.current.value = ''
            })
            .catch(err => {
                console.log(err)
            })

        history.push("/search")
    }

    useEffect(() => {
        inputRef.current.focus()       
    }, [])

    return (
    <React.Fragment>
        <form onSubmit={submitHandler}>
            <input 
                type="text" 
                placeholder="Search"ㄨ
                value={mainQuery} 
                onChange={ e => {
                setMainQuery(e.target.value)
                }}
                ref={inputRef}>
            </input>
        </form>
    </React.Fragment>
    )
}

export default SearchBar
