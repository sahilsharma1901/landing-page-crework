import React, { useState } from 'react'
import backgroundImage from '../../assets/images/backgroundCircle.svg';
import styles from './BackgroundImage.module.css';
import { useLocation } from "react-router-dom"

const BackgroundImage = () => {
  const [currentURL, _] = useState(useLocation().pathname)

  return <img className={`${styles.bgImage} ${currentURL === '/' ? '' : styles.hidden}`} src={backgroundImage} alt="semi circle"/>
}

export default BackgroundImage