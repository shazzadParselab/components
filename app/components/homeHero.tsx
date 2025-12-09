/*
---Now I just need to add the icons
---Check the flex layout
---Make responsiveness.
*/
import { Link } from "@remix-run/react";
import { HeroCardTshirt, HeroCardShoes, HeroCardGame, HeroCardJewels, HeroCardBottle } from "./icons/hero_card";
import { TaglineIcon, ChevronUpRight } from "./icons/icons_libary";




// export default function HeroComponent( {heroData} :{heroData : HeroType}) {
export default function HomeHeroComponent() {
  const heroData = {
    id: 1,
    title: "Future of Product Personalization for Smart E-Commerce",
    highlight: "Product Personalization",
    description: "Take your e-commerce business to the next level with easy-to-use product personalization tools that allow you to offer unique, customized experiences for every customer.",
    background_image:"/static/background/heroSection.svg",
    tagline: { id: 1, title: "The Ultimate E-commerce Product Customization Platform", icon: <TaglineIcon /> },
    button: [
      { id: 1, background: "secondary", title: "View all resources"},
      { id: 2, background: "primary", title: "Explore App", icon: <ChevronUpRight color="primary" />},
    ],
    small_card:[
      {id:1, title:"Shirt", icon:<HeroCardTshirt />},
      {id:2, title:"Shoes", icon:<HeroCardShoes />},
      {id:3, title:"Game",icon:<HeroCardGame />},
      {id:4, title:"Jewels",icon:<HeroCardJewels />},
      {id:5, title:"Bottle",icon:<HeroCardBottle />},
    ],
    active: true,
  };

  if(!heroData)return null;
  const HeroComponent = ({
    fullText,
    highlightText,
  }: {
    fullText: string;
    highlightText?: string;
  }) => {
    const regText = new RegExp(`(${highlightText})`, "gi");
    const text = fullText.split(regText);

    return (
      <h1 className="pb_heading">
        {text.map((t: string, i: number) =>
          t == highlightText ? (
            <span key={i} className="highlight">
              {t}
            </span>
          ) : (
            <span key={i} style={{ font: "inherit" }}>
              {t}
            </span>
          )
        )}
      </h1>
    );
  };
  return (
    <main className="pd_hero_section" lang="en">
      {heroData && (
          <section
            className="pd_hero_section_content"
            lang="en"
          >
              <div className="hero_bg_img">
                <img
                  height={800}
                  width={1800}
                  src={heroData.background_image}
                  alt="Home hero background"
                  decoding="async"
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
              </div>



            <div className="pb-24 pt-32"  style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <div className="pd_hero_section_content_heading">
                <div className="pd_hero_section_content_heading_line">
                  {/* ----- Tagline ----- */}

                  {heroData.tagline && (
                    <div
                      key={heroData.tagline.id}
                      className="pd_hero_section_content_tagline"
                    >
                      <div className="icon_box">
                        {heroData.tagline.icon || <TaglineIcon />}
                      </div>
                      <span className="content_tagline">
                        {heroData.tagline.title}
                      </span>
                    </div>
                  )}
                  {/* ----- Hero Section Heading ------ */}

                  <HeroComponent
                    fullText={heroData.title ? heroData.title : "hello"}
                  />
                    <p className="pb_heading_description">
                    {heroData.description}
                  </p>

                </div>
                {heroData && (
                  <div className="pd_buttons">
                    {heroData.button.map((b) => (
                      <Link
                        key={b.id}
                        prefetch="intent"
                        to={"/"}
                        // target={button.target}
                        // rel={button.rel}
                      >
                        <button className={`pd_button ${b.background}`}>
                          {b.title} 
                        </button>
                      </Link>
                    ))}
                  </div>
                )}
              </div>



            </div>


          </section>
        )}
    </main>
  );
}
