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
            Designed for rotating applications in abrasive and abrasive environments, SAP Parts™ Mechanical Face Seals deliver unmatched durability and wear performance. These robust seals use lapped metal-on-metal faces, supported by elastomeric preloading elements, ensuring static sealing and long operational lifetimes without leakage
          </p>
         
        </div>
      </div>
    </section>
  );
}
