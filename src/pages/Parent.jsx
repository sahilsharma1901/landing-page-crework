import React from 'react'
import Footer from '../sections/Footer/Footer'
import ParentNavbar from '../sections/ParentNavbar/ParentNavbar'
import ParentHero from '../sections/Parent_Hero/ParentHero'
import styles from "./Parent.module.css"

const Parent = () => {
  return (
    <div className={styles.parentContainer}>
        <ParentNavbar/>
        <ParentHero/>
        <Footer/>
    </div>
  )
}

export default Parent