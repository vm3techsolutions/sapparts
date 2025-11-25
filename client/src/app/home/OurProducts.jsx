"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from 'react-i18next';
import Image from "next/image";

export default function ProductsPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "en";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/home/Products.json")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("Expected array, got:", data);
        }
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="Section bg-white">
      <h2 className="Heading text-center">{t('Our Products')}</h2>
      <p className="Paragraph text-center">{t("Products Description")}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-16 gap-8">
        {products.map((item, index) => {
          const isSmallImg = index === 0 || index === 4; // 1st & 5th product

          return (
            <div
              key={item.id}
              className="relative h-80 w-full overflow-hidden shadow-md bg-white text-[#363636] group transition-all duration-500"
            >

              {/* Image Layer */}
              <div className="absolute inset-0 z-0 flex items-center justify-center">
                {isSmallImg ? (
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 w-40 h-40">
                    <Image
                      src={item.image}
                      alt={item.title[currentLang]}
                      width={160}
                      height={160}
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <Image
                    src={item.image}
                    alt={item.title[currentLang]}
                    fill
                    className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    sizes="120vw"
                  />
                )}
              </div>

              <div className="relative h-full w-full z-10 flex flex-col justify-between py-10 px-7 transition-colors duration-500 group-hover:text-white">
                <h3 className="text-2xl text-center font-semibold text-[#0E509E] transition-all duration-300 -mt-2">
                  {item.title[currentLang]}
                </h3>

                <Link href={item.link}>
                  <button className="Button mt-4 mx-auto block group-hover:border-white group-hover:text-white transition-colors duration-300">
                    {t("Know More")}
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
