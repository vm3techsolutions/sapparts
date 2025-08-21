import Image from "next/image";

export default function QuotingValidation() {
  return (
    <section className="Section bg-white">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 sm:gap-20 gap-8 items-start">
        
        {/* Left Side (Image + Yellow Strip) */}
        <div className="relative w-full order-2 md:order-1">
          <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden">
            <Image
              src="/assets/technology/Quoting.png"
              alt="Workers"
              fill
              className="object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
          {/* Yellow Strip */}
          <div className="absolute bottom-0 left-0 w-full h-12 bg-[#FACC48] rounded-b-lg" />
        </div>

        {/* Right Side (Title + Text) */}
        <div className="order-1 md:order-2">
          {/* Title */}
          <h3 className="text-xl md:text-2xl font-semibold text-[#0E509E] mb-4">
            Quoting performance validation
          </h3>
          
          {/* Description */}
          <div>
            <p className="text-gray-700 mb-4">
              To ensure the reliability of these treatments, SAP Parts utilizes
              advanced, in-house test protocols:{" "}
              <b>Continuous Salt Spray Test:</b> It rigorously evaluates the
              coating&apos;s ability to withstand harsh corrosive environments
              over an extended period.
            </p>
            <p className="text-gray-700 mb-4">
              <b>Electro potentiometric Analysis:</b> A sophisticated
              electrochemical technique used to precisely measure and
              characterize the corrosion potential and galvanic behavior of the
              coated material, providing a quantitative assessment of its
              protective properties.
            </p>
            <p className="text-gray-700">
              <b>Adhesion Testing:</b> This protocol measures the bond strength
              between the coating and the substrate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
