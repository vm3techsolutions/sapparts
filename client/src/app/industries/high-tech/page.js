import ScrollRing from "@/component/scroller/ScrollRing";
import FAQs from "./FAQs";
import HighTech from "./HighTech";
import HighTechBanner from "./HighTechBanner";
import KeyBenefits from "./KeyBenefits";
import ProductUsed from "./ProductUsed";

export default function industries(){
    return(
        <div>
            <ScrollRing/>
           <HighTechBanner/>
           <HighTech/>
           <ProductUsed/>
           <KeyBenefits/>
           <FAQs/>
        </div>
    )
}