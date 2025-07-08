"use client";
import React from "react";

export default function MissionVisionSection() {
  return (
    <div className="Section bg-[#F6F8FC]">
      <h2 className="Heading text-center ">
        Mission & Vision
      </h2>

      <div className="max-w-2xl mx-auto flex flex-col md:flex-row justify-center items-stretch gap-12 mt-5">
        {/* Vision Card */}
        <div className="flex-1 bg-[#134285] text-white p-6 rounded-md text-center flex flex-col h-full min-h-[350px]">
          <h3 className="text-3xl font-semibold mb-4">Vision</h3>
          <p className="MissionVision text-center">
            By 2030, our aim is to establish ourselves as the foremost provider
            of engineering solutions worldwide, offering sustainable value to
            society. We are dedicated to fostering technological advancements
            that enrich lives, while also prioritizing environmental
            responsibility and striving to alleviate its impact.
          </p>
        </div>

        {/* Mission Card */}
        <div className="flex-1 bg-[#134285] text-white p-6 rounded-md text-center flex flex-col h-full min-h-[350px]">
          <h3 className="text-3xl font-semibold mb-4">Mission</h3>
          <p className="MissionVision text-center">
            To assist customers in enhancing their offerings through innovative,
            sustainable solutions, and exceptional agile services.
          </p>
        </div>
      </div>
    </div>
  );
}
