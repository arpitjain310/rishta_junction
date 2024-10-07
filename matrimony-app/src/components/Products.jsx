import React from 'react';
import styles from './RishtaJunction.module.css';

const productsData = [
    {
        imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b7b52de6f26c9eed4f02f7df3e601c1bb04344d12c19b7d352466439c18f35d?placeholderIfAbsent=true&apiKey=5ea11686f96445ad8c07b73e7e6b5bce",
        description: "Explore profiles tailored to your preferences and values."
    },
    {
        imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e572448001f6540bd064b6a6bcd1335a65872476d8a36609dba4ff5630101087?placeholderIfAbsent=true&apiKey=5ea11686f96445ad8c07b73e7e6b5bce",
        description: "Connect with potential partners through our messaging system."
    },
    {
        imgSrc:"https://cdn.builder.io/api/v1/image/assets/TEMP/072c7baa8021db87cbb85aed27c72c0fc85daff89b55dcd5aeddfb26ec15b8b6?placeholderIfAbsent=true&apiKey=5ea11686f96445ad8c07b73e7e6b5bce",
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