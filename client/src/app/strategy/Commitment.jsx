"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function CenterTitleDescSection() {
  const { t } = useTranslation();

  const content = {
    title: t("centerSection.title"),
    description: t("centerSection.description"),
  };

  return (
    <section className="Section bg-white">
      <div className="mx-auto text-center">
        {/* Title */}
        <h2 className="text-center Heading">{content.title}</h2>

        {/* Description */}
        <p className="Paragraph text-center">{content.description}</p>
      </div>
    </section>
  );
}
