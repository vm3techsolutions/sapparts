// "use client";
// import { useTranslation } from "react-i18next";

// export default function MaterialsSizes() {
//   const { t } = useTranslation();

//   const items = t("materialsSizes6.items", { returnObjects: true });

//   return (
//     <section className="bg-[#FACC48] Section">
//       <h2 className="Heading text-center">
//         {t("materialsSizes6.sectionTitle")}
//       </h2>

//       <div className="max-w-4xl mx-auto flex justify-center mt-9">
//         <div className="text-[#0E509E]">
//           <h3 className="text-2xl font-semibold text-center mb-4">
//             {t("materialsSizes6.subTitle")}
//           </h3>
//           <ul className="text-[#363636] font-semibold space-y-3 list-disc list-inside">
//             {Array.isArray(items) &&
//               items.map((item, idx) => <li key={idx}>{item}</li>)}
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

  // Force i18next to treat these keys as arrays
  const steelItems = t("materialsSizes6.columns.steelHardened.items", {
    returnObjects: true,
    defaultValue: [],
  });

  const nonFerrousItems = t("materialsSizes6.columns.nonFerrous.items", {
    returnObjects: true,
    defaultValue: [],
  });

  const steelTitle = t("materialsSizes6.columns.steelHardened.title");
  const nonFerrousTitle = t("materialsSizes6.columns.nonFerrous.title");
  const sectionTitle = t("materialsSizes6.sectionTitle");

  console.log("Steel Items:", steelItems);
  console.log("Non-Ferrous Items:", nonFerrousItems);

  return (
    <section className="bg-[#FACC48] Section">
      <h2 className="Heading text-center">{sectionTitle}</h2>

      <div className="max-w-5xl mx-auto flex justify-between mt-9">
        {/* Steel Hardened Bushings */}
        <div className="w-1/2 text-[#0E509E] px-4">
          <h3 className="text-2xl font-semibold text-center mb-4">
            {steelTitle}
          </h3>
          <ul className="text-[#363636] font-semibold space-y-3 list-disc list-inside">
            {Array.isArray(steelItems) &&
              steelItems.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>

        {/* Divider */}
        <div className="w-px bg-[#0E509E]"></div>

        {/* Non-Ferrous Bushings */}
        <div className="w-1/2 text-[#0E509E] px-4">
          <h3 className="text-2xl font-semibold text-center mb-4">
            {nonFerrousTitle}
          </h3>
          <ul className="text-[#363636] font-semibold space-y-3 list-disc list-inside">
            {Array.isArray(nonFerrousItems) &&
              nonFerrousItems.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
