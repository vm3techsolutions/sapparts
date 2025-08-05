import ApplicationsIndustry from "./ApplicationsIndustry";

import BushingsCenterIMG from "./BushingsCenterIMG";
import ManufacturingTesting from "./ManufacturingTesting";
import Materials from "./Materials";
import ProductOverview from "./ProductOverview";
import RequestQuote from "./RequestQuote";
import TechnicalSpecification from "./TechnicalSpecification";

export default function product(){
    return(
        <div>
         
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