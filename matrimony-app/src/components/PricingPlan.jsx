import React from 'react';
import styles from './SacredMatches.module.css';
import greenTick from './../assets/greentick.svg';

const PricingPlan = ({ title, price, description, features, buttonText, isHighlighted }) => {
  const planClass = isHighlighted ? styles.pricingPlanHighlighted : styles.pricingPlan;
  const buttonClass = isHighlighted ? styles.primaryButton : styles.secondaryButton;

  return (
    <div className={planClass}>
      <h3 className={styles.planTitle}>{title}</h3>
      <div className={styles.planPrice}>
        <span className={styles.price}>{price}</span>
        <span className={styles.pricePeriod}>{price === 'Custom' ? '' : 'per month'}</span>
      </div>
      <p className={styles.planDescription}>{description}</p>
      <ul className={styles.planFeatures}>
        {features.map((feature, index) => (
          <li key={index} className={styles.planFeatureItem}>
            <img src={greenTick} alt="" className={styles.featureIcon} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={buttonClass}>{buttonText}</button>
    </div>
  );
};

export default PricingPlan;