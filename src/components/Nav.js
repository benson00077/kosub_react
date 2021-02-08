import React from 'react'
import {Link} from 'react-router-dom'
import ShowHideHandler from './ShowHideHandler'

function Nav({ isLoggedIn }) {
    
    const navStyle = {
        color:'white'
    }
    
    return (
        <React.Fragment>
          <a href="/" style={navStyle}><span>Logo</span></a>
          <div className="side-wrapper">
            <div className="side-title">Pages</div>
            <div className="side-menu">
              <Link style={navStyle} to="/about">
                <h4>About</h4>
              </Link>
              <Link style={navStyle} to="/search">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M12.9 14.32a8 8 0 111.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 108 2a6 6 0 000 12z"/>
                </svg>
                <h4>Search</h4>
              </Link>
            </div>
          </div>

          <div className="side-wrapper">
            <div className="side-title">Personalization</div>
            <div className="side-menu">
              
              { isLoggedIn 
                  ? (<Link style={navStyle} to="/mysentences">
                      <h4>My Setences</h4>
                    </Link>)
                  : ''}
              
              { isLoggedIn 
                ? ''
                : <Link style={navStyle} to="/login">
                    <h4>Log in</h4>
                  </Link> }

              { isLoggedIn 
                ? ''
                : <Link style={navStyle} to="/register">
                    <h4>Register</h4>
                  </Link> }    

            </div>  
          </div>

          {/* <div className="side-wrapper">
            <div className="side-title">Others</div>
            <div className="side-menu">
              <Link style={navStyle} to="/login">
                <h4>Log in</h4>
              </Link>
              <Link style={navStyle} to="/register">
                <h4>Register</h4>
              </Link>
              <Link style={navStyle} to="/protected">
                <h4>Protected Page Test</h4>
              </Link>
            </div>  
          </div>  */}

        </React.Fragment> 
    )
}

export default Nav
 