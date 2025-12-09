/*
-->Again work on this page
*/

import { ReactElement } from "react";
import { ChevronUpRight, TaglineIcon } from "./icons/icons_libary";

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
  icon: ReactElement;
}

interface IntegrationType {
  id: number;
  tagline: Tagline;
  title: string;
  short_description: string;
  button?: Button[];
  image: string;
  active: boolean;
}

const integration_data: IntegrationType = {
  id: 1,
  tagline: {
    id: 1,
    title: "Integrations with Popular CMS",
    icon: <TaglineIcon />,
  },
  title: "Built to Work Where Your Business Grows",
  short_description:
    "Whether you're on Shopify, WooCommerce, or any major e-commerce platform we help you personalize products with the right tools, apps, and expert guidance.",
  button: [
    {
      id: 1,
      title: "Book a Demo",
      icon: <ChevronUpRight color={"secondary"} />,
      background: "secondary",
    },
  ],
  image: "/static/background/integration_flowchat.svg",
  active: true,
};

export default function Integration() {
  return (
    <section className="pd_integration_container pd_container">
      {integration_data && (
        <div className="pd_integration_title">
          {/* ----- Tagline ----- */}
          <div className="pd_hero_section_content_tagline">
            <div className="icon_box">{integration_data.tagline.icon}</div>
            <span className="content_tagline">
              {integration_data.tagline.title}
            </span>
          </div>

          <h2>{integration_data.title}</h2>
          <p>{integration_data.short_description}</p>

          {integration_data.button?.map((button) => (
            <button key={button.id} className="pd_button secondary">
              {button.title}
              {button.icon && button.icon}
            </button>
          ))}
        </div>
      )}

      <div className="pd_integration_img">
        <img src={integration_data.image} alt={integration_data.title} />
      </div>
    </section>
  );
}
