import React from 'react';
import styles from './SacredBondsMatrimony.module.css';

function FooterColumn({ title, items }) {
  return (
    <div className={styles.footerColumn}>
      <h3 className={styles.columnTitle}>{title}</h3>
      {items.map((item, index) => (
        <div key={index} className={styles.columnItem}>{item}</div>
      ))}
    </div>
  );
}

export default FooterColumn;