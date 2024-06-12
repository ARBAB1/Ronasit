"use client";
import React, { useRef, useState, useEffect } from "react";
import StickyCursor from "../../../components/stickyCursor/index";
import styles from "./logoDesign.module.css";
import Header from "../../../components/header/index";
import FirstImage from "./images/first.webp";
import SecontImage from "./images/second.webp";
import ThreeImage from "./images/Three.webp";
import FourImage from "./images/four.webp";
import Image from "next/image";
import Time from "../components/time/Time";
import Estimate from "../components/Estimate/Estimate";
import Gallery from '../components/gallery/gallery'
import Footer from "../../../components/footer/index";
import SecondryFooter from "../../../components/secondaryFooter/index";
import Design from '../components/design/design'
import Portfolio from "../components/portfolio/portfolio";
import Faq from "../components/FAQ/Faq";
import Employee from "../components/Employe/Employee";


import 'animate.css';
import Numbers from "../components/number/Numbers";

// import 'bootstrap/dist/css/bootstrap.min.css';


const LogoDesign = () => {
  const stickyElement = useRef(null);

  return (
    <>
      <Header ref={stickyElement} />
      <StickyCursor stickyElement={stickyElement} />
      <div className={`container  ${styles.container}`}>
        <div className="row">
          <p>Design</p>
          <span className={styles.Heading}>
            <h1>Logo Design Services</h1>
          </span>
          <p>
            We make original minimalistic logos that embrace your company’s
            identity.
          </p>
          <button className={styles.headerButton}>Design my logo</button>
        </div>
        <div className={`grid grid-cols-12 gap-4" ${styles.BoxContainer}`}>
          <span className={styles.boxImage}>
            <Image src={FirstImage} />
          </span>
          <span className={styles.boxImage}>
            <Image src={SecontImage} />
          </span>
          <span className={styles.boxImage}>
            <Image src={ThreeImage} />
          </span>
          <span className={styles.boxImage}>
            <Image src={FourImage} />
          </span>
        </div>
        <div className={`grid grid-cols-12 gap-4" ${styles.abouttheservice}`}>
            <div className="col-span-8 p-4 animate__animated animate__fadeInUp" > 
              <p className={`animate__animated animate__fadeInUp ${styles.abouttheserviceHeading}`} >About The Services</p>
              <h1 className={`animate__animated animate__fadeInUp ${styles.AboutServiceContent}`} >As a versatile IT company, we extend our capabilities beyond technology solutions to also encompass logo design services. We offer a tailored approach to create distinctive and memorable logos that visually echo the key attributes of your brand.</h1>
            </div>
            <div className="col-span-4 p-4">
                <p className={`animate__animated animate__fadeInUp ${styles.AboutServiceContent2}`} >Our expert designers keep versatility at the heart of their craftsmanship, ensuring your logo demonstrates great flexibility across various applications. Utilizing typography that is compatible with multiple formats, we can help you make a powerful visual statement.</p>
            </div>
        </div>
          <Time />
          <Estimate />
          {/* <Gallery /> */}
          <Design />
          <Portfolio />
          <Faq />
      </div>
          <Employee/>
          <Numbers />
           <SecondryFooter />
          <Footer />
    </>
  );
};

export default LogoDesign;
