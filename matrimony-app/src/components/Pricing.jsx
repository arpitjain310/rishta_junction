import React from 'react';
import PricingPlan from './PricingPlan';
import styles from './SacredMatches.module.css';

const pricingData = [
  {
    title: "Basic Free Package",
    price: "₹0",
    description: "For Individual Use Only",
    features: [
      "Profile Creation",
      "Browse Matches",
      "Send Interests",
      "Access Profiles",
      "Limited Messaging",
      "Customer Support"
    ],
    buttonText: "Start for Free"
  },
  {
    title: "Premium Pro Package",
    price: "₹12",
    description: "For teams up to 10 users.",
    features: [
      "Advanced Search Filters",
      "Unlimited Messaging",
      "View Contact Details",
      "Priority Customer Support",
      "Match Recommendations",
      "Exclusive Events Access"
    ],
    buttonText: "Join the Pro Plan",
    isHighlighted: true
  },
  {
    title: "Custom Plan",
    price: "Variable",
    description: "Ideal for Organizations and Groups",
    features: [
      "Tailored Matchmaking",
      "Dedicated Support Team",
      "Group Discounts",
      "Workshops and Webinars",
      "Community Engagement",
      "Comprehensive Reporting"
    ],
    buttonText: "Inquire for Pricing"
  }
];

const Pricing = () => {
  return (
    <section className={styles.pricing}>
      <h2 className={styles.pricingTitle}>Affordable Marriage Plans</h2>
      <p className={styles.pricingSubtitle}>
        Choose a package that suits your needs and start your journey to find the perfect match.
      </p>
      {/* <div className={styles.pricingTabs}>
        <button className={`${styles.pricingTab} ${styles.activeTab}`}>Monthly Plan</button>
        <button className={styles.pricingTab}>Yearly Plan</button>
      </div> */}
      <div className={styles.pricingPlans}>
        {pricingData.map((plan, index) => (
          <PricingPlan key={index} {...plan} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;