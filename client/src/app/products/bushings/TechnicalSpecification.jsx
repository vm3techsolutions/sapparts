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
            ['Alloy steel grades (e.g., 100Cr6, SCM415, 20MnCr5)', 'High wear resistance under continuous load'],
            ['Oil-grooved bushing profiles', 'Enhanced lubrication, reduced friction, longer operational life'],
            [' Case carburizing / nitriding', 'Improved hardness, fatigue strength, and corrosion resistance'],
            [' Induction hardening', 'Targeted surface strengthening for high-load zones'],
            [' Tight tolerance machining', 'Accurate press-fits and extended part life'],
            ['Custom diameters (30–300 mm)', 'Direct interchangeability with OEM and aftermarket parts']
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
