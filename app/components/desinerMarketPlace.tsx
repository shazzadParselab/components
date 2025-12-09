/*
---> make pixel to pixel perfect letter
*/

import { ChevronUpRight, TaglineIcon } from "./icons/icons_libary";

export default function DesinerMarketPlace() {
  return (
    <section className="pd_desiner_market_place_container">
      <div className="pd_desiner_market_place_title">
        {/* ----- Tagline ----- */}
        <div className="pd_hero_section_content_tagline">
          <div className="icon_box">
            <TaglineIcon />
          </div>
          <span className="content_tagline">Design Marketplace</span>
        </div>

        {/* ----- Hero Section Heading ------ */}
        <div>
          <h2 className="pb_heading">Turn Your Designs into Sales</h2>
        </div>

        <p className="pb_heading_description">
          Join the Products Designer platform and upload your design templates
          to reach thousands of merchants actively looking for ready-to-use,
          high-quality designs for their personalized products.
        </p>
      </div>

      <div className="pd_desiner_market_place_images">
        <div className="carousel_images_container">
          <div className="shade_left"></div>

          <div className="carousel_images slide-left">
            <div className="carousel_image"><img src="/static/design_logo/Image.svg" alt="no logo" /></div>
            <div className="carousel_image"><img src="/static/design_logo/Image-1.svg" alt="no logo" /></div>
            <div className="carousel_image"><img src="/static/design_logo/Image-2.svg" alt="no logo" /></div>
            <div className="carousel_image"><img src="/static/design_logo/Image-3.svg" alt="no logo" /></div>
            <div className="carousel_image"><img src="/static/design_logo/Image-4.svg" alt="no logo" /></div>
            <div className="carousel_image"><img src="/static/design_logo/Image.svg" alt="no logo" /></div>
            <div className="carousel_image"><img src="/static/design_logo/Image-1.svg" alt="no logo" /></div>
            <div className="carousel_image"><img src="/static/design_logo/Image-2.svg" alt="no logo" /></div>
            <div className="carousel_image"><img src="/static/design_logo/Image-3.svg" alt="no logo" /></div>
            <div className="carousel_image"><img src="/static/design_logo/Image-4.svg" alt="no logo" /></div>
            <div className="carousel_image"><img src="/static/design_logo/Image.svg" alt="no logo" /></div>
            <div className="carousel_image"><img src="/static/design_logo/Image-1.svg" alt="no logo" /></div>
            <div className="carousel_image"><img src="/static/design_logo/Image-2.svg" alt="no logo" /></div>
            <div className="carousel_image"><img src="/static/design_logo/Image-3.svg" alt="no logo" /></div>
            <div className="carousel_image"><img src="/static/design_logo/Image-4.svg" alt="no logo" /></div>
          </div>

          <div className="carousel_images slide-right">
            <div className="carousel_image"><img src="/static/design_logo/Image-5.svg" alt="no logo" /></div>
            <div className="carousel_image"><img src="/static/design_logo/Image-6.svg" alt="no logo" /></div>
            <div className="carousel_image"><img src="/static/design_logo/Image-7.svg" alt="no logo" /></div>
            <div className="carousel_image"><img src="/static/design_logo/Image-8.svg" alt="no logo" /></div>
            <div className="carousel_image"><img src="/static/design_logo/Image-9.svg" alt="no logo" /></div>
            <div className="carousel_image"><img src="/static/design_logo/Image-5.svg" alt="no logo" /></div>
            <div className="carousel_image"><img src="/static/design_logo/Image-6.svg" alt="no logo" /></div>
            <div className="carousel_image"><img src="/static/design_logo/Image-7.svg" alt="no logo" /></div>
            <div className="carousel_image"><img src="/static/design_logo/Image-8.svg" alt="no logo" /></div>
            <div className="carousel_image"><img src="/static/design_logo/Image-9.svg" alt="no logo" /></div>
            <div className="carousel_image"><img src="/static/design_logo/Image-5.svg" alt="no logo" /></div>
            <div className="carousel_image"><img src="/static/design_logo/Image-6.svg" alt="no logo" /></div>
            <div className="carousel_image"><img src="/static/design_logo/Image-7.svg" alt="no logo" /></div>
            <div className="carousel_image"><img src="/static/design_logo/Image-8.svg" alt="no logo" /></div>
            <div className="carousel_image"><img src="/static/design_logo/Image-9.svg" alt="no logo" /></div>
          </div>

          <div className="shade_right"></div>
        </div>
      </div>

      <div className="pd_buttons">
        <button className="pd_button secondary">Start Selling</button>
        <button className="pd_button primary">
          Browse Designs
          <ChevronUpRight color="primary" />
        </button>
      </div>
    </section>
  );
}
