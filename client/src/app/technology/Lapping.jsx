"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function MachineImage() {
  const { t } = useTranslation();

  return (
    <section className="Section bg-white">
      <div className="mx-auto">

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="Heading">
            {t("machineImage.title", { defaultValue: "" })}
          </h2>
        </div>

        {/* Image + Content */}
        <div className="flex flex-col lg:flex-row gap-10 items-stretch">

          {/* LEFT IMAGE */}
          <div className="relative w-full lg:w-1/2 flex flex-col">
            <div className="flex-1 relative">
              <Image
                src="/assets/strategy/CenterBanner.png"
                alt="CNC Machining"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <div className="bg-[#FACC48] h-16 rounded-b-lg"></div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-2/3 flex flex-col justify-center">
            <p className="Paragraph mb-4">
              {t("machineImage.para1", { defaultValue: "" })}
            </p>
            <p className="Paragraph mb-4">
              {t("machineImage.para2", { defaultValue: "" })}
            </p>
            <p className="Paragraph">
              {t("machineImage.para3", { defaultValue: "" })}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
