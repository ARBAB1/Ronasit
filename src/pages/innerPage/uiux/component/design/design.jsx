import React from 'react'
import styles from './design.module.css'
import 'animate.css';
import { FaPlus } from "react-icons/fa6";



const design = () => {
  return (
    <>
      <div className={`container ${styles.container}`}>
          <div className={`grid grid-cols-12 gap-4 ${styles.secondContainer}`}>
              <div className={`col-span-6 ${styles.stickyside}`}>
                <h1 className='animate__animated animate__fadeInUp'>
                Our UI/UX design process
                </h1>
              </div>
              <div className={`col-span-6 ${styles.slider}`}>
                  <div className={`animate__animated animate__fadeInUp ${styles.content}`} >
                      <h1>1</h1>
                      <h3>In-depth research</h3>
                      <p>At the outset, we conduct a detailed study to comprehend your business goals, target audience, and style preferences. Additionally, we delve into current industry trends and strategies for a well-rounded understanding.</p>
                  </div>
                  <div className={`animate__animated animate__fadeInUp ${styles.content}`}>
                      <h1>2</h1>
                      <h3>In-depth research</h3>
                      <p>At the outset, we conduct a detailed study to comprehend your business goals, target audience, and style preferences. Additionally, we delve into current industry trends and strategies for a well-rounded understanding.</p>
                  </div>
                  <div className={`animate__animated animate__fadeInUp ${styles.content}`}>
                      <h1>3</h1>
                      <h3>In-depth research</h3>
                      <p>At the outset, we conduct a detailed study to comprehend your business goals, target audience, and style preferences. Additionally, we delve into current industry trends and strategies for a well-rounded understanding.</p>
                  </div>
                  <div className={`animate__animated animate__fadeInUp ${styles.content}`}>
                      <h1>4</h1>
                      <h3>In-depth research</h3>
                      <p>At the outset, we conduct a detailed study to comprehend your business goals, target audience, and style preferences. Additionally, we delve into current industry trends and strategies for a well-rounded understanding.</p>
                  </div>
                  <div className={`animate__animated animate__fadeInUp ${styles.content}`}>
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
                  </div>
              </div>
          </div>
      </div>
       
       <div className={`container ${styles.container}`}>
          <div className={`grid grid-cols-12 gap-4 ${styles.SubContainer}`}>
                <div className={`col-span-6 ${styles.boxCont}`}>
                     <h1>If you’re interested in continuous end-to-end development of your application, from design to deployment, just wink at us.</h1>
                     <button>Get in touch</button>
                </div>
          </div>
       </div>
    </>

  )
}

export default design