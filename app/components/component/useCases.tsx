'use client'

import Image from "next/image";
import { TaglineUseCaseIcon } from "../icons/icons_libary";
import { useState } from "react";

const useCasesData = [
  {
    icon: "👕",
    title: "Personalized Apparel",
    description:
      "One of the most in-demand categories for personalization. Personalized apparel is popular for gifts, events, and branding making it a consistent revenue driver with high repeat purchase potential.",
    image: "/design.webp",
  },
  {
    icon: "💍",
    title: "Jewelry Collections",
    description:
      "High emotional value and strong gifting appeal. Personalized jewelry drives premium pricing, gift-focused sales, and strong word of mouth marketing ideal for building a loyal customer base.",
    image: "/design.webp",
  },
  {
    icon: "🛌",
    title: "Interactive Furniture",
    description:
      "Personalization drives confidence and higher cart values. Let buyers customize materials, colors, finishes, or layouts with previews.",
    image: "/design.webp",
  },
  {
    icon: "🏠",
    title: "Interior & Space Design",
    description:
      "Tap into the growing demand for custom living and workspace planning. Great for increasing user engagement and reducing pre-sale friction for high-investment projects.",
    image: "/design.webp",
  },
  {
    icon: "🚗",
    title: "Automobile & Bike",
    description:
      "A high-ticket personalization category with strong buyer intent. Offer customization options for cars, bikes, and accessories.",
    image: "/design.webp",
  },
];

export default function UseCasesComponent() {
  const [active, setActive] = useState<number | null>(1);

  return (
    <section className="useCaseBody flex items-center justify-center w-full px-5 py-12 md:py-20 lg:py-32">
      <div className="flex flex-col lg:flex-row mx-auto justify-between gap-4 max-w-[1620px] w-full">

        <div className="w-full lg:max-w-[390px] flex flex-col gap-4 lg:items-start items-center">
          <div className="tagline text-white bg-[rgba(95,87,255,0.20)]! border-[#C2CBFF]!">
            <TaglineUseCaseIcon /> Use Cases
          </div>

          <h2 className="text-white font-medium text-3xl sm:text-5xl text-center lg:text-start">
            Let Customers See What They Personalize
          </h2>

          <p className="text-white text-lg font-normal text-center lg:text-start">
            {`Today's`} customers expect more than just “add to cart.” They want options, control, and something made just for them. {`That's`} where personalization changes the game.
          </p>
        </div>

        <div className="max-w-5xl flex flex-row justify-between items-start gap-6">

          <div className="w-full lg:max-w-[500px] flex flex-col gap-9 border-l border-[#616170]">

            {useCasesData.map((item, i) => (
              <div
                key={i}
                className={`w-full flex flex-col gap-4 pl-6 -m-px items-start cursor-pointer ${active === i ? "border-l-2 border-[#5F57FF]" : "border-l border-[#616170]"
                  }`}
                onClick={() => setActive(active === i ? null : i)}
              >
                <span
                  className={`text-3xl font-medium flex ${active === i ? "text-white" : "text-[#616170]"
                    }`}
                >
                  {item.icon} {" "} {item.title}
                </span>

                {/* Only show content when open — but layout remains same */}
                {active === i && (
                  <>
                    <p className="text-white">{item.description}</p>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={335}
                      height={335}
                      className="max-w-[335px] flex lg:hidden max-h-[335px] aspect-square object-contain"
                    />
                  </>
                )}
              </div>
            ))}
          </div>

          <Image
            src={active !== null ? useCasesData[active].image : "/design.webp"}
            alt="design"
            width={524}
            height={524}
            className="min-w-[350px] min-h-[350px] max-w-[524px] max-h-[524px] hidden lg:flex aspect-square object-contain"
          />

        </div>

      </div>
    </section>
  );
}