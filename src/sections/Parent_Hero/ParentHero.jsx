import React from 'react'
import styles from "./ParentHero.module.css"
import { useNavigate } from 'react-router-dom';


import BWU from "../../assets/images/BWU.png"
import Beginner from "../../assets/images/Beginner.png"

const ParentHero = () => {
    const navigate = useNavigate()
    const handleProgramSelection = (page) => {
        if(page === 'BWU'){
            navigate("/bwu", {replace: true})
        } else if(page === 'Beginner'){
            navigate("/beginners", {replace: true})
        }
    }

  return (
    <div className={styles.heroContainer}>
        <div className={styles.section}>
            <h1 className={styles.primaryText}>Community for the best in tech and product</h1>
            <h2 className={styles.secondaryText}>On a mission to create and enable builders</h2>
            <button className={styles.cta} onClick={handleProgramSelection.bind(null, 'Beginner')}>Join Crework</button>
        </div>
        <div className={styles.programsContainer} id="programs">
            <h2 className={styles.pHeading}>Our Programs</h2>
            <div className={styles.programs}>
                <div className={styles.program}  onClick={handleProgramSelection.bind(null, 'BWU')}>
                    <img src={BWU} alt="BWU Batch"/>
                </div>
                <div className={styles.program} onClick={handleProgramSelection.bind(null, 'Beginner')}>
                    <img src={Beginner} alt="Beginner's Cohort"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ParentHero