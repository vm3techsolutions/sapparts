"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const certifications = [
  {
    src: "/assets/about/Certifications1.png",
    label: "IATF 16949:2016",
  },
  {
    src: "/assets/about/Certifications2.png",
    label: "ISO 9001 : 2015",
  },
  {
    src: "/assets/about/Certifications3.png",
    label: "ISO 9001 : 2015",
  },
  {
    src: "/assets/about/Certifications4.png",
    label: "ISO 9001 : 2015",
  },
];

export default function CertificationsSection() {
  const {t} = useTranslation()
  return (
    <div className="bg-white Section">
      <h2 className="Heading text-center">
       {t("Certifications")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  mx-auto mt-4">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="overflow-hidden flex flex-col items-center bg-white gap-3"
          >
            <div className=" border border-[#FACC48] rounded-md ">
              <Image
                src={cert.src}
                alt={`Certificate ${index + 1}`}
                width={300}
                height={400}
                className="object-contain h-auto w-full rounded-md  transition-transform duration-500 ease-in-out transform hover:scale-105"
          
              />
            </div>
            <div className="w-full text-center rounded-md bg-[#FACC48] py-1 -px-2 font-semibold text-md text-black">
              {cert.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
