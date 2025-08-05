import ScrollRing from "@/component/scroller/ScrollRing";
import Construction from "./Construction";

import FAQs from "./FAQs";
import KeyBenefits from "./KeyBenefits";
import ProductUsed from "./ProductUsed";

export default function industries(){
    return(
        <div>
            <ScrollRing/>
          
           <Construction/>
           <ProductUsed/>
           <KeyBenefits/>
           <FAQs/>
        </div>
    )
}