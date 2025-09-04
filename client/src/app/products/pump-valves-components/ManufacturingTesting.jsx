// "use client";
// import { useTranslation } from "react-i18next";

// export default function ManufacturingTesting() {
//   const { t } = useTranslation();

//   const productionPoints = t("manufacturingTesting4.cards.production.points", { returnObjects: true });
//   const testingPoints = t("manufacturingTesting4.cards.testing.points", { returnObjects: true });

//   return (
//     <section className="Section bg-white">
//       {/* Title */}
//       <h2 className="Heading text-center">
//         {t("manufacturingTesting4.sectionTitle")}
//       </h2>
//       <p className="text-center Paragraph">
//         {t("manufacturingTesting4.intro")}
//       </p>

//       {/* Card Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-12 gap-8 mt-10 mx-auto">
//         {/* Left Card */}
//         <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 group hover:bg-[#0E509E] hover:text-white border border-[#000000]/10">
//           <h3 className="text-2xl font-bold text-[#0E509E] group-hover:text-white mb-2">
//             {t("manufacturingTesting4.cards.production.title")}
//           </h3>
//           <hr className="w-10 border-t-2 border-yellow-400 mb-4" />
//           <ul className="list-disc font-semibold mt-8 list-inside space-y-5 text-[#363636] group-hover:text-white">
//             {productionPoints.map((point, idx) => (
//               <li key={idx}>{point}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Right Card */}
//         <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 group hover:bg-[#0E509E] hover:text-white border border-[#000000]/10">
//           <h3 className="text-2xl font-bold text-[#0E509E] group-hover:text-white mb-2">
//             {t("manufacturingTesting4.cards.testing.title")}
//           </h3>
//           <hr className="w-10 border-t-2 border-yellow-400 mb-4" />
//           <ul className="list-disc font-semibold mt-8 list-inside space-y-5 text-[#363636] group-hover:text-white">
//             {testingPoints.map((point, idx) => (
//               <li key={idx}>{point}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import { useTranslation } from "react-i18next";

export default function ManufacturingTesting() {
  const { t } = useTranslation();

  const productionPoints = t("manufacturingTesting4.cards.production.points", {
    returnObjects: true,
  });
  const testingPoints = t("manufacturingTesting4.cards.testing.points", {
    returnObjects: true,
  });

  return (
    <section className="Section bg-white">
      {/* Title */}
      <h2 className="Heading text-center">
        {t("manufacturingTesting4.sectionTitle")}
      </h2>
      <p className="text-center Paragraph">
        {t("manufacturingTesting4.intro")}
      </p>

      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-12 gap-8 mt-10 mx-auto">
        {/* Left Card */}
        <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 group hover:bg-[#0E509E] hover:text-white border border-[#000000]/10">
          <h3 className="text-2xl font-bold text-[#0E509E] group-hover:text-white mb-2">
            {t("manufacturingTesting4.cards.production.title")}
          </h3>
          <hr className="w-10 border-t-2 border-yellow-400 mb-4" />
          <ul className="list-disc font-semibold mt-8 list-inside space-y-5 text-[#363636] group-hover:text-white">
            {Array.isArray(productionPoints) ? (
              productionPoints.map((point, idx) => <li key={idx}>{point}</li>)
            ) : (
              <li>{productionPoints}</li>
            )}
          </ul>
        </div>

        {/* Right Card */}
        <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 group hover:bg-[#0E509E] hover:text-white border border-[#000000]/10">
          <h3 className="text-2xl font-bold text-[#0E509E] group-hover:text-white mb-2">
            {t("manufacturingTesting4.cards.testing.title")}
          </h3>
          <hr className="w-10 border-t-2 border-yellow-400 mb-4" />
          <ul className="list-disc font-semibold mt-8 list-inside space-y-5 text-[#363636] group-hover:text-white">
            {Array.isArray(testingPoints) ? (
              testingPoints.map((point, idx) => <li key={idx}>{point}</li>)
            ) : (
              <li>{testingPoints}</li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
