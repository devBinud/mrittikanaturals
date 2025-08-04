import React from 'react';
import styles from './herosection.module.css';
import { BsArrowRight } from 'react-icons/bs';

const HeroSection = () => {
  return (
    <section className={styles.heroSection_wrapper}>
      <div className={styles.heroSection_content}>
        <h1 className={styles.heroSection_heading}>
          Welcome to <span className={styles.heroSection_gradientText}>Mrittika Naturals</span>
        </h1>
        <h2 className={styles.heroSection_tagline}>
          Rooted in tradition, nurtured by nature.
        </h2>
        <p className={styles.heroSection_paragraph}>
          At Mrittika Naturals, we bring you clean, honest, and earth-friendly products
          made from the purest ingredients — responsibly grown, gently processed, and thoughtfully crafted.
          From our farm to your home, every step honors nature’s wisdom and your well-being.
        </p>
        <button className={styles.heroSection_button}>
          Explore Mrittika Products <span className={styles.arrowIcon}><BsArrowRight /></span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
