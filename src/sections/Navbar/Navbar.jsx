import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const navigate = useNavigate()

  const navigateToHome = () => {
    navigate("/", {replace: true})
  }

  return (
    <nav className={styles.navbarContainer}>
        <h1 className={styles.logo} onClick={navigateToHome}>Crework<span className={styles.highlight}>.</span></h1>
        {/* <a href='https://tally.so/r/31AdWp' target="_blank" rel="noreferrer" className={styles.exploreButton}>Apply now</a> */}
    </nav>
  );
}

export default Navbar;