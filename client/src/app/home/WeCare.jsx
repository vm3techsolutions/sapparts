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
    knowMoreLink: "/sustainability",
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
      en: "We believe education is the most powerful tool for empowerment. By investing in education, we aim to create opportunities, uplift underprivileged communities, and nurture the next generation of leaders and innovators.",
      ja: "私たちは、教育がエンパワーメントのための最も強力な手段であると信じています。教育への投資を通じて、機会を創出し、恵まれない地域社会を支援し、次世代のリーダーやイノベーターを育成することを目指しています。",
      de: "Wir glauben, dass Bildung das mächtigste Werkzeug zur Stärkung von Menschen ist. Durch Investitionen in Bildung wollen wir Chancen schaffen, benachteiligte Gemeinschaften fördern und die nächste Generation von Führungskräften und Innovatoren heranbilden.",
    },
    number: "01",
    link: "/sustainability",
  },
  {
    id: 2,
    title: {
      en: "Environment",
      ja: "環境",
      de: "Umwelt",
    },
    desc: {
      en: "We understand that our planet’s resources are precious and limited. At Sapparts, we integrate eco-conscious practices into our operations and extend our responsibility beyond our facilities to contribute to a greener tomorrow.",
      ja: "私たちは、地球の資源が貴重で限られていることを理解しています。Sappartsでは、環境に配慮した取り組みを事業運営に取り入れ、施設を超えてより環境に優しい未来に貢献しています。",
      de: "Wir wissen, dass die Ressourcen unseres Planeten wertvoll und begrenzt sind. Bei Sapparts integrieren wir umweltbewusste Praktiken in unsere Abläufe und übernehmen Verantwortung über unsere Einrichtungen hinaus, um zu einer grüneren Zukunft beizutragen.",
    },
    number: "02",
    link: "/sustainability",
  },
  {
    id: 3,
    title: {
      en: "Healthcare",
      ja: "健康医療",
      de: "Gesundheitswesen",
    },
    desc: {
      en: "A healthy society is a strong society. We are committed to improving access to healthcare, promoting wellness, and supporting medical initiatives that make essential services available to those in need.",
      ja: "健康的な社会は強い社会です。私たちは、医療へのアクセスの改善、健康促進、および必要としている人々に基本的な医療サービスを提供する取り組みを支援することに尽力しています。",
      de: "Eine gesunde Gesellschaft ist eine starke Gesellschaft. Wir setzen uns dafür ein, den Zugang zur Gesundheitsversorgung zu verbessern, das Wohlbefinden zu fördern und medizinische Initiativen zu unterstützen, die grundlegende Dienstleistungen für Bedürftige bereitstellen.",
    },
    number: "03",
    link: "/sustainability",
  },
  {
    id: 4,
    title: {
      en: "Community",
      ja: "共同体",
      de: "Gemeinschaft",
    },
    desc: {
      en: "We believe in giving back to the communities that support us. Beyond business, we focus on improving quality of life, fostering inclusion, and creating opportunities for growth within the neighborhoods we operate.",
      ja: "私たちは、私たちを支えてくれる地域社会に還元することを信条としています。ビジネスの枠を超え、生活の質の向上、包括性の促進、そして私たちが活動する地域での成長の機会を創出することに注力しています。",
      de: "Wir glauben daran, den Gemeinschaften etwas zurückzugeben, die uns unterstützen. Über das Geschäft hinaus konzentrieren wir uns darauf, die Lebensqualität zu verbessern, Inklusion zu fördern und Wachstumschancen in den Gemeinden zu schaffen, in denen wir tätig sind.",
    },
    number: "04",
    link: "/sustainability",
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
