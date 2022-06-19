import React from 'react'
import styles from './BeginnerFeatures.module.css'
import {beginnerFeaturesData as data} from '../../data/beginnerFeaturesData'

const BeginnerFeatures = () => {
  return (
    <div className={styles.featuresContainer}>
        <h2 className={styles.heading}>What are we offering?</h2>
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

export default BeginnerFeatures