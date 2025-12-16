// "use client";

// import { useTranslation } from "react-i18next";

// export default function SurfaceTreatment() {
//   const { t } = useTranslation();

//   const treatments = [
//     {
//       number: "01",
//       title: t("surface.treatments.1.title"),
//       desc: t("surface.treatments.1.desc"),
//     },
//     {
//       number: "02",
//       title: t("surface.treatments.2.title"),
//       desc: t("surface.treatments.2.desc"),
//     },
//     {
//       number: "03",
//       title: t("surface.treatments.3.title"),
//       desc: t("surface.treatments.3.desc"),
//     },
//     {
//       number: "04",
//       title: t("surface.treatments.4.title"),
//       desc: t("surface.treatments.4.desc"),
//     },
//     {
//       number: "05",
//       title: t("surface.treatments.5.title"),
//       desc: t("surface.treatments.5.desc"),
//     },
//   ];

//   return (
//     <section className="Section bg-white">
//       {/* Title */}
//       <div className="text-center mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-[#FACC48]">
//           {t("surface.title")}
//         </h2>
//         <h3 className="text-xl md:text-xl font-semibold text-[#0E509E] mt-2">
//           {t("surface.subtitle")}
//         </h3>
//         <p className="Paragraph text-center mt-3">
//           {t("surface.description")}
//         </p>
//       </div>

//       {/* First Row: 3 cards */}
//       <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
//         {treatments.slice(0, 3).map((item, idx) => (
//           <div
//             key={idx}
//             className="relative bg-[#D9D9D9]/20 p-6 rounded-lg shadow-md"
//           >
//             {/* Number */}
//             <span className="absolute top-3 left-3 text-3xl font-bold text-[#FACC48]/30">
//               {item.number}
//             </span>

//             {/* Title */}
//             <h3 className="text-lg font-semibold text-[#0E509E] mt-5 text-center">
//               {item.title}
//             </h3>

//             {/* Description */}
//             <p className="mt-2 text-md text-gray-700 leading-relaxed text-center">
//               {item.desc}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Second Row: 2 cards centered */}
//       <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6 max-w-4xl mx-auto">
//         {treatments.slice(3).map((item, idx) => (
//           <div
//             key={idx}
//             className="relative bg-[#D9D9D9]/20 p-6 rounded-lg shadow-md w-full sm:w-1/2"
//           >
//             {/* Number */}
//             <span className="absolute top-3 left-3 text-3xl font-bold text-[#FACC48]/30">
//               {item.number}
//             </span>

//             {/* Title */}
//             <h3 className="text-lg font-semibold text-[#0E509E] mt-5 text-center">
//               {item.title}
//             </h3>

//             {/* Description */}
//             <p className="mt-2 text-md text-gray-700 leading-relaxed text-center">
//               {item.desc}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function SurfaceTreatment() {
  const { t } = useTranslation();

  const normalizeToArray = (val) => {
    if (Array.isArray(val)) return val;
    if (val && typeof val === "object") return Object.values(val);
    return [];
  };

  const rawTreatments = t("surface.treatments", { returnObjects: true });
  const treatments = normalizeToArray(rawTreatments);

  return (
    <section className="Section bg-white">
      <div className="mx-auto">

        {/* Title & Description */}
        <div className="text-center mb-10">
          <h2 className="Heading">
            {t("surface.title", { defaultValue: "" })}
          </h2>
          <h3 className="text-xl font-semibold text-[#0E509E] mt-2">
            {t("surface.subtitle", { defaultValue: "" })}
          </h3>
          <p className="Paragraph sm:px-16 mt-3">
            {t("surface.description", { defaultValue: "" })}
          </p>
        </div>

        {/* Image + Content */}
        <div className="flex flex-col lg:flex-row gap-10 items-stretch">

          {/* LEFT IMAGE */}
          <div className="relative w-full lg:w-1/2 flex flex-col">
            <div className="flex-1 relative">
              <Image
                src="/assets/strategy/CenterBanner.png"
                alt="Surface Treatment"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <div className="bg-[#FACC48] h-16 rounded-b-lg"></div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-2/3 flex flex-col">
            <h3 className="text-xl md:text-2xl font-bold text-[#0E509E] mb-6">
              {t("surface.pointsTitle", {
                defaultValue: "Our Surface Treatment Capabilities",
              })}
            </h3>

            <div className="space-y-6">
              {treatments.map((item, idx) => (
                <div key={idx}>
                  <h4 className="font-semibold text-lg text-[#0E509E]">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 mt-2">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
