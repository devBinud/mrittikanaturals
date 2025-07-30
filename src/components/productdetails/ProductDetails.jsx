import React, { useState, useEffect } from 'react';
import styles from './productdetails.module.css';
import { FaRegSmileBeam } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa';

import img1 from '../../assets/products/1.webp';
import img2 from '../../assets/products/1.webp';
import img3 from '../../assets/products/1.webp';
import img4 from '../../assets/products/1.webp';

const ProductDetails = () => {
    const images = [img1, img2, img3, img4];
    const [mainImage, setMainImage] = useState(images[0]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={`container ${styles.productContainer}`}>
            <div className="row">
                {/* Left Section */}
                <div className="col-lg-6 col-md-12">
                    <div className={styles.gallery}>
                        <div className={styles.mainImageWrapper}>
                            <img src={mainImage} alt="Main Product" className={styles.mainImage} />
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="col-lg-6 col-md-12">
                    <div className={styles.details}>
                        <h1 className={styles.title}>Born To Blush Stick with Shea Butter and Cica</h1>

                        <div className={styles.rating}>
                            <span>⭐ 5.0</span>
                            <span className="text-success ms-2">✅</span>
                            <span className="text-muted ms-2">(3 reviews)</span>
                        </div>

                        <div className={styles.priceBlock}>
                            <span className={styles.newPrice}>MRP ₹446</span>
                            <span className={styles.oldPrice}>MRP ₹625</span>
                        </div>

                        <div className={styles.features}>
                            <p>ON-THE-GO BLUSH STICK | 5 RICHLY PIGMENTED SHADES | EASY TO APPLY | 8 HOURS OF STAY | HYDRATES THE SKIN | SUITABLE FOR SENSITIVE SKIN</p>
                        </div>

                        <div className={styles.featuresTag}>
                            <FaRegSmileBeam style={{ marginRight: '8px', fontSize: '1rem' }} />
                            <p>Products from our Care line bring out your inner radiance</p>
                        </div>

                        <div className={styles.icons}>
                            <div>
                                <img src="https://img.icons8.com/ios-filled/50/clock.png" alt="8 Hours" />
                                <span>8 Hours of Stay</span>
                            </div>
                            <div>
                                <img src="https://img.icons8.com/ios-filled/50/water.png" alt="Hydrating" />
                                <span>Hydrates the Skin</span>
                            </div>
                            <div>
                                <img src="https://img.icons8.com/ios-filled/50/feather.png" alt="Lightweight" />
                                <span>Light-weight</span>
                            </div>
                        </div>

                        <div className={styles.description}>
                            <p>
                                Twist, Glide, Blush! If you're a makeup girlie who cannot do without flushed cheeks,
                                our Born to Blush Stick is perfect for you. Buildable coverage, easy to carry!
                            </p>
                        </div>

                        <button className={styles.whatsappBtn}>
                            <FaWhatsapp style={{ marginRight: '8px', fontSize: '20px' }} />
                            Enquire / Book via WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
