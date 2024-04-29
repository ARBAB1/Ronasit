'use client'
import style from './header.module.css'
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";


const Header = () => {
    const { resolvedTheme, setTheme } = useTheme()
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => setHasMounted(true));
    if (!hasMounted) return null;
    return (
        <>
            <div className={`${style.HeaderBackground} px-8 py-8 flex items-center justify-between`}>
                <p className="font-ZonaSemiFont text-2xl font-thin">Ronas.</p>
                <div className="flex items-center justify-center">
                    <a className="font-ZonaSemiFont text-1xl font-thin px-8" href="/">Services</a>
                    <a className="font-ZonaSemiFont text-1xl font-thin px-8" href="/">Design Projects</a>
                    <a className="font-ZonaSemiFont text-1xl font-thin px-8" href="/">Cases</a>
                    <a className="font-ZonaSemiFont text-1xl font-thin px-8" href="/">About</a>
                    <a className="font-ZonaSemiFont text-1xl font-thin px-8" href="/">How we work</a>
                    <a className="font-ZonaSemiFont text-1xl font-thin px-8" href="/">Blog</a>
                    <div onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} className={`${style.ThemeToggle} mx-8 justify-${resolvedTheme == 'dark'?'end':'start'} bg-${resolvedTheme === 'dark'?'white':'black'}`}>
                        <div className={`${style.ThemeToggleBtn} bg-${resolvedTheme === 'dark'?"black":"white"}`}></div> 
                    </div>
                    <button className="font-ZonaSemiFont text-1xl font-thin px-8 bg-white text-black dark:bg-white bg-black py-4 rounded-full px-8">Estimate Project</button>
                </div>
            </div>
        </>
    )
}

export default Header;