import React from "react";
import styles from "./SubCTA.module.css";
import Arrow from "../../assets/icons/right-arrow.png";

const SubCTA = () => {
  return (
    <div className={styles.subCTAContainer}>
      <a
        href="https://crework.notion.site/crework/Beginner-Cohort-c903bdea287d4106829c5014c6868b8a"
        target="_blank"
        rel="noreferrer"
        className={styles.heading}
      >
        <span className={styles.first}>
          Know more about the cohort here
          <img src={Arrow} alt="" />
        </span>
      </a>
    </div>
  );
};

export default SubCTA;
