

export default function ManufacturingTesting() {
  return (
    <section className="Section bg-white">
      {/* Title */}
      <h2 className="Heading text-center">
        Manufacturing & Testing Capabilities (Product-Specific)
      </h2>
      <p className="text-center Paragraph">
        SAP Parts™ manufactures bushings in a vertically integrated facility, ensuring full control over quality,
        material traceability, and turnaround time.
      </p>

      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-12 gap-8 mt-10  mx-auto ">
        {/* Left Card */}
        <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 group hover:bg-[#0E509E] hover:text-white border border-[#000000]/10">
          <h3 className="text-2xl font-bold text-[#0E509E] group-hover:text-white mb-2">
           Manufacturing & Design Features

          </h3>
          <hr className="w-10 border-t-2 border-yellow-400 mb-4" />
          <ul className="list-disc font-semibold mt-8 list-inside space-y-5 text-[#363636] group-hover:text-white">
            <li>Two geometrically identical metal rings installed face-to-face in matching housings, supported by elastomer rings (DO‑type) or trapezoid Torric rings (DF‑type)</li>
            <li>Housing geometry and ramp angle are optimized for oil retention and ring preload </li>
            <li>
              Custom seal designs available for non-standard sizes, housing configurations, or novel elastomer/metal materials
            </li>
          </ul>
        </div>

        {/* Right Card */}
        <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 group hover:bg-[#0E509E] hover:text-white border border-[#000000]/10">
          <h3 className="text-2xl font-bold text-[#0E509E] group-hover:text-white mb-2">
           Testing & Validation

          </h3>
          <hr className="w-10 border-t-2 border-yellow-400 mb-4" />
          <ul className="list-disc font-semibold mt-8 list-inside space-y-5 text-[#363636] group-hover:text-white">
            <li>Each seal undergoes rigorous assembly tolerance and face flatness testing</li>
            <li>Performance proven for continuous peripheral speeds up to 10 m/s and operating temperatures from –55 °C to +200 °C</li>
            <li>
             Validated for performance in corrosive and abrasive media in compliance with international standards
            </li>
           
          </ul>
        </div>
      </div>
    </section>
  );
}
