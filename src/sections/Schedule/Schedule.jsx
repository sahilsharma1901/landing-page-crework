import React from 'react'
import styles from './Schedule.module.css'
import {headingData, contentData, sessionData} from "../../data/scheduleData"

const Schedule = () => {
  return (
    <div className={styles.scheduleContainer}>
        <h2 className={styles.heading}>How we do things?</h2>
        <h4 className={styles.subHeading}>Curriculum &amp; Sessions</h4>
        <div className={styles.scheduleInnerContainer}>
            <div className={styles.scheduleInnerSubContainer}>
              {headingData.map((heading, index1) => {
                return (
                  <div className={styles.header} key={index1}>{heading.head}</div>
                )
              })}
            </div>
            <div className={styles.scheduleInnerSubContainer}>
              {contentData.map((content, index2) => {
                return (
                  <div className={styles.content} key={index2}>
                    <p className={styles.contentHead}>{content.heading}</p>
                    <ul className={styles.contentBody}>
                      {content.content.map((text, index3) => {
                        return (
                          <li className={styles.contentBodyText} key={index3}>{text}</li>
                        )
                      })}
                    </ul>
                  </div>
                )
              })}
            </div>
            <div className={styles.scheduleInnerSubContainer}>
              {sessionData.map((session, index4) => {
                return (
                  <div className={styles.session} key={index4}>
                    {session.content.map((content, index5) => {
                      return (
                        <div className={styles.sessionInner} key={index5}>
                          <div className={styles.headWrapper}>
                            <p className={styles.s_head}>{content.title}</p>
                            <p className={styles.s_side}><span>{content.date}</span>, <span>{content.day}</span></p>
                          </div>
                          <p className={styles.s_by}>by <strong>{content.by}</strong></p>
                        </div>
                      )
                    })}
                  </div>
                )
              })}
            </div>
        </div>
    </div>
  )
}

export default Schedule