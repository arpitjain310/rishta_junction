import React, { useState, useEffect } from 'react';
import stylesapp from './stylesmain.module.css';
import logo from './assets/logo.jpeg';
import Login from './pages/login/login.jsx';
import { userServices } from './services/userServices';

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setIsLoggedIn(!!token);
  }, []);

  const handleLoginClick = () => {
    setShowLogin(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
    document.body.style.overflow = 'auto';
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      
      await userServices.logout(token);
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user_id');
      setIsLoggedIn(false);
      window.location.href = '/';
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <>
      <div className={stylesapp.header}>
        <div className={stylesapp.companyLogocontainer}>
          <img src={logo} className={stylesapp.companyLogo} onClick={() => window.location.href = '/'} alt="Rishta Junction logo" />
        </div>

        <div className={stylesapp.navigation}>
          <ul className={stylesapp.navList}>
            <li><a href="/" className={stylesapp.navItem}>Home</a></li>
            <li><a href="/#about" className={stylesapp.navItem}>About Us</a></li>
            <li><a href="/search" className={stylesapp.navItem}>Find your match</a></li>
            <li><a href="#testimonials" className={stylesapp.navItem}>Testimonials</a></li>
          </ul>
        </div>
        <div className={stylesapp.loginContainer}>
          {isLoggedIn ? (
            <button className={stylesapp.loginButton} onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button className={stylesapp.loginButton} onClick={handleLoginClick}>
              Login
            </button>
          )}
        </div>
      </div>

      {showLogin && (
         <div className={stylesapp.modalOverlay}>
         <div className={stylesapp.modalContent}>
           <Login onClose={handleCloseLogin} onLoginSuccess={handleLoginSuccess}/>
         </div>
       </div>

      )}
    </>
  );
};

export default Header;