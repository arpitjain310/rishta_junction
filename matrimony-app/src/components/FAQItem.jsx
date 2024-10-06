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
        <img
          src={isOpen ? "https://cdn.builder.io/api/v1/image/assets/TEMP/2f2c188f31532fab7a2b8e6e8e18cef92be5f6fff67fa6cd245bdc0b67ec7b77?placeholderIfAbsent=true&apiKey=5ea11686f96445ad8c07b73e7e6b5bce" : "https://cdn.builder.io/api/v1/image/assets/TEMP/d834192e104db05e5a0d6e3dc2d350e5d3caeb5a4f94b5830a167afddbb2aad9?placeholderIfAbsent=true&apiKey=5ea11686f96445ad8c07b73e7e6b5bce"}
          alt=""
          className={styles.faqIcon}
        />
      </button>
      {isOpen && (
        <div className={styles.faqAnswer}>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;