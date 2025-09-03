// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useTranslation } from "react-i18next";


// export default function ContributionSection() {
//   const { t } = useTranslation("common");
//   const [cards, setCards] = useState([]);
//   const [sectionData, setSectionData] = useState({
//     title: 'We Care, We Contribute!',
//     description:'This handy tool helps you create dummy text for all your layout needs. We are gradually adding new This handy tool helps you create dummy text for all your layout needs. We are gradually adding new ',
//     mainImage: "/assets/home/weCareMainImg.png",
//     knowMoreLink: "/contribution",
//   });

//   useEffect(() => {
//     fetch("/data/home/WeCare.json")
//       .then((res) => res.json())
//       .then((data) => setCards(data || []))
//       .catch((error) => console.error("Fetch error:", error));
//   }, []);

//   if (cards.length === 0) return null;

//   const leftCards = cards.slice(0, 2);
//   const rightCards = cards.slice(2);

//   return (
//     <div className="Section bg-white">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="Heading text-center">{t('We Care, We Contribute!')}</h2>
//         <p className="Paragraph text-center">{t('We care Description')}</p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
//           {/* Left Cards */}
//           <div className="flex flex-col justify-between gap-6">
//             {leftCards.map((item) => (
//               <div key={item.id} className="bg-[#F6F8FC]/50 p-6 text-left h-full">
//                 <div className="flex items-center justify-between mb-2">
//                   <h3 className="text-[#0E509E] font-semibold text-lg">{item.title}</h3>
//                   <p className="text-[#FACC48]/50 font-bold text-5xl">
//                     {item.number}
//                   </p>
//                 </div>
//                 <p className="text-md text-[#363636] my-6">{item.desc}</p>
//                 <Link href={item.link}>
//                   <span className="inline-block Button">
//                    {t("Read More")}
//                   </span>
//                 </Link>
//               </div>
//             ))}
//           </div>

//           {/* Center Image */}
//           <div className="flex items-stretch justify-center">
//             <Image
//               src="/assets/home/weCare.png"
//               alt="“We Care. We Contribute.”"
//               width={300}
//               height={400}
//               className=" object-contain"
//             />
//           </div>

