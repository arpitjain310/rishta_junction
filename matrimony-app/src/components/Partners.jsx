import React from 'react';
import styles from './SacredMatches.module.css';
import icon7 from './../assets/icon7.svg';

const Partners = () => {
  return (
    <section className={styles.partners}>
      <h2 className={styles.partnersTitle}>Trusted Partners for Sacred Marriages</h2>
      <img src={icon7} alt="Our trusted partners" className={styles.partnersImage} />
    </section>
  );
};

export default Partners;