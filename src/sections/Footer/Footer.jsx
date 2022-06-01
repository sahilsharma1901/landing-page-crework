import React from 'react'
import styles from './Footer.module.css'
import linkedin from "../../assets/icons/linkedin-footer.png"
import instagram from "../../assets/icons/insta-footer.png"
import twitter from "../../assets/icons/twitter-footer.png"

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
        <div className={styles.innerContainer}>
            <h2 className={styles.footerLogo}>Crework.</h2>
            <ul className={styles.socialLinks}>
                <li className={styles.socialLink}>
                    <img src={twitter} alt="Twitter"/>
                </li>
                <li className={styles.socialLink}>
                    <img src={linkedin} alt="Linkedin"/>
                </li>
                <li className={styles.socialLink}>
                    <img src={instagram} alt="Instagram"/>
                </li>
            </ul>
        </div>
        <p className={styles.footerText}>Copyrights &copy; 2022 Crework. All rights reserved.</p>
    </div>
  )
}

export default Footer