"use client";
import Image from "next/image";
import Link from "next/link";

export default function WhyChooseUs() {
  return (
    <div className="Section bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div>
          <h2 className="Heading text-center sm:text-left">Why Choose Us</h2>
          <p className="Paragraph text-center sm:text-left">
            At SAP Parts, we combine industry expertise, innovation, and a
            client-first approach to deliver solutions that make a measurable
            difference. Here’s why partners trust us.
          </p>
          <div className="rounded-md overflow-hidden">
            <Image
              src="/assets/home/whyChoose1.png"
              alt="Why Choose Us"
              width={500}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-2 gap-10 ">
          {[
            { number: "01", title: "Over 20 Years of Expertise" },
            { number: "02", title: "Global Supply Network" },
            { number: "03", title: "Precision Manufacturing" },
            { number: "04", title: "ISO–Certified Processes" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="sm:w-64 sm:h-32 h-20 w-40 mx-auto bg-[#D9D9D9]/50 rounded-b-full flex items-center justify-center">
                <span className="text-[#FACC48] sm:text-5xl text-4xl font-bold">
                  {item.number}
                </span>
              </div>
              <p className="mt-2 text-[#0E509E] font-semibold sm:text-lg">
                {item.title}
              </p>
            </div>
          ))}

          {/* Know More Button */}
          <div className="col-span-2 mt-6 text-center">
            <Link href="#">
              <button className="bg-[#0E509E] text-white px-5 py-2 rounded-md text-sm hover:bg-[#0b3c74] transition">
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
