import React from 'react';
import stylesapp from './stylesmain.module.css';

const Header = () => {
  return (
    <header className={stylesapp.header}>
      <div className={stylesapp.logoWrapper}>
        <div className={stylesapp.logo}>
          <div className={stylesapp.logoInner}>
            <div className={stylesapp.logoBar} />
            <div className={stylesapp.logoBarGroup}>
              <div className={stylesapp.logoBar} />
              <div className={stylesapp.logoBar} />
            </div>
          </div>
        </div>
      </div>
      <h1 className={stylesapp.companyName}>Rishta Junction: Find Your Life Partner</h1>
      <nav className={stylesapp.navigation}>
        
        <ul className={stylesapp.navList}>
          <li><a href="#home" className={stylesapp.navItem}>Home</a></li>
          <li><a href="#about" className={stylesapp.navItem}>About Us</a></li>
          <li><a href="#matches" className={stylesapp.navItem}>Matches</a></li>
          <li><a href="#testimonials" className={stylesapp.navItem}>Testimonials</a></li>
        </ul>
      </nav>
      <button className={stylesapp.loginButton}>Login / Sign Up</button>
    </header>
  );
};

export default Header;