import React, { useContext, useState } from 'react'
import { Route, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import styles from './login.module.css'
import { API_ROOT_URL } from '../../data/constant'
import { UserContext } from '../../context/UserContext'

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

function Login({ setIsLoggedIn }) {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [hintMsg, setHintMsg] = useState('')
  const [userInfo] = useContext(UserContext)

  let navigate = useNavigate()

  const login = (e) => {
    e.preventDefault()
    axios
      .post(`${API_ROOT_URL}/auth/login`, { username: userName, password: password })
      .then((res) => {
        window.localStorage.setItem('token', res.data.access_token)
        setIsLoggedIn(true)
        navigate('/mysentences')
      })
      .catch((err) => {
        console.error(err.message)
        setHintMsg('Invalid username and/or password')
      })
  }

  return (
    <div className={styles.login}>
      <h1>Log In</h1>
      <form>
        <input type="text" onChange={(e) => setUserName(e.target.value)} autoFocus/>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" onClick={login}>
          {' '}
          Let me in{' '}
        </button>
      </form>
      <h2 className='text-center text-red-400'>{hintMsg}</h2>
    </div>
  )
}

// function Logout( {setIsLoggedIn} ) {
//     <from>

//     </from>
// }

export default Login
export { PrivateRoute }
