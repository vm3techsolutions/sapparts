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
//             {items.map((item, idx) => (
//               <li key={idx}>{item}</li>
//             ))}
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

  const items = t("materialsSizes6.items", { returnObjects: true });

  return (
    <section className="bg-[#FACC48] Section">
      <h2 className="Heading text-center">
        {t("materialsSizes6.sectionTitle")}
      </h2>

      <div className="max-w-4xl mx-auto flex justify-center mt-9">
        <div className="text-[#0E509E]">
          <h3 className="text-2xl font-semibold text-center mb-4">
            {t("materialsSizes6.subTitle")}
          </h3>
          <ul className="text-[#363636] font-semibold space-y-3 list-disc list-inside">
            {Array.isArray(items) &&
              items.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
