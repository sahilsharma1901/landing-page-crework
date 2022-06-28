import React, { useEffect } from 'react'
import styles from './Success.module.css'
import Navbar from '../sections/Navbar/Navbar'
import Footer from '../sections/Footer/Footer'

const Success = () => {

  useEffect(() => {
    window.scrollTo({top: 0})
  }, [])
  
  return (
    <>
      <Navbar showAbout={false}/>
      <div className={styles.aboutContainer}>
          <h1 className={styles.heading}>Success!</h1>
          <p className={styles.content}>
          At Crework, we believe that everyone deserves better. Started as a WhatsApp group, today we are known as a place to meet, learn and build with some of the smartest people in tech.
          </p>
          <div className={styles.contentWrapper}>
            <h3 className={styles.subHeading}>How it started?</h3>
            <p className={styles.content}>The idea of Crework was pretty simple. Students want to build projects, but building a project alone has its own limitation. You need people to work with. You need better people, people you can learn with and people who want you to succeed. But, finding a peer group like this is hard.</p>
            <br/>
            <p className={styles.content}>So, we decided to make it easy. That’s how Crework batches were born. The first batch was just a few mentors helping 8 students trying to build Machine Learning projects. We tried it for the first time in 2021 and it worked. It worked, and we knew we have to keep doing this.</p>
          </div>
          <div className={styles.contentWrapper}>
            <h3 className={styles.subHeading}>What happens in Crework?</h3>
            <p className={styles.content}>In Crework, you learn to build products. We have been building an ecosystem where it is easier to ask questions, get personalised guidance from industry mentors and build projects with other people in the community over a fixed period of time.</p>
            <br/>
            <p className={styles.content}>After successful BWU batches, we intend to leverage the community and this ecosystem to replicate the process of learning by building projects in the beginner cohorts too.</p>
          </div>
      </div>
      <Footer/>
    </>
  )
}

export default Success