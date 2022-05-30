import React from 'react'
import styles from './CrewsWork.module.css'
import {crewsWorkData as data} from '../../data/crewsWork'

const CrewsWork = () => {
  return (
    <div className={styles.crewsWorkContainer}>
        <h2 className={styles.heading}>Crew's Work</h2>
        <h4 className={styles.subHeading}>Projects of the graduates</h4>
        <div className={styles.projectCards}>
            {data.map((item, index) => {
                return (
                    <div className={styles.projectCard} key={index}>
                        <div className={styles.imageContainer}>
                            <img src={item.image} alt={item.description} className={styles.image}/>
                        </div>
                        <div className={styles.infoContainer}>
                            <h3 className={styles.itemHeading}>{item.heading}</h3>
                            <p className={styles.itemDescription}>{item.description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default CrewsWork