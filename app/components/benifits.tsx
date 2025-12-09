/*
icon - background
heading - text
description - text

*/

import { ReactElement, useState } from "react";
import { TaglineIcon } from "./icons/icons_libary";
import { Link } from "@remix-run/react";

interface Tagline {
  id: number;
  title: string;
  icon: ReactElement;
}

interface BenifitCard {
  id: number;
  icon: string;
  title: string;
  short_des: string;
}


interface BenifitsType {
  id: number;
  tagline: Tagline;
  title: string;
  short_description: string;
  benifits_card: BenifitCard[];
  active: boolean;
}

const benifits_data: BenifitsType = {
  id: 1,
  tagline: {
    id: 1,
    title: "Why Product Personalization Is a Game Changer",
    icon: <TaglineIcon />,
  },
  title: "Personalization Delivers Business Results",
  short_description:
    "Today’s customers expect more than just “add to cart.” They want options, control, and something made just for them. That’s where personalization changes the game.",
  benifits_card: [
    {
      id: 1,
      icon: "/static/benifits/icon1.svg",
      title: "Increased Sales",
      short_des:
        "Personalized products boost spending with custom features and added value.",
    },
    {
      id: 2,
      icon: "/static/benifits/icon2.svg",
      title: "Lower Return Rates",
      short_des:
        "Previews reduce surprises, lowering returns and increasing satisfaction.",
    },
    {
      id: 3,
      icon: "/static/benifits/icon3.svg",
      title: "Stronger Loyalty",
      short_des:
        "Personalization builds emotional connection and brand loyalty.",
    },
    {
      id: 4,
      icon: "/static/benifits/icon4.svg",
      title: "Unique Brand Positioning",
      short_des:
        "Custom options give your brand a unique edge in a crowded market.",
    },
  ],
  active: true,
};

export default function Benifits() {
  const [benifitsData, setBenifitsData] = useState(benifits_data);
  return (
    <section className="pd_benifits pd_container">
      {benifitsData && (
        <div className="pd_benifits_contains">
          <div className="pd_benifits_contain_heading" lang="en">
            {/* ----- Tagline ----- */}
            {benifitsData && (
              <div className="pd_hero_section_content_tagline">
                <div className="icon_box">{benifitsData.tagline.icon}</div>
                <span className="content_tagline">
                  {benifitsData.tagline.title}
                </span>
              </div>
            )}

            {/* ----- Heading ----- */}
            <div className="pd_benifits_heading">
              <h2 title="Personalization Delivers Business Results">
                {benifitsData.title}
              </h2>
            </div>
            {/* ----- Description ----- */}
            <div className="pd_benifits_description">
              <p>{benifitsData.short_description}</p>
            </div>
          </div>

          <div className="pd_benifits_contain_card">
            <div className="pd_benifits_card">
              {benifitsData.benifits_card &&
                benifitsData.benifits_card.map((card) => (
                  <div key={card.icon} className="benifits_card">
                    <div className="benifits_card_icon">
                      <img src={card.icon} alt={card.title} />
                    </div>
                    <div className="benifits_card_heading">
                      <h3>{card.title}</h3>
                    </div>
                    <div className="benifits_card_description">
                      <p>{card.short_des}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
