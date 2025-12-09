/*
--->
*/

import {
    ChevronUpRight,
  DecoraLive,
  FacebookIcon,
  InkybayIcon,
  InstaIcon,
  JewelsLabIcon,
  LinkdinIcon,
  PintestIcon,
  TikTokIcon,
  XIcon,
  YoutubeIcon,
} from "./icons/icons_libary";

export default function Footer() {
  return (
    <section className="pd_footer_container pd_container">
      <div className="pd_footer_sections">
        <div className="pd_footer_app_info">
          <div className="footer_title">
            <div className="logo">
              <img
                src="/static/background/small_logo_with_text.svg"
                alt="no icon"
              />
            </div>
            <div className="description">
              <p>
                Products Designer is your all-in-one platform for launching and
                scaling personalized product businesses.
              </p>
            </div>
          </div>
          <div className="footer_email">
            <p>Email</p>
            <span>info@productsdesigner.com</span>
          </div>
          <div className="footer_social_icons">
            <FacebookIcon />
            <XIcon />
            <InstaIcon />
            <LinkdinIcon />
            <YoutubeIcon />
            <PintestIcon />
            <TikTokIcon />
          </div>
        </div>

        <div className="pd_footer_solutions">
          <div>
            <span>Solutions</span>
          </div>
          <div>
            <ul className="pd_footer_solution_list">
              <li>DesignLab Customization</li>
              <li>Theme Customization</li>
              <li>Shopping Cart Integration</li>
              <li>Product Setup</li>
              <li>ClipArt Design & Management</li>
            </ul>
          </div>
        </div>
        <div className="pd_footer_resources">
          <div>
            <span>Resources</span>
          </div>
          <div>
            <ul className="pd_footer_solution_list">
              <li>Blog</li>
              <li>Webinars</li>
              <li>Industry Insights</li>
              <li>Integration</li>
              <li>Affiliate Program</li>
            </ul>
          </div>
        </div>
        <div className="pd_footer_products">
          <div>
            <span>Products</span>
          </div>
          <div>
            <ul className="pd_footer_solution_list">
              <li>
                <div className="icon">
                  <InkybayIcon />
                </div>
                <strong>Inkybay -</strong> Product Personalizer
              </li>
              <li>
                <div className="icon">
                  <JewelsLabIcon />
                </div>
                <strong>JewelsLab -</strong>
                Jewelry Personalizer
              </li>
              <li>
                <div className="icon">
                  <DecoraLive />
                </div>
                <strong>Decoralive -</strong> Interior Designer
              </li>
            </ul>
          </div>
        </div>
        <div className="pd_footer_news_latter">
            <div><span>Newsletter Signup</span></div>
            <div><input name="newslatter" type="email" className="input" placeholder="Enter Your Email Address" /></div>
            <button className="pd_button primary">Subscribe Now <ChevronUpRight color={"primary"}/></button>
        </div>
      </div>

      <div className="pd_footer_copyright_section">
        <div className="copyright_section">
          <p>© 2025 Products Designer. All rights reserved</p>
        </div>
        <div className="term_condition_section">
          <a href="/">Terms & Conditions</a>.
          <a href="/">Privacy Policy</a>.
          <a href="/">Cookies Policy</a>
        </div>
      </div>
    </section>
  );
}
