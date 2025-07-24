import ScrollRing from "@/component/scroller/ScrollRing";
import Automotive from "./Automotive";
import AutomotiveBanner from "./AutomotiveBanner";
import FAQs from "./FAQs";
import KeyBenefits from "./KeyBenefits";
import ProductUsed from "./ProductUsed";

export default function industries(){
    return(
        <div>
            <ScrollRing/>
           <AutomotiveBanner/>
           <Automotive/>
           <ProductUsed/>
           <KeyBenefits/>
           <FAQs/>
        </div>
    )
}