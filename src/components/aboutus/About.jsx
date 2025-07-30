import React from "react";
import styles from "./about.module.css";
import aboutImg from "../../assets/about-visual.jpg"; // Replace with actual image path

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.textSection}>
          <h2 className={styles.heading}>About Us</h2>
          <p className={styles.subtitle}>Rooted in Nature, Nurtured with Care</p>

          <p className={styles.description}>
            At Mrittika Naturals, we believe that nature holds the answers to true well-being. Inspired by the rich traditions of Indian healing and the wisdom of sustainable living, our journey began with a simple mission to bring you the purest forms of nature, untouched by harmful chemicals or synthetic shortcuts.
          </p>
          <div className={styles.divider}></div>

          <div className={styles.highlightedSection}>
            <p>
              We’re not just creating products — we’re building a <span className={styles.highlight}>community</span> that values purity simplicity, and <span className={styles.highlight}>harmony with nature</span>.
            </p>
            <p className={styles.tagline}>
              Welcome to the world of <span className={styles.brandName}>Mrittika</span> — where the <span className={styles.brandName}>earth heals</span>.
            </p>
          </div>

        </div>

        <div className={styles.imageSection}>
          <img src={aboutImg} alt="About Mrittika Naturals" className={styles.image} />
        </div>
      </div>
    </section>
  );
};

export default About;
