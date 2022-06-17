import React, { useState } from 'react'
import styles from './BeginnerSchedule.module.css'

let monthData = {
  "Month 1": {
    content: [
      "HTML: Doctype, Tags, Forms, Tables, Graphics, Media, Charset Symbols and Emojis",
      "CSS: Box model, Fonts, Colours",
      "CSS:  Layout, Positioning, flexbox, Grid, Selectors, Pseudo Classes",
      "CSS: Animations & Transformations Responsiveness, DOM, Accessibility & SEO",
      "JS: Basics, Events, Alerts",
      "Project 1"
    ]
  },
  "Month 2": {
    content: [
      "JS: Object-Oriented Programming, Functions, Loops, Variables, this",
      "JS: Arrow Functions, Event Loop, Generators, Array, Recursion, String Manipulation",
      "JS: Async, Await, Fetch, Buffer, Blob",
      "JS: Cookies, Local Storage, Indexed DB, DevTools, Lighthouse",
      "Project 2"
    ]
  },
  "Month 3": {
    content: [
      "React: Introduction, JSX, Components & Props",
      "React: State, lifecycle, Events, Class components introduction, Functional components",
      "React: Conditional rendering, Lists and Keys",
      "React: Lifting states, Error boundaries, Refs PropTypes, Router + Query",
      "Project 3"
    ]
  },
  "Month 4": {
   content: [
      "React: Redux State Management",
      "React: Advance hooks, ngrok",
      "Project 4"
    ]
  },
  "Month 5": {
    content: [
      "NodeJS Basics",
      "File handling, Event Loop, Async Flows",
      "Express, Design System, Middleware, Roles & Permissions",
      "MongoDB mongoose, Authentication, CRUD APIs",
      "Postman testing",
      "Sockets",
      "Project 5"
    ]
  },
  "Month 6": {
    content: [
      "Final Project/ Hackathon",
    ]
  },
}

const BeginnerSchedule = () => {
  const [schedule, _] = useState(monthData)
  const [activeMonth, setActiveMonth] = useState(4)

  const handleMonthChange = (monthIdx) => {
    setActiveMonth(monthIdx + 1)
  }

  return (
    <div className={styles.scheduleContainer}>
        <h2 className={styles.heading}>How we do things?</h2>
        <h4 className={styles.subHeading}>Curriculum &amp; Sessions</h4>
        <div className={styles.scheduleInnerContainer}>
          <div className={styles.header}>
            {Object.keys(monthData).map((month, index) => {
              return (
                <div className={styles.month} key={index}>
                  <input type="radio" className={activeMonth === index + 1 ? `${styles.active}` : ''} name="month" id={month.toLowerCase()} value={month.split(" ")[1]} checked={activeMonth === index + 1} onChange={handleMonthChange.bind(null, index)}/>
                  <label htmlFor={month.toLowerCase()}>{month}</label>
                </div>
              )
            })}
          </div>
          <div className={styles.main}>
            {schedule[`Month ${activeMonth}`].content.map((content, index) => {
              return <p key={index}>{content}</p>
            })}
          </div>
        </div>
    </div>
  )
}

export default BeginnerSchedule