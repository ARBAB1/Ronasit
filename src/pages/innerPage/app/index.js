"use client";
import React, { useRef, useState, useEffect } from "react";
import StickyCursor from "../../../components/stickyCursor/index";
import styles from "./app.module.css";
import Header from "../../../components/header/index";
// import Concept1 from './Images/concept-1.webp'
// import Concept2 from './Images/concept-2.webp'
import Image from "next/image";
import OFFER from "../components/whatWeOffer/index";
import Time from "../components/time/Time";
import Estimate from "../components/Estimate/Estimate";
import Gallery from "../components/gallery/gallery";
import Footer from "../../../components/footer/index";
import SecondryFooter from "../../../components/secondaryFooter/index";
import Design from "./components/design/design";
import Faq from "./components/FAQ/Faq";

import "animate.css";
import Numbers from "../components/number/Numbers";
import Count from "./components/count";
import WeServe from "../uiux/component/weserve";
import Portfolio from "../uiux/component/portfolio/";
import Product from "./components/production/index";
import Employee from "./components/Employe/Employee";
import Artcle from "./components/article/index";

const index = () => {
  const stickyElement = useRef(null);

  return (
    <>
      <Header ref={stickyElement} />
      <StickyCursor stickyElement={stickyElement} />
      <div className={`container  ${styles.container}`}>
        <div className={`grid grid-cols-12 gap-4 ${styles.roe}`}>
          <div className="col-span-6">
            <p>Design</p>
            <span className={styles.Heading}>
              <h1>Mobile app design services</h1>
            </span>
            <p>
              Building mobile app interfaces that are optimized for development
              and easily engage with the target audience of your business.
            </p>
            <button className={styles.headerButton}>Get In Touch</button>
          </div>
        </div>

        <div className={`grid grid-cols-12 gap-4 ${styles.Concept}`}>
          <div className={`col-span-12 ${styles.imagebox}`}>
            <h1>
              The Ronas IT team delivers mobile app design services for startups
              and small-sized businesses in fields like fintech, delivery,
              betting, e-commerce, and many others. Here’s how we can help you:
            </h1>
          </div>
          <div className={`col-span-12 ${styles.imagebox2}`}>
            <div className={styles.point}>
              <span></span>
              <p>
                Design a user interface strictly following Human Interface and
                Android guidelines to ensure seamless release to the stores.
              </p>
            </div>
            <div className={styles.point}>
              <span></span>
              <p>
                Build a scalable interface based on the analysis of your
                requirements and the UX design of similar products, making the
                mobile app convenient
                <br />
                for both our business and your customers.{" "}
              </p>
            </div>

            <div className={styles.point}>
              <span></span>
              <p>
                Create screens optimized for app development, so this process is
                quick and hassle-free.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Count />
      <Design />
      <Product />
      <Portfolio />
      <Employee />
      <Numbers />
      <Artcle />
      <Faq />
      <SecondryFooter />
      <Footer />
    </>
  );
};

export default index;
