import React from "react";
import styles from "./CTA.module.css";
import tick from "../../assets/icons/charm_square-tick.svg";
import info from "../../assets/icons/info.png";

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
            <div className={styles.pricingReminderContainer}>
              <p className={styles.pricing}>Rs. 12,000</p>
              <div className={styles.scholarshipContainer}>
                <a href="https://bit.ly/bwu3-cta2" target="_blank" rel="noreferrer" className={styles.cta}>
                  Apply Now
                </a>
                <div className={styles.scholarship}>
                  <span>Scholarships available</span> 
                  <img src={info} alt="Info"/> 
                  <div className={styles.infoCard}>
                    <p className={styles.line}>Upto 50% scholarship available.</p>
                    <p className={styles.line}>A limited number of applicants would be selected for scholarship.</p>
                    <p className={styles.line}>Depending on your application and your performance in 1:1 discussion, you will get one of these four tiers:</p>
                    <p>Tier A - 50% Scholarship,</p>
                    <p>Tier B - 40% Scholarship,</p>
                    <p>Tier C - 30% Scholarship,</p>
                    <p>Tier D - 20% Scholarship</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
