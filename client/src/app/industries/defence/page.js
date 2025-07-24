import ScrollRing from "@/component/scroller/ScrollRing";
import Defence from "./Defence";
import DefenceBanner from "./DefenceBanner";
import FAQs from "./FAQs";
import KeyBenefits from "./KeyBenefits";
import ProductUsed from "./ProductUsed";

export default function industries(){
    return(
        <div>
            <ScrollRing/>
           <DefenceBanner/>
           <Defence/>
           <ProductUsed/>
           <KeyBenefits/>
           <FAQs/>
        </div>
    )
}