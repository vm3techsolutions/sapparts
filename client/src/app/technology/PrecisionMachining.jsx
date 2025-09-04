// // "use client";

// // import Image from "next/image";
// // import { useTranslation } from "react-i18next";

// // export default function PrecisionMachining() {
// //   const { t } = useTranslation();
// //   const cards = t("precisionMachining.cards", { returnObjects: true });

// //   return (
// //     <section className="Section bg-[#D9D9D9]/20">
// //       {/* Title & Top Description */}
// //       <div className="text-center mb-12">
// //         <h2 className="Heading text-center">
// //           {t("precisionMachining.title")}
// //         </h2>
// //         <p className="Paragraph text-center sm:px-16">
// //           {t("precisionMachining.topDesc")}
// //         </p>
// //       </div>

// //       {/* Cards */}
// //       <div className="grid md:grid-cols-3 gap-8">
// //         {cards.map((card, idx) => (
// //           <div
// //             key={idx}
// //             className="bg-white border-[#FACC48] border rounded-xl p-3 shadow-md overflow-hidden hover:shadow-lg transition"
// //           >
// //             <Image
// //               src="/assets/technology/PrecisionMachining.png"
// //               alt={card.title}
// //               width={400}
// //               height={300}
// //               className="w-full h-48 object-cover rounded-md transition-transform duration-300 ease-in-out hover:scale-90"
// //             />

// //             <div className="p-3 text-center">
// //               <h3 className="text-xl font-semibold text-[#0E509E]">
// //                 {card.title}
// //               </h3>
// //               <p className="text-[#363636] text-sm mt-3">{card.desc}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Bottom Description */}
// //       <div className="text-center sm:mt-12 mt-6">
// //         <p className="Paragraph text-center sm:px-16">
// //           {t("precisionMachining.bottomDesc")}
// //         </p>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import Image from "next/image";
// import { useTranslation } from "react-i18next";

// export default function PrecisionMachining() {
//   const { t } = useTranslation();
//   const cards = t("precisionMachining.cards", { returnObjects: true }) || [];

//   return (
//     <section className="Section bg-[#D9D9D9]/20">
//       {/* Title & Top Description */}
//       <div className="text-center mb-12">
//         <h2 className="Heading text-center">
//           {t("precisionMachining.title", { defaultValue: "Precision Machining" })}
//         </h2>
//         <p className="Paragraph text-center sm:px-16">
//           {t("precisionMachining.topDesc", { defaultValue: "" })}
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="grid md:grid-cols-3 gap-8">
//         {cards.map((card, idx) => (
//           <div
//             key={idx}
//             className="bg-white border border-[#FACC48] rounded-xl p-3 shadow-md overflow-hidden hover:shadow-lg transition"
//           >
//             <Image
//               src={card.image || "/assets/technology/PrecisionMachining.png"}
//               alt={card.title || "Precision Machining"}
//               width={400}
//               height={300}
//               className="w-full h-48 object-cover rounded-md transition-transform duration-300 ease-in-out hover:scale-105"
//             />

//             <div className="p-3 text-center">
//               <h3 className="text-xl font-semibold text-[#0E509E]">
//                 {card.title}
//               </h3>
//               <p className="text-[#363636] text-sm mt-3">{card.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Bottom Description */}
//       <div className="text-center sm:mt-12 mt-6">
//         <p className="Paragraph text-center sm:px-16">
//           {t("precisionMachining.bottomDesc", { defaultValue: "" })}
//         </p>
//       </div>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function PrecisionMachining() {
  const { t } = useTranslation();

  // Normalize i18n return value to an array
  const normalizeToArray = (val) => {
    if (Array.isArray(val)) return val;
    if (val && typeof val === "object") return Object.values(val);
    return [];
  };

  const rawCards = t("precisionMachining.cards", { returnObjects: true });
  const cards = normalizeToArray(rawCards);

  return (
    <section className="Section bg-[#D9D9D9]/20">
      {/* Title & Top Description */}
      <div className="text-center mb-12">
        <h2 className="Heading text-center">
          {t("precisionMachining.title", { defaultValue: "Precision Machining" })}
        </h2>
        <p className="Paragraph text-center sm:px-16">
          {t("precisionMachining.topDesc", { defaultValue: "" })}
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white border border-[#FACC48] rounded-xl p-3 shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <Image
              src="/assets/technology/PrecisionMachining.png"
              alt={card?.title || "Precision Machining"}
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 ease-in-out hover:scale-90"
            />

            <div className="p-3 text-center">
              <h3 className="text-xl font-semibold text-[#0E509E]">
                {card?.title || ""}
              </h3>
              <p className="text-[#363636] text-sm mt-3">
                {card?.desc || ""}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Description */}
      <div className="text-center sm:mt-12 mt-6">
        <p className="Paragraph text-center sm:px-16">
          {t("precisionMachining.bottomDesc", { defaultValue: "" })}
        </p>
      </div>
    </section>
  );
}
