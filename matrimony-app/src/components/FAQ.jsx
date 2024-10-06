import React, { useState } from 'react';
import styles from './SacredMatches.module.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.faqItem}>
      <button
        className={styles.faqQuestion}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {question}
        <span className={styles.faqIcon}>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <div className={styles.faqAnswer}>{answer}</div>}
    </div>
  );
};

const faqData = [
  {
    question: "What is the process for finding a match?",
    answer: "Our matching process involves creating a detailed profile, setting your preferences, and using our advanced algorithm to suggest compatible matches. You can then browse profiles, express interest, and start conversations with potential partners."
  },
  {
    question: "How do I create a profile?",
    answer: "Creating a profile is simple. Just fill out your personal details, including your interests, background, and what you're looking for in a match. Make sure to upload a recent photo to help others connect with you."
  },
  {
    question: "Is there a fee to use the service?",
    answer: "Yes, we offer various subscription plans to suit your needs. Each plan provides different features to enhance your matchmaking experience. Visit our pricing page for more information."
  },
  {
    question: "Can I search for matches based on specific criteria?",
    answer: "Absolutely! Our advanced search filters allow you to narrow down potential matches based on age, location, education, and other important criteria, ensuring you find someone who aligns with your values."
  },
  {
    question: "What if I encounter issues with my account?",
    answer: "If you face any challenges, our customer support team is here to assist you. You can reach out to us via email or through our contact form, and we will respond promptly to resolve your issue."
  },
  {
    question: "How do I report inappropriate behavior?",
    answer: "We take safety seriously. If you encounter any inappropriate behavior, please report it immediately through our reporting feature, and our team will take the necessary actions to ensure a safe environment for all users."
  }
];

const FAQ = () => {
  return (
    <section className={styles.faq}>
      <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
      <p className={styles.faqSubtitle}>Your Questions, Answered</p>
      <div className={styles.faqList}>
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;