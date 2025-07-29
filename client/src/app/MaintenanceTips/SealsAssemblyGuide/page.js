import HousingGrrove from "./HousingGroove";
import HousingPreparation from "./HousingPreparation";
import SapPartsSealInstallationTool from "./SapPartsSealInstallationTool";
import SealsAssemblyGuide from "./SealsAssemblyGuide";
import SealsAssemblyGuideBanner from "./SealsAssemblyGuideBanner";


export default function Home() {
  return (
    <div>
    <SealsAssemblyGuideBanner/>
    <SealsAssemblyGuide/>
    <HousingPreparation/>
    <SapPartsSealInstallationTool/>
    <HousingGrrove/>
    </div>
  );
}
