"use client";
import Image from "next/image";

export default function EducationSection() {
  return (
    <section className="bg-white Section sm:-mt-16">
      <div className=" mx-auto">
        
        {/* Title & Subtitle */}
        <div className="text-center md:text-left">
          <h2 className="Heading text-[#0E509E]">Education</h2>
          <p className="text-lg font-medium text-[#FACC48] mt-1">
            Shaping Minds, Building Futures
          </p>
        </div>

        {/* Image + Content */}
        <div className="flex flex-col md:flex-row gap-10 mt-8">
          
          {/* Left Side - Image */}
          <div className="md:w-[35%] w-full">
            <div className="border-2 border-[#FACC48] rounded-lg overflow-hidden">
              <Image
                src="/assets/sustainability/Education.png"
                alt="Education"
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
                We believe education is the most powerful tool for empowerment. By
                investing in education, we aim to create opportunities, uplift
                underprivileged communities, and nurture the next generation of
                leaders and innovators.
              </p>

              {/* Initiatives */}
              <h3 className="mt-6 font-bold text-gray-900">Our Initiatives :</h3>
              <ul className="mt-2 space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold">• Scholarships & Support:</span>{" "}
                  Providing financial assistance, books, and resources to students
                  from disadvantaged backgrounds.
                </li>
                <li>
                  <span className="font-semibold">• Skill Development:</span>{" "}
                  Organizing training and vocational programs to equip youth with
                  employable skills.
                </li>
                <li>
                  <span className="font-semibold">• School Partnerships:</span>{" "}
                  Supporting local schools with infrastructure, technology, and
                  learning materials to improve the quality of education.
                </li>
              </ul>

              {/* Impact */}
              <h3 className="mt-6 font-bold text-gray-900">Impact :</h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                Education opens doors to brighter futures. Through our efforts, we
                help children dream bigger, encourage young adults to become
                self-reliant, and support families in breaking the cycle of poverty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
