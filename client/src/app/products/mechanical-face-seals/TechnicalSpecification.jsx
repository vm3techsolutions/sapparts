"use client";
import { useTranslation } from "react-i18next";

export default function TechnicalSpecs() {
  const { t } = useTranslation();

  const specs = [
    [t("technicalSpecs.row1.feature"), t("technicalSpecs.row1.benefit")],
    [t("technicalSpecs.row2.feature"), t("technicalSpecs.row2.benefit")],
    [t("technicalSpecs.row3.feature"), t("technicalSpecs.row3.benefit")],
    [t("technicalSpecs.row4.feature"), t("technicalSpecs.row4.benefit")],
    [t("technicalSpecs.row5.feature"), t("technicalSpecs.row5.benefit")],
    [t("technicalSpecs.row6.feature"), t("technicalSpecs.row6.benefit")],
    [t("technicalSpecs.row7.feature"), t("technicalSpecs.row7.benefit")],
  ];

  return (
    <div className="Section bg-white">
      <h2 className="Heading text-center mb-2">
        {t("technicalSpecs.sectionTitle")}
      </h2>
      <table className="w-full border-collapse text-center mx-auto">
        <thead>
          <tr>
            <th className="bg-[#D9D9D9]/60 text-[#363636] px-4 py-3 text-center border-2 border-[#0E509E] w-[40%]">
              {t("technicalSpecs.feature")}
            </th>
            <th className="bg-[#D9D9D9]/60 text-[#363636] px-4 py-3 text-center border-2 border-[#0E509E] w-[60%]">
              {t("technicalSpecs.benefit")}
            </th>
          </tr>
        </thead>
        <tbody>
          {specs.map(([key, value], index) => (
            <tr key={index} className="bg-[#D9D9D9]/15">
              <td className="border-2 border-[#0E509E] text-[#0E509E] px-4 py-3 w-[40%]">
                {key}
              </td>
              <td className="border-2 border-[#0E509E] text-[#0E509E] px-4 py-3 w-[60%]">
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
