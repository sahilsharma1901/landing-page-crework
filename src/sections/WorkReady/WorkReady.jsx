import React from 'react'
import styles from './WorkReady.module.css'
import {WorkReadyData as data} from '../../data/workReady'

const WorkReady = () => {
  return (
    <div id="knowMore" className={styles.workReadyContainer}>
        <h2 className={styles.heading}>Be work ready from<br/>Day 1 with <span className={styles.highlight}>Crework</span></h2>
        <div className={styles.workReadyCards}>
            {data.map((item, index) => {
                return (
                    <div className={styles.workReadyCard} key={index}>
                        <div className={styles.imageContainer}>
                            <img src={item.image} alt={item.description} className={styles.image}/>
                        </div>
                        <h3 className={styles.itemHeading}>{item.heading}</h3>
                        <p className={styles.itemDescription}>{item.description}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default WorkReady