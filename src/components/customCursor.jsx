import React, { useEffect, useRef } from "react";
import style from "./cursor.module.css";
import gsap from "gsap";
// import {moveCursor} from "readline";


const CustomCursor = () => {
    const cursRef = useRef(null)
    const moveCursor = (event) => {
        gsap.to(cursRef.current, {
            x: event.clentX,
            y: event.clentY
        })
    }
    useEffect(() => {
        gsap.set(cursRef.current, {
            xPercent: 100,
            yPercent: 100
        })
    }, [])

    if (typeof window !== "undefined") {
        window.addEventListener("mousemove", moveCursor)
    }
    return (
        <div>
            <div ref={cursRef} className={style.Cursor}></div>
        </div>
    )
}
export default CustomCursor;