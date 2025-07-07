"use client";
import Image from "next/image";

export default function GlobalReach() {
  return (
    <div className="mx-auto px-6 md:px-12 sm:py-12 py-8">
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h2 className="Heading text-center">
          Global Reach
        </h2>
        <p className="Paragraph text-center">
          Innovation is the USP of SAP Parts. Moreover it is our core value and we intend to proactively employ innovative thinking culture in all our operations.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <Image
          src="/assets/home/globalSearch.jpg"
          alt="Global Reach Map"
          width={1200}
          height={700}
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
