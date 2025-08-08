import ApplicationsIndustry from "./ApplicationsIndustry";

import BushingsCenterIMG from "./CenterIMG";
import ManufacturingTesting from "./ManufacturingTesting";
import Materials from "./Materials";
import ProductOverview from "./ProductOverview";
import RequestQuote from "./RequestQuote";
import TechnicalSpecification from "./TechnicalSpecification";
import ScrollRing from "@/component/scroller/ScrollRing";


export default function product(){
    return(
        <div>
            <ScrollRing/>
          
          <ProductOverview/>
          <ApplicationsIndustry/>
          <TechnicalSpecification/>
          <Materials/>
          <BushingsCenterIMG/>
          <ManufacturingTesting/>
          <RequestQuote/>

        </div>
    )
}