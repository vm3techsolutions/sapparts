import Construction from "./Construction";
import ConstructionBanner from "./ConstructionBanner";
import FAQs from "./FAQs";
import KeyBenefits from "./KeyBenefits";
import ProductUsed from "./ProductUsed";

export default function (){
    return(
        <div>
           <ConstructionBanner/>
           <Construction/>
           <ProductUsed/>
           <KeyBenefits/>
           <FAQs/>
        </div>
    )
}