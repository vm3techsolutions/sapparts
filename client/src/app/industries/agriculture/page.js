import Agriculture from "./Agriculture";
import AgricultureBanner from "./AgricultureBanner";
import FAQs from "./FAQs";
import KeyBenefits from "./KeyBenefits";
import ProductsUsed from "./ProductsUsed";

export default function (){
    return(
        <div>
           <AgricultureBanner/>
           <Agriculture/>
           <ProductsUsed/>
           <KeyBenefits/>
           <FAQs/>
        </div>
    )
}