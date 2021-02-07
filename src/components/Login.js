import React, { useState } from 'react'
import { Route, Link, Redirect, useLocation, useHistory } from 'react-router-dom';
import axios from 'axios'

function PrivateRoute({ children, ...rest }) {
    return (
      <Route {...rest} render={({ location }) => {
          return rest.isLoggedIn === true
            ? children
            : <Redirect to={{
                pathname: '/login',
                state: { from: location}
            }} />
      }}/>
    )
}


function Login( {setIsLoggedIn} ) {
    const [redirectToReferer, setRedirectToReferer] = useState(false)
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [loginDescription, setLoginDescription] = useState("")
    
    const { state } = useLocation()

    const login = (e) => {
        e.preventDefault()
        axios
            .post('http://127.0.0.1:5000/sub/login', {user: userName, pass: password})
            .then((res) => { 
                console.log(res.data) 
                if (res.data.isLoggedIn) {
                  setRedirectToReferer(true)
                  setIsLoggedIn(true)
                } else {
                  setLoginDescription("Invalid username and/or password")
                }
            })
            .catch((err) => { 
                console.log(err) 
            })
    }

    if (redirectToReferer === true) {
      return <Redirect to={state?.from || '/'} />
    }
    
    
    return (
      <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form>
          <label>
            <p>Username</p>
            <input onChange={e => setUserName(e.target.value)}/>
          </label>
          <label>
            <p>Password</p>
            <input onChange={e => setPassword(e.target.value)}/>
          </label>
          <div>
            <button onClick={login}>Submit</button>
          </div>
        </form>
        <h2>{loginDescription}</h2>
      </div>
    )
}

function Logout( {setIsLoggedIn} ) {
    <from>
        
    </from>
}

export default Login
export {
    PrivateRoute,
}