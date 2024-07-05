'use client'
import React,{useState} from 'react'
import Style from './social.module.css'
import {
    FaInstagram,
    FaBehance,
  } from "react-icons/fa";
  import { BiLogoFacebook } from "react-icons/bi";
import { IoBasketballOutline } from "react-icons/io5";
import { RiLinkedinLine } from "react-icons/ri";
import { useTheme } from "next-themes";


const index = () => {
    const { resolvedTheme, setTheme } = useTheme();
    console.log(resolvedTheme, "setTheme")

  return (
    <div className={Style.SocialLinkLeft}>
    <div className={`${Style.SocilaLink} bg-${resolvedTheme === "dark" ? "white" : "black"}`}>
      <FaInstagram className={`text-${resolvedTheme === "dark" ? "black" : "white"}`} size={22}  />
    </div>
    <div className={`${Style.SocilaLink} bg-${resolvedTheme === "dark" ? "white" : "black"}`}>
      <BiLogoFacebook className={`text-${resolvedTheme === "dark" ? "black" : "white"}`} size={24} />
    </div>
    <div className={`${Style.SocilaLink} bg-${resolvedTheme === "dark" ? "white" : "black"} `}>
      <IoBasketballOutline className={`text-${resolvedTheme === "dark" ? "black" : "white"}`} size={24} />
    </div>
    <div className={`${Style.SocilaLink} bg-${resolvedTheme === "dark" ? "white" : "black"} `}>
      <FaBehance className={`text-${resolvedTheme === "dark" ? "black" : "white"}`} size={22} />
    </div>
    <div className={`${Style.SocilaLink} bg-${resolvedTheme === "dark" ? "white" : "black"} `}>
      <RiLinkedinLine className={`text-${resolvedTheme === "dark" ? "black" : "white"}`} size={22} />
    </div>
  </div>
  )
}

export default index