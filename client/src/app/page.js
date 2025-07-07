import Image from "next/image";
import HomeBanner from "./home/HomeBanner";
import OurStrategy from "./home/OurStrategy";
import OurProducts from "./home/OurProducts";
import IndustriesWeServe from "./home/IndustriesWeServe";
import WhyChooseUs from "./home/WhyChooseUs";
import Innovation from "./home/Innovation";
import GlobalReach from "./home/GlobalReach";
import RecentBlogs from "./home/RecentBlogs";
import WeCare from "./home/WeCare";
import GetYourQuoteForm from "./home/GetYourQuoteForm";

export default function Home() {
  return (
    <div>
      <HomeBanner/>
      <OurStrategy/>
      <OurProducts/>
      <IndustriesWeServe/>
      <WhyChooseUs/>
      <Innovation/>
      <GlobalReach/>
      <RecentBlogs/>
      <WeCare/>
      <GetYourQuoteForm/>
    </div>
  );
}
