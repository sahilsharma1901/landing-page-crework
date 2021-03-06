import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = ({showAbout}) => {
  const navigate = useNavigate()

  const navigateToHome = () => {
    navigate("/", {replace: true})
  }

  return (
    <nav className={styles.navbarContainer}>
        <h1 className={styles.logo} onClick={navigateToHome}>Crework<span className={styles.highlight}>.</span></h1>
        <a href='https://crework.notion.site/crework/Beginner-Cohort-c903bdea287d4106829c5014c6868b8a' target="_blank" rel="noreferrer" className={`${styles.exploreButton} ${showAbout ? '' : styles.hide}`}>Know more</a>
    </nav>
  );
}

export default Navbar;