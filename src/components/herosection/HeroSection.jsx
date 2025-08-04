import React from 'react';
import styles from './herosection.module.css';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from "react-router-dom";

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
        <Link to="/all-products">
          <button className={styles.heroSection_button}>
            Explore Mrittika <span className={styles.arrowIcon}><BsArrowRight /></span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
