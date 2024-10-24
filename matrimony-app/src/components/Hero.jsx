import React from 'react';
import styles from './RishtaJunction.module.css';
import icon4 from './../assets/icon4.svg';
import icon9 from './../assets/icon9.svg';
import icon1 from './../assets/icon1.svg';
import icon6 from './../assets/icon6.svg';
import icon8 from './../assets/icon8.svg';
import icon2 from './../assets/icon2.svg';
const Hero = () => {

    const statsData = [
        { imgSrc: icon4, number: "1000+", description: "Trusted profiles registered on our platform." },
        { imgSrc: icon9, number: "500+", description: "Successful matches made every month." },
        { imgSrc: icon1, number: "24/7", description: "Dedicated support to assist you at any time." },
        { imgSrc: icon6, number: "User Friendly", description: "Easy navigation to find your ideal partner." },
        { imgSrc: icon8, number: "Verified Matches", description: "All profiles are thoroughly verified for authenticity." },
        { imgSrc: icon2, number: "Safe & Secure", description: "Your privacy is our utmost priority." }
    ];

    return (
        <section className={styles.hero}>
            <h2 className={styles.heroTitle}>Embark on a Journey of Love and Commitment</h2>
            <p className={styles.heroSubtitle}>
                In our country, marriage is not just a ceremony, but a sacred bond.
                <br />
                Join us to find your perfect match today.
            </p>
            <button className={styles.ctaButton} >Start Your Journey</button>
            <div className={styles.stats}>
                {statsData.map((stat, index) => (
                    <div key={index} className={styles.statItem}>
                        <img src={stat.imgSrc} alt={stat.description} className={styles.statIcon} />
                        <span className={styles.statNumber}>{stat.number}</span>
                        <span className={styles.statLabel}>{stat.description}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Hero;