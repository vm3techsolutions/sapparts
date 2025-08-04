// components/ManufacturingTesting.js


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
            In–House Production Capabilities
          </h3>
          <hr className="w-10 border-t-2 border-yellow-400 mb-4" />
          <ul className="list-disc font-semibold mt-8 list-inside space-y-5 text-[#363636] group-hover:text-white">
            <li>CNC Turning, VMC, Bore & Centerless Grinding</li>
            <li>German SQF Ipsen Heat Treatment Plant</li>
            <li>
              Surface Treatments: CED Coating, MoS₂, WS₂, Zn Plating
            </li>
          </ul>
        </div>

        {/* Right Card */}
        <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 group hover:bg-[#0E509E] hover:text-white border border-[#000000]/10">
          <h3 className="text-2xl font-bold text-[#0E509E] group-hover:text-white mb-2">
            Testing & Quality Assurance
          </h3>
          <hr className="w-10 border-t-2 border-yellow-400 mb-4" />
          <ul className="list-disc font-semibold mt-8 list-inside space-y-5 text-[#363636] group-hover:text-white">
            <li>Micro Vickers Hardness & Roughness Testing</li>
            <li>Load Testing up to 50T with ±30° axial rotation</li>
            <li>
              Inverted Microscopy, Roundness, and Counter Tracers
            </li>
            <li>ISO 9001:2015 Certified Processes</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
