"use client";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function StrategySection() {
  return (
    <div className="w-full px-6 md:px-12 sm:py-12 py-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Images */}
        <div className="flex gap-4">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/assets/home/ourStratergy1.png"
              alt="Strategy Image 1"
              width={200}
              height={300}
              className="object-cover h-[50vh]"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/assets/home/ourStratergy2.png"
              alt="Strategy Image 2"
              width={200}
              height={300}
              className="object-cover h-[50vh]"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="max-w-xl">
          <h2 className="Heading">
            Our Strategy
          </h2>
          <p className="Paragraph text-left">
            This handy tool helps you create dummy text for all your layout
            needs. We are gradually adding new
          </p>

          <div className="space-y-8">
            {[
              "Engineering Excellence",
              "Customer-Centric Innovation",
              "Sustainability & Longevity",
              "Global Support, Local Commitment",
            ].map((item, index) => (
              <Link
                key={index}
                href="#"
                className="flex items-center justify-between group text-[#0E509E] text-xl font-medium"
              >
                {item}
                <FiArrowRight className="ml-2  transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="#"
              className="inline-block bg-[#0E509E] text-white text-sm font-medium py-2 px-4 rounded hover:bg-blue-800 transition"
            >
              Know More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
