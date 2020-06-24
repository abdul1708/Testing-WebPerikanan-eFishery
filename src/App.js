import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/pages/dashboard/home'

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path='/' component={Home} />
        </BrowserRouter>
      </div>
    )
  }
}
