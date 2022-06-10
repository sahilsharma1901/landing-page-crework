import React from 'react'
import styles from './Mentors.module.css'
import {mentorsData as data} from "../../data/mentorsData"
import Linkedin from "../../assets/icons/linkedin.png"
import Twitter from "../../assets/icons/twitter.png"

const Mentors = () => {

  return (
    <div className={styles.mentorsContainer}>
        <h2 className={styles.heading}>Get mentored by the best</h2>
        <div className={styles.mentorsInnerContainer}>
            {
                data.map((item, index) => {
                    return (
                        <div className={styles.mentorCard} key={index}>
                            <img src={item.image} alt={item.name} className={`${styles.image} ${styles[item.name.split(" ")[0].toLowerCase()]}`}/>
                            <ul className={styles.socialsList}>
                                <li className={styles.social}>
                                    <a href={item.socials[0]} target="_blank" rel='noreferrer'>
                                        <img src={Twitter} alt="Twitter"/>
                                    </a>
                                </li>
                                <li className={styles.social}>
                                    <a href={item.socials[1]} target="_blank" rel='noreferrer'>
                                        <img src={Linkedin} alt="Linkedin"/>
                                    </a>
                                </li>
                            </ul>
                            <h2 className={styles.name}>{item.name}</h2>
                            <h3 className={styles.designation}>{item.designation}</h3>
                            <h3 className={styles.where}>{item.where}</h3>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Mentors