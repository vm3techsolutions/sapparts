
export default function MaterialsSizes() {
  return (
    <section className="bg-[#FACC48] Section">
      <h2 className="Heading text-center">
        Materials, Sizes, and Tolerances
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-0 items-start mt-9 ">
        {/* Left Column */}
        <div className="text-[#0E509E] ">
          <h3 className="text-2xl font-semibold text-center mb-4">
            Material Grades

          </h3>
          <ul className="text-[#363636] font-semibold space-y-5 list-disc list-outside pl-4">
            <li>Iron-Carbon (Fe-C)</li>
            <li>
             Iron-Copper-Carbon (Fe-Cu-C)
            </li>
            <li>
             Copper-Infiltrated Iron
            </li>
            <li>
             Bronze-Based (CuSn, CuZn)
            </li>
            <li>
            Alloy Additives: Nickel, Molybdenum, Graphite
            </li>
          </ul>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:flex justify-center">
          <div className="w-[1.5px] h-80 bg-[#0E509E]" />
        </div>

        {/* Right Column */}
        <div className="text-[#0E509E]">
          <h3 className="text-2xl font-semibold text-center mb-4">
            Sizing & Tolerances

          </h3>
          <ul className="text-[#363636] font-semibold space-y-5 list-disc list-outside pl-4">
            <li>Density: 6.0 – 7.2 g/cm³</li>
            <li>
             Tolerance: Up to ±0.02 mm
            </li>
            <li>
             Surface Finish: Steam treated / resin impregnated / machined / coated

            </li>
               <li>
            Customization: Based on client drawing or use case
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
