import React from 'react'
import styles from './Footer.module.css'
import linkedin from "../../assets/icons/linkedin-footer.png"
import instagram from "../../assets/icons/insta-footer.png"
import twitter from "../../assets/icons/twitter-footer.png"
import youtube from "../../assets/icons/youtube-footer.png"
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
        <div className={styles.innerContainer}>
            <h2 className={styles.footerLogo}>Crework<span className={styles.highlight}>.</span></h2>
            <ul className={styles.socialLinks}>
                <li className={styles.socialLink}>
                    <a href="https://twitter.com/CreworkHQ" target="_blank" rel='noreferrer'><img src={twitter} alt="Twitter"/></a>
                </li>
                <li className={styles.socialLink}>
                    <a href="https://www.linkedin.com/company/creworkhq" target="_blank" rel='noreferrer'><img src={linkedin} alt="Linkedin"/></a>
                </li>
                <li className={styles.socialLink}>
                    <a href="https://www.instagram.com/creworkhq" target="_blank" rel='noreferrer'><img src={instagram} alt="Instagram"/></a>
                </li>
                <li className={styles.socialLink}>
                    <a href="https://www.youtube.com/channel/UC6GK-8pkE48BQsv1tSNZslQ" target="_blank" rel='noreferrer'><img src={youtube} alt="Youtube"/></a>
                </li>
            </ul>
        </div>
        <div className={styles.linksContainer}>
            <p className={styles.link}><NavLink to="/about" style={({isActive}) => ({
    color: isActive ? '#ffac2f' : '#fff',
  })}>About</NavLink></p>
            <p className={styles.link}><a href="https://crework.notion.site/Refund-Policy-daf75990c290479d8fe421bfbc9ddc6e" target="_blank" rel="noreferrer">Refund Policy</a></p>
        </div>
        <p className={styles.footerText}>Copyrights &copy; 2022 Crework. All rights reserved.</p>
    </div>
  )
}

export default Footer