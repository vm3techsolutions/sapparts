import HousingGrrove from "./HousingGroove";
import HousingPreparation from "./HousingPreparation";
import SapPartsSealInstallationTool from "./SapPartsSealInstallationTool";
import SealsAssemblyGuide from "./SealsAssemblyGuide";



export default function Home() {
  return (
    <div>
   
    <SealsAssemblyGuide/>
    <HousingPreparation/>
    <SapPartsSealInstallationTool/>
    <HousingGrrove/>
    </div>
  );
}
