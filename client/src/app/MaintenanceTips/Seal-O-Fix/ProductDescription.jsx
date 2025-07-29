"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaRegArrowAltCircleRight } from "react-icons/fa";


export default function ProductDescription() {
  const {t} = useTranslation();
  return (
    <div className="Section bg-white ">
   

         {/* Left Side - Text */}
        <div className="w-full mt-6 sm:mt-2">
        
          {/* Product Description: */}
          <div>
        <h3 className = "text-2xl  font-bold hidden md:block mb-2  ">Product Description</h3> 
           <p className="paragraph">SAP Seal-O-Fix is a specially developed Solution for Duo Cone Seal assembly in the housings and for heavy duty cleansing purpose. Surface Cleaning job that ordinary de-greasers cannot handle, are served effectively with SAP Seal-O-Fix . It is a ready-to-use solvent based composition, powerful cleaning emulsifiers and soluble grease cutting solvent. It cuts heavy sticky rust, dust and soils quickly from the seal housing surface with no harsh fumes or unpleasant odors. This is a Propitiatory Product Developed by SAP PARTS specially for Duo Cone Seals.</p>
           </div>

             {/* Product Benefits */}
          <div className="pt-10 ">
           <h3 className = "text-2xl  font-bold hidden md:block mb-2  ">Product Benefits</h3> 
           <ul>
            <li className="flex items-start gap-2 pt-1" ><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/>Powerful and fast acting.</li>
           <li className="flex items-start gap-2 pt-1"><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/>SAP Seal-O-Fix is absolutely safe on metal, rubber and painted surfaces.</li>
            <li className="flex items-start gap-2 pt-1"><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/>Will not harm marking, chrome or engraving. Ensures complete removal of all oil and grease deposits prior to Duo Cone seal assembly.</li>
             <li className="flex items-start gap-2 pt-1" ><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/>Convenient and safe to use on all types of Mechanical Seals.</li>
              <li className="flex items-start gap-2 pt-1" ><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/>The only effective surface preparation spray for the removal of Silicone Oils.</li>
            
           </ul>
           </div>

             {/* Properties Of Material: */}
          <div className="pt-10 ">
           <h3 className = "text-2xl  font-bold hidden md:block mb-2  ">Properties Of Material</h3> 
           <ul>
            <li className="flex items-start gap-2 pt-1" ><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/>Chemical Type: Mineral Oils / Solvent based / NON CFC</li>
           <li className="flex items-start gap-2 pt-1"><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/>Containing proprietary ingredients, Surfactants and Conditioners</li>
            <li className="flex items-start gap-2 pt-1"><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/>Appearance: Clear BRIGHT Liquid.</li>
             <li className="flex items-start gap-2 pt-1"><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/>Odor: SOLVENT, SPECIFIC</li>
                <li className="flex items-start gap-2 pt-1"><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/> Flash Point: 50 DEGREE.CEL</li>
                  <li className="flex items-start gap-2 pt-1"><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/>  Specific Gravity: 0.80</li>
           </ul>
           </div>
           
        </div>

    
      </div>



  
  );
}
