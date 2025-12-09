/*
----> Tagline - make tagline dynamic 
----> Text - Font size, text-color, padding
----> card - text - Font size, text-color
----> Responsive not done 
*/

import { ReactElement, useState } from "react";
import {
  Badge,
  BigCommarce,
  DecoraLive,
  InkybayIcon,
  JewelsLabIcon,
  Magento,
  ShareIcon,
  ShopifyIcon,
  TaglineIcon,
  WooCommarce,
} from "./icons/icons_libary";

type buttonType = "primary" | "secondary";
type IconType = "product" | "platform";

interface Button {
  id: number;
  background: buttonType;
  title: string;
  icon?: React.ReactElement;
}

interface Icons {
  id: number;
  title: string;
  icon: ReactElement;
  icon_type: IconType;
}

interface Tagline {
  id: number;
  title: string;
  icon: ReactElement;
}

interface ProductListType {
  id: number;
  title: string;
}

interface OurProducts {
  id: number;
  title: string;
  short_des: string;
  product_icon: Icons;
  platform_icons?: Icons[];
  buttons: Button[];
  product_des_head: string;
  product_des: ProductListType[];
}

// --------------------------------------
// --------------------------------------
interface SmallCard {
  id: number;
  title: string;
  short_description: string;
  icon: string;
  icon_type: IconType;
  background_image: string;
  active: boolean;
}

interface Component{
  id: number;
  tagline: Tagline;
  title: string;
  short_description: string;
  cards: SmallCard[];
  active: boolean;
}
// --------------------------------------
// --------------------------------------

interface OurProductsType {
  id: number;
  title: string;
  short_description: string;
  tagline: Tagline;
  our_products: OurProducts[];
  active: boolean;
}

const our_products_data: OurProductsType = {
  id: 1,
  tagline: { id: 1, title: "Useful Apps For Your Business", icon: <TaglineIcon />,},
  title: "Product Personalization Apps for Every Business Type",
  short_description: "Find the right tools to customize, sell, and scale with ease no matter what you offer.",

  our_products: [

    { id: 1, title: "InkyBay", short_des: "Empower your customers to design apparel their way whether it's for fashion, business, home decor or events.",
      product_icon: { id: 1, title: "inkybay", icon: <InkybayIcon/>, icon_type: "product" },
      
      platform_icons: [
        { id: 1, title: "Shopify", icon: <ShopifyIcon />, icon_type: "platform" },
      ],
      buttons: [
        { id: 1, background: "secondary", title: "Learn More", icon: <ShareIcon color="secondary" />},
        { id: 2, background: "primary", title: "Try Now" },
      ],
      product_des_head: "Multi-Purpose Product Personalization",
      product_des: [
        { id: 1, title: "Custom Text & Image Uploads" },
        { id: 2, title: "Color & Size Variants" },
        { id: 3, title: "Pricing Rules & Print Area Setup" },
      ],
    },



    { id: 2, title: "JewelsLab", short_des: "Create unforgettable shopping experiences with interactive tools that let your customers personalize every detail.",
      product_icon: { id: 2, title: "JewelsLab", icon: <JewelsLabIcon/>, icon_type: "product" },
      
      platform_icons: [
        { id: 1, title: "Shopify", icon: <ShopifyIcon />, icon_type: "platform" },
        { id: 2, title: "BigCommarce", icon: <BigCommarce />, icon_type: "platform" },
        { id: 3, title: "WooCommarce", icon: <WooCommarce />, icon_type: "platform" },
        { id: 4, title: "Magento", icon: <Magento />, icon_type: "platform" },
      ],
      buttons: [
        { id: 1, background: "secondary", title: "Learn More", icon: <ShareIcon color="secondary" />},
      ],
      product_des_head: "Jewelry Personalization",
      product_des: [
        { id: 4, title: "3D Ring Designer" },
        { id: 5, title: "Stone Configurator" },
        { id: 6, title: "Engraving Tools" },
      ],
    },



    { id: 3, title: "DecoraLive", short_des: "Create unforgettable shopping experiences with interactive tools that let your customers personalize every detail.",
      product_icon: { id: 3, title: "DecoraLive", icon: <DecoraLive/>, icon_type: "product" },
      
      platform_icons: [],
      buttons: [
        { id: 1, background: "secondary", title: "Learn More", icon: <ShareIcon color="secondary" />},
      ],
      product_des_head: "Interior & Space",
      product_des: [
        { id: 4, title: "Home Interior" },
        { id: 5, title: "Stone Configurator" },
        { id: 6, title: "Engraving Tools" },
      ],
    },


  ],
  active: true,
};

export default function OurProducts() {
  const [ourAllProduct, setOurProducts] = useState(our_products_data);

  return (
    <section className="pd_our_products pd_container" id="our_apps">
      <div className="pd_our_products_container">
        {/* --- Component Title --- */}
        {ourAllProduct && (
          <div className="pd_our_products_heading">
            {/* ----- Tagline ----- */}
            <div className="pd_hero_section_content_tagline">
              <div className="icon_box">{ourAllProduct.tagline.icon}</div>
              <span className="content_tagline">
                {ourAllProduct.tagline.title}
              </span>
            </div>

            {/* ----- Hero Section Heading ------ */}
            <div>
              <h2 className="pb_heading">{ourAllProduct.title}</h2>
            </div>

            <p className="pb_heading_description">
              {ourAllProduct.short_description}
            </p>
          </div>
        )}

        {/* --- Component Cards --- */}
        {ourAllProduct.our_products && (
          <div className="pd_our_products_Cards">
            {/* --- Card --- */}

            {ourAllProduct.our_products.map((product) => (
              <div key={product.id} className="pd_our_products_Card">
                {/* container Contents */}
                <div className="pd_our_products_Card_contains">
                  <div className="pd_our_products_Card_title">
                    <div className="pd_our_products_Card_title_icons">
                        {product.product_icon.icon}
                        <div className="icon_list">
                          {product.platform_icons?.length ? product.platform_icons.map((icon)=>(
                            <div key={icon.id}>
                              {icon.icon}
                            </div>
                          )):(<Badge text="Coming Soon" />)}
                        </div>
                    </div>
                    <div className="pd_our_products_Card_title_heading">
                      <div className="pd_our_products_Card_heading">
                        <h3>{product.title}</h3>
                      </div>
                      <div className="pd_our_products_Card_description">
                        <p>
                          {product.short_des}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pd_our_products_Card_purpose_list">
                    <div className="feature_title">
                      <span>{product.product_des_head}</span>
                    </div>
                    <div>
                      <ul className="feature_items">
                        {product.product_des.map((des)=>(
                          <li key={des.id}>{des.title}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* container buttons  */}
                {product.buttons && (
                  <div className="pd_our_products_Card_buttons pd_buttons">
                    {product.buttons.map((button) => (
                      <button key={button.id} className={`pd_button ${button.background}`}>
                        {button.title} {button.icon && (<ShareIcon color={button.background} />)} 
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
