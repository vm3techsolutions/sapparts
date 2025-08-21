import CastingProcess from "./CastingProcess";
import ElastomerSection from "./ElastomerMoulding";
import Grinding from "./Grinding";
import HeatTreatments from "./HeatTreatments";
import Lapping from "./Lapping";
import PowderMetallurgy from "./PowderMetallurgy ";
import PrecisionMachining from "./PrecisionMachining";
import QuotingPerformance from "./QuotingPerformance";
import SurfaceTreatment from "./SurfaceTreatment";

export default function Home() {
  return (
    <div>
     <CastingProcess/>
     <HeatTreatments/>
     <PrecisionMachining/>
     <Grinding/>
     <Lapping/>
     <ElastomerSection/>
     <SurfaceTreatment/>
     <QuotingPerformance/>
     <PowderMetallurgy/>
    </div>
  );
}
