import React  from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'

import Analysis from './pages/Analysis'
import Chronic from './pages/Chronic'



import NotFoundPage from './pages/NotFoundPage'


function App(props) {
  
  return (
    <Router>
      <>
        <MyNavbar  />
        <MainContent>
          <Switch>


            <Route path="/analysis">
              <Analysis />
            </Route>
            <Route path="/chronic">
              <Chronic />
            </Route>

            
            <Route exact path="/">
              <Chronic />
            </Route>
            <Route exact path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </MainContent>
        <MyFooter />
      </>
    </Router>
  )
}

export default App
