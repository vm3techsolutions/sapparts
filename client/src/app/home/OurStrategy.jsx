"use client";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function StrategySection() {
  return (
    <div className="Section bg-white">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        {/* Left Images (Shown below on mobile) */}
        <div className="flex gap-6 md:mt-0 mt-8">
          {/* Left image */}
          <div className="sm:w-[250px] sm:h-[60vh] w-[20vh] h-[30vh] rounded-lg overflow-hidden shadow-md">
            <Image
              src="/assets/home/ourStratergy1.png"
              alt="Strategy Image 1"
              width={250}
              height={250}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right image */}
          <div className="sm:w-[250px] sm:h-[60vh] w-[20vh] h-[30vh] rounded-lg overflow-hidden shadow-md sm:mt-24 mt-16">
            <Image
              src="/assets/home/ourStratergy2.png"
              alt="Strategy Image 2"
              width={250}
              height={250}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="max-w-xl">
          <h2 className="Heading">Our Strategy</h2>
          <p className="Paragraph text-left">
            This handy tool helps you create dummy text for all your layout
            needs. We are gradually adding new
          </p>

          <div className="space-y-8 mt-6">
            {[
              "Engineering Excellence",
              "Customer-Centric Innovation",
              "Sustainability & Longevity",
              "Global Support, Local Commitment",
            ].map((item, index) => (
              <Link
                key={index}
                href="#"
                className="flex items-center justify-between group text-[#0E509E]  text-xl font-medium"
              >
                {item}
                <div className="bg-[#FACC48] p-2"><FiArrowRight className="ml- transition-transform group-hover:translate-x-1  " /></div>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="#"
              className="inline-block Button"
            >
              Know More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
