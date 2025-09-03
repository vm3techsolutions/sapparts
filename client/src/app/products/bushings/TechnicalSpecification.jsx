"use client";
import { useTranslation } from "react-i18next";

export default function TechnicalSpecs() {
  const { t } = useTranslation();

  const rows = [
    ["technicalSpecs3.table.rows.row1.feature", "technicalSpecs3.table.rows.row1.benefit"],
    ["technicalSpecs3.table.rows.row2.feature", "technicalSpecs3.table.rows.row2.benefit"],
    ["technicalSpecs3.table.rows.row3.feature", "technicalSpecs3.table.rows.row3.benefit"],
    ["technicalSpecs3.table.rows.row4.feature", "technicalSpecs3.table.rows.row4.benefit"],
    ["technicalSpecs3.table.rows.row5.feature", "technicalSpecs3.table.rows.row5.benefit"],
    ["technicalSpecs3.table.rows.row6.feature", "technicalSpecs3.table.rows.row6.benefit"],
  ];

  return (
    <div className="Section bg-white">
      <h2 className="Heading text-center mb-2">
        {t("technicalSpecs3.sectionTitle")}
      </h2>
      <table className="w-full border-collapse text-center mx-auto">
        <thead>
          <tr>
            <th className="bg-[#D9D9D9]/60 text-[#363636] px-4 py-3 text-center border-2 border-[#0E509E] w-[40%]">
              {t("technicalSpecs3.table.feature")}
            </th>
            <th className="bg-[#D9D9D9]/60 text-[#363636] px-4 py-3 text-center border-2 border-[#0E509E] w-[60%]">
              {t("technicalSpecs3.table.benefit")}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([featureKey, benefitKey], index) => (
            <tr key={index} className="bg-[#D9D9D9]/15">
              <td className="border-2 border-[#0E509E] text-[#0E509E] px-4 py-3 w-[40%]">
                {t(featureKey)}
              </td>
              <td className="border-2 border-[#0E509E] text-[#0E509E] px-4 py-3 w-[60%]">
                {t(benefitKey)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
