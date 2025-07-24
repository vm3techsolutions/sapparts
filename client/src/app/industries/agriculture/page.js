import ScrollRing from "@/component/scroller/ScrollRing";
import Agriculture from "./Agriculture";
import AgricultureBanner from "./AgricultureBanner";
import FAQs from "./FAQs";
import KeyBenefits from "./KeyBenefits";
import ProductsUsed from "./ProductsUsed";

export default function industries(){
    return(
        <div>
            <ScrollRing/>
           <AgricultureBanner/>
           <Agriculture/>
           <ProductsUsed/>
           <KeyBenefits/>
           <FAQs/>
        </div>
    )
}