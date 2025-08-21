"use client";

export default function HeatTreatments() {
  const processes = [
    {
      title: "Hardening and Tempering",
      desc: "This basic process makes steel harder and stronger. We heat the part up, cool it very quickly in a process called quenching, and then heat it again at a lower temperature (tempering) to make it less brittle.",
    },
    {
      title: "Cryogenic Treatment",
      desc: "We make our parts even tougher by cooling them down to extremely low temperatures, as low as -196°C. This changes the metal's structure to make it much more resistant to wear and helps it keep its shape perfectly.",
    },
    {
      title: "Induction Hardening",
      desc: "This method uses a special coil to heat just the surface of a part very quickly before cooling it down. The result is a part with a super hard outer layer and a softer, tougher core, which is great for parts that take a lot of wear on the outside.",
    },
    {
      title: "Carburizing, Nitriding, & Nitrocarburizing",
      desc: "These are processes where we put carbon, nitrogen, or both into the surface of the steel. This creates a hard, durable outer layer, or 'case,' while the inside of the part stays tough.",
    },
    {
      title: "Laser Treatment",
      desc: "For very specific spots, we use a laser to heat and harden just that area. This lets us make certain parts of a component stronger without affecting the rest of it.",
    },
    {
      title: "Plug Quenching",
      desc: "This is a smart way to cool down thin or ring-shaped parts to prevent them from bending or warping. We hold the part in a special tool while it cools, so it stays perfectly in shape.",
    },
  ];

  return (
    <section className="Section bg-white">
      <div className=" mx-auto text-center">
        {/* Title */}
        <h2 className="Heading text-center">Heat Treatments</h2>
        <p className="Paragraph text-center sm:px-16">
          At SAP Parts, we have special ways to make our metal parts strong and
          durable. We use a set of advanced treatments and high-tech furnaces to
          change the metal's structure so it's perfect for the job it needs to
          do.
        </p>
        <p className="Paragraph text-center sm:px-16">
          We have our own in-house furnaces, including custom ones and
          high-quality IPSen furnaces. This gives us full control over the
          process, allowing us to precisely manage temperature and timing to get
          the exact properties we need.
        </p>

        {/* Subtitle */}
        <h3 className="mt-8 text-xl font-semibold text-[#0E509E]">
          Our Core Heat Treatment Processes
        </h3>
      </div>

      {/* Grid Rows */}
      <div className="mt-8 space-y-6">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 bg-white shadow-xl border border-[#D9D9D9]/40 rounded-xl overflow-hidden">
          {processes.slice(0, 3).map((item, idx) => (
            <div
              key={idx}
              className={`p-6 text-center ${
                idx !== 2 ? "sm:border-r border-[#FACC48]" : ""
              }`}
            >
              <h4 className="text-lg font-medium text-[#FACC48]">
                {item.title}
              </h4>
              <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 bg-white shadow-xl border border-[#D9D9D9]/40 rounded-xl overflow-hidden">
          {processes.slice(3, 6).map((item, idx) => (
            <div
              key={idx}
              className={`p-6 text-center ${
                idx !== 2 ? "sm:border-r  border-[#FACC48]" : ""
              }`}
            >
              <h4 className="text-lg font-medium text-[#FACC48]">
                {item.title}
              </h4>
              <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
