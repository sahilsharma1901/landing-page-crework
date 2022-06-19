import React from 'react';
import styles from './Hero.module.css';

const BeginnerHero = () => {      

  return (
    <div className={styles.heroContainer}>
        <div className={styles.section}>
            <h1 className={styles.primaryText}>Become a <br/> Web <span className={styles.funky}>Developer</span> <br/> in <span className={styles.highlight}>6 months</span></h1>
            <p className={styles.secondaryText}>Learn with peers and get guided by industry experts</p>
            <div className={styles.CTAContainer}>
                <a href="https://pages.razorpay.com/beginner-cohort-1" target="_blank" rel="noreferrer" className={styles.joinWaitlist}>Join Crework</a>
            </div>
        </div>
    </div>
  );
}

export default BeginnerHero;