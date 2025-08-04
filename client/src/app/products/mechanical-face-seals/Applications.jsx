"use client";

import Image from "next/image";


export default function ApplicationSection() {
  return (
    <div className="Section bg-white">
      <h2 className="Heading text-center">Application</h2>

      <div className="flex justify-center sm:gap-40 gap-6 flex-wrap px-4">
        {[
          { title: "Construction", img: "/assets/products/Application1.png" },
          { title: "Mining", img: "/assets/products/Mining2.png" },
          { title: "Agriculture", img: "/assets/products/Application3.png" },
        ].map((item, index) => (
          <div
            key={index}
            className="group w-60 h-60 border border-[#D9D9D9]/50 rounded-md flex flex-col items-center justify-center bg-white hover:bg-[#0E509E] transition-all duration-300 shadow-lg"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={50}
              height={50}
              className="mb-3 h-20 w-20 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
            />
            <p className="text-[#0E509E] group-hover:text-white font-semibold text-xl transition-all">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
