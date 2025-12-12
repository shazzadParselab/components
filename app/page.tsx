"use client"
import NavbarComponent from "@/app/component/navbar";
import HeroComponent from "./component/hero";
import AsSeenOnComponent from "./component/asSeenOn";
import BenifitsComponent from "./component/benifits";
import StaticsComponent from "./component/statics";
import UseCasesComponent from "./component/useCases";
import OurProductsComponent from "./component/ourProducts";
import SolutionComponent from "./component/solution";
import SuccessStoryComponent from "./component/successStory";
import IntegrationComponent from "./component/integration";
import ProcessComponent from "./component/process";
import CTAComponent from "./component/ctaComponent";
import BlogAndResourceComponent from "./component/blogResource";
import DesinerMarketPlaceComponent from "./component/desinerMarketPlace";
import FooterComponent from "./component/footer";
import ProductsDesignerComponent from "./component/productsDesigner";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-centere">
      <NavbarComponent/>
      <HeroComponent/>
      <AsSeenOnComponent/>
      <BenifitsComponent/>
      <StaticsComponent/>
      <UseCasesComponent/>
      <OurProductsComponent/>
      <SolutionComponent/>
      <SuccessStoryComponent/>
      <IntegrationComponent/>
      <ProcessComponent/>
      <CTAComponent/>
      <BlogAndResourceComponent/>
      <DesinerMarketPlaceComponent/>
      <FooterComponent/>
      <ProductsDesignerComponent/>
    </div>
  );
}
