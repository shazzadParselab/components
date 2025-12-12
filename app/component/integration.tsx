'use client'
import Image from "next/image";
import { ChevronUpRight, TaglineIcon } from "./icons_libary";


export default function IntegrationComponent() {
  return (
    <section className="flex w-full px-5 py-12 sm:py-20 bg-white">
      <div className="max-w-[1620] overflow-hidden w-full flex flex-wrap md:flex-nowrap flex-row items-center justify-between gap-9 mx-auto">

        <div className="max-w-[524px] min-w-[330px] flex flex-col items-start gap-4">
          {/* ----- Tagline ----- */}
          <div className="tagline text-[#432AD8]">
            <TaglineIcon />Integrations with Popular CMS
          </div>
          <h2 className="text-3xl lg:text-5xl font-medium">Built to Work Where Your Business Grows</h2>
          <p className="max-w-[714px] text-[#616170] text-lg font-normal">Whether {"you're"} on Shopify, WooCommerce, or any major e-commerce platform we help you personalize products with the right tools, apps, and expert guidance.</p>


          <button className="btn btn-secondary">
            Book a Demo <ChevronUpRight color={"secondary"} />
          </button>

        </div>


        <div className="hidden lg:flex items-center justify-center w-full max-w-[752px] object-cover">
          <Image src="/55.png" alt="intrigration" width={752} height={484} className="max-w-[752px] max-h-[484px] aspect-3/2 object-contain" />
        </div>
        <div className="flex lg:hidden items-center justify-center max-w-[335px] max-h-[567px] object-cover">
          <Image src="/66.png" alt="intrigration" width={335} height={567} className="max-w-[335px] max-h-[567px] object-contain" />
        </div>

      </div>
    </section>
  );
}
