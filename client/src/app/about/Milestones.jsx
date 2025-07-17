"use client";
import Image from "next/image";
import React from "react";

export default function Timeline() {
  return (
    <div className="Section bg-white">
      <h2 className="Heading text-center">Milestones</h2>

      <div className="relative w-full  mx-auto mt-8">
        <Image
          src="/assets/about/Milestones.png" 
          alt="Milestones"
          width={1200}
          height={600}
          className="w-full  object-cover"
        />
      </div>
    </div>
  );
}
