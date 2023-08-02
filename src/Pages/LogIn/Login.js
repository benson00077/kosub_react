import React, { useContext, useState } from 'react'
import { Route, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import styles from './login.module.css'
import { API_ROOT_URL, ERR_MESSAGES } from '../../data/constant'
import { UserContext } from '../../context/UserContext'

function Login({ setIsLoggedIn }) {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [hintMsg, setHintMsg] = useState('')
  const [userInfo, setUserInfo] = useContext(UserContext)

  let navigate = useNavigate()

  const login = (e) => {
    e.preventDefault()
    axios
      .post(`${API_ROOT_URL}/auth/login`, { username: userName, password: password })
      .then((res) => {
        setUserInfo({ ...userInfo, isLoggedIn: true, jwt: res.data.access_token })
        setIsLoggedIn(true)
        navigate('/mysentences')
      })
      .catch((err) => {
        console.error(err.message)
        const hintMsg = err.response ? 'Invalid username and/or password' : ERR_MESSAGES[503]
        setHintMsg(hintMsg)
      })
  }

  return (
    <div className={styles.login}>
      <h1>Log In</h1>
      <form>
        <input type="text" onChange={(e) => setUserName(e.target.value)} autoFocus />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" onClick={login}>
          Let me in
        </button>
      </form>
      <h2 class="text-center text-red-400">{hintMsg}</h2>
    </div>
  )
}

export default Login
