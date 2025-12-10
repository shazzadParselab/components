'use client'
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
} from "../icons/icons_libary";


const our_products_data = {
  id: 1,
  tagline: { id: 1, title: "Useful Apps For Your Business", icon: <TaglineIcon />, },
  title: "Product Personalization Apps for Every Business Type",
  short_description: "Find the right tools to customize, sell, and scale with ease no matter what you offer.",

  our_products: [

    {
      id: 1, title: "InkyBay", short_des: "Empower your customers to design apparel their way whether it's for fashion, business, home decor or events.",
      product_icon: { id: 1, title: "inkybay", icon: <InkybayIcon />, icon_type: "product" },

      platform_icons: [
        { id: 1, title: "Shopify", icon: <ShopifyIcon />, icon_type: "platform" },
      ],
      buttons: [
        { id: 1, background: "secondary", title: "Learn More", icon: <ShareIcon color="secondary" /> },
        { id: 2, background: "primary", title: "Try Now" },
      ],
      product_des_head: "Multi-Purpose Product Personalization",
      product_des: [
        { id: 1, title: "Custom Text & Image Uploads" },
        { id: 2, title: "Color & Size Variants" },
        { id: 3, title: "Pricing Rules & Print Area Setup" },
      ],
    },

    {
      id: 2, title: "JewelsLab", short_des: "Create unforgettable shopping experiences with interactive tools that let your customers personalize every detail.",
      product_icon: { id: 2, title: "JewelsLab", icon: <JewelsLabIcon />, icon_type: "product" },

      platform_icons: [
        { id: 1, title: "Shopify", icon: <ShopifyIcon />, icon_type: "platform" },
        { id: 2, title: "BigCommarce", icon: <BigCommarce />, icon_type: "platform" },
        { id: 3, title: "WooCommarce", icon: <WooCommarce />, icon_type: "platform" },
        { id: 4, title: "Magento", icon: <Magento />, icon_type: "platform" },
      ],
      buttons: [
        { id: 1, background: "secondary", title: "Learn More", icon: <ShareIcon color="secondary" /> },
      ],
      product_des_head: "Jewelry Personalization",
      product_des: [
        { id: 4, title: "3D Ring Designer" },
        { id: 5, title: "Stone Configurator" },
        { id: 6, title: "Engraving Tools" },
      ],
    },



    {
      id: 3, title: "DecoraLive", short_des: "Create unforgettable shopping experiences with interactive tools that let your customers personalize every detail.",
      product_icon: { id: 3, title: "DecoraLive", icon: <DecoraLive />, icon_type: "product" },

      platform_icons: [],
      buttons: [
        { id: 1, background: "secondary", title: "Learn More", icon: <ShareIcon color="secondary" /> },
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

export default function OurProductsComponent() {

  return (
    <section className="flex w-full px-5 py-12 sm:py-20">
      <div className="max-w-[1620] w-full flex flex-col items-center gap-12 mx-auto">
        {/* --- Component Title --- */}
        {our_products_data && (
          <div className="flex flex-col w-full items-center justify-center gap-4">
            {/* ----- Tagline ----- */}
            <div className="tagline text-[#432AD8]">
              <TaglineIcon />{our_products_data.tagline.title}
            </div>

            {/* ----- Hero Section Heading ------ */}
            <h2 className="text-3xl lg:text-5xl font-medium text-center">{our_products_data.title}</h2>
            <p className="text-[#616170] text-center text-lg font-normal">
              {our_products_data.short_description}
            </p>
          </div>
        )}


        {/* --- Component Cards --- */}
          <div className="flex flex-row gap-6 flex-wrap">
            {our_products_data.our_products.map((product) => (
              <div key={product.id} className="flex max-w-[524px] p-8 shadow-[0_1px_2px_0_rgba(20,21,26,0.05)] bg-[#F9F9FB] flex-col items-start rounded-3xl border border-[#DDE3FF]">
                {/* container Contents */}
                <div className="pd_our_products_Card_contains">
                  <div className="pd_our_products_Card_title">
                    <div className="flex flex-row justify-between items-start">
                      {product.product_icon.icon}
                      <div className="flex flex-row items-center gap-2">
                        {product.platform_icons?.length ? product.platform_icons.map((icon) => (
                          <div key={icon.id} className="relative">
                            {icon.icon}
                          </div>
                        )) : (<Badge text="Coming Soon" />)}
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
                        {product.product_des.map((des) => (
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
      </div>
    </section>
  );
}
