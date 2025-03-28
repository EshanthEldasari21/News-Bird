import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (

      <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
       
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
             <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
             <Link className="nav-link" to="/business">Business</Link>
            </li>
            <li className="nav-item">
             <Link className="nav-link" to="/science">Science</Link>
            </li>
            <li className="nav-item">
             <Link className="nav-link" to="/sports">Sports</Link>
            </li>
            <li className="nav-item">
             <Link className="nav-link" to="/health">Health</Link>
            </li>
            <li className="nav-item">
             <Link className="nav-link" to="/technology">Tech</Link>
            </li>
            <li className="nav-item">
             <Link className="nav-link" to="/entertainment">Entertainment</Link>
            </li>
          </ul>
          
          </div>
          
      </div>
    </nav>
 
    )
  }
}


