import ScrollRing from "@/component/scroller/ScrollRing";
import FAQs from "./FAQs";
import KeyBenefits from "./KeyBenefits";
import Mining from "./Mining";

import ProductUsed from "./ProductUsed";

export default function industries(){
    return(
        <div>
            <ScrollRing/>
          
           <Mining/>
           <ProductUsed/>
           <KeyBenefits/>
           <FAQs/>
        </div>
    )
}