'use client'
import {
  Badge,
  BigCommarce,
  DecoraLive,
  IconType,
  InkybayIcon,
  InkybayToolTipIcon,
  JewelsLabIcon,
  Magento,
  ShareIcon,
  ShopifyIcon,
  TaglineIcon,
  WooCommarce,
} from "./icons_libary";


const our_products_data = {
  id: 1,
  tagline: { id: 1, title: "Useful Apps For Your Business", icon: <TaglineIcon />, },
  title: "Product Personalization Apps for Every Business Type",
  short_description: "Find the right tools to customize, sell, and scale with ease no matter what you offer.",

  our_products: [

    {
      id: 1, title: "InkyBay", short_des: "Empower your customers to design apparel their way whether it's for fashion, business, home decor or events.",
      product_icon: { id: 1, title: "inkybay", icon: <InkybayIcon size={72}/>, icon_type: "product" },

      platform_icons: [
        { id: 1, title: "Shopify", icon: <ShopifyIcon />, type: "ICON" },
        { id: 2, title: "products", icon: "/favicon.ico", type: "IMAGE" },
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
      product_icon: { id: 2, title: "JewelsLab", icon: <JewelsLabIcon size={72}/>, icon_type: "product" },

      platform_icons: [
        { id: 1, title: "Shopify", icon: <ShopifyIcon />, type: "ICON"  },
        { id: 2, title: "BigCommarce", icon: <BigCommarce />, type: "ICON" },
        { id: 3, title: "WooCommarce", icon: <WooCommarce />, type: "ICON" },
        { id: 4, title: "Magento", icon: <Magento />, icon_type: "ICON" },
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
      product_icon: { id: 3, title: "DecoraLive", icon: <DecoraLive size={72}/>, icon_type: "product" },

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
      <div className="max-w-[1620] overflow-hidden w-full flex flex-col items-center gap-12 mx-auto">
        {/* --- Component Title --- */}
        {our_products_data && (
          <div className="flex flex-col w-full items-center justify-center gap-4">
            {/* ----- Tagline ----- */}
            <div className="tagline text-[#432AD8]">
              <TaglineIcon />{our_products_data.tagline.title}
            </div>

            {/* ----- Hero Section Heading ------ */}
            <h2 className="max-w-[657px] text-3xl lg:text-5xl font-medium text-center">{our_products_data.title}</h2>
            <p className="max-w-[676px] text-[#616170] text-center text-lg font-normal">
              {our_products_data.short_description}
            </p>
          </div>
        )}


        {/* --- Component Cards --- */}
        <div className="flex flex-row gap-6 flex-wrap justify-center">
          {our_products_data.our_products.map((product) => (
            <div key={product.id} className="flex max-w-[524px] gap-8 p-8 shadow-[0_1px_2px_0_rgba(20,21,26,0.05)] bg-[#F9F9FB] flex-col rounded-3xl border border-[#DDE3FF]">
              {/* container Contents */}
              <div className="flex flex-col gap-6">

                <div className="flex flex-col gap-4">
                  <div className="flex flex-row justify-between items-start">
                    {product.product_icon.icon}
                    <div className="flex flex-row items-center gap-2">
                      {product.platform_icons?.length ? product.platform_icons.map((icon) => (
                        <div key={icon.id}>
                          <InkybayToolTipIcon icon={icon.icon} text={icon.title} type={icon.type as IconType}/>
                        </div>
                      )) : (<Badge text="Coming Soon" />)}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-start">
                    <span className="text-2xl font-medium">{product.title}</span>
                    <p className="text-[#36364A] text-base font-normal">{product.short_des}</p>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-4">
                  <span className="px-2.5 py-0.5 rounded-full border border-[#E2E8F0] text-sm">{product.product_des_head}</span>
                  
                    <ul className="list-disc pl-6 text-[#616170] text-sm font-normal">
                      {product.product_des.map((des) => (
                        <li key={des.id}>{des.title}</li>
                      ))}
                    </ul>
                </div>
              </div>

              {/* container buttons  */}
              {product.buttons && (
                <div className="flex flex-row items-center gap-3">
                  {product.buttons.map((button) => (
                    <button key={button.id} className={`btn flex-1 btn-${button.background}`}>
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
