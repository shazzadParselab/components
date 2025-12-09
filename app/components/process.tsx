/*
--> need work in tagline - class name css and other things
--> every part need check 
*/

import { ChevronUpRight, TaglineIcon } from "./icons/icons_libary";

export default function Process() {
  return (
    <section className="pd_process_container pd_container">
      <div className="pd_process_title">
        <div className="pd_process_title_heading">
          {/* ----- Tagline ----- */}
          <div className="pd_hero_section_content_tagline">
            <div className="icon_box">
              <TaglineIcon />
            </div>
            <span className="content_tagline">
              Step by Step Guideline
            </span>
          </div>

          <h2>Start Personalization Business in 4 Simple Steps</h2>
          <p>
            Provide articles and posts about the latest trends in customization, business tips, case studies, and industry news.
          </p>
        </div>
        <button className="pd_button primary">
          Book 1:1 Consultation
          <ChevronUpRight color="primary" />
        </button>
      </div>

      <div className="pd_process_bar_details">
        <div className="pd_process_bar_container">
          <div className="pd_process_bar"></div>
          <div className="pd_process_bar_item active"><span>1</span></div>
          <div className="pd_process_bar_item"><span>2</span></div>
          <div className="pd_process_bar_item"><span>3</span></div>
          <div className="pd_process_bar_item"><span>4</span></div>
          <div className="pd_process_bar_dot_item"></div>
        </div>
        <div className="pd_process_details_container">
          <div className="pd_process_details">
            <p>Choose Your Product Type</p>
            <span>Pick what you want to sell apparel, jewelry, home decor, or even custom gifts. Personalization works across many categories.</span>
          </div>
          <div className="pd_process_details">
            <p>Choose Your Product Type</p>
            <span>Pick what you want to sell apparel, jewelry, home decor, or even custom gifts. Personalization works across many categories.</span>
          </div>
          <div className="pd_process_details">
            <p>Choose Your Product Type</p>
            <span>Pick what you want to sell apparel, jewelry, home decor, or even custom gifts. Personalization works across many categories.</span>
          </div>
          <div className="pd_process_details">
            <p>Choose Your Product Type</p>
            <span>Pick what you want to sell apparel, jewelry, home decor, or even custom gifts. Personalization works across many categories.</span>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
