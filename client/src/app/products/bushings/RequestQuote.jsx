// components/RequestQuote.js
import Image from "next/image";
import React from "react";

export default function RequestQuote() {
  return (
    <section className="bg-[#FACC48] px-6 my-10">
      <div className=" mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-10 gap-6">
        
        {/* Left Section */}
        <div className="md:w-1/2 space-y-5">
          <h2 className="Heading ">Request a Quote</h2>
          <h3 className="text-xl font-semibold text-[#363636] mt-4">
            Let’s Build with Precision
          </h3>
          <p className="text-[#363636] max-w-md">
            Looking for a bushing that resists wear, delivers performance, and
            reduces maintenance? Our engineering team is ready to help you
            customise or select the perfect fit.
          </p>
          <button className="bg-[#0E509E] text-white px-3 py-1 rounded hover:bg-white hover:text-black text-md">
            Get A Quote
          </button>
        </div>

        {/* Right Section - Image with spacing */}
        <div className="md:w-1/2 pl-0 md:pl-6">
          <Image
            src="/assets/products/RequestQuote.png" 
            alt="Request a Quote"
            width={600}
            height={400}
            className="rounded-md object-cover transition-transform duration-500 ease-in-out transform hover:scale-90"
          />
        </div>
      </div>
    </section>
  );
}
