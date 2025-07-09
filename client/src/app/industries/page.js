import Agriculture from "./Agriculture";
import Automotive from "./Automotive";
import Construction from "./Construction";
import Defence from "./Defence";
import HighTech from "./HighTech";
import Industrial from "./Industrial";
import IndustriesBanner from "./IndustriesBanner";
import Mining from "./Mining";
import ProductsUsed from "./ProductsUsed";

export default function (){
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