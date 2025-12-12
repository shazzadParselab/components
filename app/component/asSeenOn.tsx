'use client'

import Image from "next/image";
import { useEffect, useRef} from "react";

export default function AsSeenOnComponent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const clientCard = [
      {
        id: 1,
        mediaSrc: "/clientLogo/Logo.png",
        mediaAlt: "asSoonAs"
      },
      {
        id: 2,
        mediaSrc: "/clientLogo/Logo-1.png",
        mediaAlt: "asSoonAs"
      },
      {
        id: 3,
        mediaSrc: "/clientLogo/Logo-2.png",
        mediaAlt: "asSoonAs"
      },
      {
        id: 4,
        mediaSrc: "/clientLogo/Logo-3.png",
        mediaAlt: "asSoonAs"
      },
      {
        id: 5,
        mediaSrc: "/clientLogo/Logo-4.png",
        mediaAlt: "asSoonAs"
      },
      {
        id: 6,
        mediaSrc: "/clientLogo/Logo-5.png",
        mediaAlt: "asSoonAs"
      },
      {
        id: 7,
        mediaSrc: "/clientLogo/Logo-6.png",
        mediaAlt: "asSoonAs"
      },
      {
        id: 8,
        mediaSrc: "/clientLogo/Logo-7.png",
        mediaAlt: "asSoonAs"
      },
      {
        id: 9,
        mediaSrc: "/clientLogo/Logo-8.png",
        mediaAlt: "asSoonAs"
      },
      {
        id: 10,
        mediaSrc: "/clientLogo/Logo-9.png",
        mediaAlt: "asSoonAs"
      },
    ];
  
    useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty('--scroll-width', `${224 * clientCard.length as number}px`);
    }
  }, [clientCard.length]);

  return (
    <section className="flex w-full bg-[#F9F9FB] px-5 pt-12 sm:pt-20 sm:min-h-[468px] h-full">
      <div className="max-w-[1620] overflow-hidden flex flex-col items-center justify-center gap-12 mx-auto">
        <h2 className="text-center w-full text-2xl font-medium">74% of eCommerce Retailers Use Product Personalization</h2>

        <div ref={containerRef} className="flex slideIcon-mobile sm:flex-wrap sm:justify-center justify-start flex-nowrap gap-6 w-full items-center pb-14">
          {clientCard.map(card => (
            <Image
              key={card.id}
              className="aspect-2/1 min-w-[200px] rounded-[20px] overflow-hidden shadow-[0_30px_40px_rgba(212,217,232,0.20)] object-contain"
              src={card.mediaSrc}
              alt={card.mediaAlt}
              width={200}
              height={100}
              loading="lazy"
              decoding="async"
            />
          ))}
          {clientCard.map(card => (
            <Image
              key={card.id}
              className="aspect-2/1 min-w-[200px] flex sm:hidden rounded-[20px] overflow-hidden shadow-[0_30px_40px_rgba(212,217,232,0.20)] object-contain "
              src={card.mediaSrc}
              alt={card.mediaAlt}
              width={200}
              height={100}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>

      </div>
    </section>
  );
}
