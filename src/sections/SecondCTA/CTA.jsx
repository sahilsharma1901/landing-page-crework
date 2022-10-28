import React from "react";
import styles from "./CTA.module.css";
import tick from "../../assets/icons/charm_square-tick.svg";

const CTA = () => {
  return (
    <div className={styles.CTAContainer}>
      <div className={styles.innerCTA}>
        <h2 className={styles.heading}>Fee Structure</h2>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <h3 className={styles.subHeading}>Perks of Crework</h3>
            <ul className={styles.listParentContainer}>
              <li className={styles.listContainer}>
                <img src={tick} alt="tick" className={styles.tick} />
                <span className={styles.listItem}>
                  Learn how to build a product end to end from scratch
                </span>
              </li>
              <li className={styles.listContainer}>
                <img src={tick} alt="tick" className={styles.tick} />
                <span className={styles.listItem}>
                  Personalised mentorship and guidance from industry experts
                </span>
              </li>
              <li className={styles.listContainer}>
                <img src={tick} alt="tick" className={styles.tick} />
                <span className={styles.listItem}>
                  The best peer group to work with and learn from
                </span>
              </li>
              <li className={styles.listContainer}>
                <img src={tick} alt="tick" className={styles.tick} />
                <span className={styles.listItem}>
                  Friends beyond the cohort and projects, for lifetime.
                </span>
              </li>
            </ul>
          </div>
          <div className={`${styles.card} ${styles.applicationOpenContainer}`}>
            <div>
              <h3 className={styles.subHeading}>Applications Open</h3>
              <p className={styles.paragraph}>
                Currently accepting applications for BWU Web Development Batch 3
              </p>
              <p className={styles.paragraph}>
                We sort and select students manually so take your sweet time to fill the application
                :&#41;
              </p>
            </div>
            <p>
              <span className={styles.pricing}>Rs. 12,000</span>
              <a href="https://github.com" target="_blank" rel="noreferrer" className={styles.cta}>
                Apply Now
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
