// import './App.css'
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Nav from './components/SideMenu/Nav'
import About from './components/Pages/About/About'
import Home from './components/Pages/Home/Home'

import Login, { PrivateRoute } from './components/Pages/LogIn/Login'
import SearchController from './components/Pages/Search/SearchController'
import MySentenceController from './components/Pages/MySentence/MySentencesController'

import SearchBar from './components/SearchBar/SearchBar'

import { SearchContextProvider } from './components/SearchContext'
import { UseContextProvider } from './components/UserContext'
import SearchRawPage from './components/Pages/Search/SearchRawPage'
import Register from './components/Pages/Register/Register'
import { SelectedEleProvider } from './hooks/SelectedEleProvider'
import { ShowHideEleProvider } from './hooks/ShowHideEleProvider'

function App() {
  const [ifRerenderSearchPage, seteIfRerenderSearchPage] = useState(false)
  const [ifUpdateMySentencePage, seteIfUpdateMySentencePage] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState('')

  const [showSideMenu, setShowSideMenu] = useState(() => {
    const isMobile = window.innerWidth <= 768 // iPad Mini
    if (isMobile) return false
    if (!isMobile) return true
  })

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
              <div className="">
                <SearchBar seteIfRerenderSearchPage={seteIfRerenderSearchPage} />
              </div>
              <SelectedEleProvider>
                <ShowHideEleProvider>
                  <div className="flex h-full">
                    <div
                      className={`${
                        showSideMenu ? 'p-5 w-36' : 'w-0 py-5 -translate-x-24 opacity-0'
                      } h-[78vh] overflow-scroll transition-all md:z-0 md:flex md:flex-col border-r-[1px] border-stone-400 border-opacity-25 no-scrollbar`}
                    >
                      <Nav isLoggedIn={isLoggedIn} />
                    </div>

                    <div className="w-full text-zinc-50 bg-[#10121b66] no-scrollbar overflow-y-auto rounded-b-lg">
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route
                          path="/search"
                          element={
                            ifRerenderSearchPage ? (
                              <SearchController
                                user={user}
                                seteIfUpdateMySentencePage={seteIfUpdateMySentencePage}
                                ifUpdateMySentencePage={ifUpdateMySentencePage}
                              ></SearchController>
                            ) : (
                              <SearchRawPage />
                            )
                          }
                        />

                        <Route
                          path="/login"
                          element={
                            isLoggedIn ? (
                              <h3>Logged In Successfully</h3>
                            ) : (
                              <Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
                            )
                          }
                        />
                        <Route path="/register" element={<Register />} />

                        <Route
                          path="/mysentences"
                          element={
                            isLoggedIn ? (
                              <MySentenceController
                                isLoggedIn={isLoggedIn}
                                user={user}
                                seteIfUpdateMySentencePage={seteIfUpdateMySentencePage}
                                ifUpdateMySentencePage={ifUpdateMySentencePage}
                              />
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
          </div>
        </UseContextProvider>
      </SearchContextProvider>
    </BrowserRouter>
  )
}

export default App
