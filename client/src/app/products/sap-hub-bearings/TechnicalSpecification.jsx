// "use client";
// import { useTranslation } from "react-i18next";

// export default function TechnicalSpecs() {
//   const { t } = useTranslation();

//   const specs = t("technicalSpecs5.rows", { returnObjects: true });

//   return (
//     <div className="Section bg-white">
//       <h2 className="Heading text-center mb-2">
//         {t("technicalSpecs5.sectionTitle")}
//       </h2>
//       <table className="w-full border-collapse text-center mx-auto">
//         <thead>
//           <tr>
//             <th className="bg-[#D9D9D9]/60 text-[#363636] px-4 py-3 text-center border-2 border-[#0E509E] w-[40%]">
//               {t("technicalSpecs5.feature")}
//             </th>
//             <th className="bg-[#D9D9D9]/60 text-[#363636] px-4 py-3 text-center border-2 border-[#0E509E] w-[60%]">
//               {t("technicalSpecs5.benefit")}
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {specs.map((row, index) => (
//             <tr key={index} className="bg-[#D9D9D9]/15">
//               <td className="border-2 border-[#0E509E] text-[#0E509E] px-4 py-3 w-[40%]">
//                 {row.feature}
//               </td>
//               <td className="border-2 border-[#0E509E] text-[#0E509E] px-4 py-3 w-[60%]">
//                 {row.benefit}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

"use client";
import { useTranslation } from "react-i18next";

export default function TechnicalSpecs() {
  const { t } = useTranslation();

  const specs = t("technicalSpecs5.rows", { returnObjects: true });
  const rows = Array.isArray(specs) ? specs : [];

  return (
    <div className="Section bg-white">
      <h2 className="Heading text-center mb-2">
        {t("technicalSpecs5.sectionTitle")}
      </h2>
      <table className="w-full border-collapse text-center mx-auto">
        <thead>
          <tr>
            <th className="bg-[#D9D9D9]/60 text-[#363636] px-4 py-3 text-center border-2 border-[#0E509E] w-[40%]">
              {t("technicalSpecs5.feature")}
            </th>
            <th className="bg-[#D9D9D9]/60 text-[#363636] px-4 py-3 text-center border-2 border-[#0E509E] w-[60%]">
              {t("technicalSpecs5.benefit")}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="bg-[#D9D9D9]/15">
              <td className="border-2 border-[#0E509E] text-[#0E509E] px-4 py-3 w-[40%]">
                {row.feature}
              </td>
              <td className="border-2 border-[#0E509E] text-[#0E509E] px-4 py-3 w-[60%]">
                {row.benefit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
