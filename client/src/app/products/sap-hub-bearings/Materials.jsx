// components/MaterialsSizes.js


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
            Steel Hardened Bushings
          </h3>
          <ul className="text-[#363636] font-semibold space-y-5 list-disc list-outside pl-4">
            <li>OD Range: 20 mm to 300 mm</li>
            <li>
              Materials: 100Cr6, 20MnCr5, C45, SAE 4140, SCM415, ST52, 16MnCr5, FE510
            </li>
            <li>
              Surface Treatments: Case Carburizing, Nitriding,
              Nitro–Carburizing, Carbo–Nitriding, Induction Hardening
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
            Non-Ferrous Bushings
          </h3>
          <ul className="text-[#363636] font-semibold space-y-5 list-disc list-outside pl-4">
            <li>OD Range: 50 mm to 300 mm</li>
            <li>
              Materials:
              <br />
              Bronze: C96900, C93200, C86500, CuSn8P
              <br />
              Brass: C86300, CuZn39Pb3
            </li>
            <li>
              Tolerances
              <br />
              Machined to ±0.02 mm
              
              Optimized for high-load press–fit and sliding assemblies
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
