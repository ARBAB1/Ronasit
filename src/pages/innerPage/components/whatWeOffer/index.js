import React from "react";
import styles from "./offer.module.css";
import { FaMobileScreen } from "react-icons/fa6";


const index = () => {
  return (
    <>
    <div className={`container ${styles.container}`}>
      <div className={`grid grid-cols-12 gap-4 ${styles.secondContainer}`}>
        <div className={`col-span-9 ${styles.headingContent}`}>
          <h1 className="animate__animated animate__fadeInUp">What we offer</h1>
          <p>We are dedicated to crafting user interfaces that not only serve functional purposes but also significantly improve the overall user experience. Our interfaces are designed to be adaptable across various devices, from iOS and Android mobile platforms to desktop screens.</p>
        </div>
      </div>
      <div className={`grid grid-cols-12 gap-4 mt-12 ${styles.secondContainer}`}>
           <div className={`col-span-6 ${styles.MobileServices}`}>
                <div className={styles.icondiv}>
                    <FaMobileScreen className={styles.icon} />
                </div>
                <h1>Mobile app design services</h1>
                <p>We adhere to the guidelines for designing on iOS and Android platforms, ensuring that customers experience a native app feel, regardless of whether you opt for cross-platform or native development.</p>
           </div>
           <div className={`col-span-6 ${styles.MobileServices}`}>
                <div className={styles.icondiv}>
                    <FaMobileScreen className={styles.icon} />
                </div>
                <h1>Mobile app design services</h1>
                <p>We adhere to the guidelines for designing on iOS and Android platforms, ensuring that customers experience a native app feel, regardless of whether you opt for cross-platform or native development.</p>
           </div>
           <div className={`col-span-6 ${styles.MobileServices}`}>
                <div className={styles.icondiv}>
                    <FaMobileScreen className={styles.icon} />
                </div>
                <h1>Mobile app design services</h1>
                <p>We adhere to the guidelines for designing on iOS and Android platforms, ensuring that customers experience a native app feel, regardless of whether you opt for cross-platform or native development.</p>
           </div>
           <div className={`col-span-6 ${styles.MobileServices}`}>
                <div className={styles.icondiv}>
                    <FaMobileScreen className={styles.icon} />
                </div>
                <h1>Mobile app design services</h1>
                <p>We adhere to the guidelines for designing on iOS and Android platforms, ensuring that customers experience a native app feel, regardless of whether you opt for cross-platform or native development.</p>
           </div>
      </div>
    </div>
    <div className={`container ${styles.container}`}>
    <div className={`grid grid-cols-12 gap-4 ${styles.CostContainer}`}>
      <div className={`col-span-6 ${styles.headingContent}`}>
           <h1>Costs</h1>
           <p>Please note that the final cost depends on the complexity of the design.</p>
           <button className={styles.costbtn}> Request estimation</button>
           
      </div>
      <div className={`col-span-6 ${styles.headingContent}`}>
          <div>
             <p>Hourly rate</p>
             <h1>$50 per hour</h1>
          </div>
          <div>
             <p>Average project cost</p>
             <h1>$5,000 - $10,000</h1>
          </div>
      </div>
    </div>
   
  </div>
  </>
  );
};

export default index;
