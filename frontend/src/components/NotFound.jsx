import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='col-md-4 mx-auto text-center'>
        <img className='w-100' src="https://img.freepik.com/free-vector/monster-404-error-concept-illustration_114360-1918.jpg?size=626&ext=jpg&ga=GA1.1.879531071.1702376286&semt=ais"></img>
        <h1 className='display-3 fw-bold text-center' style={{color:'red'}}>Page not found</h1>
        <Link to='/' className='btn btn-primary'>Goto Homepage</Link>
    </div>
  )
}

export default NotFound