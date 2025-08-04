// components/MaterialsSizes.js

export default function MaterialsSizes() {
  return (
    <section className="bg-[#FACC48] Section">
      <h2 className="Heading text-center">
        Materials, Sizes, and Tolerances
      </h2>

      <div className="max-w-4xl mx-auto flex justify-center mt-9 px-4">
        <div className="text-[#0E509E]">
          <ul className="text-[#363636] font-semibold space-y-4 list-disc list-outside pl-6">
            <li>
              <span className="block">
                <strong>Metal Seal Rings:</strong>
              </span>
              <span className="block pl-1">
                Ni‑Hard Cast Iron: Carbide‑martensite structure, naturally 58–64 HRC
              </span>
              <span className="block pl-1">
                Forged Steel (SAE 52100‑grade): Tempered martensite, up to 65 HRC for maximum wear resistance
              </span>
            </li>

            <li>
              <span className="block">
                Elastomer Elements:
              </span>
              <span className="block pl-1">
                NBR, NBR‑LT, HNBR, Viton (FKM), Silicone selected per temperature, oil or abrasion requirements
              </span>
            </li>

            <li>Size Range: OD from 50 mm up to 1300 mm</li>
            <li>O‑Ring Compression: ~25% volumetric compressed in housing ramp profile for optimal sealing and alignment</li>
            <li>
              <span className="block">
                Surface Finish:
              </span>
              <span className="block pl-1">
                Machining quality of Rz 10 µm (Ra ≤ 6.5 µm), scratch/pore‑free housing & seal surfaces recommended
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
