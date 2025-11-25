
      "use client";
      import { useTranslation } from "react-i18next";

      export default function AutomotiveSection() {
        const { t } = useTranslation();

        return (
          <div className="Section bg-white">
            <div className="flex flex-col items-center text-center">
              
              {/* Title */}
              <h2 className="text-[#0E509E] text-4xl mb-4 font-bold">
                {t("Supporting the Backbone of Farming Operations")}
              </h2>

              {/* Description */}
              <p className="Paragraph ">
                {t("Agriculture-Description")}
              </p>

            </div>
          </div>
        );
      }
