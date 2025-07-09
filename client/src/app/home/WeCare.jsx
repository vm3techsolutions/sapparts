"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ContributionSection() {
  const [cards, setCards] = useState([]);
  const [sectionData, setSectionData] = useState({
    title: "“We Care. We Contribute.”",
    description:
      "This handy tool helps you create dummy text for all your layout needs. We are gradually adding new This handy tool helps you create dummy text for all your layout needs. We are gradually adding new ",
    mainImage: "/assets/home/weCareMainImg.png",
    knowMoreLink: "/contribution",
  });

  useEffect(() => {
    fetch("/data/home/WeCare.json")
      .then((res) => res.json())
      .then((data) => setCards(data || []))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  if (cards.length === 0) return null;

  const leftCards = cards.slice(0, 2);
  const rightCards = cards.slice(2);

  return (
    <div className="Section bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="Heading text-center">{sectionData.title}</h2>
        <p className="Paragraph text-center">{sectionData.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Left Cards */}
          <div className="flex flex-col justify-between gap-6">
            {leftCards.map((item) => (
              <div key={item.id} className="bg-[#F6F8FC]/50 p-6 text-left h-full">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-[#0E509E] font-semibold text-lg">{item.title}</h3>
                  <p className="text-[#FACC48]/50 font-bold text-5xl">
                    {item.number}
                  </p>
                </div>
                <p className="text-md text-[#363636] my-6">{item.desc}</p>
                <Link href={item.link}>
                  <span className="inline-block Button">
                    Read More
                  </span>
                </Link>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex items-stretch justify-center">
            <Image
              src="/assets/home/weCare.png"
              alt="“We Care. We Contribute.”"
              width={300}
              height={400}
              className=" object-contain"
            />
          </div>

          {/* Right Cards */}
          <div className="flex flex-col justify-between gap-6">
            {rightCards.map((item) => (
              <div key={item.id} className="bg-[#F6F8FC]/50 p-6 text-left h-full">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-[#0E509E] font-semibold text-lg">{item.title}</h3>
                  <p className="text-[#FACC48]/50 font-bold text-5xl">
                    {item.number}
                  </p>
                </div>
                <p className="text-md text-[#363636] my-6">{item.desc}</p>
                <Link href={item.link}>
                  <span className="inline-block Button ">
                    Read More
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link href={sectionData.knowMoreLink}>
            <button className="Button">
              Know More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
