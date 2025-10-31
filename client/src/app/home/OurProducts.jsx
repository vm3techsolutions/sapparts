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
        {products.map((item) => (
          <div
            key={item.id}
            className="relative h-80 w-full overflow-hidden shadow-md bg-white text-[#363636] group transition-all duration-500"
          >
            {/* Image Layer - hidden by default, shown on hover */}
           <div className="absolute inset-0 z-0">
  <Image
    src={item.image}
    alt={item.title[currentLang]}
    fill
    className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    sizes="100vw"
  />
  {/* Black overlay */}
  {/* <div className="absolute inset-0  opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div> */}
</div>

            <div className="relative h-full w-full z-10 flex flex-col justify-between py-10 px-7 transition-colors duration-500 group-hover:text-white">
              <div className="group">
  <h3 className="text-2xl text-center font-semibold text-[#0E509E] transition-all duration-300 ">
    {item.title[currentLang]}
  </h3>
</div>


              {/* Description */}
              {/* <div className="flex-grow flex items-center">
                <p className="text-md">{item.description[currentLang]}</p>
              </div> */}

              {/* Button */}
<Link href={item.link}>
  <button className="Button mt-4 mx-auto block group-hover:border-white group-hover:text-white transition-colors duration-300">
    {t("Know More")}
  </button>
</Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

