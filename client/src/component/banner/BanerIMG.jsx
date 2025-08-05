"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

// Banner path mapping
const bannerImageMap = {
   "/": "/assets/home/homeBanner.png",

  "/strategy": "/assets/banners/strategy.png",

  "/industries/agriculture": "/assets/industries/AgricultureBanner2.png",
  "/industries/automotive": "/assets/industries/AutomotiveBanner.png",
  "/industries/construction": "/assets/industries/ConstructionBanner.png",
  "/industries/defence": "/assets/industries/DefenceBanner.png",
  "/industries/industrial": "/assets/industries/IndustrialBanner.png",
  "/industries/mining": "/assets/industries/MiningBanner.png",
  "/industries/high-tech": "/assets/industries/Hi-TechBanner.png",

  "/products/mechanical-face-seals": "/assets/products/FaceSealsBanner.png",
  "/products/bushings": "/assets/products/BushingBanner.png",
  "/products/sintered-products": "/assets/products/SinteredBanner.png",
  "/products/pump-valves-components": "/assets/products/BushingBanner.png",
  "/products/sap-hub-bearings": "/assets/products/BushingBanner.png",
  "/products/precision-components": "/assets/products/PrecisionBanner.png",

  "/technology": "/assets/technology/TechnologyBanner.png",

  "/resources/media/press-release": "/assets/banners/pressrelease.png",
  "/resources/media/product-launch": "/assets/banners/productlaunch.png",
  "/resources/media/industry-news": "/assets/banners/industrynews.png",

  "/resources/case-study/success-1": "/assets/banners/case1.png",
  "/resources/case-study/success-2": "/assets/banners/case2.png",
  "/resources/case-study/success-3": "/assets/banners/case3.png",

  "/MaintenanceTips/SealsAssemblyGuide": "/assets/home/homeBanner.png",
  "/MaintenanceTips/Seal-O-Fix": "/assets/home/homeBanner.png",
  "/MaintenanceTips/SealForRotovator": "/assets/home/homeBanner.png",

  "/sustainability": "/assets/banners/sustainability.png",
  "/about": "/assets/home/homeBanner.png",
  "/career": "/assets/career/CareerBanner2.png",
  "/contact": "/assets/contact/contactBanner2.png",
};

export default function BannerImage() {
  const pathname = usePathname();

  // Fallback image in case path not matched
  const bannerSrc = bannerImageMap[pathname] || "/assets/banners/default.png";

  return (
    <div className="w-full bg-white flex justify-center items-center sm:px-4">
      <div>
        <Image
          src={bannerSrc}
          alt="Banner"
          width={933}
          height={512}
          className="object-cover sm:w-[215vh] sm:h-[80vh]"
        />
      </div>
    </div>
  );
}
