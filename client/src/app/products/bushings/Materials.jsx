// "use client";
// import { useTranslation } from "react-i18next";

// export default function MaterialsSizes() {
//   const { t } = useTranslation();

//   return (
//     <section className="bg-[#FACC48] Section">
//       <h2 className="Heading text-center">
//         {t("materialsSizes3.sectionTitle")}
//       </h2>

//       <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-0 items-start mt-9">
//         {/* Left Column */}
//         <div className="text-[#0E509E]">
//           <h3 className="text-2xl font-semibold text-center mb-4">
//             {t("materialsSizes3.steel.title")}
//           </h3>
//           <ul className="text-[#363636] font-semibold space-y-5 list-disc list-outside pl-4">
//             <li>{t("materialsSizes3.steel.points.point1")}</li>
//             <li>{t("materialsSizes3.steel.points.point2")}</li>
//             <li>{t("materialsSizes3.steel.points.point3")}</li>
//           </ul>
//         </div>

//         {/* Vertical Divider */}
//         <div className="hidden md:flex justify-center">
//           <div className="w-[1.5px] h-80 bg-[#0E509E]" />
//         </div>

//         {/* Right Column */}
//         <div className="text-[#0E509E]">
//           <h3 className="text-2xl font-semibold text-center mb-4">
//             {t("materialsSizes3.nonFerrous.title")}
//           </h3>
//           <ul className="text-[#363636] font-semibold space-y-5 list-disc list-outside pl-4">
//             <li>{t("materialsSizes3.nonFerrous.points.point1")}</li>
//             <li>
//               {t("materialsSizes3.nonFerrous.points.point2").split("\n").map((line, idx) => (
//                 <p key={idx}>{line}</p>
//               ))}
//             </li>
//             <li>
//               {t("materialsSizes3.nonFerrous.points.point3").split("\n").map((line, idx) => (
//                 <p key={idx}>{line}</p>
//               ))}
//             </li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import { useTranslation } from "react-i18next";

export default function MaterialsSizes() {
  const { t } = useTranslation();

  // Fetch arrays directly from translations
  const steelPoints = t("materialsSizes3.steel.points", { returnObjects: true });
  const nonFerrousPoints = t("materialsSizes3.nonFerrous.points", { returnObjects: true });

  return (
    <section className="bg-[#FACC48] Section">
      <h2 className="Heading text-center">{t("materialsSizes3.sectionTitle")}</h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-0 items-start mt-9">
        {/* Left Column */}
        <div className="text-[#0E509E]">
          <h3 className="text-2xl font-semibold text-center mb-4">
            {t("materialsSizes3.steel.title")}
          </h3>
          <ul className="text-[#363636] font-semibold space-y-5 list-disc list-outside pl-4">
            {Array.isArray(steelPoints) &&
              steelPoints.map((point, idx) => <li key={idx}>{point}</li>)}
          </ul>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:flex justify-center">
          <div className="w-[1.5px] h-80 bg-[#0E509E]" />
        </div>

        {/* Right Column */}
        <div className="text-[#0E509E]">
          <h3 className="text-2xl font-semibold text-center mb-4">
            {t("materialsSizes3.nonFerrous.title")}
          </h3>
          <ul className="text-[#363636] font-semibold space-y-5 list-disc list-outside pl-4">
            {Array.isArray(nonFerrousPoints) &&
              nonFerrousPoints.map((point, idx) => (
                <li key={idx}>
                  {point.split("\n").map((line, lineIdx) => (
                    <p key={lineIdx}>{line}</p>
                  ))}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
