'use client'
import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import { useTheme } from "next-themes";
import Header from "@/components/header";




const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { resolvedTheme, setTheme } = useTheme()
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => setHasMounted(true));
  if (!hasMounted) return null;




  return (
    <>
      <Header />
      {/* <h1 className="font-Zona text-5xl font-semibold">Design</h1>
      <button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
        {resolvedTheme === 'dark' ? "light" : "dark"}
      </button> */}
    </>
  );
}
