import ScrollRing from "@/component/scroller/ScrollRing";
import FAQs from "./FAQs";
import Industrial from "./Industrial";

import KeyBenefits from "./KeyBenefits";
import ProductUsed from "./ProductUsed";

export default function industries(){
    return(
        <div>
            <ScrollRing/>
          
           <Industrial/>
           <ProductUsed/>
           <KeyBenefits/>
           <FAQs/>
        </div>
    )
}