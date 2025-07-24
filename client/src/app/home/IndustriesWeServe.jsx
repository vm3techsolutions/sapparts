"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";

export default function IndustriesSection() {
 const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "en";
  const [industries, setIndustries] = useState([]);

  useEffect(() => {
    const fetchIndustries = async () => {
      try {
        const res = await fetch("/data/home/Industries.json");
        const data = await res.json();
        if (Array.isArray(data)) {
          setIndustries(data);
        } else {
          console.error("Expected array, got:", data);
        }
      } catch (error) {
        console.error("Error fetching industries data:", error);
      }
    };

    fetchIndustries();
  }, []);

  return (
    <section className="Section bg-white">
      <h2 className="Heading text-center">{t('Industries We Serve')}</h2>
      <p className="Paragraph text-center max-w-4xl mx-auto">
        {t('Industry Description')}
      </p>

      <div className="mt-10 relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="!px-4"
        >
          {industries.map((industry) => (
            <SwiperSlide key={industry.id}>
              <div className="relative group overflow-hidden rounded-md shadow-md">
                <Image
                  src={industry.image}
                  alt={industry.title[currentLang]}
                  width={400}
                  height={300}
                  className="w-full h-[55vh] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                />

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[85%] z-10">
                  <Link href={industry.link || "#"}>
                    <div className="w-full bg-[#FACC48] text-[#363636] py-2 px-4 rounded-md font-medium shadow-md relative overflow-hidden group min-h-[48px] text-center cursor-pointer">
                      {/* Title (default state) */}
                      <span className="block group-hover:opacity-0 transition-opacity duration-300">
                        {industry.title[currentLang]}
                      </span>

                      {/* Know More (hover state) */}
                      <span className="absolute inset-0 flex justify-center items-center text-sm text-white bg-[#1C3C88] rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {t("Know More")}
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
