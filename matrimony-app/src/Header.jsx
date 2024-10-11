import React from 'react';
import stylesapp from './stylesmain.module.css';

const Header = () => {
  return (
    <div className={stylesapp.header}>

      <div className={stylesapp.companyName}>
        Rishta Junction<br />
        Find Your Life Partner
      </div>

      <div className={stylesapp.navigation}>
        <ul className={stylesapp.navList}>
          <li><a href="/" className={stylesapp.navItem}>Home</a></li>
          <li><a href="/#about" className={stylesapp.navItem}>About Us</a></li>
          <li><a href="/search" className={stylesapp.navItem}>Find your match</a></li>
          <li><a href="#testimonials" className={stylesapp.navItem}>Testimonials</a></li>
        </ul>
      </div>
        
          <button className={stylesapp.loginButton} onClick={() => window.location.href = '/login'}>
            Login
            </button>

    
        
      </div>
  );
};

export default Header;