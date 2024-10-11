import React from 'react'
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
// import styles from './RishtaJunction.module.css';
import styles from './About.module.css'
const About = () => {
  return (
    <footer className={styles.partners} id="about">

      <div className={styles.cta} id="aboutus">
        <h2 className={styles.ctaTitle}>
          About Us
        </h2>

        <div className={styles.ctaContent}>
          <div>
        
            <p className={styles.ctaDescription}>
              We are dedicated to help you find your perfect life partner.
            </p>

            <ul className={styles.featuresList}>
              <li className={styles.featureItem}>
                <FaEnvelope className={styles.featureIcon} />
                <a href="mailto:india.rishtajunction@gmail.com" >india.rishtajunction@gmail.com</a>
              </li>
              <li className={styles.featureItem}>
                <FaPhone className={styles.featureIcon} />
                <a href="tel:+919457910092">9457910092</a>
              </li>
              <li className={styles.featureItem}>
                <FaMapMarkerAlt className={styles.featureIcon} />
                <span>Nihad Plaza, <br/>
                Opp. Zakir Husssain School, Civil Lines,
                <br /> Dodhpur, Aligarh (U.P.) 
                <br />202001</span>
              </li>
            </ul>

            <div className={styles.ctaButtons}>
              
             <a
                href="https://wa.me/9457910092"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryButton}
              >
                <FaWhatsapp className={styles.featureIcon} style={{ color: 'green' }} />
                WhatsApp
              </a>
              <button className={styles.primaryButton}>
                Contact Us
              </button>

            </div>
          </div>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47443.188387316775!2d78.05535044985533!3d27.89472794300315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a5f63375cb55%3A0x84c80acb31be8da1!2sRishta%20Junction!5e0!3m2!1sen!2sin!4v1728584530709!5m2!1sen!2sin"
              width="50"
              height="50"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Rishta Junction Location"
              className={styles.partnersImage}
            >
            </iframe>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default About;
