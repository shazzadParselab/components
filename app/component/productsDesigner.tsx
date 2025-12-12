
'use client'
import { useEffect, useRef } from "react";
import { Arrow } from "./icons_libary";

export default function ProductsDesignerComponent() {
    const textSliderRightToLeft = useRef<HTMLDivElement>(null);
      useEffect(() => {
        if (textSliderRightToLeft.current) {
          textSliderRightToLeft.current.style.setProperty('--textSlider', `${(textSliderRightToLeft.current.scrollWidth as number) / 2}px`);
        }
      }, []);

    return (
        <section className="flex w-full max-w-[1920px] overflow-hidden">

            <div ref={textSliderRightToLeft} className="products-desiner">
                Products <Arrow /> Designer <Arrow /> Products <Arrow /> Designer <Arrow />
            </div>
        </section>
    )
}