//           {/* Right Cards */}
//           <div className="flex flex-col justify-between gap-6">
//             {rightCards.map((item) => (
//               <div key={item.id} className="bg-[#F6F8FC]/50 p-6 text-left h-full">
//                 <div className="flex items-center justify-between mb-2">
//                   <h3 className="text-[#0E509E] font-semibold text-lg">{item.title}</h3>
//                   <p className="text-[#FACC48]/50 font-bold text-5xl">
//                     {item.number}
//                   </p>
//                 </div>
//                 <p className="text-md text-[#363636] my-6">{item.desc}</p>
//                 <Link href={item.link}>
//                   <span className="inline-block Button ">
//                     {t("Read More")}
//                   </span>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mt-10 text-center">
//           <Link href={sectionData.knowMoreLink}>
//             <button className="Button">
//             {t("Read More")}
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function ContributionSection() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "en";
  const [cards, setCards] = useState([]);
  const sectionData = {
    title: t("“We Care, We Contribute!”"),
    description: t("We care Description"),
    mainImage: "/assets/home/weCareMainImg.png",
    knowMoreLink: "/contribution",
  };

  // Static cards data (with German added)
  const staticCards = [
    {
      id: 1,
      title: {
        en: "Education",
        ja: "教育",
        de: "Bildung",
      },
      desc: {
        en: "This handy tool helps you create dummy text for all your layout needs. We are gradually adding new",
        ja: "この便利なツールは、すべてのレイアウトのニーズに合わせてダミーテキストを作成するのに役立ちます。私たちは新しい内容を徐々に追加しています。",
        de: "Dieses praktische Tool hilft Ihnen, Blindtext für all Ihre Layout-Bedürfnisse zu erstellen. Wir fügen nach und nach neue Inhalte hinzu.",
      },
      number: "01",
      link: "/education",
    },
    {
      id: 2,
      title: {
        en: "Environment",
        ja: "環境",
        de: "Umwelt",
      },
      desc: {
        en: "This handy tool helps you create dummy text for all your layout needs. We are gradually adding new",
        ja: "この便利なツールは、すべてのレイアウトのニーズに合わせてダミーテキストを作成するのに役立ちます。私たちは新しい内容を徐々に追加しています。",
        de: "Dieses praktische Tool hilft Ihnen, Blindtext für all Ihre Layout-Bedürfnisse zu erstellen. Wir fügen nach und nach neue Inhalte hinzu.",
      },
      number: "02",
      link: "/environment",
    },
    {
      id: 3,
      title: {
        en: "Healthcare",
        ja: "健康医療",
        de: "Gesundheitswesen",
      },
      desc: {
        en: "This handy tool helps you create dummy text for all your layout needs. We are gradually adding new",
        ja: "この便利なツールは、すべてのレイアウトのニーズに合わせてダミーテキストを作成するのに役立ちます。私たちは新しい内容を徐々に追加しています。",
        de: "Dieses praktische Tool hilft Ihnen, Blindtext für all Ihre Layout-Bedürfnisse zu erstellen. Wir fügen nach und nach neue Inhalte hinzu.",
      },
      number: "03",
      link: "/healthcare",
    },
    {
      id: 4,
      title: {
        en: "Community",
        ja: "共同体",
        de: "Gemeinschaft",
      },
      desc: {
        en: "This handy tool helps you create dummy text for all your layout needs. We are gradually adding new",
        ja: "この便利なツールは、すべてのレイアウトのニーズに合わせてダミーテキストを作成するのに役立ちます。私たちは新しい内容を徐々に追加しています。",
        de: "Dieses praktische Tool hilft Ihnen, Blindtext für all Ihre Layout-Bedürfnisse zu erstellen. Wir fügen nach und nach neue Inhalte hinzu.",
      },
      number: "04",
      link: "/community",
    },
  ];

  useEffect(() => {
    setCards(staticCards);
  }, []);

  if (cards.length === 0) return null;

  const leftCards = cards.slice(0, 2);
  const rightCards = cards.slice(2);

  return (
    <div className="Section bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="Heading text-center">{sectionData.title}</h2>
        <p className="Paragraph text-center">{sectionData.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Left Cards */}
          <div className="flex flex-col justify-between gap-6">
            {leftCards.map((item) => (
              <div key={item.id} className="bg-[#F6F8FC]/50 p-6 text-left h-full">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-[#0E509E] font-semibold text-lg">
                    {item.title[currentLang]}
                  </h3>
                  <p className="text-[#FACC48]/50 font-bold text-5xl">{item.number}</p>
                </div>
                <p className="text-md text-[#363636] my-6">{item.desc[currentLang]}</p>
                <Link href={item.link}>
                  <span className="inline-block Button">{t("Read More")}</span>
                </Link>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="hidden md:flex items-stretch justify-center overflow-hidden">
            <Image
              src="/assets/home/weCare.png"
              alt="“We Care. We Contribute.”"
              width={300}
              height={400}
              className="object-contain transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>

          {/* Right Cards */}
          <div className="flex flex-col justify-between gap-6">
            {rightCards.map((item) => (
              <div key={item.id} className="bg-[#F6F8FC]/50 p-6 text-left h-full">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-[#0E509E] font-semibold text-lg">
                    {item.title[currentLang]}
                  </h3>
                  <p className="text-[#FACC48]/50 font-bold text-5xl">{item.number}</p>
                </div>
                <p className="text-md text-[#363636] my-6">{item.desc[currentLang]}</p>
                <Link href={item.link}>
                  <span className="inline-block Button">{t("Read More")}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* "Know More" Button */}
        <div className="hidden md:block mt-10 text-center">
          <Link href={sectionData.knowMoreLink}>
            <button className="Button">{t("Know More")}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
