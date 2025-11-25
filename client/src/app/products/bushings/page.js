import RequestQuote1 from "../mechanical-face-seals/RequestQuote1";
import ApplicationsIndustry from "./ApplicationsIndustry";

// import BushingsCenterIMG from "./BushingsCenterIMG";
import ManufacturingTesting from "./ManufacturingTesting";
import Materials from "./Materials";
import ProductOverview from "./ProductOverview";

import TechnicalSpecification from "./TechnicalSpecification";
import ScrollRing from "@/component/scroller/ScrollRing";
import WhyChooseUs from "./WhyChooseUs";


export default function product(){
    return(
        <div>
         <ScrollRing/>

          <ProductOverview/>
          <ApplicationsIndustry/>
          <TechnicalSpecification/>
          <Materials/>
          {/* <BushingsCenterIMG/> */}
          <ManufacturingTesting/>
          <WhyChooseUs/>
          <RequestQuote1/>

        </div>
    )
}