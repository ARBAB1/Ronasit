import React from 'react'
import styles from './product.module.css'
import { FaRegFaceSmile } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";



const index = () => {
  return (
    <div className={`container ${styles.container}`}>
        <div className={`grid grid-cols-12 gap-4 ${styles.row}`}>
             <div className='col-span-12'>
                <h1 className={styles.heading}>We will build a UI for you if you want to get:</h1>
             </div>
        </div>
         <div className={`grid grid-cols-12 gap-4 ${styles.row}`}>
                <div className={`col-span-4 ${styles.boxes}`}>
                       <div className={styles.iconbox}>
                           <FaRegFaceSmile className={styles.smile} />
                       </div>
                        <h1 className={styles.smileheading}>A product that addresses the customers’ needs</h1>
                        <p className={styles.para}>Making application screens attractive and user-friendly is a way of encouraging them to use your services more often. As a part of our mobile app design services, we build eye-catching interfaces with easy-to-use layouts and navigation because the lifetime of end-users is our priority.</p>
                </div>
                <div className={`col-span-4 ${styles.boxes}`}>
                       <div className={styles.iconbox}>
                           <FaCode className={styles.smile} />
                       </div>
                        <h1 className={styles.smileheading}>A product that addresses the customers’ needs</h1>
                        <p className={styles.para}>Making application screens attractive and user-friendly is a way of encouraging them to use your services more often. As a part of our mobile app design services, we build eye-catching interfaces with easy-to-use layouts and navigation because the lifetime of end-users is our priority.</p>
                </div>
                <div className={`col-span-4 ${styles.boxes}`}>
                       <div className={styles.iconbox}>
                           <FaRegFaceSmile className={styles.smile} />
                       </div>
                        <h1 className={styles.smileheading}>A product that addresses the customers’ needs</h1>
                        <p className={styles.para}>Making application screens attractive and user-friendly is a way of encouraging them to use your services more often. As a part of our mobile app design services, we build eye-catching interfaces with easy-to-use layouts and navigation because the lifetime of end-users is our priority.</p>
                </div>
         </div>
    </div>
  )
}

export default index