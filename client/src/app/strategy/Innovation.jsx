"use client";
import React from "react";

export default function FeatureCardsSection() {
  const cards = [
    { title: "Customized Engineering", desc: "From redesigning existing parts to creating completely new solutions, we adapt our engineering to customer requirements." },
    { title: " Technology Integration", desc: "We leverage new technologies, better materials, advanced machining, and smarter designs to deliver superior results." },
    { title: " Agile Development", desc: "Our flexible processes allow us to respond quickly to customer needs, reducing time-to-market for customized products." },
    { title: "Energy Efficiency", desc: "Optimized manufacturing processes reduce energy consumption." },
    { title: "Waste Reduction", desc: "Smart production methods ensure minimal scrap and better resource utilization." },
    { title: "Recycling Initiatives", desc: "We reuse materials wherever possible, ensuring circular benefits." },
  ];

  return (
    <section className="Section bg-[#D9D9D9]/10">
      {/* Title */}
      <h2 className=" text-center Heading">
        Innovation Through Engineering
      </h2>

      {/* Description */}
      <p className="Paragraph text-center">
        Excellence is not just about maintaining standards—it’s about pushing them higher. Our engineering teams constantly explore new materials, technologies, and methods to improve product performance and durability. We believe innovation should never be innovation for its own sake. 
True innovation begins by listening to customers, understanding their unique challenges, and designing solutions that truly make a difference. 
For us, customers are not just buyers—they are partners in shaping better, smarter, and more efficient products.
      </p>

      {/* Cards Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
  {cards.map((card, index) => (
    <div
      key={index}
      className="group border border-[#D9D9D9]/70 rounded-lg bg-white p-6 text-center transition-all duration-300 hover:bg-[#0E509E]"
    >
      <h3 className="text-xl font-semibold text-[#0E509E] mb-2 transition-colors duration-300 group-hover:text-[#FACC48]">
        {card.title}
      </h3>
      <p className="text-[#363636] transition-colors duration-300 group-hover:text-white">
        {card.desc}
      </p>
    </div>
  ))}
</div>

    </section>
  );
}
