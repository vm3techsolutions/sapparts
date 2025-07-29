import Applications from "./Applications";
import Certifications from "./Certifications";
import Gallery from "./Gallery";
import MechanicalBanner from "./MechanicalBanner";
import Precision from "./Precision";
import TechnicalSpecifications from "./TechnicalSpecifications";
import WhyChooseUs from "./WhyChooseUs";

export default function product(){
    return(
        <div>
          <MechanicalBanner/>
          <Precision/>
          <TechnicalSpecifications/>
          <Applications/>
          <Certifications/>
          <WhyChooseUs/>
          <Gallery/>
        </div>
    )
}