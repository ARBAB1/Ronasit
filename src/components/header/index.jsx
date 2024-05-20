'use client';
import React, { forwardRef } from "react";
import style from './style.module.css'
import Magnetic from '../magnetic';
import { useTheme } from "next-themes";



const Header = forwardRef(function index(props, ref) {
    const {resolvedTheme,setTheme} = useTheme()
    return (
        <>
            <div className={`${style.HeaderBackground} px-8 py-6 flex items-center justify-between`}>
                <p className="font-ZonaSemiFont text-2xl font-thin">Ronas.</p>
                <div className="flex items-center justify-content">
                    <a className="font-ZonaSemiFont text-1xl font-thin px-8 hover:text-blue-300 transition " href="/Services">Services</a>
                    <a className="font-ZonaSemiFont text-1xl font-thin px-8 hover:text-blue-300 transition  " href="/designProjects">Design Projects</a>
                    <a className="font-ZonaSemiFont text-1xl font-thin px-8 hover:text-blue-300 transition " href="/cases">Cases</a>
                    <a className="font-ZonaSemiFont text-1xl font-thin px-8 hover:text-blue-300 transition " href="/about">About</a>
                    <a className="font-ZonaSemiFont text-1xl font-thin px-8 hover:text-blue-300 transition " href="/how-we-work">How we work</a>
                    <a className="font-ZonaSemiFont text-1xl font-thin px-8 hover:text-blue-300 transition " href="/blog">Blog</a>
                    <div onClick={()=>setTheme(resolvedTheme === 'dark'?'light':'dark')} className={`${style.ThemeToggle} mr-8 justify-${resolvedTheme === 'dark'?'end':'start'}`}>
                        <span className={style.toggleBtn}></span>
                    </div>
                    <Magnetic>
                        <div className={`${style.burger} text-white	dark:text-black	 bg-black dark:bg-white`}>
                            <div ref={ref} className={`${style.bounds} font-ZonaSemiFont`}>Estimate Project</div>
                        </div>
                    </Magnetic>
                </div>
            </div>
        </>
    )
}
)
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
