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
      <h2 className=" Heading text-center">Our Products</h2>

      <p className="  Paragraph text-center">We are a Manufacturer, Designer and Supplier of technologically enriched and specially designed Mechanical Face Seal/ 
Floating Seals and Special surface treated Products for Construction, Mining, Defence, Transmission, and 
Agriculture Equipments.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-16 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="relative h-72 w-full overflow-hidden shadow-md bg-cover bg-center group "
            style={{ backgroundImage: `url(${item.image})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition duration-300 text-white py-10 px-7 flex flex-col justify-between">
              {/* Title at top */}
              <h3 className="text-2xl font-semibold">{item.title}</h3>

              {/* Description in center */}
              <div className="flex-grow flex items-center">
                <p className="text-md">{item.description}</p>
              </div>

              {/* Button at bottom */}
              <Link href={item.link}>
                <button className=" Button">
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
