import React from 'react'
import styles from './About.module.css'
import {teamData as data} from "../data/teamData"
import Twitter from "../assets/icons/twitter-team.png"
import Linkedin from "../assets/icons/linkedin-team.png"

const About = () => {
  return (
    <div className={styles.aboutContainer}>
        <h1 className={styles.heading}>About us</h1>
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
        <div className={styles.contentWrapper}>
          <h3 className={`${styles.subHeading} ${styles.center}`}>Meet the team</h3>
          <div className={styles.teamContainer}>
            {data.map((member, index) => {
              return (
                <div className={styles.card} key={index}>
                  <img src={member.image} alt={member.name} className={styles.image}/>
                  <div className={styles.infoContainer}>
                    <div className={styles.infoInner}>
                      <h4 className={styles.name}>{member.name}</h4>
                      <h4 className={styles.role}>{member.designation}</h4>
                      <p className={styles.socials}>
                        <a href={member.socials[0]} className={styles.link}>
                          <img src={Twitter} alt="Twitter"/>
                        </a>
                        <a href={member.socials[1]} className={styles.link}>
                        <img src={Linkedin} alt="Linkedin"/>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
    </div>
  )
}

export default About