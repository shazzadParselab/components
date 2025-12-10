"use client"
import NavbarComponent from "@/app/components/component/navbar";
import HeroComponent from "./components/component/hero";
import AsSeenOnComponent from "./components/component/asSeenOn";
import BenifitsComponent from "./components/component/benifits";
import StaticsComponent from "./components/component/statics";
import UseCasesComponent from "./components/component/useCases";
import OurProductsComponent from "./components/component/ourProducts";


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
    </div>
  );
}
