"use client";
import Image from "next/image";

const certifications = [
  {
    src: "/assets/about/Awards1.png",
    year: "2015-16 & 2016-17",
    label: "BEML AWARD for Import Substitution of MFS",
  },
  {
    src: "/assets/about/Awards2.png",
    year: "2021",
    label: "Innovation Award from Mahindra & Mahindra",
  },
  {
    src: "/assets/about/Awards3.png",
    year: "2023",
    label: "Outstanding Quality Performance Award by M&M",
  },
  {
    src: "/assets/about/Awards4.png",
    year: "2024",
    label: "ACMA Excellence Award Silver Medal for R&D",
  },
];

export default function CertificationsSection() {
  return (
    <div className="bg-[#F6F8FC] Section">
      <h2 className="Heading text-center">Awards & Recognitions</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto mt-6 place-items-center">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="overflow-hidden bg-white flex flex-col items-center gap-4 w-full"
          >
            {/* Image Box */}
            <div className="border border-[#FACC48] rounded-md w-full max-w-[300px]">
              <Image
                src={cert.src}
                alt={`Certificate ${index + 1}`}
                width={300}
                height={400}
                className="object-contain h-auto w-full"
              />
            </div>

            {/* Text Box */}
            <div className="text-center bg-[#0E509E] py-2 px-3 rounded-md w-full text-white max-w-[250px]">
              <p className="text-lg font-semibold">{cert.year}</p>
              <p className="text-sm mt-1">{cert.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
