"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/home/Products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="Section bg-white">
      <h2 className="Heading text-center">Our Products</h2>

      <p className="Paragraph text-center">
        We are a Manufacturer, Designer and Supplier of technologically enriched and specially designed Mechanical Face Seal/ 
        Floating Seals and Special surface treated Products for Construction, Mining, Defence, Transmission, and 
        Agriculture Equipments.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-16 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="relative h-80 w-full overflow-hidden shadow-md bg-white text-[#363636] group transition-all duration-500"
          >
            {/* Image Layer - hidden by default, shown on hover */}
            <div className="absolute inset-0 z-0">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              {/* Black overlay */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
            </div>

            {/* Content Layer */}
            <div className="relative h-full w-full z-10 flex flex-col justify-between py-10 px-7 transition-colors duration-500 group-hover:text-white">
              <h3 className="text-2xl font-semibold text-[#0E509E] group-hover:text-white transition-colors duration-300">
                {item.title}
              </h3>

              <div className="flex-grow flex items-center">
                <p className="text-md">{item.description}</p>
              </div>

              <Link href={item.link}>
                <button className="Button mt-4 border-[#0E509E] text-[#0E509E] group-hover:border-white group-hover:text-white transition-colors duration-300">
                  Know More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
