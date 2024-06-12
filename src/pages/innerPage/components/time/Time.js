import React from 'react'
import styles from './Time.module.css'
import { MdAccessTime } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { LiaPencilRulerSolid } from "react-icons/lia";


const Time = () => {
  return (
    <div className='container mt-24 mb-24'>
    <div className="grid grid-cols-12 gap-4" >
      <div className={`lg:col-span-4 p-4 ${styles.timebox}`}>
        <span className={styles.timeicon}>
         <MdAccessTime size={42} className={styles.icon} />
          <h1>Time*</h1>
        </span>
         <span className={styles.ulcont}>
            <ul className={styles.ul}>
              <li className='mt-12'>2-5 days</li>
              <li>3 iterations</li>
            </ul>
         </span>
       
      </div>
      <div className={`lg:col-span-4 p-4 ${styles.timebox}`}>
        <span className={styles.timeicon}>
         <GiMoneyStack size={42} className={styles.icon} />
          <h1>Time*</h1>
        </span>
         <span className={styles.ulcont}>
            <ul className={styles.ul}>
              <li className='mt-12'>2-5 days</li>
              <li>3 iterations</li>
            </ul>
         </span>
       
      </div>
      <div className={`lg:col-span-4 p-4 ${styles.timebox}`}>
        <span className={styles.timeicon}>
         <LiaPencilRulerSolid size={42} className={styles.icon} />
          <h1>Time*</h1>
        </span>
         <span className={styles.ulcont}>
            <ul className={styles.ul}>
              <li className='mt-12'>2-5 days</li>
              <li>3 iterations</li>
            </ul>
         </span>
       
      </div>
    </div>
      <p className='mt-2 mb-2'>*The upper limit of terms and costs can vary depending on the type and scope of the project </p>
    </div>
  )
}

export default Time