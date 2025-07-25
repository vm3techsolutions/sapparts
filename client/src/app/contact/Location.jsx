"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function LocationSection() {
  const { t, i18n } = useTranslation(); // use namespace if applicable
  const currentLang = i18n.language || "en";

  const [locations, setLocations] = useState([]);
  const [active, setActive] = useState(null);

  useEffect(() => {
    fetch("/data/contact/Location.json")
      .then((res) => res.json())
      .then((data) => {
        setLocations(data);
        setActive(data[0]);
      })
      .catch((err) => console.error("Error loading locations:", err));
  }, []);

  if (!active) return null;

  return (
    <div className="bg-white Section">
      <h2 className="Heading text-center">{t("Location")}</h2>

      {/* Image Row */}
      <div className="max-w-8xl flex flex-wrap justify-center gap-16 mb-10">
        {locations.map((loc) => (
          <div
            key={loc.name[currentLang]}
            className={`cursor-pointer transition-opacity duration-300 flex flex-col items-center ${
              active.name === loc.name ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => setActive(loc)}
          >
            <div className="relative w-[300px] h-[300px] overflow-hidden rounded-md">
              <Image
                src={loc.image}
                alt={loc.name[currentLang]}
                fill
                className="object-cover rounded-md"
              />
              <div
                className={`absolute bottom-0 left-0 w-full py-2 text-center text-xl font-semibold ${
                  active.name === loc.name
                    ? "text-white"
                    : "text-black bg-white/70"
                }`}
              >
                {loc.name[currentLang]}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Info Section */}
      <div className="max-w-5xl mx-auto bg-[#F5F5F5] rounded-lg p-6 sm:px-10">
        {/* Company 1 */}
        {active.company && (
          <div className="flex flex-col items-center justify-center mb-4">
            <FaMapMarkerAlt className="text-[#FACC48] text-3xl mb-2" />
            <h3 className="text-[24px] font-semibold text-center text-[#0E509E]">
              {active.company?.[currentLang] || ""}
            </h3>
          </div>
        )}

        {active.address && (
          <p className="mb-4 text-[20px] font-normal text-center">
            {active.address?.[currentLang] || ""}
          </p>
        )}

        {/* Company 2 (optional) */}
        {active.company1 && (
          <div className="flex flex-col items-center justify-center mb-4">
            <h3 className="text-[24px] font-semibold text-center text-[#0E509E]">
              {active.company1?.[currentLang] || ""}
            </h3>
          </div>
        )}

        {active.address1 && (
          <p className="mb-4 text-[20px] font-normal text-center">
            {active.address1?.[currentLang] || ""}
          </p>
        )}

        {/* Contacts */}
        <div
          className={`grid gap-6 text-sm ${
            active.contacts.length === 1
              ? "justify-center"
              : "sm:grid-cols-2"
          } sm:ml-24 ml-10`}
        >
          {active.contacts.map((item, idx) => (
            <div key={idx}>
              {item.title && (
                <h4 className="font-semibold text-[22px] mb-1">
                  {typeof item.title === "string"
                    ? item.title
                    : item.title?.[currentLang] || ""}
                </h4>
              )}

              <div className="flex items-start gap-3 mb-2">
                <div className="text-[#FACC48] mt-1 text-2xl">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="font-normal text-[#000000] text-[20px]">
                    {item.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-[#FACC48] mt-1 text-2xl">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="font-normal text-[#000000] text-[20px]">
                    {item.email}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
