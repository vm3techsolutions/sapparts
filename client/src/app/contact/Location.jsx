"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaPhone, FaEnvelope } from "react-icons/fa";

export default function LocationSection() {
  const [locations, setLocations] = useState([]);
  const [active, setActive] = useState(null);

  useEffect(() => {
    fetch("/data/contact/Location.json")
      .then((res) => res.json())
      .then((data) => {
        setLocations(data);
        setActive(data[0]); // Set first location as default
      });
  }, []);

  if (!active) return null;

  return (
    <div className="bg-white Section">
      <h2 className="Heading text-center ">Location</h2>

      {/* Image Row */}
      <div className="flex flex-wrap justify-center gap-16 mb-10">
        {locations.map((loc) => (
          <div
            key={loc.name}
            className={`cursor-pointer transition-opacity duration-300 flex flex-col items-center ${
              active.name === loc.name ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => setActive(loc)}
          >
            <div className="relative w-[300px] h-[300px] overflow-hidden rounded-md">
              <Image
                src={loc.image}
                alt={loc.name}
                fill
                className="object-cover rounded-md"
              />
              {/* Name Overlay */}
              <div
                className={`absolute bottom-0 left-0 w-full py-2 text-center text-xl font-semibold ${
                  active.name === loc.name
                    ? "text-white "
                    : "text-black bg-white/70"
                }`}
              >
                {loc.name}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Info Section */}
      <div className="max-w-3xl mx-auto bg-gray-100 rounded-lg p-6 text-left">
        <h3 className="text-lg font-bold text-center text-[#0E509E] mb-2">
          SAP Parts Pvt. Ltd.
        </h3>
        <p className="mb-4 text-sm text-center">{active.address}</p>

        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          {active.contacts.map((item, idx) => (
            <div key={idx}>
              <h4 className="font-semibold mb-1">{item.title}</h4>
              <p className="flex items-center gap-2">
                <FaPhone className="text-[#0E509E]" /> {item.phone}
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-[#0E509E]" /> {item.email}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
