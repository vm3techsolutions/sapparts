"use client";
import Image from "next/image";

export default function CompanyHistory() {
  return (
    <section className="Section bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10">
        {/* Left: Text Content */}
        <div className="md:w-2/3">
          <h2 className="Heading ">
            Company History
          </h2>

          <p className="Paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. 
            Donec rutrum sed sem quis venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta 
            lobortis sit amet at magna. Phasellus in libero ut massa volutpat convallis. Morbi ut est nec nulla facilisis 
            condimentum. Sed at sapien eget nunc iaculis dapibus a ac eros. Curabitur aliquam, urna eu fermentum fringilla, 
            nunc urna consequat nisi, non commodo sapien turpis a erat.
          </p>

          <p className="Paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. 
            Donec rutrum sed sem quis venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta 
            lobortis sit amet at magna. Phasellus in libero ut massa volutpat convallis. Morbi ut est nec nulla facilisis 
            condimentum. Sed at sapien eget nunc iaculis dapibus a ac eros. Curabitur aliquam, urna eu fermentum fringilla, 
            nunc urna consequat nisi, non commodo sapien turpis a erat.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. 
            Donec rutrum sed sem quis venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta 
            lobortis sit amet at magna. Phasellus in libero ut massa volutpat convallis. Morbi ut est nec nulla facilisis 
            condimentum. Sed at sapien eget nunc iaculis dapibus a ac eros. Curabitur aliquam, urna eu fermentum fringilla, 
            nunc urna consequat nisi, non commodo sapien turpis a erat.
          </p>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/3 flex-shrink-0">
          <div className="rounded-lg shadow-md overflow-hidden">
            <Image
              src="/assets/about/CompanyHistory.png" 
              alt="Company History Image"
              width={500}
              height={500}
              className="object-cover w-full sm:h-[90vh]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
