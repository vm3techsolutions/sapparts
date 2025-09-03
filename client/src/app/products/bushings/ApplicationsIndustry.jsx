"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function ApplicationsUseCases() {
  const { t } = useTranslation();

  const useCases = [
    {
      id: 1,
      icon: "/assets/products/Applications1.png",
      title: t("applications2.case1.title"),
      points: [
        t("applications2.case1.point1"),
        t("applications2.case1.point2"),
        t("applications2.case1.point3"),
      ],
    },
    {
      id: 2,
      icon: "/assets/products/Applications2.png",
      title: t("applications2.case2.title"),
      points: [
        t("applications2.case2.point1"),
        t("applications2.case2.point2"),
        t("applications2.case2.point3"),
      ],
    },
    {
      id: 3,
      icon: "/assets/products/Applications3.png",
      title: t("applications2.case3.title"),
      points: [
        t("applications2.case3.point1"),
        t("applications2.case3.point2"),
      ],
    },
    {
      id: 4,
      icon: "/assets/products/Applications4.png",
      title: t("applications2.case4.title"),
      points: [
        t("applications2.case4.point1"),
        t("applications2.case4.point2"),
      ],
    },
  ];

  return (
    <section className="Section bg-white">
      <h2 className="Heading text-center">
        {t("applications2.sectionTitle")}
      </h2>

      <div className="grid md:grid-cols-2 gap-10 mx-auto">
        {useCases.map((item) => (
          <div
            key={item.id}
            className="group transition-all duration-300 bg-white hover:bg-[#0E509E] shadow-md rounded-md py-8 cursor-pointer border border-[#000000]/10"
          >
            <div className="flex flex-col items-center text-center">
              <Image
                src={item.icon}
                alt={item.title}
                width={60}
                height={60}
                className="mb-4 transition-all duration-300 group-hover:brightness-0 group-hover:invert h-[15vh] w-[15vh]"
              />
              <h3 className="text-2xl font-bold text-[#0E509E] group-hover:text-white">
                {item.title}
              </h3>
              <span className="w-20 h-[2px] bg-[#FACC48] my-2" />
              <ul className="text-[#363636] group-hover:text-white space-y-2 text-md font-semibold mt-1 mb-2 px-6">
                {item.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
