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
          <h1 className={styles.heading}>Thank you!!</h1>
          <p className={styles.content}>
            Thanks a lot for applying to the Crework Web Development Beginner Cohort. Congrats on taking your first step towards becoming a Web Developer!
          </p>
          <div className={styles.contentWrapper}>
            <h3 className={styles.subHeading}>When will it start?</h3>
            <p className={styles.content}>The cohort will start from 16th July 2022 and we will start adding everyone to the Slack workspace gradually from 7th July 2022.</p>
            <br/>
            <p className={styles.content}>Till that happens, we suggest you embrace yourself for this amazing ride of 6 months!!</p>

          </div>
          <div className={styles.contentWrapper}>
            <h3 className={styles.subHeading}>Still have questions?</h3>
            <p className={styles.content}>Got any query, suggestion or anything to say? Feel free to reach out to us at <span><a className={styles.support} href="mailto:support@crework.in">support@crework.in</a></span></p>
            <br/>
            <p className={styles.content}>We look forward to having you in the cohort!</p>
          </div>
      </div>
      <Footer/>
    </>
  )
}

export default Success