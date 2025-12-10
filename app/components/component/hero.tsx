
'use client'
import { TaglineIcon } from "../icons/icons_libary";


export default function HeroComponent() {

  return (
    <section className="hero-bg">
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
      </div>
    </section>
  );
}
