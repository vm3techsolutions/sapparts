"use client";
import Image from "next/image";

const certificationImages = [
  "/assets/products/WhyChoose1.png",
  "/assets/products/WhyChoose1.png",
  "/assets/products/WhyChoose1.png",
  "/assets/products/WhyChoose1.png",
  // add more if needed
];

export default function ImageRow() {
  return (
    <div className="Section bg-[#D9D9D9]/10">
      <h2 className="Heading text-center">Certifications</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mx-auto">
        {certificationImages.map((imgSrc, index) => (
          <div key={index} className="group flex items-center justify-center overflow-hidden">
            <Image
              src={imgSrc}
              alt={`Certification ${index + 1}`}
              width={100}
              height={100}
              className="border border-[#D9D9D9] rounded-md h-[30vh] w-[30vh]  transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
