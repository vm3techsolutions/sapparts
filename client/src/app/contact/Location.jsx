"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

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
      <div className="max-w-3xl mx-auto bg-[#F5F5F5] rounded-lg p-6 sm:px-10 ">
       <div className="flex flex-col items-center justify-center mb-4">
  <FaMapMarkerAlt className="text-[#FACC48] text-2xl mb-2" />
  <h3 className="text-lg font-bold text-center text-[#0E509E]">
    {active.company}
  </h3>
</div>       
        <p className="mb-4 text-sm text-center">{active.address}</p>

         <div className="flex flex-col items-center justify-center mb-4">
  {/* <FaMapMarkerAlt className="text-[#FACC48] text-2xl mb-2" /> */}
  <h3 className="text-lg font-bold text-center text-[#0E509E]">
    {active.company1}
  </h3>
</div>      
        <p className="mb-4 text-sm text-center">{active.address1}</p>

       <div
  className={`grid gap-6 text-sm ${
    active.contacts.length === 1
      ? 'justify-center' // center 1 item
      : 'sm:grid-cols-2' // grid for 2+
  } sm:ml-24 ml-10`}
>
  {active.contacts.map((item, idx) => (
    <div key={idx}>
      <h4 className="font-semibold mb-1">{item.title}</h4>

      <div className="flex items-start gap-3 mb-2">
        <div className="text-[#FACC48] mt-1">
          <FaPhoneAlt />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-800">{item.phone}</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <div className="text-[#FACC48] mt-1">
          <FaEnvelope />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-800">{item.email}</p>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
}
