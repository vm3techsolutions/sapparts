// "use client";
// import { useTranslation } from "react-i18next";

// export default function MaterialsSizes() {
//   const { t } = useTranslation();

//   const items = [
//     {
//       title: t("materialsSizes.metalSealRings.title"),
//       details: [
//         t("materialsSizes.metalSealRings.detail1"),
//         t("materialsSizes.metalSealRings.detail2"),
//       ],
//     },
//     {
//       title: t("materialsSizes.elastomer.title"),
//       details: [t("materialsSizes.elastomer.detail1")],
//     },
//     {
//       title: null,
//       details: [t("materialsSizes.sizeRange")],
//     },
//     {
//       title: null,
//       details: [t("materialsSizes.oRingCompression")],
//     },
//     {
//       title: t("materialsSizes.surfaceFinish.title"),
//       details: [t("materialsSizes.surfaceFinish.detail1")],
//     },
//   ];

//   return (
//     <section className="bg-[#FACC48] Section">
//       <h2 className="Heading text-center">
//         {t("materialsSizes.sectionTitle")}
//       </h2>

//       <div className="max-w-4xl mx-auto flex justify-center mt-9 px-4">
//         <div className="text-[#0E509E]">
//           <ul className="text-[#363636] font-semibold space-y-4 list-disc list-outside pl-6">
//             {items.map((item, index) => (
//               <li key={index}>
//                 {item.title && (
//                   <span className="block font-bold">{item.title}</span>
//                 )}
//                 {item.details.map((detail, idx) => (
//                   <span key={idx} className="block pl-1">
//                     {detail}
//                   </span>
//                 ))}
//               </li>
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

  const items = [
    {
      title: t("materialsSizes.metalSealRings.title"),
      details: [
        t("materialsSizes.metalSealRings.detail1"),
        t("materialsSizes.metalSealRings.detail2"),
      ],
    },
    {
      title: t("materialsSizes.elastomer.title"),
      details: [t("materialsSizes.elastomer.detail1")],
    },
    {
      title: null,
      details: [t("materialsSizes.sizeRange")],
    },
    {
      title: null,
      details: [t("materialsSizes.oRingCompression")],
    },
    {
      title: t("materialsSizes.surfaceFinish.title"),
      details: [t("materialsSizes.surfaceFinish.detail1")],
    },
  ];

  return (
    <section className="bg-[#FACC48] Section">
      <h2 className="Heading text-center">
        {t("materialsSizes.sectionTitle")}
      </h2>

      <div className="max-w-4xl mx-auto flex justify-center mt-9 px-4">
        <div className="text-[#0E509E] w-full">
          {items.map((item, index) => (
            <div key={index} className="mb-6">
              {item.title && (
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              )}
              <ul className="text-[#363636] font-semibold space-y-2 list-disc list-outside pl-6">
                {item.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
