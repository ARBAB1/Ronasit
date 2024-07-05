"use client";
import React, { forwardRef, useState } from "react";
import style from "./style.module.css";
import Magnetic from "../magnetic";
import { useTheme } from "next-themes";
import { TbMenu } from "react-icons/tb";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Header = forwardRef(function index(props, ref) {
  const [header, setHeader] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();


  const HandleMenu = () => {
    setHeader(!header);
  };
  return (
    <>
      <div className={`${style.HeaderBackground} px-8 py-6 flex items-center justify-between`} >
        <p className="font-ZonaSemiFont text-2xl font-thin">Ronas.</p>
        <div className="flex items-center justify-content">
          <a
            className="font-ZonaSemiFont text-1xl font-thin px-8 hover:text-blue-300 transition"
            href="/services"
          >
            Services
          </a>
          <a
            className="font-ZonaSemiFont text-1xl font-thin px-8 hover:text-blue-300 transition"
            href="/designProjects"
          >
            Design Projects
          </a>
          <a
            className="font-ZonaSemiFont text-1xl font-thin px-8 hover:text-blue-300 transition"
            href="/cases"
          >
            Cases
          </a>
          <a
            className="font-ZonaSemiFont text-1xl font-thin px-8 hover:text-blue-300 transition"
            href="/about"
          >
            About
          </a>
          <a
            className="font-ZonaSemiFont text-1xl font-thin px-8 hover:text-blue-300 transition"
            href="/how-we-work"
          >
            How we work
          </a>
          <a
            className="font-ZonaSemiFont text-1xl font-thin px-8 hover:text-blue-300 transition"
            href="/blog"
          >
            Blog
          </a>
          <div
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className={`${style.ThemeToggle} mr-8 justify-${
              resolvedTheme === "dark" ? "end" : "start"
            }`}
          >
            <span className={style.toggleBtn}></span>
          </div>
          <Magnetic>
            <div
              className={`${style.burger} text-white	dark:text-black	 bg-black dark:bg-white`}
            >
              <div ref={ref} className={`${style.bounds} font-ZonaSemiFont`}>
                Estimate Project
              </div>
            </div>
          </Magnetic>
        </div>
      </div>
      <div className={` ${ style.ResponsiveContainer}`}>
        <div className={`grid grid-cols-12 gap-4 ${style.REsrow}`}>
          <div className={`col-span-3 ${style.Reslogo}`}>
            <h1>Ronas.</h1>
          </div>
          <div className={`col-span-9 ${style.rightside}`}>
            <Magnetic>
              <div
                className={`${style.Resburger} text-white	dark:text-black	 bg-black dark:bg-white`}
              >
                <div
                  ref={ref}
                  className={`${style.Resbounds} font-ZonaSemiFont`}
                >
                  Estimate Project
                </div>
              </div>
            </Magnetic>
            {header ? (
              <RxCross2 onClick={HandleMenu} size={24} />
            ) : (
              <MdOutlineMenu
                className={style.menu}
                size={24}
                onClick={HandleMenu}
              />
            )}
          </div>
        </div>
      </div>
      {header ? (
        <div className={`${style.HeaderMenu} bg-${resolvedTheme === "dark" ? "black" : "white"}`}>
          <div className={`grid grid-cols-12 gap-4  ${style.MenuContainer}`}>
            <div className={`col-span-6 p-5`}>
              <h1>Menu</h1>
              <div className={style.menulist}>
                <a href="">Services</a>
                <a href="">Design Project</a>
                <a href="">Cases</a>
                <a href="">About</a>
                <a href="">How we work</a>
                <a href="">Blog</a>
              </div>
            </div>
            <div className={`col-span-6 p-5`}>
              <h1>Get in touch</h1>
              <div className={style.menulist}>
                <h1>Hello@gmail.com</h1>
                <p>Theme</p>
                <div
                  onClick={() =>
                    setTheme(resolvedTheme === "dark" ? "light" : "dark")
                  }
                  className={`${style.ThemeToggle2} mr-8 justify-${
                    resolvedTheme === "dark" ? "end" : "start"
                  }`}
                >
                  <span className={style.toggleBtn2}></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}


    </>
  );
});
export default Header;

// import { forwardRef } from 'react';
// import styles from './style.module.scss';

// const Header = forwardRef(function index(props, ref) {
//     return (
//         <div className={styles.header}>
//             <Magnetic>
//                 <div className={styles.burger}>
//                     <div ref={ref} className={styles.bounds}></div>
//                 </div>
//             </Magnetic>
//         </div>
//     )
// }
// )

// export default Header

//                 <button ref={ref} className="font-ZonaSemiFont text-1xl font-thin px-8 bg-white text-black py-4 rounded-full px-8">Estimate Project</button>
