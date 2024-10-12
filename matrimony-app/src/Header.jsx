import React, { useState } from 'react';
import stylesapp from './stylesmain.module.css';
import logo from './assets/logo.jpeg';
import Login from './pages/login/login.jsx'; // Assuming you have a Login component

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
    document.body.style.overflow = 'auto';
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
          <button className={stylesapp.loginButton} onClick={handleLoginClick}>
            Login
          </button>
        </div>
      </div>

      {showLogin && (
         <div className={stylesapp.modalOverlay}>
         <div className={stylesapp.modalContent}>
           <Login onClose={handleCloseLogin} />
         </div>
       </div>

      )}
    </>
  );
};

export default Header;