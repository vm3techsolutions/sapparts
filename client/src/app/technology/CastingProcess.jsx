"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";


export default function CentrifugalCasting() {
    const {t} = useTranslation()
  return (
    <section className="Section bg-white">
      <div className=" mx-auto">
        {/* Title & Description */}
        <div className="text-center mb-10">
          <h2 className="Heading text-center">
          {t("Casting Process")}
          </h2>
          <p className="Paragraph text-center sm:px-16  ">
             {t("SAP Parts CENTRiCAST")}
          </p>
        </div>

        {/* Image + Right Content */}
        <div className="flex flex-col lg:flex-row items-stretch gap-10">
          {/* Left Image with Yellow Bottom Div */}
          <div className="relative w-full lg:w-1/2 flex flex-col">
            <div className="flex-1 relative">
              <Image
                src="/assets/technology/CastingProcess.png" 
                alt="Casting Process"
                fill
                className="object-cover rounded-t-lg "
              />
            </div>
            {/* Yellow bottom div */}
            <div className="bg-[#FACC48] h-16 rounded-b-lg"></div>
          </div>

          {/* Right Content + Blue Cards */}
          <div className="w-full lg:w-2/3 flex flex-col">
            <h3 className="text-xl md:text-2xl font-bold text-[#0E509E] mb-4">
              {t("Unique Manufacturing Processes")}
            </h3>
            <div className="mb-6">
              <h4 className="font-semibold text-lg text-[#0E509E]">{t("CENTRiCAST Process")}</h4>
              <p className="text-gray-600 mt-2">
               {t(" This is SAP Parts")}
              </p>
            </div>
            <div className="mb-6">
              <h4 className="font-semibold text-lg text-[#0E509E]">
               {t("Robotic Near–Net–Shape Casting")}
              </h4>
              <p className="text-gray-600 mt-2">
              {t("SAP Parts integrates advanced ")}
              </p>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#0E509E] mb-4">
              {t("Proprietary Materials")}
            </h3>
            <p className="text-gray-600 mb-6">
              {t("SAP Parts has developed")}
            </p>

            {/* Blue Cards under text */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#0E509E] text-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold mb-2 text-[#FACC48]">{t("JaliKayas")}</h4>
                <p className="text-sm">
                 {t(" This grade is engineered")}
                </p>
              </div>
              <div className="bg-[#0E509E]  text-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold mb-2 text-[#FACC48]">{t("KrsNayas")}</h4>
                <p className="text-sm">
                  {t(" This grade is developed")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
