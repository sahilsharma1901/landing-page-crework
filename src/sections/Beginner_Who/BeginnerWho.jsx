import React from 'react'
import styles from './BeginnerWho.module.css'
import {beginnerWho as data} from '../../data/beginnerWhoData'

const WorkReady = () => {
  return (
    <div id="knowMore" className={styles.workReadyContainer}>
        <h2 className={styles.heading}>Who is this <br/> <span className={styles.highlight}>program</span> for</h2>
        <div className={styles.workReadyCards}>
            {data.map((item, index) => {
                return (
                    <div className={styles.workReadyCard} key={index}>
                        <div className={styles.imageContainer}>
                            <img src={item.image} alt={item.description} className={styles.image}/>
                        </div>
                        <h3 className={styles.itemHeading}>{item.heading}</h3>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default WorkReady