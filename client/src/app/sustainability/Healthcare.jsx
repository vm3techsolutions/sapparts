"use client";
import Image from "next/image";

export default function Healthcare() {
  return (
    <section className="bg-white Section">
      <div className=" mx-auto">
        
        {/* Title & Subtitle */}
        <div className="text-center md:text-left">
          <h2 className="Heading text-[#0E509E]">Healthcare</h2>
          <p className="text-lg font-medium text-[#FACC48] mt-1">
            Health as the Foundation of Progress
          </p>
        </div>

        {/* Image + Content */}
        <div className="flex flex-col md:flex-row gap-10 mt-8">
          
          {/* Left Side - Image */}
          <div className="md:w-[35%] w-full">
            <div className="border-2 border-[#FACC48] rounded-lg overflow-hidden">
              <Image
                src="/assets/sustainability/Healthcare.png"
                alt="Healthcare"
                width={500}
                height={350}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Side - Text */}
          <div className="md:w-[65%] w-full flex items-start">
            <div>
              <p className="text-gray-700 leading-relaxed">
               A healthy society is a strong society. We are committed to improving access to healthcare, promoting wellness, and supporting medical initiatives that make essential services available to those in need.
              </p>

              {/* Initiatives */}
              <h3 className="mt-6 font-bold text-gray-900">Our Initiatives :</h3>
              <ul className="mt-2 space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold">• Medical Camps:</span>{" "}
                  Organizing free health check-ups, eye camps, and vaccination drives in underserved areas.
                </li>
                <li>
                  <span className="font-semibold">• Health Awareness:</span>{" "}
                  Promoting preventive healthcare through workshops on nutrition, hygiene, and fitness.
                </li>
                <li>
                  <span className="font-semibold">• Support Programs:</span>{" "}
                 Assisting local hospitals and clinics with resources, equipment, and emergency aid.
                </li>
              </ul>

              {/* Impact */}
              <h3 className="mt-6 font-bold text-gray-900">Impact :</h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
               Our healthcare initiatives help reduce medical disparities, raise awareness about preventive care, and improve the overall well-being of communities, ensuring that progress is not hindered by lack of access to health services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
