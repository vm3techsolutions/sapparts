import CareerBanner from "./CareerBanner";
import CareerForm from "./CareerForm";
import CurrentOpenPositions from "./CurrentOpenPositions";
import WorkCulture from "./WorkCulture";

export default function Home() {
  return (
    <div>
    <CareerBanner/>
    <WorkCulture/>
    <CurrentOpenPositions/>
    <CareerForm/>
    </div>
  );
}
