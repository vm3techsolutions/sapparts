// "use client";
// import { useTranslation } from "react-i18next";

// export default function ManufacturingTesting() {
//   const { t } = useTranslation();

//   const leftFeatures = [
//     t("manufacturingTesting.left.features.0"),
//     t("manufacturingTesting.left.features.1"),
//     t("manufacturingTesting.left.features.2"),
//   ];

//   const rightFeatures = [
//     t("manufacturingTesting.right.features.0"),
//     t("manufacturingTesting.right.features.1"),
//     t("manufacturingTesting.right.features.2"),
//   ];

//   return (
//     <section className="Section bg-white">
//       {/* Title */}
//       <h2 className="Heading text-center">
//         {t("manufacturingTesting.sectionTitle")}
//       </h2>
//       <p className="text-center Paragraph">{t("manufacturingTesting.description")}</p>

//       {/* Card Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-12 gap-8 mt-10 mx-auto">
//         {/* Left Card */}
//         <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 group hover:bg-[#0E509E] hover:text-white border border-[#000000]/10">
//           <h3 className="text-2xl font-bold text-[#0E509E] group-hover:text-white mb-2">
//             {t("manufacturingTesting.left.title")}
//           </h3>
//           <hr className="w-10 border-t-2 border-yellow-400 mb-4" />
//           <ul className="list-disc font-semibold mt-8 list-inside space-y-5 text-[#363636] group-hover:text-white">
//             {leftFeatures.map((feature, idx) => (
//               <li key={idx}>{feature}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Right Card */}
//         <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 group hover:bg-[#0E509E] hover:text-white border border-[#000000]/10">
//           <h3 className="text-2xl font-bold text-[#0E509E] group-hover:text-white mb-2">
//             {t("manufacturingTesting.right.title")}
//           </h3>
//           <hr className="w-10 border-t-2 border-yellow-400 mb-4" />
//           <ul className="list-disc font-semibold mt-8 list-inside space-y-5 text-[#363636] group-hover:text-white">
//             {rightFeatures.map((feature, idx) => (
//               <li key={idx}>{feature}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useTranslation } from "react-i18next";

function FeatureCard({ title, features }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 group hover:bg-[#0E509E] hover:text-white border border-[#000000]/10">
      <h3 className="text-2xl font-bold text-[#0E509E] group-hover:text-white mb-2">
        {title}
      </h3>
      <hr className="w-10 border-t-2 border-yellow-400 mb-4" />
      <ul className="list-disc font-semibold mt-6 list-inside space-y-4 text-[#363636] group-hover:text-white">
        {features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}

export default function ManufacturingTesting() {
  const { t } = useTranslation();

  const leftFeatures = [
    t("manufacturingTesting.left.features.0"),
    t("manufacturingTesting.left.features.1"),
    t("manufacturingTesting.left.features.2"),
  ];

  const rightFeatures = [
    t("manufacturingTesting.right.features.0"),
    t("manufacturingTesting.right.features.1"),
    t("manufacturingTesting.right.features.2"),
  ];

  return (
    <section className="Section bg-white">
      {/* Title */}
      <h2 className="Heading text-center">
        {t("manufacturingTesting.sectionTitle")}
      </h2>
      <p className="text-center Paragraph max-w-3xl mx-auto">
        {t("manufacturingTesting.description")}
      </p>

      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-12 gap-8 mt-10 mx-auto">
        <FeatureCard
          title={t("manufacturingTesting.left.title")}
          features={leftFeatures}
        />
        <FeatureCard
          title={t("manufacturingTesting.right.title")}
          features={rightFeatures}
        />
      </div>
    </section>
  );
}

