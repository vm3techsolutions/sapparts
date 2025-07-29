"use client";
import Image from "next/image";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


export default function WhyChooseUs() {
  return (
    <section className="Section bg-white">
    <div className="flex flex-col md:flex-row justify-between items-center gap-8  rounded-md">
        
      {/* Left Side */}
      <div className="md:w-1/2">
        <h2 className="Heading">Why Choose Us</h2>
        <p className="Paragraph">
          At SAP Parts, we combine industry expertise, innovation, and a client-first approach to deliver solutions that make a measurable difference. Here's why partners trust us:
        </p>

        <div className="space-y-4">
          {[
            "Decades of experience with sealing systems in mission-critical industries",
            "In-house metallurgy and casting capability for customized solutions",
            "Field-tested performance in +10 countries",
            "Available in standard & custom sizes"
          ].map((text, index) => (
            <div
              key={index}
              className="flex items-center bg-[#D9D9D9]/30  px-4 py-2 rounded-md"
            >
              <span className="text-[#0E509E] text-4xl font-bold mr-3"><MdKeyboardDoubleArrowRight /></span>
              <p className="text-[#0E509E] text-sm md:text-base font-medium m-0">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side Image */}
   <div className="group md:w-1/2 overflow-hidden">
  <Image
    src="/assets/products/WhyChoose1.png"
    alt="Why Choose Us"
    width={500}
    height={400}
    className="rounded-lg object-cover w-full transition-transform duration-300 ease-in-out group-hover:scale-110"
  />
</div>

    </div>
    </section>
  );
}
