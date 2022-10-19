import React from 'react'
import styles from './Companies.module.css'
import {data} from './data';

const Companies = () => {
  return (
    <div>
        <div className={styles.grid} >
            {
                data.map((ele, key) => {
                    return(
                        <div className={styles.box}  key={key} >
                            {/* bg image as ele.image */}
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Companies