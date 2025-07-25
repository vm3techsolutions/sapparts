"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function CompanyHistory() {
  const {t} = useTranslation()
  return (
    <section className="Section bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10">
        {/* Left: Text Content */}
        <div className="md:w-2/3">
          <h2 className="Heading ">
           {t("Company History")}
          </h2>

          <p className="Paragraph">
            {t("About Paragraph-1")}
       
          </p>

          <p className="Paragraph">
            {t("About Paragraph-1")}
          </p>

          <p className="text-gray-700 leading-relaxed">
             {t("About Paragraph-1")}
          </p>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/3 flex-shrink-0">
          <div className="rounded-lg shadow-md overflow-hidden">
            <Image
              src="/assets/about/CompanyHistory.png" 
              alt="Company History Image"
              width={500}
              height={500}
              className="object-cover w-full sm:h-[90vh]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
