import React from 'react';
import styles from './Hero.module.css';

import prevArrow from '../../assets/icons/left-arrow.svg';
import nextArrow from '../../assets/icons/right-arrow.svg';
import DP from '../../assets/images/DP.jpg';

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
        <h1 className={styles.primaryText}>Build your best <br/> project in <span className={styles.highlight}>8 weeks</span></h1>
        <p className={styles.secondaryText}>Ideate, build, network and get mentored <br/> with the best people in tech</p>
        <div className={styles.heroInnerContainer}>
            <div className={styles.CTAContainer}>
                <button className={styles.joinWaitlist}>Join Waitlist</button>
                <button className={styles.knowMore}>Know More</button>
            </div>
            <div className={styles.testimonialsCard}>
                <div className={styles.cardHeader}>
                    <div className={styles.DP}>
                        <img src={DP} alt="DP"/>
                    </div>
                    <h2 className={styles.testimonialHeader}>Chloe Zhoe</h2>
                </div>
                <div className={styles.testimonialContainer}>
                    <p className={styles.testimonialDescription}>Previously employed at top IT Companies, Currently earns 20 LPA . Previously employed at top IT Companies, Currently earns 20 LPA .</p>
                    <div className={styles.navigationButtonsContainer}>
                        <p><img src={prevArrow} alt="previous"/></p>
                        <p><img src={nextArrow} alt="next"/></p>
                    </div>
                </div>
                <div className={styles.progressBar}>
                    <span className={styles.one}></span>
                    <span className={styles.two}></span>
                    <span className={styles.three}></span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Hero;