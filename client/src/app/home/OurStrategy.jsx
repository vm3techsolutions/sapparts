// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { FiArrowRight } from "react-icons/fi";
// import { useTranslation } from 'react-i18next';
// import TranslationProvider from "@/component/TranslationProvider";

// export default function StrategySection() {
//   const { t } = useTranslation('translation');
//   return (
//     <div className="Section bg-white">
//       <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8">
//         {/* Left Images (Shown below on mobile) */}
//         <div className="flex gap-6 md:mt-0 mt-8">
//           {/* Left image */}
//           <div className="sm:w-[250px] sm:h-[60vh] w-[20vh] h-[30vh] rounded-lg overflow-hidden shadow-md">
//             <Image
//               src="/assets/home/ourStratergy1.png"
//               alt="Strategy Image 1"
//               width={250}
//               height={250}
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Right image */}
//           <div className="sm:w-[250px] sm:h-[60vh] w-[20vh] h-[30vh] rounded-lg overflow-hidden shadow-md sm:mt-24 mt-16">
//             <Image
//               src="/assets/home/ourStratergy2.png"
//               alt="Strategy Image 2"
//               width={250}
//               height={250}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>

//         {/* Right Content */}
//         <div className="max-w-xl">
//           <h2 className="Heading">{t('our statergy')}</h2>
//           <p className="Paragraph text-left">
//             We focus on innovation, sustainability, and global support to deliver the best solutions for our clients.
//           </p>

//           <div className="space-y-8 mt-6">
//             {[
//               "Engineering Excellence",
//               "Customer-Centric Innovation",
//               "Sustainability & Longevity",
//               "Global Support, Local Commitment",
//             ].map((item, index) => (
//               <Link
//                 key={index}
//                 href="#"
//                 className="flex items-center justify-between group text-[#0E509E]  text-xl font-medium"
//               >
//                 {item}
//                 <div className="bg-[#FACC48] p-2 text-black"><FiArrowRight className="ml- transition-transform group-hover:translate-x-1  " /></div>
//               </Link>
//             ))}
//           </div>

//           <div className="mt-10">
//             <Link
//               href="#"
//               className="inline-block Button"
//             >
//               Know More
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { useTranslation } from 'react-i18next';

export default function StrategySection() {
  const { t } = useTranslation();

  return (
    <div className="Section bg-white">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        
        {/* Left Images (Shown below on mobile) */}
        <div className="flex gap-6 md:mt-0 mt-8">
          {/* Left image */}
          <div className="group sm:w-[250px] sm:h-[60vh] w-[20vh] h-[30vh] rounded-lg overflow-hidden shadow-md">
  <Image
    src="/assets/home/ourStratergy1.png"
    alt="Strategy Image 1"
    width={250}
    height={250}
    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
  />
</div>


          {/* Right image */}
          <div className="group sm:w-[250px] sm:h-[60vh] w-[20vh] h-[30vh] rounded-lg overflow-hidden shadow-md sm:mt-24 mt-16">
  <Image
    src="/assets/home/ourStratergy2.png"
    alt="Strategy Image 2"
    width={250}
    height={250}
    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
  />
</div>

        </div>

        {/* Right Content */}
        <div className="max-w-xl">
          <h2 className="Heading">{t('our statergy')}</h2>

          <p className="Paragraph text-left">
            {t('Our-Strategy-Paragraph')}
          </p>

          <div className="space-y-8 mt-6">
            {[
              t("Engineering Excellence"),
              t("Customer-Centric Innovation"),
              t("Sustainability & Longevity"),
              t("Global Support, Local Commitment"),
            ].map((key, index) => (
              <Link
                key={index}
                href="#"
                className="flex items-center justify-between group text-[#0E509E] text-xl font-medium"
              >
                {t(key)}
                <div className="bg-[#FACC48] p-2 text-black">
                  <FiArrowRight className="ml- transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <Link href="#" className="inline-block Button">
              {t('Know More')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


