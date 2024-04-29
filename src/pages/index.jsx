'use client'
import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import { useTheme } from "next-themes";
import Header from "@/components/header";
import CustomCursor from "@/components/customCursor";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  




  return (
    <>
      <Header />
      <CustomCursor/>
      {/* <h1 className="font-Zona text-5xl font-semibold">Design</h1>
      <button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
        {resolvedTheme === 'dark' ? "light" : "dark"}
      </button> */}
    </>
  );
}
