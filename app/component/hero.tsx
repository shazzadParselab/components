
'use client'
import Image from "next/image";
import { TaglineIcon } from "./icons_libary";


export default function HeroComponent() {

  return (
    <section className="hero-bg overflow-hidden">
      <div className="flex flex-col gap-9 items-center">

        <div className="flex flex-col items-center justify-center gap-4">
          {/* ----- Tagline ----- */}
          <div className="tagline text-[#432AD8] sm:flex! hidden!">
            <TaglineIcon />
            The Ultimate E-commerce Product Customization Platform
          </div>
          <div className="tagline text-[#432AD8] flex! sm:hidden!">
            <TaglineIcon />
            The Ultimate Product Customization Platform
          </div>


          {/* ----- Hero Section Heading ------ */}
          <h1 className="hero-heading max-w-[1042px] text-[40px] md:text-6xl"> Future of <span className="active">Product Personalization</span> for Smart E-Commerce</h1>
          <p className="max-w-[800px] flex text-lg font-normal text-center">
            Take your e-commerce business to the next level with easy-to-use product personalization tools that allow you to offer unique, customized experiences for every customer.
          </p>

        </div>


        <div className="flex flex-wrap items-center justify-center gap-3">
          <button className="btn btn-secondary">
            Explore Apps
          </button>
          <button className="btn btn-primary">
            Free Consultation
          </button>
        </div>

        <div className="flex flex-row items-end justify-center relative top-8">

          <Image src={"/hero/1.svg"} alt="Hero Card" width={230} height={309} className="max-w-[230px] max-h-[309px] object-cover w-full aspect-[0.7] absolute -left-60 -top-20" />
          <Image src={"/hero/2.svg"} alt="Hero Card" width={230} height={309} className="max-w-[230px] max-h-[309px] object-cover w-full aspect-[0.7]" />
          <Image src={"/hero/3.svg"} alt="Hero Card" width={230} height={246} className="max-w-[230px] max-h-[246px] object-cover w-full aspect-[0.9]" />
          <Image src={"/hero/4.svg"} alt="Hero Card" width={230} height={309} className="max-w-[230px] max-h-[309px] object-cover w-full aspect-[0.7]" />
          <Image src={"/hero/5.svg"} alt="Hero Card" width={230} height={309} className="max-w-[230px] max-h-[309px] object-cover w-full aspect-[0.7] absolute -right-60 -top-20" />

        </div>




      </div>
    </section>
  );
}
