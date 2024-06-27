'use client'
import React from 'react'
import styles from './Estimate.module.css'
import Image from 'next/image'
import Phone from '../../logoDesign/images/phone.webp'
import { FaDotCircle } from "react-icons/fa";
import 'animate.css';



const Estimate = () => {
  return (
      <div className={`container mt-24`}>
        <div className={`grid grid-cols-12 gap-4 ${styles.subContainer}`}>
         <div className={`col-span-12 ${styles.textContainer}`}>
             <div className={`animate__animated animate__fadeInUp ${styles.txt}`}>
                <FaDotCircle  className={styles.circle} />
                <h1>Logo design services can be selected separately or integrated within our application design.</h1>
             </div>
             <div className={`animate__animated animate__fadeInUp ${styles.txt}`}>
             <FaDotCircle  className={styles.circle} />

                <h1>Logo design services can be selected separately or integrated within our application design.</h1>
             </div>
             <button className={styles.btn}>Estimate logo cost</button>
             
         </div>
         <div className={`col-span-12 ${styles.imgContainer}`}>
          <Image src={Phone} className={styles.img} />
         </div>
        </div>
      </div>
  )
}

export default Estimate