import React from "react";
import styles from './SacredBondsMatrimony.module.css';
import FooterColumn from './FooterColumn';

const footerColumns = [
  {
    title: "Key Features",
    items: ["Verified Profiles", "Advanced Filters", "Privacy Protection", "Success Stories", "24/7 Support"]
  },
  {
    title: "Our Services",
    items: ["Personalized Matches", "Community Engagement", "Relationship Guidance", "Cultural Insights", "Safety Measures"]
  },
  {
    title: "About Us",
    items: ["Our Mission", "Our Story", "Our Values", "Our Team", "Join Us"]
  },
  {
    title: "Follow Us",
    items: ["Facebook", "Instagram", "Twitter", "LinkedIn", "YouTube"]
  }
];

function SacredBondsMatrimony() {
  return (
    <div className={styles.pageWrapper}>
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <div className={styles.ctaText}>
            <h2 className={styles.ctaTitle}>Sign In to Explore Matches</h2>
            <p className={styles.ctaDescription}>
              Log in with your email to discover profiles of like-minded individuals ready to embark on the journey of marriage. Start connecting today!
            </p>
          </div>
          <form className={styles.formContainer}>
            <div className={styles.inputWrapper}>
              <label htmlFor="emailInput" className="visually-hidden">Sign in with Your Email</label>
              <input
                id="emailInput"
                type="email"
                className={styles.inputField}
                placeholder="Sign in with Your Email"
                aria-label="Sign in with Your Email"
              />
            </div>
            <button type="submit" className={styles.submitButton}>Let's Find Your Match</button>
          </form>
          <p className={styles.privacyPolicy}>Your Information is Safe with Us</p>
        </div>
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe4b45d22d787f83df99f1c2db861fe49e0de63f602dbc328c13c3b489a78458?placeholderIfAbsent=true&apiKey=5ea11686f96445ad8c07b73e7e6b5bce" 
          alt="Couple finding their match" 
          className={styles.ctaImage} 
          loading="lazy"
        />
      </section>
      
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.divider} />
          <div className={styles.footerColumns}>
            {footerColumns.map((column, index) => (
              <FooterColumn key={index} title={column.title} items={column.items} />
            ))}
          </div>
          <div className={styles.footerBottom}>
            <div className={styles.logo}>
              <img 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e9d4f7af1dc560bc968ceab8d84009dfcdd6502f7c326274ba86bd7f5cedca0?placeholderIfAbsent=true&apiKey=5ea11686f96445ad8c07b73e7e6b5bce" 
                alt="Sacred Bonds Matrimony Logo" 
                className={styles.logoImage} 
                loading="lazy"
              />
              <span className={styles.companyName}>
                Sacred Bonds Matrimony - Connecting Hearts for Lasting Love
              </span>
            </div>
            <p className={styles.copyright}>
              © 2023 Sacred Bonds Matrimony. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SacredBondsMatrimony;