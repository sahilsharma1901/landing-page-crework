import React from 'react'
import styles from './Schedule.module.css'

const Schedule = () => {
  return (
    <div className={styles.scheduleContainer}>
        <h2 className={styles.heading}>How we do things?</h2>
        <h4 className={styles.subHeading}>Weekly Structure</h4>
        <div className={styles.scheduleInnerContainer}>
            <div className={styles.header}>Week 1</div>
            <div className={styles.header}>Week 2</div>
            <div className={styles.header}>Week 3</div>
            <div className={styles.header}>Week 4</div>
            <div className={styles.header}>Week 5</div>
            <div className={styles.header}>Week 6</div>
            <div className={styles.header}>Week 7</div>
            <div className={styles.header}>Week 8</div>
            <div className={styles.content}>Boot camp</div>
            <div className={styles.content}>Week two ka content</div>
            <div className={styles.content}>Week three ka content Week one ka contentWeek one ka contentWeek one ka contentWeek one ka content</div>
            <div className={styles.content}>Week four ka content</div>
            <div className={styles.content}>Week five ka content</div>
            <div className={styles.content}>Week six ka content</div>
            <div className={styles.content}>Week seven ka content</div>
            <div className={styles.content}>Week eight ka content</div>
            <div className={styles.session}>Session 1 with more more sessions and more more sessions</div>
            <div className={styles.session}>Session 2</div>
            <div className={styles.session}>Session 3</div>
            <div className={styles.session}>Session 4</div>
            <div className={styles.session}>Session 5</div>
            <div className={styles.session}>Session 6</div>
            <div className={styles.session}>Session 7</div>
            <div className={styles.session}>Session 8</div>
        </div>
    </div>
  )
}

export default Schedule