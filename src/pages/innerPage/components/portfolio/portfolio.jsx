import React from 'react'
import styles from './port.module.css'
import Image from 'next/image'
import One from '../../logoDesign/images/1.webp'
import Two from '../../logoDesign/images/2.gif'
import Three from '../../logoDesign/images/3.webp'
import Four from '../../logoDesign/images/4.gif'
import Five from '../../logoDesign/images/=5.webp'
import Six from '../../logoDesign/images/6.webp'
import First from '../../logoDesign/images/7.webp'
import Second from '../../logoDesign/images/8.webp'
import Third from '../../logoDesign/images/9.webp'
import 'animate.css';


const portfolio = () => {
  return (
    <div className={`container mt-24 mb-24`}>
        <div className="grid grid-cols-12 gap-4">
            <div className='col-span-12 p-4'>
               <h1 className={styles.heading}>Logo designs, crafted through our logo design services for our esteemed clients:</h1>
            </div>
        </div>
        <div className="grid grid-cols-12 gap-4">
            <div className='col-span-12 lg:col-span-6 p-4'>
                 <div className={styles.imageBox}>
                    <Image src={One} className='animate__animated animate__fadeInUp' />
                 </div>
            </div>
            <div className='col-span-12 lg:col-span-6 p-4'>
            <Image src={Two} className='animate__animated animate__fadeInUp' />
            </div>
        </div>
        <div className="grid grid-cols-12 gap-4">
            <div className='col-span-12 p-4'>
              <Image src={Three} className='animate__animated animate__fadeInUp' />
            </div>
        </div>
        <div className="grid grid-cols-12 gap-4">
            <div className='col-span-12 lg:col-span-4  p-4'>
            <Image src={Four} className='animate__animated animate__fadeInUp'/>
            </div>
            <div className='col-span-12 lg:col-span-4 p-4'>
            <Image src={Five}  className='animate__animated animate__fadeInUp'/>
            </div>
            <div className='col-span-12 lg:col-span-4 p-4'>
            <Image src={Six} className='animate__animated animate__fadeInUp'/>
            </div>
            <div className='col-span-12 lg:col-span-4 p-4'>
            <Image src={First} className='animate__animated animate__fadeInUp'/>
            </div>
            <div className='col-span-12 lg:col-span-4 p-4'>
            <Image src={Second} className='animate__animated animate__fadeInUp'/>
            </div>
            <div className='col-span-12 lg:col-span-4 p-4'>
            <Image src={Third} className='animate__animated animate__fadeInUp'/>
            </div>

          

        </div>
        <div className={`grid grid-cols-12 gap-4 mt-24  ${styles.analysisContainer}`}>
       
            <div className='col-span-3 p-4 animate__animated animate__fadeInUp'>
               <h1 className={styles.NumHeading}>50+</h1>
                <p className={styles.NumPara}>developers in an independent team</p>
            </div>
            <div className='col-span-3 p-4 animate__animated animate__fadeInUp'>
               <h1 className={styles.NumHeading}>17+</h1>
                <p className={styles.NumPara}>years of experience</p>
            </div>
            <div className='col-span-3 p-4 animate__animated animate__fadeInUp'>
               <h1 className={styles.NumHeading}>1500+</h1>
                <p className={styles.NumPara}>projects</p>
            </div>
            <div className='col-span-3 p-4 animate__animated animate__fadeInUp'>
               <h1 className={styles.NumHeading}>60%</h1>
                <p className={styles.NumPara}>repeat customers</p>
            </div>
        </div>
    </div>
  )
}

export default portfolio