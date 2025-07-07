"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function InnovationSection() {
  const [innovationData, setInnovationData] = useState([]);

  useEffect(() => {
    fetch("/data/home/Innovation.json")
      .then((res) => res.json())
      .then((data) => setInnovationData(data));
  }, []);

  return (
    <div className="mx-auto px-6 md:px-12 sm:py-12 py-8 bg-[#F6F8FC]">
      <div className=" mx-auto ">
        <h2 className="Heading text-center">
          Innovation
        </h2>
        <p className="Paragraph text-center">
          Innovation is the USP of SAP Parts. Moreover it is our core value and we intend to proactively employ innovative thinking culture in all our operations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-3xl mx-auto">
        {innovationData.map((item) => (
          <div key={item.id} className="bg-[#0E509E] text-white rounded-md shadow-md overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              width={800}
              height={500}
              className="w-full h-56 object-cover p-2"
            />
            <div className="px-4 py-2 text-center">
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-lg font-extralight mb-6">{item.description}</p>
              <Link
                href={item.link}
                className="inline-block bg-[#FACC48] text-[#363636] px-4 py-1 font-semibold rounded hover:brightness-110 transition mb-1"
              >
                Know More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
