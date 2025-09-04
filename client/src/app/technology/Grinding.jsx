// "use client";

// import { useTranslation } from "react-i18next";

// export default function GrindingSuperfinishing() {
//   const { t } = useTranslation();

//   const processes = [
//     {
//       title: t("grinding.processes.centerless.title"),
//       desc: t("grinding.processes.centerless.desc"),
//     },
//     {
//       title: t("grinding.processes.bore.title"),
//       desc: t("grinding.processes.bore.desc"),
//     },
//     {
//       title: t("grinding.processes.surface.title"),
//       desc: t("grinding.processes.surface.desc"),
//     },
//   ];

//   return (
//     <section className="py-12 bg-white">
//       {/* Title */}
//       <h2 className="Heading text-center">
//         {t("grinding.title")}
//       </h2>

//       {/* Description */}
//       <p className="Paragraph text-center sm:px-16 px-6">
//         {t("grinding.description")}
//       </p>

//       {/* Subtitle */}
//       <h3 className="text-xl font-semibold text-center text-[#0E509E] mt-8">
//         {t("grinding.subtitle")}
//       </h3>

//       {/* Yellow Boxes */}
//       <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-0 bg-[#FACC48] overflow-hidden shadow-lg sm:px-6">
//         {processes.map((item, idx) => (
//           <div
//             key={idx}
//             className={`p-6 text-center ${
//               idx !== processes.length - 1 ? "sm:border-r-1 border-[#0E509E]" : ""
//             }`}
//           >
//             <h4 className="text-lg font-bold text-gray-800">{item.title}</h4>
//             <p className="text-gray-900 mt-2 text-sm leading-relaxed">{item.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import { useTranslation } from "react-i18next";

export default function GrindingSuperfinishing() {
  const { t } = useTranslation();

  const processes = [
    {
      title: t("grinding.processes.centerless.title", { defaultValue: "" }),
      desc: t("grinding.processes.centerless.desc", { defaultValue: "" }),
    },
    {
      title: t("grinding.processes.bore.title", { defaultValue: "" }),
      desc: t("grinding.processes.bore.desc", { defaultValue: "" }),
    },
    {
      title: t("grinding.processes.surface.title", { defaultValue: "" }),
      desc: t("grinding.processes.surface.desc", { defaultValue: "" }),
    },
  ];

  return (
    <section className="py-12 bg-white">
      {/* Title */}
      <h2 className="Heading text-center">
        {t("grinding.title", { defaultValue: "" })}
      </h2>

      {/* Description */}
      <p className="Paragraph text-center sm:px-16 px-6">
        {t("grinding.description", { defaultValue: "" })}
      </p>

      {/* Subtitle */}
      <h3 className="text-xl font-semibold text-center text-[#0E509E] mt-8">
        {t("grinding.subtitle", { defaultValue: "" })}
      </h3>

      {/* Yellow Boxes */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-0 bg-[#FACC48] overflow-hidden shadow-lg sm:px-6">
        {processes.map((item, idx) => (
          <div
            key={idx}
            className={`p-6 text-center ${
              idx !== processes.length - 1 ? "sm:border-r border-[#0E509E]" : ""
            }`}
          >
            <h4 className="text-lg font-bold text-gray-800">{item.title}</h4>
            <p className="text-gray-900 mt-2 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
