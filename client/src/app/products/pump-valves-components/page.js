import ApplicationsIndustry from "./ApplicationsIndustry";
import BushingBanner from "./Banner";
import BushingsCenterIMG from "./CenterIMG";
import ManufacturingTesting from "./ManufacturingTesting";
import Materials from "./Materials";
import ProductOverview from "./ProductOverview";
import RequestQuote from "./RequestQuote";
import TechnicalSpecification from "./TechnicalSpecification";

export default function product(){
    return(
        <div>
          <BushingBanner/>
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