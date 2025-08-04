export default function TechnicalSpecs() {
  return (
    <div className="Section bg-white ">
      <h2 className="Heading text-center mb-2">
       Technical Specifications & Features
      </h2>
      <table className="w-full border-collapse text-center  mx-auto">
        <thead>
          <tr>
            <th className="bg-[#D9D9D9]/60 text-[#363636] px-4 py-3 text-center border-2 border-[#0E509E] w-[40%]">
              Feature
            </th>
            <th className="bg-[#D9D9D9]/60 text-[#363636] px-4 py-3 text-center border-2 border-[#0E509E] w-[60%]">
              Benefit
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            ['Precision‑lapped metal seal faces', 'Smooth interruption‑free contact; no micro‑scratches'],
            ['Self‑renewing seal geometry', 'Maintains sealing performance as wear progresses'],
            ['Elastomeric preloaded O‑rings or Torric rings', 'Constant axial contact and torque transmission'],
            ['Supports peripheral sliding speeds up to ~5–10 m/s', 'Prevents cold welding while enabling wear control'],
            [' Special alloy materials (Ni‑Hard cast iron, forged steel)', 'High hardness (58–75 HRC), exceptional wear and corrosion resistance'],
            ['CED coatings available', 'Adds salt‑spray protection (≥1000 h as per ASTM B117)'],
            ["Multiple elastomer options (NBR, Viton, HNBR)","Temperature, chemical, and wear resistance tailored to your application"]
          ].map(([key, value], index) => (
            <tr key={index} className="bg-[#D9D9D9]/15">
              <td className="border-2 border-[#0E509E] text-[#0E509E] px-4 py-3 w-[40%]">{key}</td>
              <td className="border-2 border-[#0E509E] text-[#0E509E] px-4 py-3 w-[60%]">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
