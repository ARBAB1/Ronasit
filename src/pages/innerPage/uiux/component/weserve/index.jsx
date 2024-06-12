import React from 'react'
import styles from './weserve.module.css'
import Image from 'next/image'
import serveImage1 from '../../Images/services-1.webp'
import serveImage2 from '../../Images/services-2.webp'
import serveImage3 from '../../Images/services-3.webp'
import serveImage4 from '../../Images/services-4.webp'

import serveImage5 from '../../Images/services-5.webp'

import serveImage6 from '../../Images/services-6.webp'
import serveImage7 from '../../Images/services-7.webp'

const index = () => {
  return (
    <div className={`container ${styles.container}`}>
        <div className={`grid grid-cols-12 gap-4 ${styles.headContainer}`}>
              <div className={`col-span-6 ${styles.header}`}>
                 <h1>Industries we serve</h1>
                 <p>No matter your sector, we’ll find the most suitable solution within our UI/UX design services. With us, you don't need to pay for separate UX research since we have extensive experience creating apps for different industries and know the patterns of user behavior quite well.</p>
                  <p>Here are some examples of our designs for various industries:</p>
              </div>
        </div>
        <div className={`grid grid-cols-12 gap-4 mt-24 ${styles.headContainer}`}>
              <div className={`col-span-6 ${styles.imageContext}`}>
                 <h1>Industries we serve</h1>
                 <p>No matter your sector, we’ll find the most suitable solution within our UI/UX design services. With us, you don't need to pay for separate UX research since we have extensive experience creating apps for different industries and know the patterns of user behavior quite well.</p>
              </div>
              <div className={`col-span-6 ${styles.image}`}>
                 <Image src={serveImage1}  width={900} height={900} />
              </div>
        </div>
        <div className={`grid grid-cols-12 gap-4 mt-24 ${styles.headContainer}`}>
              <div className={`col-span-6 ${styles.image}`}>
                 <Image src={serveImage1}  />
              </div>
              <div className={`col-span-6 ${styles.imageContext}`}>
                 <h1>Industries we serve</h1>
                 <p>No matter your sector, we’ll find the most suitable solution within our UI/UX design services. With us, you don't need to pay for separate UX research since we have extensive experience creating apps for different industries and know the patterns of user behavior quite well.</p>
              </div>
        </div>
        <div className={`grid grid-cols-12 gap-4 mt-24 ${styles.headContainer}`}>

              <div className={`col-span-6 ${styles.image}`}>
                 <Image src={serveImage3} width={500} height={500}  />
                 <h1>Industries we serve</h1>
                 <p>No matter your sector, we’ll find the most suitable solution within our UI/UX design services. With us, you don't need to pay for separate UX research since we have extensive experience creating apps for different industries and know the patterns of user behavior quite well.</p>
              </div>
              <div className={`col-span-6 ${styles.image}`}>
                 <Image src={serveImage4} width={500} height={500} />
                 <h1>Industries we serve</h1>
                 <p>No matter your sector, we’ll find the most suitable solution within our UI/UX design services. With us, you don't need to pay for separate UX research since we have extensive experience creating apps for different industries and know the patterns of user behavior quite well.</p>
              </div>
              <div className={`col-span-6 ${styles.image}`}>
                 <Image src={serveImage5} width={500} height={500}  />
                 <h1>Industries we serve</h1>
                 <p>No matter your sector, we’ll find the most suitable solution within our UI/UX design services. With us, you don't need to pay for separate UX research since we have extensive experience creating apps for different industries and know the patterns of user behavior quite well.</p>
              </div>
              <div className={`col-span-6 ${styles.image}`}>
                 <Image src={serveImage6} width={500} height={500}  />
                 <h1>Industries we serve</h1>
                 <p>No matter your sector, we’ll find the most suitable solution within our UI/UX design services. With us, you don't need to pay for separate UX research since we have extensive experience creating apps for different industries and know the patterns of user behavior quite well.</p>
              </div>
        </div>
        <div className={`grid grid-cols-12 gap-4 ${styles.headContainer}`}>
              <div className={`col-span-6 ${styles.image}`}>
                 <Image src={serveImage7}  />
              </div>
              <div className={`col-span-6 ${styles.imageContext}`}>
                 <h1>Industries we serve</h1>
                 <p>No matter your sector, we’ll find the most suitable solution within our UI/UX design services. With us, you don't need to pay for separate UX research since we have extensive experience creating apps for different industries and know the patterns of user behavior quite well.</p>
              </div>
        </div>
    </div>
  )
}

export default index