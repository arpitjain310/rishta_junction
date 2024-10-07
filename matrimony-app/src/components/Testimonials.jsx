import React from 'react';
import styles from './RishtaJunction.module.css';


const Testimonials = () => {
  const testimonialsData = [
    { name: "Ravi Kumar", profession: "IT Professional", age: 28 },
    { name: "Priya Sharma", profession: "Teacher", age: 26 },
    { name: "Amit Verma", profession: "Engineer", age: 30 },
    { name: "Sneha Reddy", profession: "Doctor", age: 27 },
    { name: "Vikram Joshi", profession: "Businessman", age: 32 },
    { name: "Anjali Mehta", profession: "Designer", age: 25 },
    { name: "Nikhil Singh", profession: "Banker", age: 29 },
    { name: "Neha Patil", profession: "PhD Scholar", age: 31 }
  ];

  return (
    <section >
      <div className={styles.testimonialsTitle}>
        Our Success stories
      </div>

      <div className={styles.testimonialsContainer}>
        {testimonialsData.map((testimonial, index) => (
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialInfo}>
              <h3 className={styles.testimonialName}>{testimonial.name}</h3>
              <p className={styles.testimonialProfession}>{testimonial.profession}, {testimonial.age}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
