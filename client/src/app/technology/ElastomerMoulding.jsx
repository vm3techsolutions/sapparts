// "use client";

// import { useTranslation } from "react-i18next";

// export default function ElastomerSection() {
//   const { t } = useTranslation();

//   const boxes = [
//     {
//       title: t("elastomer.box1.title"),
//       desc: t("elastomer.box1.desc"),
//     },
//     {
//       title: t("elastomer.box2.title"),
//       desc: t("elastomer.box2.desc"),
//     },
//     {
//       title: t("elastomer.box3.title"),
//       desc: t("elastomer.box3.desc"),
//     },
//     {
//       title: t("elastomer.box4.title"),
//       desc: t("elastomer.box4.desc"),
//     },
//   ];

//   return (
//     <section className="Section bg-white">
//       {/* Section Title */}
//       <div className="text-center mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-[#FACC48]">
//           {t("elastomer.title")}
//         </h2>
//         <p className="Paragraph text-center mt-3">
//           {t("elastomer.description")}
//         </p>
//       </div>

//       {/* Grid Boxes */}
//       <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
//         {boxes.map((box, idx) => (
//           <div
//             key={idx}
//             className="bg-[#0E509E] text-white p-8 rounded-lg shadow-md text-center"
//           >
//             <h3 className="text-xl font-semibold text-[#FACC48]">
//               {box.title}
//             </h3>
//             <p className="mt-2 text-md leading-relaxed">{box.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import { useTranslation } from "react-i18next";

export default function ElastomerSection() {
  const { t } = useTranslation();

  const boxes = [
    {
      title: t("elastomer.box1.title", { defaultValue: "" }),
      desc: t("elastomer.box1.desc", { defaultValue: "" }),
    },
    {
      title: t("elastomer.box2.title", { defaultValue: "" }),
      desc: t("elastomer.box2.desc", { defaultValue: "" }),
    },
    {
      title: t("elastomer.box3.title", { defaultValue: "" }),
      desc: t("elastomer.box3.desc", { defaultValue: "" }),
    },
    {
      title: t("elastomer.box4.title", { defaultValue: "" }),
      desc: t("elastomer.box4.desc", { defaultValue: "" }),
    },
  ];

  return (
    <section className="Section bg-white">
      {/* Section Title */}
      <div className="text-center mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FACC48]">
          {t("elastomer.title", { defaultValue: "" })}
        </h2>
        <p className="Paragraph text-center mt-3">
          {t("elastomer.description", { defaultValue: "" })}
        </p>
      </div>

      {/* Grid Boxes */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {boxes.map((box, idx) => (
          <div
            key={idx}
            className="bg-[#0E509E] text-white p-8 rounded-lg shadow-md text-center"
          >
            <h3 className="text-xl font-semibold text-[#FACC48]">
              {box.title}
            </h3>
            <p className="mt-2 text-md leading-relaxed">{box.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

