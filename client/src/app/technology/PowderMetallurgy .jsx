"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function PowderMetallurgy() {
  const { t } = useTranslation();

  return (
    <section className="Section bg-white">
      <div className="mx-auto">

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="Heading">
            {t("powder.title", { defaultValue: "" })}
          </h2>
        </div>

        {/* Image + Content */}
        <div className="flex flex-col lg:flex-row gap-10 items-stretch">

          {/* LEFT IMAGE */}
          <div className="relative w-full lg:w-1/2 flex flex-col">
            <div className="flex-1 relative">
              <Image
                src="/assets/technology/Quoting.png"
                alt="Powder Metallurgy"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <div className="bg-[#FACC48] h-16 rounded-b-lg"></div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-2/3 flex flex-col justify-center">

            <h3 className="text-xl font-semibold text-[#0E509E] mb-2">
              {t("powder.subtitle1", { defaultValue: "" })}
            </h3>

            <p className="Paragraph mb-2">
              {t("powder.desc1", { defaultValue: "" })}
            </p>
            <p className="Paragraph mb-2">
              {t("powder.desc2", { defaultValue: "" })}
            </p>
            <p className="Paragraph mb-6">
              {t("powder.desc3", { defaultValue: "" })}
            </p>

            <h3 className="text-xl font-semibold text-[#0E509E] mb-2">
              {t("powder.subtitle2", { defaultValue: "" })}
            </h3>

            <p className="Paragraph">
              {t("powder.desc4", { defaultValue: "" })}
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}
