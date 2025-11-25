// "use client";
// import Image from "next/image";
// import React from "react";
// import { useTranslation } from "react-i18next";
// import { FaRegArrowAltCircleRight } from "react-icons/fa";

// export default function SealsAssemblyGuide() {
//   const { t } = useTranslation();

//   const qualityPoints = t("seals.qualityPoints", { returnObjects: true });
//   const featurePoints = t("seals.featurePoints", { returnObjects: true });
//   const images = t("seals.images", { returnObjects: true });

//   return (
//     <div className="Section bg-white">
//       <div className="flex flex-col md:flex-row sm:gap-8 items-start">
//         {/* Mobile View - Title */}
//         <h2 className="Heading block md:hidden text-center">{t("seals.title")}</h2>

//         {/* Left Side - Text */}
//         <div className="w-full md:w-1/2 mt-6 sm:mt-2">
//           <h2 className="text-[#0E509E] text-4xl mb-4 font-bold hidden md:block">{t("seals.title")}</h2>
//           <h3 className="text-[#FACC48] text-xl mb-4 font-bold hidden md:block">{t("seals.subtitle1")}</h3>
//           <h3 className="text-[#FACC48] text-2xl mb-4 font-bold hidden md:block">{t("seals.subtitle2")}</h3>

//           <div>
//             <h3 className="text-2xl mb-4 font-bold hidden md:block pt-10">{t("seals.qualityTitle")}</h3>
//             <ul>
//               {qualityPoints.map((point, idx) => (
//                 <li key={idx} className="flex items-start gap-2 pt-1">
//                   <FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1" />
//                   {point}
//                 </li>
//               ))}
//             </ul>
//             <div className="flex flex-wrap gap-8 sm:pl-10 pt-2 pb-2">
//               {images.map((img, idx) => (
//                 <Image
//                   key={idx}
//                   src={img}
//                   alt={t("seals.imageAlt")}
//                   width={300}
//                   height={370}
//                   className="w-full sm:w-[45%] h-auto sm:h-[15vh] rounded object-cover"
//                 />
//               ))}
//             </div>
//           </div>

//           <hr className="text-[#d9d9d9]" />

//           <div>
//             <h3 className="text-2xl mb-4 font-bold hidden md:block pt-5">{t("seals.featuresTitle")}</h3>
//             <ul>
//               {featurePoints.map((point, idx) => (
//                 <li key={idx} className="flex items-start gap-2 pt-1">
//                   <FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1" />
//                   {point}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Right Side - Image */}
//         <div className="w-full md:w-1/2 sm:p-4 mt-4">
//           <Image
//             src="/assets/industries/agriculture/Supporting.png"
//             alt={t("seals.imageAlt")}
//             width={300}
//             height={370}
//             className="w-full h-auto sm:h-[40vh] rounded object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function SealsAssemblyGuide() {
  const { t } = useTranslation();

  const qualityPoints = t("seals.qualityPoints", { returnObjects: true });
  const featurePoints = t("seals.featurePoints", { returnObjects: true });
  const images = t("seals.images", { returnObjects: true });

  return (
    <div className="Section bg-white">
      <div className="flex flex-col md:flex-row sm:gap-8 items-start">
        {/* Mobile View - Title */}
        <h2 className="Heading block md:hidden text-center">{t("seals.title")}</h2>

        {/* Left Side - Text */}
        <div className="w-full md:w-1/2 mt-6 sm:mt-2">
          <h2 className="text-[#0E509E] text-4xl mb-4 font-bold hidden md:block">
            {t("seals.title")}
          </h2>
          <h3 className="text-[#FACC48] text-xl mb-4 font-bold hidden md:block">
            {t("seals.subtitle1")}
          </h3>
          <h3 className="text-[#FACC48] text-2xl mb-4 font-bold hidden md:block">
            {t("seals.subtitle2")}
          </h3>

          <div>
            <h3 className="text-2xl mb-4 font-bold hidden md:block pt-10">
              {t("seals.qualityTitle")}
            </h3>
            <ul>
              {Array.isArray(qualityPoints) &&
                qualityPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 pt-1">
                    <FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1" />
                    {point}
                  </li>
                ))}
            </ul>

            {/* <div className="flex flex-wrap gap-8 sm:pl-10 pt-2 pb-2">
              {Array.isArray(images) &&
                images.map((img, idx) => (
                  <Image
                    key={idx}
                    src={img}
                    alt={t("seals.imageAlt")}
                    width={300}
                    height={370}
                    className="w-full sm:w-[45%] h-auto sm:h-[15vh] rounded object-cover"
                  />
                ))}
            </div> */}
          </div>

          <hr className="text-[#d9d9d9]" />

          <div>
            <h3 className="text-2xl mb-4 font-bold hidden md:block pt-5">
              {t("seals.featuresTitle")}
            </h3>
            <ul>
              {Array.isArray(featurePoints) &&
                featurePoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 pt-1">
                    <FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1" />
                    {point}
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 sm:p-4 mt-4">
          <Image
            src="/assets/industries/agriculture/Supporting.png"
            alt={t("seals.imageAlt")}
            width={300}
            height={370}
            className="w-full h-auto sm:h-[40vh] rounded object-cover"
          />
        </div>
      </div>
    </div>
  );
}

