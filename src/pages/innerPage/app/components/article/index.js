import React from "react";
import styles from "./article.module.css";
import Cover from '../../Image/cover.webp'
import Cover2 from '../../Image/cover2.webp'
import Cover1 from '../../Image/cover1.webp'
import Cover3 from '../../Image/cover3.webp'
import Image from "next/image";

const index = () => {
  return (
    <div className={`container ${styles.container}`}>
        <div className={`grid grid-cols-12 gap-4 ${styles.subContainer}`}>
            <div className={`col-span-6`}>
                <Image src={Cover} />
                  <h6 className={styles.how}>how to</h6>
                  <h1 className={styles.Head}>How do we arrange the UI/UX design process to speed up the mobile app development and save the resources of our customers?</h1>
                  <p className={styles.para}>2023-03-07 • 8 min read</p>
            </div>
            <div className={`col-span-6`}>
                <Image src={Cover1} />
                  <h6 className={styles.how}>how to</h6>
                  <h1 className={styles.Head}>How do we arrange the UI/UX design process to speed up the mobile app development and save the resources of our customers?</h1>
                  <p className={styles.para}>2023-03-07 • 8 min read</p>
            </div>
            <div className={`col-span-6`}>
                <Image src={Cover2} />
                  <h6 className={styles.how}>how to</h6>
                  <h1 className={styles.Head}>How do we arrange the UI/UX design process to speed up the mobile app development and save the resources of our customers?</h1>
                  <p className={styles.para}>2023-03-07 • 8 min read</p>
            </div>
            <div className={`col-span-6`}>
                <Image src={Cover3} />
                  <h6 className={styles.how}>how to</h6>
                  <h1 className={styles.Head}>How do we arrange the UI/UX design process to speed up the mobile app development and save the resources of our customers?</h1>
                  <p className={styles.para}>2023-03-07 • 8 min read</p>
            </div>
        </div>
    </div>
  );
};

export default index;
