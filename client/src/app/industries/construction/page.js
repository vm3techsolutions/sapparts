import ScrollRing from "@/component/scroller/ScrollRing";
import Construction from "./Construction";
import ConstructionBanner from "./ConstructionBanner";
import FAQs from "./FAQs";
import KeyBenefits from "./KeyBenefits";
import ProductUsed from "./ProductUsed";

export default function (){
    return(
        <div>
            <ScrollRing/>
           <ConstructionBanner/>
           <Construction/>
           <ProductUsed/>
           <KeyBenefits/>
           <FAQs/>
        </div>
    )
}