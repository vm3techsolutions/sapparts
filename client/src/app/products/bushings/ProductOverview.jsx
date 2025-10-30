"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

export default function ProductOverview() {
  const { t } = useTranslation();

  return (
    <section className="Section bg-white ">
      <div className="flex flex-col md:flex-row items-center gap-20 mx-auto">
        
        {/* Left: Image with double dashed border */}
        <div className="border-[3px] border-dashed border-yellow-400 p-6 ">
          <div className="border-[3px] border-dashed border-yellow-400 p- ">
            <div className="w-[280px] md:w-[400px]">
              <Image
                src="/assets/home/Bushing01.jpg" 
                alt={t("productOverview2.imageAlt")}
                width={600}
                height={400}
                className="object-contain transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Right: Text */}
        <div className="-mt-8 sm:-mt-0">
          <h2 className="Heading">
            {t("productOverview2.title")}
          </h2>
          {/* <p className="Paragraph">
            {t("productOverview2.subtitleLine1")} <br />
            {t("productOverview2.subtitleLine2")}
          </p> */}
          <p className="Paragraph">
            {t("productOverview2.description")}
          </p>
        </div>
      </div>
    </section>
  );
}



// "use client";
// import React from "react";
// import { useTranslation } from "react-i18next";

// export default function ProductOverview() {
//   const { t } = useTranslation();

//   return (
//     <section className="Section bg-white">
//       <div className="flex flex-col items-center mx-auto text-center">
        
//         {/* Full Width Text */}
//         <div className="w-full">
//           <h2 className="Heading mb-4">
//             {t("productOverview2.title")}
//           </h2>

//           <p className="Paragraph  mx-auto">
//             {t("productOverview2.description")}
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// }
