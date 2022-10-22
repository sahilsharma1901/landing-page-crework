import React from 'react'
import styles from './Companies.module.css'
import companies from '../../assets/images/companies.png';

const Companies = () => {
  return (
    <div>
        <h2 className={styles.heading}>Our graduates work at</h2>
        <div className={styles.imagesContainer} >
            <img src={companies} alt="Companies"/>
        </div>
    </div>
  )
}

export default Companies