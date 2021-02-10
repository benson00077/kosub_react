import React, { useState, useEffect }from 'react'
import axios from 'axios'


function MySentencesController({isLoggedIn, user, ifUpdateMySentencePage}) {
    
    const [match, setMatch] = useState({})
    
    useEffect(() => {
        axios
            .get(`http://localhost:5000/sub/sentencebook?id=${user}`)
            .then((res) => {
                setMatch(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
        
    }, [ifUpdateMySentencePage])
    
    return (
        <div className="main-container">
          <div className="content-wrapper">
            {match.id ? match.id : ''}
            {match.ko ? match.ko : ''}
            {match.zh ? match.zh : ''}
            {match.en ? match.en : ''}
          </div>  
        </div>
    )
}

export default MySentencesController
