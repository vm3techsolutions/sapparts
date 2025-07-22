import FAQs from "./FAQs";
import HighTech from "./HighTech";
import HighTechBanner from "./HighTechBanner";
import KeyBenefits from "./KeyBenefits";
import ProductUsed from "./ProductUsed";

export default function (){
    return(
        <div>
           <HighTechBanner/>
           <HighTech/>
           <ProductUsed/>
           <KeyBenefits/>
           <FAQs/>
        </div>
    )
}