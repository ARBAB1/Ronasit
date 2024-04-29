import React from "react";
import style from './header.module.css'

const Header =()=>{
    return(
        <>
        <div className={`${style.HeaderBackground} px-8 py-8 flex items-center justify-between`}>
            <p className="font-ZonaSemiFont text-2xl font-thin">Ronas.</p>
            <div>
                <a className="font-ZonaSemiFont text-1xl font-thin px-8" href="/">Services</a>
                <a className="font-ZonaSemiFont text-1xl font-thin px-8" href="/">Design Projects</a>
                <a className="font-ZonaSemiFont text-1xl font-thin px-8" href="/">Cases</a>
                <a className="font-ZonaSemiFont text-1xl font-thin px-8" href="/">About</a>
                <a className="font-ZonaSemiFont text-1xl font-thin px-8" href="/">How we work</a>
                <a className="font-ZonaSemiFont text-1xl font-thin px-8" href="/">Blog</a>
                <button className="font-ZonaSemiFont text-1xl font-thin px-8 bg-white text-black py-4 rounded-full px-8">Estimate Project</button>
            </div>
        </div>
        </>
    )
}

export default Header;