import React from 'react'
import { Link } from 'react-router-dom'
import NavIcon from './NavIcon'

function Nav({ isLoggedIn, seteIfUpdateMySentencePage }) {
  const navStyle = {
    color: 'white',
  }

  const linkClassName = `flex flex-row justify-between pt-3 pb-3 pr-2 pl-2 rounded hover:bg-slate-500 opacity-80`

  return (
    <React.Fragment>
      <Link to="/">
        <NavIcon />
      </Link>

      <div className="mt-5">
        <div className="text-zinc-400 mb-4">Pages</div>
        <div>
          <Link style={navStyle} to="/about" className={linkClassName}>
            <svg class="fill-slate-50 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M.7 9.3l4.8-4.8 1.4 1.42L2.84 10l4.07 4.07-1.41 1.42L0 10l.7-.7zm18.6 1.4l.7-.7-5.49-5.49-1.4 1.42L17.16 10l-4.07 4.07 1.41 1.42 4.78-4.78z" />
            </svg>
            <h4>About</h4>
          </Link>
          <Link style={navStyle} to="/search" className={linkClassName}>
            <svg class="fill-slate-50 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M12.9 14.32a8 8 0 111.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 108 2a6 6 0 000 12z" />
            </svg>
            <h4>Search</h4>
          </Link>
        </div>
      </div>

      <div className="mt-5">
        <div className="text-zinc-400 mb-4">Account</div>
        <div>
          {isLoggedIn ? (
            <Link style={navStyle} to="/mysentences" className={linkClassName}>
              <h4>My Setences</h4>
            </Link>
          ) : (
            ''
          )}

          {isLoggedIn ? (
            ''
          ) : (
            <Link style={navStyle} to="/login" className={linkClassName}>
              <svg class="fill-slate-50 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5 5a5 5 0 0110 0v2A5 5 0 015 7V5zM0 16.68A19.9 19.9 0 0110 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z" />
              </svg>
              <h4>Log in</h4>
            </Link>
          )}

          {isLoggedIn ? (
            ''
          ) : (
            <Link style={navStyle} to="/register" className={linkClassName}>
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12a6 6 0 110-12 6 6 0 010 12zm0-3a3 3 0 100-6 3 3 0 000 6zm4 2.75V20l-4-4-4 4v-8.25a6.97 6.97 0 008 0z"/></svg> */}
              <svg class="fill-slate-50 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88">
                <path d="M109.72 61.44v-.01h.02c0-13.31-5.42-25.38-14.17-34.13-8.75-8.74-20.81-14.16-34.1-14.16v.02h-.04v-.02c-13.3 0-25.38 5.42-34.13 14.17-8.74 8.75-14.16 20.81-14.16 34.11h.02v.04h-.02c0 8.88 2.41 17.22 6.59 24.36 8.38 14.31 23.92 23.92 41.68 23.93v-.02h.04v.02c13.31 0 25.38-5.42 34.13-14.17 1.44-1.44 2.78-2.95 4-4.52a48.149 48.149 0 0 0 10.14-29.62zM39.91 86.16V35.18h26.26c4.87 0 8.59.42 11.16 1.26 2.58.83 4.65 2.37 6.23 4.64 1.58 2.26 2.36 5.01 2.36 8.25 0 2.84-.61 5.27-1.8 7.32-1.21 2.05-2.87 3.71-4.98 5-1.35.81-3.19 1.48-5.53 2 1.88.63 3.24 1.26 4.11 1.89.57.42 1.41 1.31 2.52 2.67 1.1 1.38 1.84 2.42 2.21 3.17l7.62 14.78H72.26l-8.42-15.59c-1.07-2-2.02-3.32-2.86-3.93-1.13-.78-2.42-1.18-3.86-1.18h-1.39v20.69H39.91v.01zm15.83-30.33h6.65c.71 0 2.1-.23 4.17-.69 1.04-.21 1.9-.75 2.56-1.6.65-.85.99-1.84.99-2.95 0-1.65-.52-2.91-1.57-3.79-1.05-.89-3-1.33-5.88-1.33h-6.92v10.36zm67.11 5.6h.03v.01c0 14.19-4.82 27.27-12.92 37.68a62.403 62.403 0 0 1-5.08 5.76c-11.1 11.1-26.45 17.97-43.43 17.98v.03h-.04v-.03c-22.59-.01-42.34-12.22-52.99-30.4-5.33-9.1-8.39-19.7-8.39-31H0v-.04h.03C.03 44.44 6.9 29.09 18 18 29.09 6.9 44.45.03 61.43.03V0h.04v.03C78.44.04 93.79 6.9 104.88 18c11.1 11.09 17.97 26.45 17.97 43.43z" />
              </svg>
              <h4>Create</h4>
            </Link>
          )}
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
