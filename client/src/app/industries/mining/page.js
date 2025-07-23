import ScrollRing from "@/component/scroller/ScrollRing";
import FAQs from "./FAQs";
import KeyBenefits from "./KeyBenefits";
import Mining from "./Mining";
import MiningBanner from "./MiningBanner";
import ProductUsed from "./ProductUsed";

export default function (){
    return(
        <div>
            <ScrollRing/>
           <MiningBanner/>
           <Mining/>
           <ProductUsed/>
           <KeyBenefits/>
           <FAQs/>
        </div>
    )
}