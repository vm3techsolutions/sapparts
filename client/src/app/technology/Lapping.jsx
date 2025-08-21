import Image from "next/image";

export default function MachineImage() {
  return (
    <div className="relative w-full Section bg-white ">
      {/* Mobile View - Only Image */}
      <div className="block sm:hidden">
        <Image
          src="/assets/strategy/CenterBanner.png"
          alt="CNC Machining"
          width={933}
          height={512}
          className="object-cover w-full h-[30vh]"
        />
      </div>

      {/* Desktop View - Image with Overlay */}
      <div className="hidden sm:block relative w-full rounded-md">
        {/* Background Image */}
        <Image
          src="/assets/strategy/CenterBanner.png"
          alt="CNC Machining"
          width={933}
          height={512}
          className="object-cover w-full sm:h-[80vh] transition-transform duration-500 ease-in-out transform hover:scale-105 rounded-md"
        />

        {/* Overlay with opacity */}
        <div className="absolute inset-0 bg-[#363636]/75 flex flex-col justify-center items-center text-center sm:px-16 px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FACC48]">
            Lapping & Superfinishing
          </h2>
          <p className="text-white mt-4 leading-relaxed ">
            SAP Parts' lapping and superfinishing capabilities represent a key
            expertise, particularly for the production of highly reliable metal
            face seals. This advanced multi-stage process refines the surface
            characteristics of components to achieve a level of precision that is
            essential for flawless sealing, a capability born from decades of
            dedicated research and hands-on experience in the field.
          </p>
          <p className="text-white mt-4 leading-relaxed ">
            This unparalleled expertise is embodied in SAP Parts' self-made
            Special Purpose Lapping Machines (SPLMs), which are engineered
            through a proprietary, time-tested process to deliver predictable and
            repeatable surface properties with exceptional consistency. These
            machines are custom-built and fine-tuned for the specific materials
            and geometries of our components, making our process truly unique and
            inimitable.
          </p>
          <p className="text-white mt-4 leading-relaxed ">
            The outcome of these precise processes is a seal with meticulously
            controlled surface properties. These attributes—including Roughness,
            Flatness, and Bearing Ratio—are achieved with great accuracy and
            skill for the seals to perform predictably. By controlling these key
            parameters through their proprietary SPMs and time-tested methods,
            SAP Parts can deliver lapped seals that provide the highest level of
            performance and reliability in the industry.
          </p>
        </div>
      </div>
    </div>
  );
}
