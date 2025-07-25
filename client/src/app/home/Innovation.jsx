// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// export default function InnovationSection() {
//   const [innovationData, setInnovationData] = useState([]);

//   useEffect(() => {
//     fetch("/data/home/Innovation.json")
//       .then((res) => res.json())
//       .then((data) => setInnovationData(data));
//   }, []);

//   return (
//     <div className=" mx-auto  py-8 sm:py-12 md:px-12 bg-[#F6F8FC]">
//       <div className=" mx-auto ">
//         <h2 className="Heading text-center">
//           Innovation
//         </h2>
//         <p className="Paragraph text-center">
//           Innovation is the USP of SAP Parts. Moreover it is our core value and we intend to proactively employ innovative thinking culture in all our operations.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-3xl mx-auto">
//         {innovationData.map((item) => (
//           <div key={item.id} className="bg-[#0E509E] text-white rounded-md shadow-md overflow-hidden">
//             <Image
//               src={item.image}
//               alt={item.title}
//               width={800}
//               height={500}
//               className="w-full h-56 object-cover p-2"
//             />
//             <div className="px-4 py-2 text-center">
//               <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
//               <p className="text-lg font-extralight mb-6">{item.description}</p>
//               <Link
//                 href={item.link}
//                 className="inline-block bg-[#FACC48] text-[#363636] px-4 py-1 font-semibold rounded hover:bg-white transition mb-1"
//               >
//                 Know More
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function InnovationSection() {
  const [innovationData, setInnovationData] = useState([]);
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language || "en";

  useEffect(() => {
    fetch("/data/home/Innovation.json")
      .then((res) => res.json())
      .then((data) => setInnovationData(data));
  }, []);

  return (
    <div className="Section bg-[#F6F8FC]">
      <div className=" mx-auto ">
        <h2 className="Heading text-center">
          {t("Technology & Innovation")}

        </h2>
        <p className="Paragraph text-center">
          {t("Technology & Innovation Description")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-3xl mx-auto">
        {innovationData.map((item) => (
          <div key={item.id} className="bg-[#0E509E] text-white rounded-md shadow-md overflow-hidden">
           <div className="group overflow-hidden rounded-md">
  <Image
    src={item.image}
    alt={item.title}
    width={800}
    height={500}
    className="w-full h-56 object-cover p-2 transition-transform duration-300 ease-in-out group-hover:scale-110"
  />
</div>

            <div className="px-4 py-2 text-center">
              <h3 className="text-2xl font-semibold mb-4">
                {item.title?.[currentLang] || ""}
              </h3>
              <p className="text-lg font-extralight mb-6">
                {item.description?.[currentLang] || ""}
              </p>
              <Link
                href={item.link}
                className="inline-block bg-[#FACC48] text-[#363636] px-4 py-1 font-semibold rounded hover:bg-white transition mb-1"
              >
                {t("Know More")}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
