"use client";

import Image from "next/image";

export default function PrecisionMachining() {
  const cards = [
    {
      img: "/assets/technology/PrecisionMachining.png",
      title: "Advanced CNC Machining",
      desc: "Our foundation is built on the power of CNC Turning and Vertical Machining Centers (VMC). These automated systems allow us to perform complex, multi-axis operations with unmatched accuracy. We routinely achieve sub-micron-level tolerances and superior surface finishes, ensuring that every component delivers a perfect fit and reliable performance. This precision is essential for parts that must operate flawlessly under extreme conditions.",
    },
    {
      img: "/assets/technology/PrecisionMachining.png",
      title: "EDM Wire Cutting",
      desc: "For materials too hard or profiles too intricate for traditional cutting tools, we utilize Electrical Discharge Machining (EDM). Our wire cutting process uses an electrically charged wire to precisely slice through metal, regardless of its hardness. This capability enables us to create intricate internal shapes, sharp corners, and complex, non-linear profiles that are impossible to produce with conventional machining methods.",
    },
    {
      img: "/assets/technology/PrecisionMachining.png",
      title: "Customized SPMs",
      desc: "To address unique production challenges and facilitate the development of innovative products, we design and build Customized Special Purpose Machines (SPMs). These bespoke machines are engineered to automate highly specific tasks and machine unusual geometries that fall outside the scope of standard equipment. This flexibility allows us to create components with tailored specifications, giving our clients a significant competitive edge.",
    },
  ];

  return (
    <section className="Section bg-[#D9D9D9]/20">
      {/* Title & Top Description */}
      <div className="text-center mb-12">
        <h2 className="Heading text-center">
          Precision Machining
        </h2>
        <p className="Paragraph text-center sm:px-16">
          At SAP Parts, we don't just cast high-performance materials; we finish them with a level of precision that meets the most stringent industry standards. Our state-of-the-art machining capabilities are designed to produce components with the complex geometries and exacting tolerances required for modern heavy industries.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white border-[#FACC48] border rounded-xl p-3 shadow-md overflow-hidden hover:shadow-lg transition"
          >
           <Image
  src={card.img}
  alt={card.title}
  width={400}   // apni requirement ke hisaab se
  height={300}  // apni requirement ke hisaab se
  className="w-full h-48 object-cover rounded-md transition-transform duration-300 ease-in-out hover:scale-90"
/>

            <div className="p-3 text-center">
              <h3 className="text-xl font-semibold text-[#0E509E]">
                {card.title}
              </h3>
              <p className="text-[#363636] text-sm mt-3">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Description */}
      <div className="text-center sm:mt-12 mt-6">
        <p className="Paragraph text-center sm:px-16">
          Our comprehensive approach to precision machining, from initial casting to final finishing, ensures that every component we deliver is a perfect embodiment of quality, accuracy, and engineering excellence.
        </p>
      </div>
    </section>
  );
}
