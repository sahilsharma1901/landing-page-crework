import React from 'react'
import styles from './Stats.module.css'
import wave from '../../assets/images/wave.svg'
import {statsData as data} from '../../data/statsData'

const Stats = () => {
  return (
    <div className={styles.statsContainer}>
        <img src={wave} alt="wave" className={styles.wave}/>
        {
          data.map((item, index) => {
            return (
              <div className={styles.stat} key={index}>
                <h1 className={styles.statHead}>{item.heading}</h1>
                <h3 className={styles.statBody}>{item.description}</h3>
              </div>
            );
          })
        }
    </div>
  )
}

export default Stats