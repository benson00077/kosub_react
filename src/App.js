import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/About'
import Home from './components/Home'

import React, { useState } from 'react'
import LanguageSelector from './components/LanguageSelector'
import Login, { PrivateRoute } from './components/Login';
import SearchController from './components/SearchController';
import MySentenceController from './components/MySentencesController'
import SearchBar from './components/SearchBar';
import { SearchContextProvider } from './components/SearchContext';
import { UseContextProvider } from './components/UserContext'
import SearchRawPage from './components/SearchRawPage';


function App() {

  const [ifRerenderSearchPage, seteIfRerenderSearchPage] = useState(false)
  const [ifUpdateMySentencePage, seteIfUpdateMySentencePage] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState('')


  return (
    <Router>
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
