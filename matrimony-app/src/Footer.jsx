import React from 'react';
import stylesapp from './stylesmain.module.css';

const Footer = () => {
  return (
    <footer className={stylesapp.footer}>
      <div className={stylesapp.footerContent}>
        <div className={stylesapp.footerLogo}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e9d4f7af1dc560bc968ceab8d84009dfcdd6502f7c326274ba86bd7f5cedca0?placeholderIfAbsent=true&apiKey=5ea11686f96445ad8c07b73e7e6b5bce" alt="" className={stylesapp.footerLogoImage} />
          <span className={stylesapp.footerCompanyName}>Rishta Junction - Your Trusted Partner</span>
        </div>
        <nav className={stylesapp.footerNav}>
          <ul className={stylesapp.footerNavList}>
            <li><a href="/privacy" className={stylesapp.footerNavItem}>Privacy Policy</a></li>
            <li><a href="/terms" className={stylesapp.footerNavItem}>Terms of Service</a></li>
            <li><a href="/help" className={stylesapp.footerNavItem}>Help Center</a></li>
            <li><a href="/blog" className={stylesapp.footerNavItem}>Blog</a></li>
            <li><a href="/careers" className={stylesapp.footerNavItem}>Careers</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;