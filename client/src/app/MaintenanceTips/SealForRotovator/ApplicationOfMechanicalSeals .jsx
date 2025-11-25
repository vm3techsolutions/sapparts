// "use client";
// import Image from "next/image";
// import React from "react";
// import { useTranslation } from "react-i18next";
// import { FaRegArrowAltCircleRight } from "react-icons/fa";

// export default function HousingPreparation() {
//   const { t } = useTranslation();

//   const sections = t("housing.sections", { returnObjects: true });
//   const advantages = t("housing.advantages", { returnObjects: true });

//   return (
//     <div className="Section bg-white sm:-mt-16 -mt-16">
//       {sections.map((section, index) => (
//         <div key={index} className="flex flex-col md:flex-row sm:gap-8 items-start pt-10">
//           {/* Left Side - Text */}
//           <div className="w-full md:w-1/2 mt-6 sm:mt-2">
//             <h3 className="text-[#000000] text-2xl mb-4 font-bold">{section.title}</h3>
//             {section.paragraphs.map((para, idx) => (
//               <p key={idx} className="Paragraph" dangerouslySetInnerHTML={{ __html: para }} />
//             ))}
//           </div>

//           {/* Right Side - Images */}
//           <div className="w-full md:w-1/2 sm:p-4 space-y-8">
//             {section.images.map((img, idx) => (
//               <Image
//                 key={idx}
//                 src={img.src}
//                 alt={t("housing.imageAlt")}
//                 width={img.width}
//                 height={img.height}
//                 className="w-full h-auto sm:h-[30vh] rounded object-cover"
//               />
//             ))}
//           </div>
//         </div>
//       ))}

//       {/* Advantages */}
//       <div className="pt-10">
//         <h3 className="text-2xl mb-4 font-bold">{t("housing.advantagesTitle")}</h3>
//         <ul>
//           {advantages.map((adv, idx) => (
//             <li key={idx} className="flex items-start gap-2 pt-1">
//               <FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1" />
//               {adv}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }


"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function HousingPreparation() {
  const { t } = useTranslation();

  const sections = t("housing.sections", { returnObjects: true });
  const advantages = t("housing.advantages", { returnObjects: true });

  return (
    <div className="Section bg-white sm:-mt-16 -mt-16">
      {Array.isArray(sections) &&
        sections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row sm:gap-8 items-start pt-10"
          >
            {/* Left Side - Text */}
            <div className="w-full md:w-1/2 mt-6 sm:mt-2">
              <h3 className="text-[#000000] text-2xl mb-4 font-bold">
                {section.title}
              </h3>
              {Array.isArray(section.paragraphs) &&
                section.paragraphs.map((para, idx) => (
                  <p
                    key={idx}
                    className="Paragraph"
                    dangerouslySetInnerHTML={{ __html: para }}
                  />
                ))}
            </div>

            {/* Right Side - Images */}
            {/* <div className="w-full md:w-1/2 sm:p-4 space-y-8">
              {Array.isArray(section.images) &&
                section.images.map((img, idx) => (
                  <Image
                    key={idx}
                    src={img.src}
                    alt={t("housing.imageAlt")}
                    width={img.width}
                    height={img.height}
                    className="w-full h-auto sm:h-[30vh] rounded object-cover"
                  />
                ))}
            </div> */}
          </div>
        ))}

      {/* Advantages */}
      <div className="pt-10">
        <h3 className="text-2xl mb-4 font-bold">{t("housing.advantagesTitle")}</h3>
        <ul>
          {Array.isArray(advantages) &&
            advantages.map((adv, idx) => (
              <li key={idx} className="flex items-start gap-2 pt-1">
                <FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1" />
                {adv}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
