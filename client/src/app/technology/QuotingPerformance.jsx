"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function QuotingValidation() {
  const { t } = useTranslation();

  return (
    <section className="Section bg-white">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 sm:gap-20 gap-8 items-start">
        
        {/* Left Side (Image + Yellow Strip) */}
        <div className="relative w-full order-2 md:order-1">
          <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden">
            <Image
              src="/assets/technology/Quoting.png"
              alt={t("quoting.imageAlt")}
              fill
              className="object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
          {/* Yellow Strip */}
          <div className="absolute bottom-0 left-0 w-full h-12 bg-[#FACC48] rounded-b-lg" />
        </div>

        {/* Right Side (Title + Text) */}
        <div className="order-1 md:order-2">
          {/* Title */}
          <h3 className="text-xl md:text-2xl font-semibold text-[#0E509E] mb-4">
            {t("quoting.title")}
          </h3>
          
          {/* Description */}
          <div>
            <p className="text-gray-700 mb-4">
              {t("quoting.desc1.before")}{" "}
              <b>{t("quoting.desc1.bold")}</b>{" "}
              {t("quoting.desc1.after")}
            </p>
            <p className="text-gray-700 mb-4">
              <b>{t("quoting.desc2.bold")}</b>{" "}
              {t("quoting.desc2.after")}
            </p>
            <p className="text-gray-700">
              <b>{t("quoting.desc3.bold")}</b>{" "}
              {t("quoting.desc3.after")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
