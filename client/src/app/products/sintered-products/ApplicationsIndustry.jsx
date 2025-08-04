// components/ApplicationsUseCases.js
import Image from "next/image";


const useCases = [
  {
    id: 1,
    icon: "/assets/products/Applications1.png",
    title: "Automotive",
    points: [
      "Transmission gears",
      "Synchronizer hubs",
      "Locking rings"
    ]
  },
  {
    id: 2,
    icon: "/assets/products/Applications2.png",
    title: "Agriculture",
    points: [
      "Clutch bushings",
      "Power take-off (PTO) shafts",
      "Precision bearings"
    ]
  },
  {
    id: 3,
    icon: "/assets/products/Applications3.png",
    title: "Electrical",
    points: [
      "Armatures",
      "Contact plates",
      "Magnetically soft components"
    ]
  },
  {
    id: 4,
    icon: "/assets/products/Applications4.png",
    title: "Industrial Machinery",
    points: [
      "Conveyor bushings",
      "Hydraulic valves",
      "Small mechanisms requiring tight tolerances and low friction"
    ]
  }
];

export default function ApplicationsUseCases() {
  return (
    <section className="Section bg-white">
      <h2 className="Heading text-center ">
        Applications & Industry Use Cases
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
                className="mb-4 transition-all duration-300 group-hover:brightness-0 group-hover:invert h-[15vh] w-[15vh] "
              />
              <h3 className="text-2xl font-bold text-[#0E509E] group-hover:text-white">
                {item.title}
              </h3>
              <span className="w-20 h-[2px] bg-[#FACC48] my-2" />
              <ul className="text-[#363636] group-hover:text-white space-y-2 text-md font-semibold mt-1 mb-2">
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
