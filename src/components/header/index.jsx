import React, { forwardRef } from "react";
import style from './style.module.css'
import Magnetic from '../magnetic';

const Header = forwardRef(function index(props, ref) {
    return (
        <>
            <div className={`${style.HeaderBackground} px-8 py-8 flex items-center justify-between`}>
                <p className="font-ZonaSemiFont text-2xl font-thin">Ronas.</p>
                <div className="flex items-center justify-content">
                    <a className="font-ZonaSemiFont text-1xl font-thin px-8 hover:text-blue-300 transition " href="/">Services</a>
                    <a className="font-ZonaSemiFont text-1xl font-thin px-8 hover:text-blue-300 transition  " href="/">Design Projects</a>
                    <a className="font-ZonaSemiFont text-1xl font-thin px-8 hover:text-blue-300 transition " href="/">Cases</a>
                    <a className="font-ZonaSemiFont text-1xl font-thin px-8 hover:text-blue-300 transition " href="/">About</a>
                    <a className="font-ZonaSemiFont text-1xl font-thin px-8 hover:text-blue-300 transition " href="/">How we work</a>
                    <a className="font-ZonaSemiFont text-1xl font-thin px-8 hover:text-blue-300 transition " href="/">Blog</a>
                    <Magnetic>
                        <div className={style.burger}>
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
