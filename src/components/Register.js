import React from 'react'
import styles from './register.module.css'

function Register() {
    return (
        <div className={styles.register}>
            <h1>Sorry.</h1>
            <h3>Register is currently unavailable due to backend Heroku's database limit.</h3>
            <h3>You may want to login with <span>test1 / test1</span> so as to test this website.</h3>
        </div>
    )
}

export default Register
