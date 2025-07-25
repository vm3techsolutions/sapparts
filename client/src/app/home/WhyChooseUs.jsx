"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from 'react-i18next';

export default function WhyChooseUs() {
  const { t } = useTranslation();
  return (
    <div className="Section bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div>
          <h2 className="Heading text-center sm:text-left">{t('Why Choose Us')}</h2>
          <p className="Paragraph text-center sm:text-left">{t('Why Choose Us Desc')}
          </p>
          <div className="rounded-md overflow-hidden">
            <Image
              src="/assets/home/whyChoose1.png"
              alt="Why Choose Us"
              width={500}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
          </div>
        </div>

       {/* Right Side */}
<div className="grid grid-cols-2 gap-10">
  {[
    { number: "01", title: t("Over 20 Years of Expertise"), link: "/expertise" },
    { number: "02", title: t("Global Supply Network"), link: "/network" },
    { number: "03", title: t("Precision Manufacturing"), link: "/manufacturing" },
    { number: "04", title: t("ISO–Certified Processes"), link: "/certification" },
  ].map((item, index) => (
    <div key={index} className="text-center">
      <Link href={item.link}>
        <div className="cursor-pointer">
          <div className="sm:w-64 sm:h-32 h-20 w-40 mx-auto bg-[#D9D9D9]/50 rounded-b-full flex items-center justify-center">
            <span className="text-[#FACC48] sm:text-5xl text-4xl font-bold">
              {item.number}
            </span>
          </div>
          <p className="mt-2 text-[#0E509E] font-semibold sm:text-lg">
            {item.title}
          </p>
        </div>
      </Link>
    </div>
  ))}

  {/* Know More Button */}
  <div className="col-span-2 mt-6 text-center">
    <Link href="#">
      <button className="Button">{t("Know More")}</button>
    </Link>
  </div>
</div>

      </div>
    </div>
  );
}
