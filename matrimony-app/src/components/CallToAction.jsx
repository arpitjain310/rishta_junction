import React from 'react';
import styles from './RishtaJunction.module.css';
import marriageimg from './../assets/marriage.jpg';
import greenTick from './../assets/greentick.svg';
import img3 from './../assets/img3.png';

const CallToAction = () => {
    const featureData = [
        { title: "Tailored Matchmaking" },
        { title: "Safe and Secure" },
        { title: "Cultural Compatibility" }
      ];

  return (
    <div className='CallToAction'>
    <section className={styles.cta}>
      <img src={marriageimg} alt="" className={styles.ctaImage} />
      <div className={styles.ctaContent}>
        <h2 className={styles.ctaTitle}>Find Your Perfect Match Today!</h2>
        <p className={styles.ctaDescription}>
          Join our community dedicated to forging sacred relationships and connecting families in a respectful and meaningful way.
        </p>
        <div className={styles.ctaButtons}>
          <button className={styles.secondaryButton}>Learn More</button>
          <button className={styles.primaryButton}>Get Started Now</button>
        </div>
        <div className={styles.ctaStats}>
          <div className={styles.statColumn}>
            <div className={styles.statNumber}>2.5k+</div>
            <div className={styles.statDescription}>Join 10,000+ Happy Families</div>
          </div>
          <div className={styles.statColumn}>
            <div className={styles.rating}>
              <span className={styles.ratingNumber}>5.0</span>
             
            </div>
            <div className={styles.ratingDescription}>Rated 4.8/5 by Users</div>
          </div>
        </div>
      </div>
    </section>
     <section className={styles.features}>
     <div className={styles.featuresContent}>
       <h2 className={styles.featuresTitle}>Discover Your Perfect Match</h2>
       <ul className={styles.featuresList}>
         {featureData.map((feature, index) => (
           <li key={index} className={styles.featureItem}>
             <img src={greenTick} alt="" className={styles.featureIcon} />
             <span className={styles.featureTitle}>{feature.title}</span>
           </li>
         ))}
       </ul>
       <button className={styles.learnMoreButton}>Learn More</button>
     </div>
     <img src={img3} alt="" className={styles.featuresImage} />
   </section>
   </div>
  );
};

export default CallToAction;