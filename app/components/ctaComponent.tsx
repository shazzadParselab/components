/*
--> 
*/

import { ChevronUpRight } from "./icons/icons_libary";

type buttonType = "primary" | "secondary";

interface Button {
  id: number;
  background: buttonType;
  title: string;
  icon?: React.ReactElement;
}

interface CTAType {
  id: number;
  background_image: string;
  title: string;
  short_description: string;
  button?: Button[];
  image: string;
  active: boolean;
}

const cta_datas: CTAType = {
  id: 1,
  background_image: "/static/background/cta_background.svg",
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
  image: "/static/background/cta_image.svg",
  active: true,
};

export default function CTA() {
  return (
    <section className="pd_cta_container pd_container">
      {cta_datas && (
        <div className="cta_container">
          <div className="cta_title">
            {/* ----- Hero Section Heading ------ */}
            <div>
              <h2 className="pb_heading">{cta_datas.title}</h2>
            </div>

            <p className="pb_heading_description">
              {cta_datas.short_description}
            </p>
            {cta_datas.button &&
              cta_datas.button.map((button) => (
                <button
                  key={button.id}
                  className={`pd_button ${button.background}`}
                >
                  {button.title}
                  {button.icon && button.icon}
                </button>
              ))}
          </div>
          <div className="cta_image">
            <img src={cta_datas.image} alt={cta_datas.title}/>
          </div>
        </div>
      )}
    </section>
  );
}
