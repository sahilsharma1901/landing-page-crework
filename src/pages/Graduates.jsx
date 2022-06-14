import React, {useEffect} from 'react'
import styles from "./Graduates.module.css"
import {graduatesData as data} from "../data/GraduatesData"
import Navbar from '../sections/Navbar/Navbar'
import Footer from '../sections/Footer/Footer'

const Graduates = () => {

  useEffect(() => {
    window.scrollTo({top: 0})
  }, [])

  return null

  return (
    <>
      <Navbar/>
      <div className={styles.graduatesContainer}>
          <h1 className={styles.heading}>Our Graduates</h1>
          <p className={styles.content}>
            At Crework, we believe that everyone deserves better. Started as a WhatsApp group, today we are known as a place to meet, learn and build with some of the smartest people in tech.
          </p>
          <div className={styles.teamContainer}>
                {data.map((member, index) => {
                  return (
                    <div className={styles.card} key={index}>
                      <img src={member.image} alt={member.name} className={styles.image}/>
                      <div className={styles.infoContainer}>
                        <div className={styles.infoInner}>
                          <h4 className={styles.name}>{member.name}</h4>
                          <h4 className={styles.role}>{member.batch}</h4>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
      </div>
      <Footer/>
    </>
  )
}

export default Graduates