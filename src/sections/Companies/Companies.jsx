import React from 'react'
import styles from './Companies.module.css'
import {data} from './data';

const Companies = () => {
  return (
    <div>
        <div className={styles.grid} >
            {
                data.map((info, key) => {
                    return(
                        <div key={key} className={styles.imageContainer}>
                            <img src={info.image} alt={"F"}/>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Companies