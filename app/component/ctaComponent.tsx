'use client'

import Image from "next/image";
import { ChevronUpRight } from "./icons_libary";

const cta_datas = {
  id: 1,
  title: "Ready to start your Product Personalization Business?",
  short_description:
    "Our platform offers everything you need to create a seamless experience for your customers. Get started today and transform your vision into reality with easy-to-use tools designed just for you.",
  button: [
    {
      id: 1,
      title: "Get Free Consultation",
      icon: <ChevronUpRight color={"primary"} />,
      background: "primary",
    },
  ],
  image: "/cta/1.png",
  active: true,
};

export default function CTAComponent() {
  return (
    <section className="flex w-full px-5 py-12 sm:py-20">
      <div className="max-w-[1620] overflow-hidden w-full flex flex-col justify-between gap-12 mx-auto">

        <div className="cta_container w-full min-h-[543px] rounded-3xl lg:flex flex-row gap-8 overflow-hidden">

          <div className="w-full flex justify-start lg:justify-end p-5 lg:p-20 items-center">
            <div className="w-full flex flex-col items-start max-w-[625px] min-w-[295px] gap-9">
              {/* ----- Hero Section Heading ------ */}
              <div className="flex flex-col items-start w-full gap-4">
                <h2 className="text-[#FFF] font-medium text-3xl lg:text-5xl">{cta_datas.title}</h2>
                <p className="text-[#F2EFFF] text-lg font-normal">
                  {cta_datas.short_description}
                </p>
              </div>

              {cta_datas.button &&
                cta_datas.button.map((button) => (
                  <button
                    key={button.id}
                    className={`btn btn-${button.background}`}
                  >
                    {button.title}
                    {button.icon && button.icon}
                  </button>
                ))}
            </div>
          </div>

          <div className="w-full flex items-end justify-center">
            <div className="flex max-h-[480px] max-w-[643px] object-cover p-5 lg:pb-0 lg:-mb-5 -mr-8 lg:mr-10">
              <Image src={cta_datas.image} alt={cta_datas.title} width={643} height={480} className="max-h-[480px] max-w-[643px] w-full object-contain" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
