"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function LocationSection() {
  const { t, i18n } = useTranslation();
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

      {/* Image Row with mobile info */}
      <div className="max-w-8xl flex flex-wrap justify-center gap-16 mb-10">
        {locations.map((loc) => (
          <div key={loc.name[currentLang]} className="w-full sm:w-auto">
            <div
              className={`cursor-pointer transition-opacity duration-300 flex flex-col items-center ${
                active.name === loc.name ? "opacity-100" : "opacity-50"
              }`}
              onClick={() => setActive(loc)}
            >
              <div className="relative w-[320px] sm:w-[300px] h-[300px] overflow-hidden rounded-md mx-auto">
                <Image
                  src={loc.image}
                  alt={loc.name[currentLang]}
                  fill
                  className="object-cover rounded-md transition-transform duration-500 ease-in-out transform hover:scale-105"
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

            {/* Show info below image in mobile view */}
            {active.name === loc.name && (
              <div className="block sm:hidden mt-4 bg-[#F5F5F5] rounded-lg p-4">
                {active.company && (
                  <div className="text-center mb-2">
                    <FaMapMarkerAlt className="text-[#FACC48] text-xl mx-auto mb-1" />
                    <h3 className="text-lg font-semibold text-[#0E509E]">
                      {active.company?.[currentLang]}
                    </h3>
                    <p className="text-base mt-1">
                      {active.address?.[currentLang]}
                    </p>
                  </div>
                )}

                {active.company1 && (
                  <div className="text-center mb-2">
                    <h3 className="text-lg font-semibold text-[#0E509E]">
                      {active.company1?.[currentLang]}
                    </h3>
                    <p className="text-base mt-1">
                      {active.address1?.[currentLang]}
                    </p>
                  </div>
                )}

                <div className="grid gap-4 text-sm mt-2">
                  {active.contacts.map((item, idx) => (
                    <div key={idx}>
                      {item.title && (
                        <h4 className="font-semibold text-[18px] mb-1">
                          {typeof item.title === "string"
                            ? item.title
                            : item.title?.[currentLang] || ""}
                        </h4>
                      )}
                      <div className="flex items-start gap-2 mb-1">
                        <FaPhoneAlt className="text-[#FACC48] mt-1 text-lg" />
                        <p className="text-[16px]">{item.phone}</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <FaEnvelope className="text-[#FACC48] mt-1 text-lg" />
                        <p className="text-[16px]">{item.email}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop Info Box */}
      <div className="hidden sm:block max-w-5xl mx-auto bg-[#F5F5F5] rounded-lg p-6 sm:px-10">
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

        {/* Contacts - 2 column grid */}
        <div className="grid sm:grid-cols-2 gap-x-20 gap-y-8 text-center">
          {active.contacts.map((item, idx) => (
            <div key={idx}>
              {item.title && (
                <h4 className="font-semibold text-[22px] mb-2">
                  {typeof item.title === "string"
                    ? item.title
                    : item.title?.[currentLang] || ""}
                </h4>
              )}

              <div className="flex items-center justify-center gap-3 mb-2">
                <FaPhoneAlt className="text-[#FACC48] text-xl" />
                <p className="font-normal text-[#000000] text-[18px]">
                  {item.phone}
                </p>
              </div>

              <div className="flex items-center justify-center gap-3">
                <FaEnvelope className="text-[#FACC48] text-xl" />
                <p className="font-normal text-[#000000] text-[18px]">
                  {item.email}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
