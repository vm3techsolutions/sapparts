"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Timeline() {
  const{t} = useTranslation()
  return (
    <div className="Section bg-white">
      {/* <h2 className="Heading text-center">{t("Milestones")}</h2> */}

      <div className="relative w-full  mx-auto mt-8">
        <Image
          src="/assets/about/Milestones2.png" 
          alt="Milestones"
          width={1200}
          height={600}
          className="w-full  object-cover"
        />
      </div>
    </div>
  );
}
