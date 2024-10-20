import React from 'react';
import stylesapp from './stylesmain.module.css';

const Footer = () => {
  return (
    <footer className={stylesapp.footer}>
      <div className={stylesapp.footerContent}>
        <div className={stylesapp.footerLogo}>

          <span className={stylesapp.footerCompanyName}>Rishta Junction - Your Trusted Partner</span>
        </div>
        <nav className={stylesapp.footerNav}>
          <ul className={stylesapp.footerNavList}>
            <li><a href="/terms" className={stylesapp.footerNavItem}>Terms of Service</a></li>
            <li><a href="/support" className={stylesapp.footerNavItem}>Help</a></li>
            <li><a href="/search" className={stylesapp.footerNavItem}>Find your match</a></li>
            <li><a href="/about" className={stylesapp.footerNavItem}>Careers</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;