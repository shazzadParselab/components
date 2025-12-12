'use client'
import Image from "next/image";
import { ChevronUpRight, TaglineIcon } from "./icons_libary";
import { useEffect, useRef } from "react";

export default function DesinerMarketPlaceComponent() {
  const clipartSlideRightToLeft = useRef<HTMLDivElement>(null);
  const clipartSlideLeftToRight = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (clipartSlideRightToLeft.current) {
      clipartSlideRightToLeft.current.style.setProperty('--clipartSlide', `${(clipartSlideRightToLeft.current.scrollWidth as number) / 2}px`);
    }
    if (clipartSlideLeftToRight.current) {
      clipartSlideLeftToRight.current.style.setProperty('--clipartSlide', `${(clipartSlideLeftToRight.current.scrollWidth as number) / 2}px`);
    }
  }, []);
  return (
    <section className="flex w-full px-5 py-12 sm:py-20">
      <div className="max-w-[1620] w-full mx-auto flex flex-col items-center gap-12">

        <div className="w-full flex flex-col items-center gap-4 max-w-[836px]">
          <div className="tagline text-[#432AD8]">
            <TaglineIcon />Design Marketplace
          </div>
          <h2 className="text-center text-3xl md:text-5xl font-medium">Turn Your Designs into Sales</h2>
          <p className="text-[#616170] text-lg font-normal">
            Join the Products Designer platform and upload your design templates
            to reach thousands of merchants actively looking for ready-to-use,
            high-quality designs for their personalized products.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-6 w-screen clipart-screen max-w-[1920px] overflow-hidden">
          <div ref={clipartSlideRightToLeft} className="flex flex-row items-center gap-6 clipart-slide-right-to-left">
            <Image src="/slider/Image.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-1.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-2.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-3.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-4.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-5.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-6.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-7.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-8.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-9.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-10.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-11.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-12.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-13.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-1.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-2.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-3.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-4.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-5.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-6.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-7.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-8.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-9.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-10.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-11.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-12.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-13.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
          </div>
          <div ref={clipartSlideLeftToRight} className="flex flex-row items-center gap-6 clipart-slide-left-to-right">
            <Image src="/slider/Image-3.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-1.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-4.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-9.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-6.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-11.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-7.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-5.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-12.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-13.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-8.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-10.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-2.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-3.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-1.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-4.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-9.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-6.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-11.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-7.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-5.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-12.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-13.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-8.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-10.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
            <Image src="/slider/Image-2.png" alt="clipart" width={250} height={250} className="aspect-square max-w-[250px] max-h-[250] object-contain" />
          </div>
        </div>

        <div className="flex flex-row items-center gap-3">
          <button className="btn btn-secondary">Start Selling</button>
          <button className="btn btn-primary">
            Browse Designs
            <ChevronUpRight color="primary" />
          </button>
        </div>

      </div>
    </section>
  );
}
