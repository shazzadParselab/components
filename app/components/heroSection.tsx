/*
---Now I just need to add the icons
---Check the flex layout
---Make responsiveness.
*/
import { Link } from "@remix-run/react";
import { HeroType } from "@/routes/admin/adminInterface";



export default function HeroComponent( {heroData} :{heroData : HeroType}) {
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
            // style={{backgroundColor:heroSection.background_color}}
          >
            {heroData.imgActive && (
              <div className="hero_bg_img">
                <img
                  height={800}
                  width={1800}
                  src={heroData.media?.srcUrl}
                  alt={heroData.imgAltText}
                  decoding="async"
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
              </div>
            )}


            <div className="pb-24 pt-32"  style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <div className="pd_hero_section_content_heading">
                <div className="pd_hero_section_content_heading_line">
                  {/* ----- Tagline ----- */}

                  {/* {heroData.tagline && (
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
                  )} */}
                  {/* ----- Hero Section Heading ------ */}
                  {heroData.preTitle && <span>{heroData.preTitle}</span>}

                  <HeroComponent
                    fullText={heroData.title ? heroData.title : "hello"}
                  />
                  {heroData.descriptionActive && (
                    <p className="pb_heading_description">
                    {heroData.description}
                  </p>
                  )}

                </div>
                {heroData.buttonsActive && (
                  <div className="pd_buttons">
                    {heroData.buttons.map((button) => (
                      <Link
                        key={button.id}
                        prefetch="intent"
                        to={button.url ?? "/"}
                        // target={button.target}
                        // rel={button.rel}
                      >
                        <button className={`pd_button ${heroData.buttons[0]? "primary":"secondary"}`}>
                          {button.text} 
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
