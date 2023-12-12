import React from 'react'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Contact from './components/Contact'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'
import EventHandling from './components/EventHandling'

const App = () => {
  return (
    <div>
      <BrowserRouter>

        {/* <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link> */}

        <Navbar />

        <Routes>
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/eventhandling" element={<EventHandling />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App