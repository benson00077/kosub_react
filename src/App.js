// import './App.css'
import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import WindowBar from './components/SearchBar/WindowBar'
import Sidebar from './components/SideMenu/SideBar'
import About from './Pages/About/About'
import Home from './Pages/Home/Home'
import Login from './Pages/LogIn/Login'
import Guide from './Pages/Guide/Guide'
import Register from './Pages/Register/Register'
import SearchController from './Pages/Search/SearchController'
import MySentenceController from './Pages/MySentence/MySentencesController'
import { SearchContextProvider } from './context/SearchContext'
import { UserContextProvider } from './context/UserContext'
import { SelectedSpeechesContextProvider } from './context/SelectedSpeechesContext'
import { ShowHideLanContextProvider } from './context/ShowHideLanContext'
import GoToTopButton from './components/GoToTopButton'
import SideMenuIconButton from './components/SideMenu/SideMenuIconButton'

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
  }, [])

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <SearchContextProvider>
        <UserContextProvider>
          <div class="flex flex-col items-center justify-center w-screen h-screen bg-center bg-cover bg-dusk-gradient">
            <div class="bg-gray-800 bg-opacity-40 w-11/12 h-[93vh] rounded-2xl overflow-y-hidden">
              <WindowBar />
              <div class="flex h-full">
                <SelectedSpeechesContextProvider>
                  <ShowHideLanContextProvider>
                    <div
                      class={`${
                        showSideMenu ? 'px-2 md:px-5 pt-4 w-36' : 'w-0 py-5 -translate-x-24 opacity-0'
                      } h-[78vh] overflow-scroll transition-all md:z-0 border-r-[1px] border-stone-400 border-opacity-25 no-scrollbar`}
                    >
                      <Sidebar isLoggedIn={isLoggedIn} />
                    </div>

                    <div
                      class="w-full text-zinc-50 bg-[#10121b66] no-scrollbar overflow-y-auto rounded-b-lg"
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
                        <Route element={<ProtectedRoute isAllowed={isLoggedIn} />}>
                          <Route path="/mysentences" element={<MySentenceController />} />
                        </Route>
                        <Route path="*" element={<Navigate to="/" replace />} />
                      </Routes>
                    </div>
                  </ShowHideLanContextProvider>
                </SelectedSpeechesContextProvider>
              </div>
            </div>
            <SideMenuIconButton onClickCb={(e) => setShowSideMenu(!showSideMenu)} isActive={showSideMenu} />
            <GoToTopButton
              onClickCb={() => {
                const option = { top: 0 - goTopRef.current.scrollHeight, behavior: 'smooth' }
                goTopRef.current.scrollTo(option)
              }}
            />
            {/* Modal */}
            <div id="modal-root" class="absolute z-30"></div>
          </div>
        </UserContextProvider>
      </SearchContextProvider>
    </BrowserRouter>
  )
}

export default App
