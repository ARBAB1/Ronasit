import React from "react";
import styles from "./count.module.css";

const index = () => {
  return (
    <div className={`container ${styles.container}`}>
      <div className={`grid grid-cols-12 gap-4 ${styles.subContainer}`}>
        <div className={`col-span-3 ${styles.Commonds}`}>
          <h1 className={`animate__animated animate__fadeInUp`}>50+</h1>
          <p>developers in an independent team</p>
        </div>
        <div className={`col-span-3 ${styles.Commonds}`}>
          <h1 className={`animate__animated animate__fadeInUp`}>17+</h1>
          <p>years of experience</p>
        </div>
        <div className={`col-span-3 ${styles.Commonds}`}>
          <h1 className={`animate__animated animate__fadeInUp`}>1,500+</h1>
          <p>projects</p>
        </div>
        <div className={`col-span-3 ${styles.Commonds}`}>
          <h1 className={`animate__animated animate__fadeInUp`}>60%</h1>
          <p>repeat customers</p>
        </div>
      </div>
    </div>
  );
};

export default index;
