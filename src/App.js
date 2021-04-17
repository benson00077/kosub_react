import './App.css';
import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/SideMenu/Nav';
import About from './components/Pages/About/About'
import Home from './components/Pages/Home/Home'

import Login, { PrivateRoute } from './components/Pages/LogIn/Login';
import SearchController from './components/Pages/Search/SearchController';
import MySentenceController from './components/Pages/MySentence/MySentencesController'

import SearchBar from './components/SearchBar/SearchBar';
import LanguageSelector from './components/SearchBar/LanguageSelector'

import { SearchContextProvider } from './components/SearchContext';
import { UseContextProvider } from './components/UserContext'
import SearchRawPage from './components/Pages/Search/SearchRawPage';
import Register from './components/Pages/Register/Register';


function App() {

  const [ifRerenderSearchPage, seteIfRerenderSearchPage] = useState(false)
  const [ifUpdateMySentencePage, seteIfUpdateMySentencePage] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState('')


  return (
    <Router basename={ process.env.PUBLIC_URL }>
      <SearchContextProvider>
        <UseContextProvider>
          <div className="app">
            <div className="header">

              <div className="menu-circle"></div>

              <div className="header-menu">
                <LanguageSelector value={['ko', 'zh', 'en']} />
              </div>

              <div className="search-bar">
                <SearchBar
                  seteIfRerenderSearchPage={seteIfRerenderSearchPage} />
              </div>
            </div>

            <div className="wrapper"> 
              <div className="left-side">
                <Nav isLoggedIn={isLoggedIn} />
              </div>

              <div className="main-container">
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/about" component={About} />

                  <Route path="/search"
                    render={() =>
                      ifRerenderSearchPage
                        ? (
                          <SearchController user={user}
                            seteIfUpdateMySentencePage={seteIfUpdateMySentencePage} ifUpdateMySentencePage={ifUpdateMySentencePage} />
                        )
                        : <SearchRawPage/>
                    } />

                  {/* <Route path="/search">  
                {ifRerenderSearchPage
                  ? <SearchController ko={result.ko} zh={result.zh} en={result.en} id={result.id}/>
                  : <h3>How to Use ?????</h3>}
                {isSearched
                  ? <Redirect push to="/search"/>
                  : ''}
              </Route> */}

                  <Route path="/login"
                    render={() =>
                      isLoggedIn
                        ? (<h3>Logged In Successfully</h3>)
                        : (<Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />)
                    } />
                  <Route path="/register"
                    render={() =>
                      <Register/>
                    } />
                  
                  <PrivateRoute path="/mysentences" isLoggedIn={isLoggedIn}>
                    <MySentenceController isLoggedIn={isLoggedIn} user={user} seteIfUpdateMySentencePage={seteIfUpdateMySentencePage} ifUpdateMySentencePage={ifUpdateMySentencePage} />
                  </PrivateRoute>

                </Switch>
              </div>
            </div>
          </div>
        </UseContextProvider>
      </SearchContextProvider>
    </Router>
  );
}


export default App;
