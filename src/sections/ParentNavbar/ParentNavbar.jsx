import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ParentNavbar.module.css';

const ParentNavbar = () => {
  const navigate = useNavigate()

  const navigateToHome = () => {
    navigate("/", {replace: true})
  }

  return (
    <nav className={styles.navbarContainer}>
        <h1 className={styles.logo} onClick={navigateToHome}>Crework<span className={styles.highlight}>.</span></h1>
        <div className={styles.container}>
            <a href='#programs' className={styles.programs}>Programs</a>
            <a href='/about' className={styles.about}>About</a>
        </div>
    </nav>
  );
}

export default ParentNavbar;