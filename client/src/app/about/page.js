
import AwardsRecognitions from "./AwardsRecognitions";
import Certifications from "./Certifications";
import CompanyHistory from "./CompanyHistory";
import Leadership from "./Leadership";
import ManufacturingPlants from "./ManufacturingPlants";
import Milestones from "./Milestones";
import MissionVision from "./MissionVision";
import Roadmap from "./Roadmap";
  import ScrollRing from "@/component/scroller/ScrollRing";

export default function AboutPage(){
    return(
        <div>
             <ScrollRing/>
            
            <CompanyHistory/>
            <Milestones/>
            <MissionVision/>
            <Certifications/>
            <ManufacturingPlants/>
            <Leadership/>
            <AwardsRecognitions/>
            <Roadmap/>
        </div>
    )
}