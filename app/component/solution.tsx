'use client'

import Image from "next/image";
import { TaglineIcon } from "./icons_libary";

const our_solution_data = {
  id: 1,
  solution_cards: [
    {
      id: 1,
      title: "DesignLab Customization",
      short_description:
        "Make your personalization tool truly yours. We help you fine tune the design panel. So it perfectly fits your brand and customers.",
      image: "/solution/img.svg",
    },
    {
      id: 2,
      title: "Theme Customization",
      short_description:
        "We'll make sure it blends in beautifully with your existing theme, creating a user friendly shopping experience from start to finish.",
      image: "/solution/img-1.svg",
    },
    {
      id: 3,
      title: "Shopping Cart Integration",
      short_description:
        "Our friendly support team is always here to guide you, one-on-one.",
      image: "/solution/img-2.svg",
    },
    {
      id: 4,
      title: "Product Setup",
      short_description:
        "We'll handle the setup from product configuration and everything in between.",
      image: "/solution/img-3.svg",
    },
    {
      id: 5,
      title: "ClipArt Design & Management",
      short_description:
        "Intuition is Good. Research is even better! Trust in the power of the community.",
      image: "/solution/img-4.svg",
    },
  ],
  active: true,
};

export default function SolutionComponent() {
  return (
    <section className="flex w-full px-5 py-12 sm:py-20 bg-[linear-gradient(145deg,#F2F0FF_22.58%,#F0F6FF_94.12%)]">
      <div className="max-w-[1620] overflow-hidden w-full flex flex-col items-center gap-12 mx-auto">
        {our_solution_data && (
          <div className="flex flex-col items-center gap-4">
            {/* ----- Tagline ----- */}
            <div className="tagline text-[#432AD8]">
              <TaglineIcon />Our Top Notch Solutions
            </div>
              <h2 className="max-w-4xl text-3xl lg:text-5xl font-medium text-center">The All-in-One Solution for Your Product Personalization Business</h2>
            <p className="max-w-[836px] text-[#616170] text-center text-lg font-normal">No matter what stage {"you're"} at just starting, or looking to scale our platform offers a range guides and expert support to help you build your business. Explore our services to see how we can help you.</p>
          </div>
        )}

          <div className="flex flex-row flex-wrap justify-center max-w-[1347px] w-full gap-6 solution-cards">
            {our_solution_data.solution_cards.map((card) => (
              <div key={card.id} className="w-full solution-card flex flex-col items-center rounded-3xl border border-[#EDEAFD] bg-white">
                <div className="flex items-center justify-center max-w-[400px] w-full object-cover">
                  <Image src={card.image} alt={card.title} width={400} height={400} className="flex aspect-square max-w-[400px] h-auto object-contain"/>
                </div>

                <div className="flex flex-col items-center gap-3 solution-card-text-section">
                    <span className="font-semibold text-xl text-[#36364A] text-center">{card.title}</span>
                    <p className="text-[#777584] text-center text-sm font-normal">{card.short_description}</p>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}
