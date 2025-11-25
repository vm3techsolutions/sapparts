"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function RequestQuote() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#FACC48] px-6 my-10">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-10 gap-6">
        
        {/* Left Section */}
        <div className="md:w-1/2 space-y-5">
          <h2 className="Heading">{t("requestQuote.title")}</h2>
          <h3 className="text-xl font-semibold text-[#363636] mt-4">
            {t("requestQuote.subtitle")}
          </h3>
          <p className="text-[#363636] max-w-md">
            {t("requestQuote.description")}
          </p>
          <Link href="/contact">
          <button className="bg-[#0E509E] text-white px-3 py-1 rounded hover:bg-white hover:text-black text-md">
            {t("requestQuote.button")}
          </button>
          </Link>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2 pl-0 md:pl-6">
          <Image
            src="/assets/products/RequestQuote.png"
            alt={t("requestQuote.imageAlt")}
            width={600}
            height={400}
            className="rounded-md object-cover transition-transform duration-500 ease-in-out transform hover:scale-95"
          />
        </div>
      </div>
    </section>
  );
}
