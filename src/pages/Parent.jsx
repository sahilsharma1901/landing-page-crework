import React, {useEffect} from 'react'
import Footer from '../sections/Footer/Footer'
import ParentNavbar from '../sections/ParentNavbar/ParentNavbar'
import ParentHero from '../sections/Parent_Hero/ParentHero'
import styles from "./Parent.module.css"

const Parent = () => {
  useEffect(() => {
    window.scrollTo({top: 0})
  }, [])
  return (
    <div className={styles.parentContainer}>
        <ParentNavbar/>
        <ParentHero/>
        <Footer/>
    </div>
  )
}

export default Parent