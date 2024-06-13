import React from 'react'
import styles from './port.module.css'
import Image from 'next/image'
import Sample1 from '../../Images/sample-1.webp'
import Sample2 from '../../Images/sample-2.webp'
import Sample3 from '../../Images/sample-3.webp'
import Sample4 from '../../Images/sample-4.webp'
import Sample5 from '../../Images/sample-5.webp'
import Sample6 from '../../Images/sample-6.webp'


const index = () => {
  return (
    <div className={`container ${styles.container}`}>
        <div className={`grid grid-cols-12 gap-4 ${styles.subcontainer}`}>
             <div className={`col-span-12 ${styles.header}`}>
                  <h1>Portfolio</h1>
                  <p>And we can do much more. Check our Dribbble account to find out more about what our UI design services can offer.</p>
             </div>
        </div>
        <div className={`grid grid-cols-12 gap-4 mt-24 ${styles.subcontainer}`}>
               <div className={`col-span-6 ${styles.image}`}>
                    <Image src={Sample1}/>
               </div>
               <div className={`col-span-6 ${styles.image}`}>
                    <Image src={Sample2}/>
               </div>
               <div className={`col-span-6 ${styles.image}`}>
                    <Image src={Sample3}/>
               </div>
               <div className={`col-span-6 ${styles.image}`}>
                    <Image src={Sample4}/>
               </div>
               <div className={`col-span-6 ${styles.image}`}>
                    <Image src={Sample5}/>
               </div>
               <div className={`col-span-6 ${styles.image}`}>
                    <Image src={Sample6}/>
               </div>
        </div>
        <div className={`grid grid-cols-12 gap-4 mt-24 ${styles.btnCont}`}>
             <div className={`col-span-12 ${styles.headerbtn}`}>
                  <button>More Shots on Dribble</button>
             </div>
        </div>
    </div>
  )
}

export default index