export default function GrindingSuperfinishing() {
  const processes = [
    {
      title: "Centerless Grinding",
      desc: "This process is employed for grinding the external diameter of cylindrical parts without the need for a central mount. It is highly efficient for high-volume production and ensures exceptional concentricity and dimensional accuracy, which is vital for components like shafts and pins."
    },
    {
      title: "Bore Grinding",
      desc: "To achieve precise internal diameters, we utilize bore grinding. This method is crucial for components such as bushings and sleeves, where the inner surface must meet exacting specifications for fit and function. Bore grinding ensures the component can house other parts with minimal friction and maximum stability."
    },
    {
      title: "Surface Grinding",
      desc: "We employ surface grinding to produce flat, parallel surfaces with a high degree of flatness and a smooth finish. This process is essential for components like metal face seals, where a perfectly flat surface is required for a reliable, leak-proof seal. Our advanced surface grinding setups ensure that every part meets the highest standards for flatness and parallelism."
    }
  ];

  return (
    <section className="py-12  bg-white">
      {/* Title */}
      <h2 className="Heading text-center">
        Grinding and Superfinishing
      </h2>

      {/* Description */}
      <p className="Paragraph text-center sm:px-16 px-6">
        SAP Parts' commitment to quality is underscored by its advanced precision grinding capabilities, 
        which are essential for achieving the extremely tight tolerances and superior surface finishes 
        required for high-performance components. Our state-of-the-art grinding machines are an integral 
        part of our manufacturing process, ensuring that products such as bushings, sleeves, bearings, 
        and metal face seals perform flawlessly in demanding applications.
      </p>

      {/* Subtitle */}
      <h3 className="text-xl font-semibold text-center text-[#0E509E] mt-8">
        Our Precision Grinding Processes
      </h3>

      {/* Yellow Boxes */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-0 bg-[#FACC48] overflow-hidden shadow-lg sm:px-6">
        {processes.map((item, idx) => (
          <div
            key={idx}
            className={`p-6 text-center ${
              idx !== processes.length - 1 ? "sm:border-r-1 border-[#0E509E]" : ""
            }`}
          >
            <h4 className="text-lg font-bold text-gray-800">{item.title}</h4>
            <p className="text-gray-900 mt-2 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
