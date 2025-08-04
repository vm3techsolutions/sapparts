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
            ['Alloy Steel Grades (100Cr6, SCM415)', 'High wear resistance and load-bearing strength'],
            ['Oil-Grooved Bushing Profiles', 'Optimised lubrication and friction reduction for longer part life'],
            [' Floating Seal Geometry', 'Reliable sealing under axial misalignment and debris exposure'],
            [' Tight Tolerance Machining', 'Consistent performance and part interchangeability across assemblies'],
            [' Surface Treatments (e.g., MoS₂, CED)', 'Enhanced corrosion resistance, fatigue strength, and life cycle durability']
            
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
