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

  // ✅ Decide image based on scroll percentage
  let imageSrc = "/assets/home/Ring01.png";
  if (scrollPercent >= 75) {
    imageSrc = "/assets/home/Ring04.png";
  } else if (scrollPercent >= 50) {
    imageSrc = "/assets/home/Ring07.png";
  } else if (scrollPercent >= 25) {
    imageSrc = "/assets/home/Ring02.png";
  }

  return (
    <div className="hidden md:block  fixed sm:top-[62px] left-0 w-full z-30 pointer-events-none bg-[#FACC48]">
      <div className="relative w-full h-[50px]">
        <div
          className="absolute top-0"
          style={{
            left: `${scrollPercent}%`,
            transform: "translateX(-50%)",
            transition: "left 0.1s linear",
          }}
        >
          <Image
            src={imageSrc}
            alt="Ring"
            width={40}
            height={50}
            className="h-14  w-14"
          />
        </div>
      </div>
    </div>
  );
}