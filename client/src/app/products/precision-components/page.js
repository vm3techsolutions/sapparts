import RequestQuote1 from "../mechanical-face-seals/RequestQuote1";
import ApplicationsIndustry from "./ApplicationsIndustry";

import BushingsCenterIMG from "./CenterIMG";
import ManufacturingTesting from "./ManufacturingTesting";
import Materials from "./Materials";
import ProductOverview from "./ProductOverview";
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
          <RequestQuote1/>

        </div>
    )
}