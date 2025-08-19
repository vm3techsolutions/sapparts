"use client";
import Image from "next/image";

export default function Environment() {
  return (
    <section className="bg-white Section">
      <div className="mx-auto">
        {/* Title & Subtitle */}
        <div className="text-center md:text-right">
          <h2 className="Heading text-[#0E509E]">Environment</h2>
          <p className="text-lg font-medium text-[#FACC48] mt-1">
            Protecting Today, Preserving Tomorrow
          </p>
        </div>

        {/* Image + Content */}
        <div className="flex flex-col-reverse md:flex-row gap-10 mt-8">
          {/* Left Side - Content */}
          <div className="md:w-[65%] w-full flex items-start">
            <div>
              <p className="text-gray-700 leading-relaxed">
                We understand that our planet’s resources are precious and
                limited. At Sapparts, we integrate eco-conscious practices into
                our operations and extend our responsibility beyond our
                facilities to contribute to a greener tomorrow.
              </p>

              {/* Initiatives */}
              <h3 className="mt-6 font-bold text-gray-900">Our Initiatives :</h3>
              <ul className="mt-2 space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold">• Tree Plantation Drives:</span>{" "}
                  Supporting afforestation projects and green belt development in
                  local communities.
                </li>
                <li>
                  <span className="font-semibold">• Sustainable Practices:</span>{" "}
                  Reducing energy use, managing waste responsibly, and encouraging
                  recycling within our operations.
                </li>
                <li>
                  <span className="font-semibold">• Awareness Campaigns: </span>{" "}
                  Educating communities and employees on environmental
                  conservation and eco-friendly practices.
                </li>
              </ul>

              {/* Impact */}
              <h3 className="mt-6 font-bold text-gray-900">Impact :</h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                By reducing our carbon footprint and promoting green practices, we
                create healthier ecosystems and contribute to long-term
                sustainability for future generations.
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-[35%] w-full">
            <div className="border-2 border-[#FACC48] rounded-lg overflow-hidden">
              <Image
                src="/assets/sustainability/Environment.png"
                alt="Environment"
                width={500}
                height={350}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
