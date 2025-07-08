"use client";
import Image from "next/image";

const leaders = [
  {
    src: "/assets/about/Leadership1.jpg",
    name: "Mr. Ayushman",
  },
  {
    src: "/assets/about/Leadership2.jpg",
    name: "Ms. Priya",
  },
  {
    src: "/assets/about/Leadership3.jpg",
    name: "Ms. Riya",
  },
  {
    src: "/assets/about/Leadership4.jpg",
    name: "Ms. Ananya",
  },
];

export default function LeadershipSection() {
  return (
    <div className="bg-white Section">
      <h2 className="Heading text-center ">Leadership</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center mt-4">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-sm shadow-md"
          >
            {/* Image */}
            <Image
              src={leader.src}
              alt={leader.name}
              width={300}
              height={400}
              className="w-full h-[370px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Name (on hover) */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sm font-medium text-[#0E509E] shadow">
              {leader.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
