

export default function ManufacturingTesting() {
  return (
    <section className="Section bg-white">
      {/* Title */}
      <h2 className="Heading text-center">
        Manufacturing & Testing Capabilities (Product-Specific)
      </h2>
      

      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-12 gap-8 mt-10  mx-auto ">
        {/* Left Card */}
        <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 group hover:bg-[#0E509E] hover:text-white border border-[#000000]/10">
          <h3 className="text-2xl font-bold text-[#0E509E] group-hover:text-white mb-2">
            Manufacturing Process Flow

          </h3>
          <hr className="w-10 border-t-2 border-yellow-400 mb-4" />
          <ul className="list-disc font-semibold mt-8 list-inside space-y-5 text-[#363636] group-hover:text-white">
            <li>Powder Blending & Mixing</li>
            <li>Cold Pressing (50–1000 tons)</li>
            <li>
              Sintering (controlled atmospheres up to 1120°C)
            </li>
              <li>
             Sizing & Co-Infiltration

            </li>
              <li>
             Secondary Machining / Surface Treatments

            </li> 
              <li>
             Final Quality Inspection & Validation

            </li>
          </ul>
        </div>

        {/* Right Card */}
        <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 group hover:bg-[#0E509E] hover:text-white border border-[#000000]/10">
          <h3 className="text-2xl font-bold text-[#0E509E] group-hover:text-white mb-2">
            Testing & Validation

          </h3>
          <p className="Paragraph">Each component undergoes multi-level quality testing:
</p>
          <hr className="w-10 border-t-2 border-yellow-400 mb-4" />
          <ul className="list-disc font-semibold mt-8 list-inside space-y-5 text-[#363636] group-hover:text-white">
            <li>Density & Porosity Analysis</li>
            <li>Hardness & Load Testing</li>
            <li>
              Fatigue & Wear Performance
            </li>
            <li>Dimensional & Surface Roughness Checks</li>
            <li>Microstructure Evaluation</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
