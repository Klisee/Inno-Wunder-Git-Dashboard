import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Page/Home'
import Navigation from './Style/Navigation'

function Router() {
  return (
    <BrowserRouter>
      <div class="main-content">
        <Navigation />
        <Route path="/" exact component={Home}/>
      </div>
      </BrowserRouter>
  )
}

export default Router
