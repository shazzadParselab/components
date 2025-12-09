/*
---> content Header - text, box size padding 
---> card - text, icon , background, text color
---> responsive not don
*/

import { ReactElement } from "react";
import { TaglineIcon } from "./icons/icons_libary";

interface Tagline {
  id: number;
  title: string;
  icon: ReactElement;
}

interface SolutionCards {
  id: number;
  title: string;
  short_description: string;
  image: string;
}

interface OurSolutionType {
  id: number;
  tagline: Tagline;
  title: string;
  short_description: string;
  solution_cards: SolutionCards[];
  active: boolean;
}

const our_solution_data: OurSolutionType = {
  id: 1,
  tagline: { id: 1, title: "Our Top Notch Solutions", icon: <TaglineIcon /> },
  title: "The All-in-One Solution for Your Product Personalization Business",
  short_description:
    "No matter what stage you're at just starting, or looking to scale our platform offers a range guides and expert support to help you build your business. Explore our services to see how we can help you.",
  solution_cards: [
    {
      id: 1,
      title: "DesignLab Customization",
      short_description:
        "Make your personalization tool truly yours. We help you fine tune the design panel. So it perfectly fits your brand and customers.",
      image: "/static/solution/design_lab.svg",
    },
    {
      id: 2,
      title: "Theme Customization",
      short_description:
        "We'll make sure it blends in beautifully with your existing theme, creating a user friendly shopping experience from start to finish.",
      image: "/static/solution/theme_customization.svg",
    },
    {
      id: 3,
      title: "Shopping Cart Integration",
      short_description:
        "Our friendly support team is always here to guide you, one-on-one.",
      image: "/static/solution/shopping_cart.svg",
    },
    {
      id: 4,
      title: "Product Setup",
      short_description:
        "We’ll handle the setup from product configuration and everything in between.",
      image: "/static/solution/product_setup.svg",
    },
    {
      id: 5,
      title: "ClipArt Design & Management",
      short_description:
        "Intuition is Good. Research is even better! Trust in the power of the community.",
      image: "/static/solution/clip_art.svg",
    },
  ],
  active: true,
};

export default function Solution() {
  return (
    <section className="pd_solution pd_container" id="our_solution">
      {our_solution_data && (
        <div className="pd_solution_title">
          {/* ----- Tagline ----- */}
          <div className="pd_hero_section_content_tagline">
            <div className="icon_box">{our_solution_data.tagline.icon}</div>
            <span className="content_tagline">
              {our_solution_data.tagline.title}
            </span>
          </div>

          {/* ----- Hero Section Heading ------ */}
          <div>
            <h2 className="pb_heading">{our_solution_data.title}</h2>
          </div>

          <p className="pb_heading_description">
            {our_solution_data.short_description}
          </p>
        </div>
      )}

      {our_solution_data.solution_cards.length && (
        <div className="pd_solution_contents">
          {our_solution_data.solution_cards.map((card) => (
            <div key={card.id} className="pd_solution_content_card">
              <div className="pd_solution_content_card_img">
                <img src={card.image} alt={card.title} />
              </div>

              <div className="pd_solution_content_card_title">
                <div className="pd_solution_content_card_heading">
                  <h3>{card.title}</h3>
                </div>
                <div className="pd_solution_content_card_description">
                  <span>{card.short_description}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
