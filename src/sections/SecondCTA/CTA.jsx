import React from 'react'
import styles from './CTA.module.css'

const CTA = () => {
  return (
    <div className={styles.CTAContainer}>
        <div className={styles.innerCTA}>
            <h2 className={styles.text}>Aap convince hogye<br/>ya main aur bolun?</h2>
            <a href='https://tally.so/r/3jaQoE' target="_blank" rel="noreferrer" className={styles.exploreButton}>Apply now</a>
        </div>
    </div>
  )
}

export default CTA