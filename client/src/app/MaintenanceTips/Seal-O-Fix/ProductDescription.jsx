"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function ProductDescription() {
  const { t } = useTranslation();

  return (
    <div className="Section bg-white -mt-14">
      <div className="w-full mt-6 sm:mt-2">

        {/* Product Description */}
        <div>
          <h3 className="text-2xl font-bold mb-2">{t("ProductDescriptionTitle")}</h3>
          <p className="paragraph">{t("ProductDescriptionText")}</p>
        </div>

        {/* Product Benefits */}
        <div className="pt-10">
          <h3 className="text-2xl font-bold mb-2">{t("ProductBenefitsTitle")}</h3>
          <ul>
            {[1,2,3,4,5].map((i) => (
              <li key={i} className="flex items-start gap-2 pt-1">
                <FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1" />
                {t(`ProductBenefits${i}`)}
              </li>
            ))}
          </ul>
        </div>

        {/* Properties Of Material */}
        <div className="pt-10">
          <h3 className="text-2xl font-bold mb-2">{t("PropertiesTitle")}</h3>
          <ul>
            {[1,2,3,4,5,6].map((i) => (
              <li key={i} className="flex items-start gap-2 pt-1">
                <FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1" />
                {t(`Properties${i}`)}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
