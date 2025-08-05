import ScrollRing from "@/component/scroller/ScrollRing";
import CentrifugalCasting from "./CentrifugalCasting";
import ElastomerMolding from "./ElastomerMolding";
import MachiningGrinding from "./MachiningGrinding";
import ManufacturingProcesses from "./ManufacturingProcesses";
import RoboticCasting from "./RoboticCasting";
import SinteringFacilities from "./SinteringFacilities";
import SurfaceTreatment from "./SurfaceTreatment";
    

export default function technology(){
    return(
        <div>
            <ScrollRing/>
            
            <ManufacturingProcesses/>
            <CentrifugalCasting/>
            <MachiningGrinding/>
            <SinteringFacilities/>
            <ElastomerMolding/>
            <SurfaceTreatment/>
            <RoboticCasting/>
        </div>
    )
}