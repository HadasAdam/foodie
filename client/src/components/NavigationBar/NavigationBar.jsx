import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';
import { logout } from '../../services/sessionService';
import "./NavigationBar.scss";
const NavigationBar = () => {

  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);

  const onLogoutClick = () => {
    setIsLoggedIn(false);
    logout();
  }


  return (
    <nav className='navigation'>
      <Link to="/">Home</Link>
      <Link to="/NewAuthor">Add Author</Link>
      {!isLoggedIn && <Link to="/login">Login</Link>} 
      {isLoggedIn && <Link to="/login" onClick={onLogoutClick}>Logout</Link>}
    </nav>
  )
}

export default NavigationBar