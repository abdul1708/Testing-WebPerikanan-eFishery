import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// Component 
import Dashboard from './components/pages/dashboard/dashboard'
import Price from './components/pages/price/price'
import Product from './components/pages/product/product'

// Layout 
import Sidebar from './components/pages/layout/sidebar'
import Topbar from './components/pages/layout/topbar'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Topbar />
        <div className='container-fluid'>
          <div class='row'>
            <Sidebar />
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/price' component={Price} />
            <Route exact path='/product' component={Product} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}
