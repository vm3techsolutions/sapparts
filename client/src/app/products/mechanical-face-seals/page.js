import ApplicationsIndustry from "./ApplicationsIndustry";

// import BushingsCenterIMG from "./CenterIMG";
import ManufacturingTesting from "./ManufacturingTesting";
import Materials from "./Materials";
import ProductOverview from "./ProductOverview";
import RequestQuote1 from "./RequestQuote1";

import TechnicalSpecification from "./TechnicalSpecification";
import ScrollRing from "@/component/scroller/ScrollRing";
import WhyChooseUs from "./WhyChooseUs";
import DesignManufacturingProcess from "./DesignManufacturingProcess";


export default function product(){
    return(
        <div>
            <ScrollRing/>
          
          <ProductOverview/>
          <ApplicationsIndustry/>
          <DesignManufacturingProcess/>
          {/* <TechnicalSpecification/>
          <Materials/> */}
          {/* <BushingsCenterIMG/> */}
          <ManufacturingTesting/>
          <WhyChooseUs/>
          <RequestQuote1/>

        </div>
    )
}