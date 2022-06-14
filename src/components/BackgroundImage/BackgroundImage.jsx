import React, { useState, useEffect } from 'react'
import backgroundImage from '../../assets/images/backgroundCircle.svg';
import styles from './BackgroundImage.module.css';
import { useLocation } from "react-router-dom"

const BackgroundImage = () => {
  const location = useLocation()
  const [currentURL, setCurrentURL] = useState('/')

  useEffect(() => {
    setCurrentURL(location.pathname)
  }, [location])

  return <img className={`${styles.bgImage} ${currentURL === '/' ? '' : styles.hidden}`} src={backgroundImage} alt="semi circle"/>
}

export default BackgroundImage