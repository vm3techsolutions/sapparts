"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function IndustriesSection() {
  const [industries, setIndustries] = useState([]);

  useEffect(() => {
    const fetchIndustries = async () => {
      try {
        const res = await fetch("/data/home/Industries.json");
        const data = await res.json();
        setIndustries(data);
      } catch (error) {
        console.error("Error fetching industries data:", error);
      }
    };

    fetchIndustries();
  }, []);

  return (
    <section className="Section bg-white">
      <h2 className="Heading text-center">
        Industries We Serve
      </h2>
      <p className=" Paragraph text-center">
        We proudly cater to a wide range of industries with tailored solutions that drive performance and innovation.
        Our deep industry knowledge enables us to deliver impactful results that align with unique business goals and
        operational challenges. Our expertise spans across:
      </p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  mx-auto">
        {industries.map((industry) => (
          <div key={industry.id} className="relative px-4">
            <Image
              src={industry.image}
              alt={industry.title}
              width={400}
              height={300}
              className="w-full h-[55vh] object-cover rounded-md"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[80%]">
              <button className="w-full bg-white text-[#1C3C88] py-2 rounded-md shadow-md font-medium">
                {industry.title}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
