"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
 

export default function ScrollRing() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed sm:top-[84px] left-0 w-full z-50 pointer-events-none bg-[#FACC48]">
      <div className="relative w-full h-[50px]">
        <div
          className="absolute top-0"
          style={{
            left: `${scrollPercent}%`,
            transform: "translateX(-50%)",
            transition: "left 0.1s linear",
          }}
        >
          <Image src="/assets/header/Ring.png" alt="Ring" width={40} height={50} 
          className="h-12 w-12 "/>
        </div>
      </div>
    </div>
  );
}
