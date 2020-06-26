import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class sidebar extends Component {
  render() {
    return (
      <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div class="sidebar-sticky pt-3">
          <ul class="nav flex-column">
            <li class="nav-item">
              <Link to='/' class='nav-link'>
                <span data-feather="home"></span>
                Dashboard <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link to='/price' class='nav-link active'>
                <span data-feather="file"></span>
                Price
              </Link>
            </li>
          </ul>

          <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Saved reports</span>
            <a class="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
              <span data-feather="plus-circle"></span>
            </a>
          </h6>
          <ul class="nav flex-column mb-2">
            <li class="nav-item">
              <Link to='/product' class='nav-link'>
                <span data-feather="file-text"></span>
                Product
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
