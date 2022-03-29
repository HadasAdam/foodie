import React from 'react'
import { Link } from 'react-router-dom';
import "./NavigationBar.scss";
const NavigationBar = () => {
  return (
    <nav className='navigation'>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </nav>
  )
}

export default NavigationBar