import React from 'react';
import styles from './RishtaJunction.module.css';

const productsData = [
    {
        imgSrc: "",
        description: "Explore profiles tailored to your preferences and values."
    },
    {
        imgSrc: "",
        description: "Connect with potential partners through our messaging system."
    },
    {
        imgSrc:"",
        description:"wedding picture"
    }
];

const Products = () => {
    return (
        <div className='product-component'>
            <section className={styles.products}>
                <div className={styles.productLine}>
                    {productsData.map((product, index) => (
                        <div key={index} className={styles.productFeature}>
                            <img src={product.imgSrc} alt="" className={styles.productIcon} />
                            <p className={styles.productDescription}>{product.description}</p>
                        </div>
                        
                    ))}
                   </div>
                
            </section>
        </div>
    );
};

export default Products;