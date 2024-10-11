import React from 'react';
import styles from './ComingSoon.module.css';

const ComingSoon = () => {
  return (
    <div className={styles.comingSoonContainer}>
      <h1 className={styles.title}>Exciting Features Coming Soon!</h1>
      <p className={styles.description}>
        We're working hard to bring you amazing new features. They will be live on October 15th!
      </p>
      <div className={styles.registerSection}>
        <p>Don't miss out! Register now to get early experience of these features</p>
        <a href="/register">
        <button className={styles.registerButton}>Register Today</button>
        </a>
        
    </div>
     
    </div>
  );
};

export default ComingSoon;
