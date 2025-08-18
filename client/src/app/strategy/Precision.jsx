"use client";
import React from "react";

const features = [
  {
    title: "Design Expertise",
    description:
      "Our engineers use advanced design tools and simulations to create parts that meet exact specifications while considering real-world conditions.",
  },
  {
    title: "Strict Quality Control",
    description:
      "Every product is tested against international standards using cutting-edge inspection tools. Nothing leaves our facility without passing rigorous quality checks.",
  },
  {
    title: "Industry Insights",
    description:
      "By studying market trends and industry shifts, we anticipate challenges customers may face tomorrow.",
  },
  {
    title: "Tailored Approach",
    description:
      "Instead of offering “one-size-fits-all” products, we focus on developing solutions that are relevant and specific.",
  },
  {
    title: "Extended Life Cycles",
    description:
      "Our components reduce the need for frequent replacements, cutting costs and reducing waste.",
  },
  {
    title: "Sustainable Value",
    description:
      "Products that last longer support our customers’ goals of efficiency and responsible resource use.",
  },
  {
    title: "Scalable Solutions",
    description:
      "We design products that serve both local needs and global applications.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-[#FACC48] Section">
      {/* Section Title */}
      <h2 className=" text-center Heading">
        Precision at Every Stage
      </h2>

      <div className="flex flex-col items-center gap-10 mt-4">
        {/* Row 1: First 4 Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {features.slice(0, 4).map((feature, i) => (
            <div
              key={i}
              className="bg-white w-64 h-44 flex flex-col items-center justify-center text-center p-4 shadow-md rounded-lg"
            >
              <h3 className="text-lg font-semibold text-[#0E509E] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Row 2: Remaining 3 Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {features.slice(4).map((feature, i) => (
            <div
              key={i}
              className="bg-white w-64 h-44 flex flex-col items-center justify-center text-center p-4 shadow-md rounded-lg"
            >
              <h3 className="text-lg font-semibold text-[#0E509E] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
