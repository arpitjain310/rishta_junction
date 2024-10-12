import React from 'react';
import styles from './RishtaJunction.module.css';
import marriageimg from './../assets/marriage.jpg';
import greenTick from './../assets/greentick.svg';
import img3 from './../assets/img3.png';

import calltoaction1 from './../assets/calltoaction1.jpeg';


const CallToAction = () => {
    const featureData = [
        { title: "Tailored Matchmaking" },
        { title: "Safe and Secure" },
        { title: "Cultural Compatibility" },
        { title: "Verified Profiles" },
        { title: "Advanced Search Filters" },
        { title: "Privacy Controls" },
        { title: "24/7 Customer Support" }
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
          <button className={styles.secondaryButton} onClick={() => window.location.href = '/terms'}>Learn More</button>
          <button className={styles.primaryButton} onClick={() => window.location.href = '/'}>Get Started Now</button>
        </div>
        <div className={styles.ctaStats}>
          <div className={styles.statColumn}>
            <div className={styles.statNumber}>100+</div>
            <div className={styles.statDescription}>Successful Matches</div>
          </div>
          <div className={styles.statColumn}>
            <div className={styles.statNumber}>24/7</div>
            <div className={styles.statDescription}>Customer Support</div>
          </div>
          <div className={styles.statColumn}>
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statDescription}>Secure & Private</div>
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
       <button className={styles.learnMoreButton} onClick={() => window.location.href = '/terms'}>Learn More</button>
     </div>
     <div className={styles.featuresImageContainer} >
     <img src={calltoaction1} alt="" className={styles.featuresImage} />
     </div>
     
   </section>
   </div>
  );
};

export default CallToAction;