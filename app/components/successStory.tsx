/*
--->card - text size, color
--->
--->
*/

import { ReactElement } from "react";
import {
  LocationIcon,
  ShareIcon,
  StarIcon,
} from "./icons/icons_libary";

type buttonType = "primary" | "secondary";

interface Button {
  id: number;
  background: buttonType;
  title: string;
  icon?: React.ReactElement;
}
interface Tagline {
  id: number;
  title: string;
  icon?: ReactElement;
}

interface Icon {
  id: number;
  icon: ReactElement;
}

interface StoreCard {
  id: number;
  tagline: Tagline;
  image: string;
  start_icon: Icon[];
  country_name: string;
  country_icon: ReactElement;
  title: string;
  short_des: string;
  buttons: Button[];
}

interface SuccessStory {
  id: number;
  tagline: Tagline;
  title: string;
  short_description: string;
  button?: Button[];
  store_cards: StoreCard[];
  active: boolean;
}

const success_story_data: SuccessStory = {
  id: 1,
  tagline: { id: 1, title: "Successful Stories" },
  title: "Successful Stores Using Personalization",
  short_description:
    "See how businesses of all types are using product personalization to stand out, boost sales, and keep customers coming back.",
  button: [{ id: 1, background: "primary", title: "See All Success Story" }],
  store_cards: [
    {
      id: 1,
      tagline: { id: 2, title: "Shopify" },
      image: "/static/success_story/bar_blades.svg",
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
      image: "/static/success_story/kinder_kraft.svg",
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
      image: "/static/success_story/pick_on_us.svg",
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
      image: "/static/success_story/prints21.svg",
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

export default function SuccessStory() {
  return (
    <section id="our_success" className="pd_success_story_container pd_container">
      {success_story_data && (
        <div className="pd_success_story_container_header">
          <div className="pd_success_story_Title">
            {/* ----- Tagline ----- */}
            <div className="pd_hero_section_content_tagline">
              <div className="icon_box">{success_story_data.tagline.icon}</div>
              <span className="content_tagline">
                {success_story_data.tagline.title}
              </span>
            </div>

            {/* ----- Success Section Heading ------ */}
            <div>
              <h2 className="pb_heading">{success_story_data.title}</h2>
            </div>

            <p className="pb_heading_description">
              {success_story_data.short_description}
            </p>
          </div>
          {success_story_data.button?.map((button) => (
            <button key={button.id} className="pd_button primary">
              {button.title}
              {button.icon && button.icon}
            </button>
          ))}
        </div>
      )}

      {success_story_data && (
        <div className="pd_success_story_store_cards">
          {success_story_data.store_cards.map((card) => (
            <div key={card.id} className="pd_success_story_store_card">
              <div className="pd_success_story_store_card_content">
                <div className="pd_success_story_store_card_header">
                  <div className="store_card_img">
                    <img src={card.image} alt={card.title} />
                    <div className="pd_hero_section_content_tagline">
                      <span className="content_tagline">
                        {card.tagline.title}
                      </span>
                    </div>
                  </div>

                  <div className="store_card_review">
                    <div className="pd_rating">
                      {card.start_icon.map((i) => (
                        <div key={i.id}>{i.icon}</div>
                      ))}
                    </div>

                    <div className="pd_location">
                      <div className="icon">{card.country_icon}</div>
                      <div className="text">
                        <span>{card.country_name}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pd_success_story_store_card_title">
                  <div className="store_card_heading">
                    <h3>{card.title}</h3>
                  </div>
                  <div className="store_card_description">
                    <p>{card.short_des}</p>
                  </div>
                </div>
              </div>
              <div className="pd_buttons">
                {card.buttons.map((button) => (
                  <button
                    key={button.id}
                    className={`pd_button ${button.background}`}
                  >
                    See Full Details {button.icon && button.icon}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
