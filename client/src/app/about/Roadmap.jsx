// "use client";
// import Image from "next/image";
// import React from "react";

// // Card component
// function RoadmapCard({ src, year, label, highlight }) {
//   return (
//     <div className="flex flex-col items-center w-[160px] sm:w-[180px] mx-auto">
//       {/* Image box */}
//       <div className="">
//         <Image
//           src={src}
//           alt={label}
//           width={160}
//           height={150}
//           className="object-contain h-[20vh] border-t border-r border-l border-[#FACC48]  rounded-md "
//         />

//               {/* Year label */}
//       <div className="bg-[#F5F5F5]  text-sm font-semibold text-[#0E509E] w-full text-center  py-1 ">
//         {year}
//       </div>

//        {/* Description box */}
//       <div
//         className={` w-full text-center rounded-b-full pt-2 pb-3 px-2 ${
//           highlight ? "bg-[#FACC48]" : "bg-[#0E509E]"
//         }`}
//       >
//         <p className={`text-sm font-medium ${highlight ? "text-black" : "text-white"}`}>
//           {label}
//         </p>
//       </div>
//       </div>



     
//     </div>
//   );
// }

// // Main component
// export default function Roadmap() {
//   const roadmapData = [
//     {
//       row: 1,
//       items: [
//         {
//           src: "/assets/about/Roadmap2.png",
//           year: "2009",
//           label: "Metal Face Seals",
//           highlight: false,
//         },
//       ],
//     },
//     {
//       row: 2,
//       items: [
//         {
//           src: "/assets/about/Roadmap2.png",
//           year: "2011",
//           label: "Alloy Steel Bushings",
//           highlight: false,
//         },
//         {
//           src: "/assets/about/Roadmap3.png",
//           year: "2021",
//           label: "PM- Sintered Parts",
//           highlight: false,
//         },
//       ],
//     },
//     {
//       row: 3,
//       items: [
//         {
//           src: "/assets/about/Roadmap4.png",
//           year: "2023-2028",
//           label: "Special Bearings",
//           highlight: false,
//         },
//         {
//           src: "/assets/about/Roadmap5.png",
//           year: "2023-2028",
//           label: "Agri Hubs",
//           highlight: false,
//         },
//         {
//           src: "/assets/about/Roadmap6.png",
//           year: "2023-2028",
//           label: "Precision Components",
//           highlight: true,
//         },
//         {
//           src: "/assets/about/Roadmap7.png",
//           year: "2023-2028",
//           label: "Semiconductor Aggregates",
//           highlight: false,
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="Section bg-white">
//       <h2 className="Heading text-center">
//        Roadmap to 2030
//       </h2>

//       <div className="space-y-16  mt-6">
//         {roadmapData.map((row, rowIndex) => (
//           <div
//             key={rowIndex}
//             className={`flex flex-wrap justify-center gap-6`}
//           >
//             {row.items.map((item, index) => (
//               <RoadmapCard
//                 key={index}
//                 src={item.src}
//                 year={item.year}
//                 label={item.label}
//                 highlight={item.highlight}
//               />
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



"use client";
import Image from "next/image";
import React from "react";

export default function Roadmap() {
  return (
    <div className="Section bg-white py-10">
      <h2 className="Heading text-center text-3xl sm:text-4xl font-bold text-[#0E509E] mb-8">
        Roadmap to 2030
      </h2>

      <div className="flex justify-center">
        <Image
          src="/assets/about/Roadmap.jpg" 
          alt="Roadmap to 2030"
          width={1200} 
          height={400}
          className="w-full max-w-3xl object-contain "
        />
      </div>
    </div>
  );
}
