import ScrollRing from "@/component/scroller/ScrollRing";
import FAQs from "./FAQs";
import Industrial from "./Industrial";
import IndustrialBanner from "./IndustrialBanner";
import KeyBenefits from "./KeyBenefits";
import ProductUsed from "./ProductUsed";

export default function (){
    return(
        <div>
            <ScrollRing/>
           <IndustrialBanner/>
           <Industrial/>
           <ProductUsed/>
           <KeyBenefits/>
           <FAQs/>
        </div>
    )
}