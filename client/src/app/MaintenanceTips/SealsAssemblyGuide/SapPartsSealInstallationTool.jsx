"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

export default function SapPartsSealInstallationTool() {
  const { t } = useTranslation();
  return (
    <div className="Section bg-white ">
      {/* SAP Parts Seal Installation Tool */}
      <div>
        <div className="w-full md:w-1/2 -mt-10 sm:mt-2">
          <h3 className="text-[#000000] text-2xl mb-4 font-bold ">
            {t("SealInstallationToolTitle1")}
          </h3>
          <p className="Paragraph">
            {t("SealInstallationToolDesc1")}
          </p>
        </div>
      </div>

      {/* Duo Cone Seal Installation Process */}
      <div className="flex flex-col md:flex-row sm:gap-8 items-start pt-10">
        <div className="w-full md:w-1/2 -mt-10 sm:mt-2 ">
          <h3 className="text-[#000000] text-2xl mb-4 font-bold ">
            {t("DuoConeInstallationTitle1")}
          </h3>
          <p className="Paragraph">
            {t("DuoConeInstallationDesc1")}
          </p>
        </div>

        <div className="w-full md:w-1/2 sm:p-4">
          <Image
            src="/assets/industries/agriculture/Supporting.png"
            alt="Supporting"
            width={200}
            height={270}
            className="w-full h-auto sm:h-[30vh] rounded object-cover"
          />
        </div>
      </div>

      {/* Steps By Step Seal Installation */}
      <div className="pt-10">
        <div className="w-full -mt-6 sm:mt-2">
          <h3 className="text-[#000000] text-2xl mb-4 font-bold ">
            {t("StepsByStepTitle1")}
          </h3>

          {[1,2,3,4,5,6,7].map((step) => (
            <div key={step} className="w-full pt-5">
              <h3>{t(`Step${step}1`)}</h3>
              { [1,2,5,6].includes(step) && (
                <Image
                  src="/assets/industries/agriculture/Supporting.png"
                  alt="Supporting"
                  width={200}
                  height={270}
                  className="w-[200px] h-auto sm:h-[15vh] rounded object-cover pt-5"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
