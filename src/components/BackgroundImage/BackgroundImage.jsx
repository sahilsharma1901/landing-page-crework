import React from 'react'
import backgroundImage from '../../assets/images/backgroundCircle.svg';
import styles from './BackgroundImage.module.css';

const BackgroundImage = () => {
  return (
    <img className={styles.bgImage} src={backgroundImage} alt="semi circle"/>
  )
}

export default BackgroundImage