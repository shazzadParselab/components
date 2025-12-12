'use client'

import Image from "next/image";
import {
  LocationIcon,
  ShareIcon,
  StarIcon,
  TaglineIcon,
} from "./icons_libary";
import { ChevronLeft, ChevronRight } from "lucide-react";

const success_story_data = {
  id: 1,
  button: [{ id: 1, background: "primary", title: "See All Success Story" }],
  store_cards: [
    {
      id: 1,
      tagline: { id: 2, title: "Shopify" },
      image: "/successStory/11.svg",
      start_icon: [
        { id: 1, icon: <StarIcon /> },
        { id: 2, icon: <StarIcon /> },
        { id: 3, icon: <StarIcon /> },
        { id: 4, icon: <StarIcon /> },
        { id: 5, icon: <StarIcon /> },
      ],
      country_name: "UK",
      country_icon: <LocationIcon />,
      title: "Barblades",
      short_des:
        "A bar blade is usually a bottle opener that is used to open the crown bottle top. It is also known as a speed opener.",
      buttons: [
        { id: 2, background: "secondary", title: "See Full Details" },
        {
          id: 3,
          background: "primary",
          title: "Visit Store",
          icon: <ShareIcon color={"primary"} />,
        },
      ],
    },
    {
      id: 2,
      tagline: { id: 3, title: "Woo Commerce" },
      image: "/successStory/22.svg",
      start_icon: [
        { id: 1, icon: <StarIcon /> },
        { id: 2, icon: <StarIcon /> },
        { id: 3, icon: <StarIcon /> },
        { id: 4, icon: <StarIcon /> },
        { id: 5, icon: <StarIcon /> },
      ],
      country_name: "USA",
      country_icon: <LocationIcon />,
      title: "Jostens Kinderkraft",
      short_des:
        "Jostens Kinderkraft has everything to make graduation day special for little graduates.",
      buttons: [
        { id: 2, background: "secondary", title: "See Full Details" },
        {
          id: 3,
          background: "primary",
          title: "Visit Store",
          icon: <ShareIcon color={"primary"} />,
        },
      ],
    },
    {
      id: 3,
      tagline: { id: 4, title: "Magento" },
      image: "/successStory/33.svg",
      start_icon: [
        { id: 1, icon: <StarIcon /> },
        { id: 2, icon: <StarIcon /> },
        { id: 3, icon: <StarIcon /> },
        { id: 4, icon: <StarIcon /> },
        { id: 5, icon: <StarIcon /> },
      ],
      country_name: "UK",
      country_icon: <LocationIcon />,
      title: "Pick On Us",
      short_des:
        "A bar blade is usually a bottle opener that is used to open the crown bottle top. It is also known as a speed opener.",
      buttons: [
        { id: 2, background: "secondary", title: "See Full Details" },
        {
          id: 3,
          background: "primary",
          title: "Visit Store",
          icon: <ShareIcon color={"primary"} />,
        },
      ],
    },
    {
      id: 4,
      tagline: { id: 5, title: "Big Commerce" },
      image: "/successStory/44.svg",
      start_icon: [
        { id: 1, icon: <StarIcon /> },
        { id: 2, icon: <StarIcon /> },
        { id: 3, icon: <StarIcon /> },
        { id: 4, icon: <StarIcon /> },
        { id: 5, icon: <StarIcon /> },
      ],
      country_name: "BD",
      country_icon: <LocationIcon />,
      title: "Pick On Us",
      short_des:
        "Jostens Kinderkraft has everything to make graduation day special for little graduates.",
      buttons: [
        { id: 2, background: "secondary", title: "See Full Details" },
        {
          id: 3,
          background: "primary",
          title: "Visit Store",
          icon: <ShareIcon color={"primary"} />,
        },
      ],
    },
  ],
  active: true,
};

export default function SuccessStoryComponent() {
  return (
    <section className="flex w-full px-5 py-12 sm:py-20 bg-[#F9F9FB]">
      <div className="max-w-[1620] overflow-hidden w-full flex flex-col items-center gap-12 mx-auto">
        {success_story_data && (
          <div className="w-full flex flex-col md:flex-row justify-center items-start md:items-end md:justify-between gap-4">
            <div className="flex flex-col gap-4 items-start">
              {/* ----- Tagline ----- */}
              <div className="tagline text-[#432AD8]">
                <TaglineIcon />Successful Stories
              </div>
              <h2 className="text-3xl lg:text-5xl font-medium">Successful Stores Using Personalization</h2>
              <p className="max-w-[714px] text-[#616170] text-lg font-normal">
                See how businesses of all types are using product personalization to stand out, boost sales, and keep customers coming back.
              </p>
            </div>
            {success_story_data.button?.map((button) => (
              <button key={button.id} className="btn btn-primary">
                {button.title}
              </button>
            ))}
          </div>
        )}

        <div className="flex flex-row flex-nowrap gap-6 overflow-hidden w-full">
          {success_story_data.store_cards.map((card) => (
            <div key={card.id} className="max-w-[387px] min-h-[494px] bg-white p-6 flex flex-col justify-between items-center rounded-3xl border border-[#C2CBFF]">

              <div className="flex flex-col gap-5">

                <div className="flex flex-col gap-3">
                  <div className="max-h-[200px] max-w-[340px] object-cover relative bg-white">
                    <Image src={card.image} alt={card.title} width={340} height={200} className="max-h-[200px] max-w-[340px] aspect-[1.7] object-contain" />
                    <span className="tagline text-[#432AD8] absolute top-0 right-0">
                      {card.tagline.title}
                    </span>

                  </div>

                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-2">
                      {card.start_icon.map((i) => (
                        <span key={i.id}>{i.icon}</span>
                      ))}
                    </div>

                    <div className="flex flex-row gap-1 items-center">
                      <div className="text-[#777584]">{card.country_icon}</div>
                      <div className="text-[#777584] font-normal text-sm">
                        <span>{card.country_name}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">

                  <span className="font-medium text-xl">{card.title}</span>
                  <p className="font-normal text-base">{card.short_des}</p>
                </div>

              </div>


              <div className="flex flex-row gap-3">
                {card.buttons.map((button) => (
                  <button
                    key={button.id}
                    className={`btn btn-${button.background} w-full`}
                  >
                    See Full Details {button.icon && button.icon}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>



        <div className="flex flex-row items-center gap-4">
          <button className="arrow-btn"><ChevronLeft /></button>
          <button className="arrow-btn active"><ChevronRight /></button>
        </div>

      </div>
    </section>
  );
}
