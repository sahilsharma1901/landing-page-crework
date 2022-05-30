import React from 'react'
import styles from './CTA.module.css'

const CTA = () => {
  return (
    <div className={styles.CTAContainer}>
        <div className={styles.innerCTA}>
            <h2 className={styles.text}>Aap convince hogye<br/>ya main aur bolun?</h2>
            <a href='/' className={styles.exploreButton}>Explore</a>
        </div>
    </div>
  )
}

export default CTA