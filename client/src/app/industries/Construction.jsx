"use client";
import Image from "next/image";
import React from "react";

export default function ConstructionSection() {
  return (
    <div className="Section bg-white">
      <div className="flex flex-col-reverse md:flex-row gap-8 items-start">
        {/* Left Side - Text */}
        <div className="flex-1">
          {/* Title hidden on mobile (shown above image below) */}
          <h2 className="Heading hidden md:block">Construction</h2>

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

        {/* Right Side - Image */}
        <div className="w-full md:w-[320px] flex-shrink-0">
          {/* Title shown on top of image for mobile only */}
          <h2 className="Heading block md:hidden mb-4">Construction</h2>

          <Image
            src="/assets/industries/Construction.png"
            alt="Construction"
            width={300}
            height={370}
            className="w-full sm:h-[80vh] rounded shadow-md mt-0 md:mt-10"
          />
        </div>
      </div>
    </div>
  );
}
