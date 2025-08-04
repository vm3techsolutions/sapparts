// components/MaterialsSizes.js

export default function MaterialsSizes() {
  return (
    <section className="bg-[#FACC48] Section">
      <h2 className="Heading text-center">
        Materials, Sizes, and Tolerances
      </h2>

      <div className="max-w-4xl mx-auto flex justify-center mt-9">
        <div className="text-[#0E509E]">
          <h3 className="text-2xl font-semibold text-center mb-4">
            Key Component Types and Ranges
          </h3>
          <ul className="text-[#363636] font-semibold space-y-3 list-disc list-inside">
            <li>Alloy Steel Bushings: 100Cr6, SAE 4140, SAE 8620, C45, 20MnCr5, 55Si7, SCM415</li>
            <li>Oil-Grooved Bushings: Available in straight, helical, and custom profiles</li>
            <li>Floating Seals: Duo-Cone and mechanical face seal variants</li>
            <li>Cabin Hinges & Lock Assemblies: Designed to micron-level precision</li>
            <li>OD Range: 30 mm to 200 mm</li>
            <li>Tolerances: Precision-machined for OEM-fit, typically within ±0.02 mm</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
