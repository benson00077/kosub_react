import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';


function SearchBar({queryLanguage, setResult, seteIfRerenderSearchPage}) {

    const [query, setQuery] = useState("")
    const inputRef = useRef(null)
    let history = useHistory()

    const submitHandler = e => {
        e.preventDefault()
        seteIfRerenderSearchPage(true)

        axios
            .get(`http://127.0.0.1:5000/sub/query/${queryLanguage}?word=${query}`)
            .then(res => {
                console.log(res)
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
                value={query} 
                onChange={ e => {
                setQuery(e.target.value)
                }}
                ref={inputRef}>
            </input>
        </form>
    </React.Fragment>
    )
}

export default SearchBar
