"use client";
import { useTranslation } from "react-i18next";

export default function FoundationSection() {
  const { t } = useTranslation();

  return (
    <section className="Section bg-white">
      {/* Title */}
      <h2 className="Heading text-center">{t("foundation3.title")}</h2>

      {/* Paragraph */}
      <p className="Paragraph text-center sm:px-24">
        {t("foundation3.description")}
      </p>
    </section>
  );
}
