import React from 'react'
import styles from './Features.module.css'
import {featuresData as data} from '../../data/featuresData'

const Features = () => {
  return (
    <div className={styles.featuresContainer}>
        <h2 className={styles.heading}>Who is this program for?</h2>
        <div className={styles.featuresInnerContainer}>
        {
            data.map((item, index) => {
                return (
                    <div className={styles.feature} key={index}>
                        <img src={item.icon} alt={item.description} className={styles.icon}/>
                        <p className={styles.featureDescription}>{item.description}</p>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default Features