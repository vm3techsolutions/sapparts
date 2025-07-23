import ScrollRing from "@/component/scroller/ScrollRing";
import Bushings from "./Bushings";
import MechanicalFaceSeals from "./MechanicalFaceSeals";
import PrecisionComponents from "./PrecisionComponents";
import ProductBanner from "./ProductBanner";
import PumpValvesComponents from "./PumpValvesComponents";
import SAPHubBearings from "./SAPHubBearings";
import SinteredProducts from "./SinteredProducts";

export default function(){
    return(
        <div>
            <ScrollRing/>
            
            <ProductBanner/>
            <MechanicalFaceSeals/>
            <Bushings/>
            <SinteredProducts/>
            <PumpValvesComponents/>
            <SAPHubBearings/>
            <PrecisionComponents/>
        </div>
    )
}