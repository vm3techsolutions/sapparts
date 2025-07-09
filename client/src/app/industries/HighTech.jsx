"use client";
import Image from "next/image";
import React from "react";

export default function HighTechSection() {
  return (
    <div className="Section bg-white">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Mobile View - Title */}
        <h2 className="Heading block md:hidden text-center">High - Tech</h2>

        {/* Right Side - Image (1st on mobile) */}
        <div className="w-full md:w-[320px] flex-shrink-0 order-1 md:order-2">
          <Image
            src="/assets/industries/HighTech.png"
            alt="High - Tech"
            width={300}
            height={370}
            className="w-full sm:h-[80vh] rounded shadow-md -mt-4 md:mt-10"
          />
        </div>

        {/* Left Side - Description (2nd on mobile) */}
        <div className="flex-1 order-2 md:order-1">
          <h2 className="Heading hidden md:block">High - Tech</h2>
          <p className="Paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis
            venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et
            eros porta lobortis sit amet at magna. Phasellus in libero et massa
            volutpat convallis. Morbi ut est nec nulla facilisis condimentum. Sed
            at sapien eget nunc iaculis dapibus a ac eros. Curabitur aliquam,
            urna eu fermentum fringilla, nunc urna consequat nisi, non commodo
            sapien turpis a erat.
          </p>
          <p className="Paragraph -mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis
            venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et
            eros porta lobortis sit amet at magna. Phasellus in libero et massa
            volutpat convallis. Morbi ut est nec nulla facilisis condimentum. Sed
            at sapien eget nunc iaculis dapibus a ac eros. Curabitur aliquam,
            urna eu fermentum fringilla, nunc urna consequat nisi, non commodo
            sapien turpis a erat.
          </p>
          <p className="Paragraph -mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis
            venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et
            eros porta lobortis sit amet at magna. Phasellus in libero et massa
            volutpat convallis. Morbi ut est nec nulla facilisis condimentum. Sed
            at sapien eget nunc iaculis dapibus a ac eros. Curabitur aliquam,
            urna eu fermentum fringilla, nunc urna consequat nisi, non commodo
            sapien turpis a erat.
          </p>
        </div>
      </div>
    </div>
  );
}
