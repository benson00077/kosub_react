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

function App() {
  const [ifRerenderSearchPage, seteIfRerenderSearchPage] = useState(false)
  const [ifUpdateMySentencePage, seteIfUpdateMySentencePage] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState('')

  const [showSideMenu, setShowSideMenu] = useState(false)

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

              <div className="flex h-full">
                <div
                  className={`${
                    showSideMenu ? 'p-5 w-36' : 'w-0 py-5 -translate-x-24 opacity-0'
                  } transition-all md:z-0 md:flex md:flex-col border-r-[1px] border-stone-400 border-opacity-25`}
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
            </div>
            <div
              className="absolute left-[5vw] bottom-[5vh] z-20 hover:cursor-pointer"
              onClick={(e) => setShowSideMenu(!showSideMenu)}
            >
              ⚙
            </div>
          </div>
        </UseContextProvider>
      </SearchContextProvider>
    </BrowserRouter>
  )
}

export default App
