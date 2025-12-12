'use client'

import { ChevronUpRight, TaglineIcon } from "./icons_libary";

export default function ProcessComponent() {
  return (
    <section className="flex w-full px-5 py-12 sm:py-20 bg-[#F9F9FB]">
      <div className="max-w-[1620] overflow-hidden w-full flex flex-col justify-between gap-12 mx-auto">
        <div className="flex flex-col md:flex-row w-full items-start gap-4 md:items-end justify-center md:justify-between">
          <div className="flex flex-col gap-4 items-start">
            {/* ----- Tagline ----- */}
            <div className="tagline text-[#432AD8]">
              <TaglineIcon />
              Step by Step Guideline
            </div>

            <h2 className="max-w-[592px] text-3xl lg:text-5xl font-medium">Start Personalization Business in 4 Simple Steps</h2>
            <p className="max-w-[524px] text-[#616170] text-lg font-normal">
              Provide articles and posts about the latest trends in customization, business tips, case studies, and industry news.
            </p>
          </div>
          <button className="btn btn-primary">
            Book 1:1 Consultation
            <ChevronUpRight color="primary" />
          </button>
        </div>
        <div className="flex flex-row md:flex-col w-full h-full gap-10">
          <div className="md:w-full md:h-px w-px h-full flex flex-col md:flex-row items-center">
            <div className="flex flex-col md:flex-row items-center md:w-full md:h-px w-px h-full bg-[#7579FF]"><span className="circle-button active">1</span></div>
            <div className="flex flex-col md:flex-row items-center md:w-full md:h-px w-px h-full bg-[#E0E0E0]"><span className="circle-button">2</span></div>
            <div className="flex flex-col md:flex-row items-center md:w-full md:h-px w-px h-full bg-[#E0E0E0]"><span className="circle-button">3</span></div>
            <div className="flex flex-col md:flex-row items-center md:w-full md:h-px w-px h-full bg-[#E0E0E0]"><span className="circle-button">4</span></div>
            <div className="flex flex-col md:flex-row items-center"><span className="w-2 h-2 rounded-full bg-[#7579FF]"></span></div>
          </div>
          <div className="flex flex-col md:flex-row gap-20 justify-between">
            <div className="flex flex-col items-start max-w-[249px] gap-px">
              <span className="text-[#5F57FF] font-semibold text-base">Choose Your Product Type</span>
              <p className="text-sm font-normal text-[#43435F]">Pick what you want to sell apparel, jewelry, home decor, or even custom gifts. Personalization works across many categories.</p>
            </div>
            <div className="flex flex-col items-start max-w-[249px] gap-px">
              <span className="text-[#43435F] font-semibold text-base">Choose Your Product Type</span>
              <p className="text-sm font-normal text-[#43435F]">Pick what you want to sell apparel, jewelry, home decor, or even custom gifts. Personalization works across many categories.</p>
            </div>
            <div className="flex flex-col items-start max-w-[249px] gap-px">
              <span className="text-[#43435F] font-semibold text-base">Choose Your Product Type</span>
              <p className="text-sm font-normal text-[#43435F]">Pick what you want to sell apparel, jewelry, home decor, or even custom gifts. Personalization works across many categories.</p>
            </div>
            <div className="flex flex-col items-start max-w-[249px] gap-px">
              <span className="text-[#43435F] font-semibold text-base">Choose Your Product Type</span>
              <p className="text-sm font-normal text-[#43435F]">Pick what you want to sell apparel, jewelry, home decor, or even custom gifts. Personalization works across many categories.</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
