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
            ['Consistent Porosity Control', 'Retains lubrication; enables material and weight optimization'],
            ['Tight Dimensional Accuracy', 'Ideal for press-fit and precision assembly'],
            [' Wear & Corrosion Resistance', 'Reliable performance in exposed and high-cycle environments'],
            ['Self-Lubricating Options', 'Perfect for dry-run conditions and inaccessible maintenance zones'],
            [' Cost-Effective Manufacturing', 'Best suited for medium to high-volume production with repeatable precision'],
            ['Secondary Operations', 'Machining, steam treatment, heat treatment, resin impregnation, sizing']
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
