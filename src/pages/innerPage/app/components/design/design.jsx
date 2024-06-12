import React from 'react'
import styles from './design.module.css'
import 'animate.css';
import { FaPlus } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import { FaMoneyBills } from "react-icons/fa6";





const design = () => {
  return (
    <>
      <div className={`container ${styles.container}`}>
          <div className={`grid grid-cols-12 gap-4 ${styles.secondContainer}`}>
              <div className={`col-span-6 ${styles.stickyside}`}>
                <h1 className='animate__animated animate__fadeInUp'>
                How do we provide mobile app design services?
                </h1>
              </div>
              <div className={`col-span-6 ${styles.slider}`}>
                  <div className={`animate__animated animate__fadeInUp ${styles.content}`} >
                      <h1>1</h1>
                      <h3>Collect information about the company, project requirements, and desired timeline.</h3>
                  </div>
                  <div className={`animate__animated animate__fadeInUp ${styles.content}`}>
                      <h1>2</h1>
                      <h3>Develop 2–3 screens, a few UI elements, or a clickable prototype to define the visual style.</h3>
                  </div>
                  <div className={`animate__animated animate__fadeInUp ${styles.content}`}>
                      <h1>3</h1>
                      <h3>Create detailed mockups that are optimized to devices and in line with iOS or Android guidelines.</h3>
                  </div>
                  <div className={`animate__animated animate__fadeInUp ${styles.content}`}>
                      <h1>4</h1>
                      <h3>Discuss the final design with the client and make necessary adjustments.
                      </h3>
                  </div>
                  {/* <div className={`animate__animated animate__fadeInUp ${styles.content}`}>
                      <h1>5</h1>
                      <h3>In-depth research</h3>
                      <p>At the outset, we conduct a detailed study to comprehend your business goals, target audience, and style preferences. Additionally, we delve into current industry trends and strategies for a well-rounded understanding.</p>
                        <button>Discover other Ronas IT services</button>
                  </div>
                  <div className={`animate__animated animate__fadeInUp ${styles.content}`}>
                      <h1><FaPlus /></h1>
                      <h3>In-depth research</h3>
                      <p>At the outset, we conduct a detailed study to comprehend your business goals, target audience, and style preferences. Additionally, we delve into current industry trends and strategies for a well-rounded understanding.</p>
                        <button>Discover other Ronas IT services</button>
                  </div>
                  <div className={`animate__animated animate__fadeInUp ${styles.content}`}>
                      <h1><FaPlus /></h1>
                      <h3>In-depth research</h3>
                      <p>At the outset, we conduct a detailed study to comprehend your business goals, target audience, and style preferences. Additionally, we delve into current industry trends and strategies for a well-rounded understanding.</p>
                        <button>Discover other Ronas IT services</button>
                  </div> */}
              </div>
          </div>
      </div>
       
       <div className={`container ${styles.container}`}>
          <div className={`grid grid-cols-12 gap-4 ${styles.SubContainer}`}> 
                <div className={`col-span-6 ${styles.boxCont}`}>
                     <h1>Cost*</h1>

                     <div className={styles.box}>
                         <CiClock2  className={styles.clock} />
                         <h1 className={styles.clockText}>Mobile app design services hourly rate</h1>
                         <h2>$50<p>per hour</p></h2>
                     </div>
                </div>
            
                <div className={`col-span-6 ${styles.boxCont}`}>
                     <p>* The upper limit of costs and timeline may vary depending on the complexity of the visuals.</p>
                     <div className={styles.box2}>
                         <FaMoneyBills   className={styles.clock} />
                         <h1 className={styles.clockText}>Mobile app design services hourly rate</h1>
                         <h2>$5000</h2>
                     </div>
                </div>
          </div>
       </div>
    </>

  )
}

export default design