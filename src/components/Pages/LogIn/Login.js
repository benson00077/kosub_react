import React, { useState } from 'react'
import { Route, Navigate, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import styles from './login.module.css'

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return rest.isLoggedIn === true ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }}
    />
  )
}

function Login({ setIsLoggedIn, setUser }) {
  const login_root_url = 'https://kosub-api-pro.herokuapp.com'

  const [redirectToReferer, setRedirectToReferer] = useState(false)
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [loginDescription, setLoginDescription] = useState('')

  let navigate = useNavigate();

  const { location } = useLocation()

  const login = (e) => {
    e.preventDefault()
    // axios
    //   .post(`${login_root_url}/sub/login`, { user: userName, pass: password })
    //   .then((res) => {
    //     if (res.data.isLoggedIn) {
    //       setRedirectToReferer(true)
    //       setIsLoggedIn(true)
    //       setUser(res.data.userID)
    //     } else {
    //       setLoginDescription('Invalid username and/or password')
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
    setRedirectToReferer(true)
    setIsLoggedIn(true)
    navigate('/mysentences')
    setUser(123)
  }

  if (redirectToReferer === true) {
    return <Navigate to={location?.from || '/'} replace={true} />
  }

  return (
    <div className={styles.login}>
      <h1>Log In</h1>
      <form>
        <input type="text" onChange={(e) => setUserName(e.target.value)} />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" onClick={login}>
          {' '}
          Let me in{' '}
        </button>
      </form>
      <h2>{loginDescription}</h2>
    </div>
  )
}

// function Logout( {setIsLoggedIn} ) {
//     <from>

//     </from>
// }

export default Login
export { PrivateRoute }
