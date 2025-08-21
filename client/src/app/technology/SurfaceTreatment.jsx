export default function SurfaceTreatment() {
  const treatments = [
    {
      number: "01",
      title: "Shot Blasting",
      desc: "This controlled process uses a high velocity stream of media to clean the surface, impart a specific profile, and induce compressive residual stress.",
    },
    {
      number: "02",
      title: "Amorphous Mn Phosphating",
      desc: "A chemical conversion coating that forms a non-crystalline phosphate layer.",
    },
    {
      number: "03",
      title: "Cathodic Electro–Deposition (CED) Coating",
      desc: "An electrolytic process that applies a uniform polymer film with precise thickness.",
    },
    {
      number: "04",
      title: "MOS2 & WS2 Coatings",
      desc: "Molybdenum Disulfide (MoS2) & Tungsten Disulfide (WS2) are lamellar solid lubricants applied to reduce the coefficient of friction and prevent adhesive wear under high-contact pressure loads.",
    },
    {
      number: "05",
      title: "Zn Passivation",
      desc: "A chemical treatment applied to a zinc-coated surface to form a passive film.",
    },
  ];

  return (
    <section className="Section bg-white">
      {/* Title */}
      <div className="text-center mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FACC48] ">
          Surface Treatment & Coatings
        </h2>
        <h3 className="text-xl md:text-xl font-semibold text-[#0E509E] mt-2">
          Precision Surface Treatments and Coatings
        </h3>
        <p className="Paragraph text-center mt-3">
          SAP Parts employs a suite of technically advanced surface treatment
          and coating processes to engineer metal components for maximum
          performance and longevity in the most demanding off-highway
          applications.
        </p>
      </div>

      {/* First Row: 3 cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  mx-auto">
        {treatments.slice(0, 3).map((item, idx) => (
          <div
            key={idx}
            className="relative bg-[#D9D9D9]/20 p-6 rounded-lg shadow-md"
          >
            {/* Number */}
            <span className="absolute top-3 left-3 text-3xl font-bold text-[#FACC48]/30">
              {item.number}
            </span>

            {/* Title */}
            <h3 className="text-lg font-semibold text-[#0E509E] mt-5 text-center">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-md text-gray-700 leading-relaxed text-center">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Second Row: 2 cards centered */}
      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6 max-w-4xl mx-auto">
        {treatments.slice(3).map((item, idx) => (
          <div
            key={idx}
            className="relative bg-[#D9D9D9]/20 p-6 rounded-lg shadow-md w-full sm:w-1/2"
          >
            {/* Number */}
            <span className="absolute top-3 left-3 text-3xl font-bold text-[#FACC48]/30">
              {item.number}
            </span>

            {/* Title */}
            <h3 className="text-lg font-semibold text-[#0E509E] mt-5 text-center">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-md text-gray-700 leading-relaxed text-center">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
