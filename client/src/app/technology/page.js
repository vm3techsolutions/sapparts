import CentrifugalCasting from "./CentrifugalCasting";
import ElastomerMolding from "./ElastomerMolding";
import MachiningGrinding from "./MachiningGrinding";
import ManufacturingProcesses from "./ManufacturingProcesses";
import RoboticCasting from "./RoboticCasting";
import SinteringFacilities from "./SinteringFacilities";
import SurfaceTreatment from "./SurfaceTreatment";
import TechnologyBanner from "./TechnologyBanner";

export default function(){
    return(
        <div>
            <TechnologyBanner/>
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