import React from 'react'
import styles from './BeginnerCTA.module.css'

const BeginnerCTA = () => {
  return (
    <div className={styles.CTAContainer}>
        <div className={styles.innerCTA}>
            <h2 className={styles.text}>Aap convince hogye<br/>ya main aur bolun?</h2>
            <div className={styles.container}>
              <h6 className={styles.preText}>At just &#8377; 1999</h6>
              <a href='https://pages.razorpay.com/beginner-cohort-1' target="_blank" rel="noreferrer" className={styles.exploreButton}>Apply now</a>
            </div>
        </div>
    </div>
  )
}

export default BeginnerCTA