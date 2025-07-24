import Agriculture from "./agriculture/Agriculture";
import Automotive from "./Automotive";
import Construction from "./Construction";
import Defence from "./Defence";
import HighTech from "./HighTech";
import Industrial from "./Industrial";
import IndustriesBanner from "./agriculture/AgricultureBanner";
import Mining from "./Mining";
import ProductsUsed from "./agriculture/ProductsUsed";

export default function industries(){
    return(
        <div>
            <IndustriesBanner/>
            <Agriculture/>
            <ProductsUsed/>
            <Automotive/>
             <ProductsUsed/>
            <Construction/>
             <ProductsUsed/>
            <Defence/>
             <ProductsUsed/>
            <Industrial/>
             <ProductsUsed/>
            <Mining/>
             <ProductsUsed/>
            <HighTech/>
             <ProductsUsed/>
        </div>
    )
}