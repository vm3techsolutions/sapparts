"use client";
import Image from "next/image";
import { useTranslation } from 'react-i18next';

export default function GlobalReach() {
  const { t } = useTranslation("common");
  return (
    <div className="Section bg-white">
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h2 className="Heading text-center">
          {t('Global Reach')}
        </h2>
        <p className="Paragraph text-center">
          {t('Global Reach Desc')}
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <Image
          src="/assets/home/GlobalEng-2.jpg"
          alt="Global Reach Map"
          width={1200}
          height={700}
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
