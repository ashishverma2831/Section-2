import { useState } from 'react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import useAppContext from '../AppContext'

const Navbar = () => {

  const {currentUser,setCurrentUser,loggedIn,setLoggedIn,logout} = useAppContext();
  const showLoginOptions = ()=>{
    if(loggedIn){
      return (
        <li className='nav-item'>
          <button className='btn btn-danger' onClick={logout}>logout</button>
        </li>
      )
    }
    else{
      return <>
         <li className="nav-item">
          <NavLink className="nav-link" to="/signup">
            Signup
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
      </>
    }
  }

  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/eventhandling">
            Event Handling
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/state-management">
            State Management
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/card">
            Card
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/todo">
            Todo
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/chat-application">
            Chat Application
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/browse-products">
            Browse Products
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/post">
            Post
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/manageuser">
            Manage User
          </NavLink>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        {showLoginOptions()}
      </ul>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>        
    </div>
  )
}

export default Navbar