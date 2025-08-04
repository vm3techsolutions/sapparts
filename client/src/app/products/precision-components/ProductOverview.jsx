// components/ProductOverview.js
import Image from "next/image";


export default function ProductOverview() {
  return (
    <section className="Section bg-white ">
      <div className="flex flex-col md:flex-row items-center gap-20 mx-auto">
        
        {/* Left: Image with double dashed border */}
        <div className="border-[3px] border-dashed border-yellow-400 p-6 ">
          <div className="border-[3px] border-dashed border-yellow-400 p- ">
            <div className="w-[280px] md:w-[400px]">
              <Image
                src="/assets/products/ProductOverview.png" 
                alt="Bushings"
                width={600}
                height={400}
                className="object-contain transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Right: Text */}
        <div className="-mt-8 sm:-mt-0">
          <h2 className="Heading">
            Product Overview
          </h2>
          <p className="Paragraph">
           SAP Parts™ offers a comprehensive suite of high-precision components, engineered for durability, dimensional accuracy, and performance under extreme operating conditions. From bushings and seals to hinges and locking assemblies, every component is designed to meet OEM-level requirements in critical applications.

          </p>
          <p className="Paragraph">
           These parts are manufactured with micron-level tolerances and machined to outer diameter (OD) ranges from 30 mm to 200 mm, ensuring compatibility across heavy engineering, agriculture, and industrial segments.

          </p>
        </div>
      </div>
    </section>
  );
}
