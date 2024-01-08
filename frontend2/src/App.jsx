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
import StateManagement from './components/StateManagement'
import Card from './components/Card'
import Todo from './components/Todo'
import ChatApplication from './components/ChatApplication'
import BrowseProducts from './components/BrowseProducts'
import { SnackbarProvider } from 'notistack'
import Post from './components/Post'

const App = () => {
  return (
    <>
    <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical:'top', horizontal:'right' }}>
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
          <Route path="/state-management" element={<StateManagement />} />
          <Route path="/card" element={<Card />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/chat-application" element={<ChatApplication />} />
          <Route path="/browse-products" element={<BrowseProducts />} />
          <Route path="/post" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </SnackbarProvider>
    </>
  )
}

export default App