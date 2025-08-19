"use client";
import Image from "next/image";

export default function Community() {
  return (
    <section className="bg-white Section">
      <div className="mx-auto">
        {/* Title & Subtitle */}
        <div className="text-center md:text-right">
          <h2 className="Heading text-[#0E509E]">Community</h2>
          <p className="text-lg font-medium text-[#FACC48] mt-1">
            Empowering Communities, Enriching Lives
          </p>
        </div>

        {/* Image + Content */}
        <div className="flex flex-col-reverse md:flex-row gap-10 mt-8">
          {/* Left Side - Content */}
          <div className="md:w-[65%] w-full flex items-start">
            <div>
              <p className="text-gray-700 leading-relaxed">
                We believe in giving back to the communities that support us.
                Beyond business, we focus on improving quality of life, fostering
                inclusion, and creating opportunities for growth within the
                neighborhoods we operate.
              </p>

              {/* Initiatives */}
              <h3 className="mt-6 font-bold text-gray-900">Our Initiatives :</h3>
              <ul className="mt-2 space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold">• Livelihood Support:</span>{" "}
                  Helping women, youth, and marginalized groups with training and
                  income-generating opportunities.
                </li>
                <li>
                  <span className="font-semibold">
                    • Infrastructure Development:
                  </span>{" "}
                  Supporting projects such as clean drinking water systems,
                  sanitation facilities, and community centers.
                </li>
                <li>
                  <span className="font-semibold">• Cultural Engagement: </span>{" "}
                  Encouraging local arts, sports, and traditions to promote unity
                  and cultural pride.
                </li>
              </ul>

              {/* Impact */}
              <h3 className="mt-6 font-bold text-gray-900">Impact :</h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                By empowering communities, we create an environment where
                individuals feel supported, included, and capable of building
                better lives for themselves and their families.
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-[35%] w-full">
            <div className="border-2 border-[#FACC48] rounded-lg overflow-hidden">
              <Image
                src="/assets/sustainability/Community.png"
                alt="Community"
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
