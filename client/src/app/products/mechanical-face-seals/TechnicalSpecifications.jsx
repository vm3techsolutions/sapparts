export default function TechnicalSpecs() {
  return (
    <div className="Section bg-white -mt-10">
      <h2 className="Heading text-center mb-2">
        Technical Specifications
      </h2>
      <table className="w-full border-collapse text-center max-w-4xl mx-auto">
        <thead>
          <tr>
            <th className="bg-[#D9D9D9]/60 text-[#363636] px-4 py-3 text-center border-2 border-[#0E509E] w-[40%]">
              Parameter
            </th>
            <th className="bg-[#D9D9D9]/60 text-[#363636] px-4 py-3 text-center border-2 border-[#0E509E] w-[60%]">
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            ['Material', 'Alloy Cast Iron / Nitrile Rubber / Silicon Carbide'],
            ['Hardness', '58–62 HRC'],
            ['Operating Temp', '-40°C to 200°C'],
            ['Pressure Rating', 'Up to 20 bar'],
            ['Sizes Available', '50 mm to 500 mm'],
            ['Standards', 'ISO 9001, IATF 16949 Certified']
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
