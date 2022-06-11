import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
        <h1 className={styles.logo}>Crework<span className={styles.highlight}>.</span></h1>
        {/* <a href='https://tally.so/r/31AdWp' target="_blank" rel="noreferrer" className={styles.exploreButton}>Apply now</a> */}
    </nav>
  );
}

export default Navbar;