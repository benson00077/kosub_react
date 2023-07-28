// import './App.css'
import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Sidebar from './components/SideMenu/SideBar'
import About from './Pages/About/About'
import Home from './Pages/Home/Home'

import Login, { PrivateRoute } from './Pages/LogIn/Login'
import SearchController from './Pages/Search/SearchController'
import MySentenceController from './Pages/MySentence/MySentencesController'

import WindowBar from './components/SearchBar/WindowBar'

import { SearchContextProvider } from './context/SearchContext'
import { UseContextProvider } from './context/UserContext'
import Guide from './Pages/Guide/SearchRawPage'
import Register from './Pages/Register/Register'
import { SelectedEleProvider } from './hooks/SelectedEleProvider'
import { ShowHideEleProvider } from './hooks/ShowHideEleProvider'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [showSideMenu, setShowSideMenu] = useState(() => {
    const isMobile = window.innerWidth <= 768 // iPad Mini
    if (isMobile) return false
    if (!isMobile) return true
  })

  const goTopRef = useRef(null)

  useEffect(() => {
    const grettingsStyle =
      'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) '
    const grettings = '😆 thanks for review '
    console.log('%c %s', grettingsStyle, grettings)
    const postscriptStyle = 'font-weight: bold; font-size: 16px'
    const postscript = 'ps. You might want to use w/ Safari to enjoy a better styling and UI 😂'
    const postscript2 = 'This is a old project, I might fix this sometime latter. 🥺'
    console.log('%c %s', postscriptStyle, postscript)
    console.log('%c %s', postscriptStyle, postscript2)
  }, [])

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <SearchContextProvider>
        <UseContextProvider>
          <div className="bg-dusk-pattern bg-cover bg-center w-screen h-screen flex flex-col justify-center items-center">
            <div className="bg-gray-800 bg-opacity-40 w-11/12 h-[93vh] rounded-2xl overflow-y-hidden">
              <WindowBar />
              <SelectedEleProvider>
                <ShowHideEleProvider>
                  <div className="flex h-full">
                    <div
                      className={`${
                        showSideMenu ? 'px-2 md:px-5 pt-4 w-36' : 'w-0 py-5 -translate-x-24 opacity-0'
                      } h-[78vh] overflow-scroll transition-all md:z-0 border-r-[1px] border-stone-400 border-opacity-25 no-scrollbar`}
                    >
                      <Sidebar isLoggedIn={isLoggedIn} />
                    </div>

                    <div
                      className="w-full text-zinc-50 bg-[#10121b66] no-scrollbar overflow-y-auto rounded-b-lg"
                      ref={goTopRef}
                    >
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/guide" element={<Guide />} />
                        <Route path="/search" element={<SearchController />} />
                        <Route
                          path="/login"
                          element={
                            isLoggedIn ? <h3>Logged In Successfully</h3> : <Login setIsLoggedIn={setIsLoggedIn} />
                          }
                        />
                        <Route path="/register" element={<Register />} />

                        <Route
                          path="/mysentences"
                          element={
                            isLoggedIn ? (
                              <MySentenceController />
                            ) : (
                              <h3>Please log in to get your sentence book page !</h3>
                            )
                          }
                        />
                      </Routes>
                    </div>
                  </div>
                </ShowHideEleProvider>
              </SelectedEleProvider>
            </div>
            {/* Side Menu Icon */}
            <div
              className="absolute left-[7vw] md:left-[6vw] bottom-[5vh] z-20 hover:cursor-pointer"
              onClick={(e) => setShowSideMenu(!showSideMenu)}
            >
              <svg
                class={`w-4 md:w-7 ${
                  showSideMenu ? 'fill-neutral-50/80' : 'fill-slate-300/80'
                } transition-all hover:scale-110 hover:opacity-50`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7 3H2v14h5V3zm2 0v14h9V3H9zM0 3c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm3 1h3v2H3V4zm0 3h3v2H3V7zm0 3h3v2H3v-2z" />
              </svg>
            </div>
            {/* Go to Top Icon */}
            <div
              class="hidden md:block fixed right-[5%] bottom-[5%] hover:cursor-pointer"
              onClick={() => {
                const option = { top: 0 - goTopRef.current.scrollHeight, behavior: 'smooth' }
                goTopRef.current.scrollTo(option)
              }}
            >
              <svg viewBox="0 0 20 20" style={{ width: '40', fill: 'white' }}>
                <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
              </svg>
            </div>
            {/* Modal */}
            <div id="modal-root" className="absolute z-30"></div>
          </div>
        </UseContextProvider>
      </SearchContextProvider>
    </BrowserRouter>
  )
}

export default App
