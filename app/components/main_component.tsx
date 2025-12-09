import { ReactNode, useRef } from "react";
import {
  BigCommarce,
  DecoraLive,
  InkybayIcon,
  JewelsLabIcon,
  LocationIcon,
  Magento,
  ShareIcon,
  ShopifyIcon,
  StarIcon,
  TaglineIcon,
  WooCommarce,
} from "./icons/icons_libary";

enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface Button {
  id: number;
  background: ButtonType;
  title: string;
  icon?: ReactNode;
}

interface Icon {
  id: number;
  title: string;
  icon: ReactNode;
  icon_type: "product" | "platform" | "small";
}

interface Tagline {
  id: number;
  title: string;
  icon?: Icon;
}

interface Features{
  id: number;
  title: string;
  active: boolean;
}

interface ProductFeature {
  id: number;
  title: string;
  icon?: Icon;
  features?: Features[];
  image?: string;
  active: boolean;
}

interface StartIcon {
  id: number;
  icon: ReactNode;
}
interface CardRating {
  id: number;
  icon: StartIcon[];
  country?: string;
  country_icon?: ReactNode;
  active: boolean;
}

interface Card {
  id: number;
  title?: string;
  short_description?: string;
  icon?: Icon[];
  image?: string;
  background_image?:string;
  tagline?: Tagline;
  CardRating?: CardRating;
  product_feature?: ProductFeature;
  buttons?: Button[];
  active: boolean;
}

interface ComponentCSS {
  id: number;
  title: string; // Unique identifier for the CSS class
  pd_main_contents__flex_direction?: "row" | "column"; // Example flex direction

  pd_main_content_title__flex_direction?: "row" | "column"; // Example flex direction
  pd_main_content_title__align_items?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "none"; // Example flex direction
  pd_main_content_title__justify_content?:
    | "space-between"
    | "space-around"
    | "flex-start"
    | "flex-end"
    | "center"; // Example space between items
  pd_content_title__width?: string; // Example width for content title
  pd_content_title__maxwidth?: string; // Example width for content title
  pd_content_title__text_align?: "left" | "center" | "right"; // Example text alignment for content title
  pd_content_title__align_items?: "flex-start" | "center" | "flex-end" | "none"; // Example alignment of content title
  pd_content_title__font_size?: string; // Example font size for content title

  pd_content_tagline__background?: string; // Example background color for tagline

  pd_main_content_cards_justify_content?:
    | "space-between"
    | "space-around"
    | "flex-start"
    | "flex-end"
    | "center"; // Example height for main content card
    pd_main_content_cards_align_items?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "none"; // Example height for main content card
  pd_main_content_card_title__text_align?: "left" | "center" | "right"; // Example text alignment for main content card title
  pd_main_content_card_width?: string; // Example width for main content card
  pd_main_content_card_box_shadow?: string; // Example height for main content card
  pd_main_content_card_align_items?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "none"; // Example height for main content card
  pd_main_content_card_gap?: string; // Example height for main content card
  pd_main_content_card_padding?: string; // Example height for main content card
  pd_main_content_card_border_color?: string; // Example height for main content card
  pd_main_content_card_hover_effect?: string; // Example height for main content card
  pd_main_content_card_background?: string; // Example height for main content card

  pd_card_image_height?: string; // Example height for card image
  pd_card_image__justify_content?: "center" | "flex-start" | "flex-end"; // Example alignment for card image
  pd_card_image__align_items?: "center" | "flex-start" | "flex-end"; // Example alignment for card image
}

interface Component {
  id: number;
  tagline?: Tagline;
  title: string;
  short_description?: string;
  cards?: Card[];
  resources?: Card[];
  button?: Button[];
  background_type?: "image" | "color"; // Example color
  background_color?: string;
  background_image?: ImageProps;
  component_css?: ComponentCSS;
  active: boolean;
}

interface ImageProps {
  id: number; // Unique ID for the image
  altTitle: string; // alt attribute for the image (important for SEO and accessibility)
  src: string; // Main URL or path of the image
  width: number; // Width of the image (helps layout stability and benefits SEO)
  height: number; // Height of the image (helps layout stability and benefits SEO)
  active: boolean; // Custom property, likely used to indicate if the image is active in the UI

  srcSet?: string; // Responsive image sources for different resolutions (improves performance & responsiveness)
  sizes?: string; // Specifies image display sizes in responsive designs (helps performance)
  referrerPolicy?: string; // Controls the referrer header sent when loading the image (privacy/security)
  loading?: "eager" | "lazy"; // Controls how the image loads (lazy improves performance for off-screen images)
  fetchPriority?: "high" | "low" | "auto"; // Suggests how important the image is to load early (performance optimization)
  crossOrigin?: "anonymous" | "use-credentials" | "" | null; // Handles cross-origin image loading (CORS-related)
  useMap?: string; // Links the image to an HTML image map for clickable areas
}



const component_all_data: Component[] = [
  {
    id: 1,
    title: "74% of eCommerce Retailers Use Product Personalization",
    cards: [
      { id: 1, active: true, image: "/static/asSoonAs/logo1.svg" },
      { id: 2, active: true, image: "/static/asSoonAs/logo2.svg" },
      { id: 3, active: true, image: "/static/asSoonAs/logo3.svg" },
      { id: 4, active: true, image: "/static/asSoonAs/logo4.svg" },
      { id: 5, active: true, image: "/static/asSoonAs/logo5.svg" },
      { id: 6, active: true, image: "/static/asSoonAs/logo6.svg" },
      { id: 7, active: true, image: "/static/asSoonAs/logo7.svg" },
      { id: 8, active: true, image: "/static/asSoonAs/logo8.svg" },
      { id: 9, active: true, image: "/static/asSoonAs/logo9.svg" },
      { id: 10, active: true, image: "/static/asSoonAs/logo10.svg" },
    ],
    background_type: "color", // Example color
    background_color: "#F9F9FB", // Example color
    component_css: {
      id: 1,
      title: "as_soon_as",
      pd_main_contents__flex_direction: "column", // Example flex direction
      pd_main_content_title__flex_direction: "column", // Example flex direction
      pd_main_content_title__align_items: "center", // Example flex direction
      pd_main_content_title__justify_content: "space-between", // Example space between items
      pd_content_title__align_items: "center", // Example alignment of content title
      pd_content_title__width: "70%", // Example width for content title
      pd_content_title__maxwidth: "896px", // Example max width for content title
      pd_content_title__text_align: "center", // Example text alignment for content title
      pd_content_tagline__background: "#F2EFFF", // Example background color for tagline
      pd_content_title__font_size: "24px", // Example background color for tagline

      pd_main_content_card_width: "200px", // Example width for main content card
      pd_main_content_card_box_shadow:
        "0 30px 40px 0 rgba(212, 217, 232, 0.20)", // Example height for main content card
    },
    active: true,
  },

  {
    id: 2,
    tagline: {
      id: 2,
      title: "Why Product Personalization Is a Game Changer",
      icon: {
        id: 2,
        title: "App Icon",
        icon: <TaglineIcon />,
        icon_type: "small",
      },
    },
    title: "Personalization Delivers Business Results",
    short_description:
      "Today’s customers expect more than just “add to cart.” They want options, control, and something made just for them. That’s where personalization changes the game.",
    cards: [
      {
        id: 8,
        image: "/static/benifits/icon1.svg",
        title: "Increased Sales",
        short_description:
          "Personalized products boost spending with custom features and added value.",
        active: true,
      },
      {
        id: 9,
        image: "/static/benifits/icon2.svg",
        title: "Lower Return Rates",
        short_description:
          "Previews reduce surprises, lowering returns and increasing satisfaction.",
        active: true,
      },
      {
        id: 10,
        image: "/static/benifits/icon3.svg",
        title: "Stronger Loyalty",
        short_description:
          "Personalization builds emotional connection and brand loyalty.",
        active: true,
      },
      {
        id: 11,
        image: "/static/benifits/icon4.svg",
        title: "Unique Brand Positioning",
        short_description:
          "Custom options give your brand a unique edge in a crowded market.",
        active: true,
      },
    ],
    background_type: "color",
    background_color: "#fff",
    component_css: {
      id: 2,
      title: "personalization_benefits",
      pd_main_contents__flex_direction: "row",
      pd_main_content_title__flex_direction: "column",
      pd_main_content_title__align_items: "flex-start",
      pd_main_content_title__justify_content: "space-between",

      pd_content_title__align_items: "flex-start",
      pd_content_title__width: "100%",
      pd_content_title__maxwidth: "896px",
      pd_content_title__text_align: "left",
      pd_content_tagline__background: "#F2EFFF",
      pd_content_title__font_size: "36px",

      pd_main_content_cards_justify_content: "flex-end",
      pd_main_content_card_width: "387px",
      pd_main_content_card_align_items: "flex-start",
      pd_main_content_card_gap: "12px",
      pd_main_content_card_padding: "24px",
      pd_main_content_card_border_color: "transparent",
      pd_main_content_card_hover_effect: "small_card_hover_effect",

      pd_card_image__justify_content: "flex-start",
      pd_card_image__align_items: "flex-start",
    },
    active: true,
  },

  {
    id: 3,
    title: "Personalization Products, Scalable Growth",
    background_type: "color",
    background_color: "#fff",
    cards: [
      {
        id: 12,
        active: true,
        title: "50k+",
        short_description: "Products Designed",
      },
      {
        id: 13,
        active: true,
        title: "3X",
        short_description: "Products Designed",
      },
      {
        id: 14,
        active: true,
        title: "10k+",
        short_description: "Products Designed",
      },
      {
        id: 15,
        active: true,
        title: "40%",
        short_description: "Products Designed",
      },
    ],
    component_css: {
      id: 3,
      title: "product_statistics",
      pd_main_contents__flex_direction: "column",
      pd_main_content_title__flex_direction: "column",
      pd_main_content_title__align_items: "center",
      pd_main_content_title__justify_content: "space-between",
      pd_main_content_card_title__text_align: "center",

      pd_content_tagline__background: "#F2EFFF",

      pd_content_title__align_items: "center",
      pd_content_title__width: "50%",
      pd_content_title__maxwidth: "896px",
      pd_content_title__text_align: "center",
      pd_content_title__font_size: "36px",

      pd_main_content_card_width: "225px",
      pd_main_content_card_align_items: "center",
      pd_main_content_card_gap: "12px",
      pd_main_content_card_padding: "24px",
      pd_main_content_card_box_shadow:
        "0 30px 40px 0 rgba(186, 188, 255, 0.15)",
      pd_main_content_card_hover_effect: "small_card_hover_effect",
    },
    active: true,
  },

  {
    id: 7,
    tagline: {
      id: 7,
      title: "Useful Apps For Your Business",
      icon: {
        id: 7,
        title: "App Icon",
        icon: <TaglineIcon />,
        icon_type: "small",
      },
    },
    title: "Product Personalization Apps for Every Business Type",
    short_description:
      "Find the right tools to customize, sell, and scale with ease no matter what you offer.",
    cards: [
      {
        id: 1,
        active: true,
        title: "InkyBay",
        short_description:
          "Empower your customers to design apparel their way whether it's for fashion, business, home decor or events.",
        image: "/static/our_products/icon1.svg",

        icon: [
          {
            id: 1,
            title: "Shopify",
            icon: <ShopifyIcon />,
            icon_type: "platform",
          },
        ],
        buttons: [
          {
            id: 1,
            background: ButtonType.SECONDARY,
            title: "Learn More",
            icon: <ShareIcon color="secondary" />,
          },
          { id: 2, background: ButtonType.PRIMARY, title: "Try Now" },
        ],
        product_feature:{ id:1, title:"Multi-Purpose Product Personalization", active: true,
        features: [
          { id: 1, title: "Custom Text & Image Uploads", active: true },
          { id: 2, title: "Color & Size Variants", active: true },
          { id: 3, title: "Pricing Rules & Print Area Setup", active: true },
        ],
        }
      },

      {
        id: 2,
        active: true,
        title: "JewelsLab",
        short_description:
          "Create unforgettable shopping experiences with interactive tools that let your customers personalize every detail.",
        image: "/static/our_products/icon2.svg",

        icon: [
          {
            id: 1,
            title: "Shopify",
            icon: <ShopifyIcon />,
            icon_type: "platform",
          },
          {
            id: 2,
            title: "BigCommarce",
            icon: <BigCommarce />,
            icon_type: "platform",
          },
          {
            id: 3,
            title: "WooCommarce",
            icon: <WooCommarce />,
            icon_type: "platform",
          },
          { id: 4, title: "Magento", icon: <Magento />, icon_type: "platform" },
        ],
        buttons: [
          {
            id: 1,
            background: ButtonType.SECONDARY,
            title: "Learn More",
            icon: <ShareIcon color="secondary" />,
          },
        ],
        product_feature: { id:1, title:"Jewelry Personalization", active: true,
        features: [
          { id: 4, title: "3D Ring Designer", active: true },
          { id: 5, title: "Stone Configurator", active: true },
          { id: 6, title: "Engraving Tools", active: true },
        ],
        }
      },

      {
        id: 3,
        active: true,
        title: "DecoraLive",
        short_description:
          "Create unforgettable shopping experiences with interactive tools that let your customers personalize every detail.",
        image: "/static/our_products/icon3.svg",

        tagline: {id: 1, title: "comming soon", icon:{id: 1, title: "comming soon", icon: <TaglineIcon />, icon_type: "small"}},
        buttons: [
          {
            id: 1,
            background: ButtonType.SECONDARY,
            title: "Learn More",
            icon: <ShareIcon color="secondary" />,
          },
        ],
        product_feature: {id:1, title:"Interior & Space", active: true,
        features: [
          { id: 4, title: "Home Interior", active: true },
          { id: 5, title: "Stone Configurator", active: true },
          { id: 6, title: "Engraving Tools", active: true },
        ],
        },
      },
    ],
    background_type: "color",
    background_color: "#FFF",
    component_css: {
      id: 5,
      title: "our_products",
      pd_main_contents__flex_direction: "column",
      pd_main_content_title__flex_direction: "column",
      pd_main_content_title__align_items: "center",
      pd_main_content_title__justify_content: "center",

      pd_content_tagline__background: "#F2EFFF",

      pd_content_title__align_items: "center",
      pd_content_title__width: "100%",
      pd_content_title__maxwidth: "660px",
      pd_content_title__text_align: "center",
      pd_content_title__font_size: "40px",

      pd_main_content_cards_justify_content: "center",

      pd_main_content_card_title__text_align: "left",
      pd_main_content_card_width: "387px",
      pd_main_content_card_align_items: "flex-start",
      pd_main_content_card_padding: "24px",
      pd_main_content_card_gap: "24px",
      pd_main_content_card_border_color: "#DDE3FF",
      pd_main_content_card_background: "#F9F9FB",
      pd_main_content_card_box_shadow: "0 1px 2px 0 rgba(20, 21, 26, 0.05)",

      pd_card_image__justify_content: "flex-start",
      pd_card_image__align_items: "center",
    },
    active: true,
  },

  {
    id: 4,
    tagline: {
      id: 4,
      title: "Our Top Notch Solutions",
      icon: {
        id: 4,
        title: "App Icon",
        icon: <TaglineIcon />,
        icon_type: "small",
      },
    },
    title: "The All-in-One Solution for Your Product Personalization Business",
    short_description:
      "Today’s customers expect more than just “add to cart.” They want options, control, and something made just for them. That’s where personalization changes the game.",
    cards: [
      {
        id: 16,
        title: "DesignLab Customization",
        short_description:
          "Make your personalization tool truly yours. We help you fine tune the design panel. So it perfectly fits your brand and customers.",
        image: "/static/solution/design_lab.svg",
        active: true,
      },
      {
        id: 17,
        title: "Theme Customization",
        short_description:
          "We'll make sure it blends in beautifully with your existing theme, creating a user friendly shopping experience from start to finish.",
        image: "/static/solution/theme_customization.svg",
        active: true,
      },
      {
        id: 18,
        title: "Shopping Cart Integration",
        short_description:
          "Our friendly support team is always here to guide you, one-on-one.",
        image: "/static/solution/shopping_cart.svg",
        active: true,
      },
      {
        id: 19,
        title: "Product Setup",
        short_description:
          "We’ll handle the setup from product configuration and everything in between.",
        image: "/static/solution/product_setup.svg",
        active: true,
      },
      {
        id: 20,
        title: "ClipArt Design & Management",
        short_description:
          "Intuition is Good. Research is even better! Trust in the power of the community.",
        image: "/static/solution/clip_art.svg",
        active: true,
      },
    ],
    background_type: "color",
    background_color: "linear-gradient(145deg, #F2F0FF 22.58%, #F0F6FF 94.12%)",
    component_css: {
      id: 4,
      title: "all_in_one_solution",
      pd_main_contents__flex_direction: "column",
      pd_main_content_title__flex_direction: "column",
      pd_main_content_title__align_items: "center",
      pd_main_content_title__justify_content: "space-between",

      pd_content_title__align_items: "center",
      pd_content_title__width: "80%",
      pd_content_title__maxwidth: "896px",
      pd_content_title__text_align: "center",
      pd_content_tagline__background: "#F2EFFF",
      pd_content_title__font_size: "36px",

      pd_main_content_card_width: "660px",
      pd_main_content_card_align_items: "center",
      pd_main_content_card_gap: "12px",
      pd_main_content_card_padding: "40px",
      pd_main_content_card_border_color: "transparent",
      pd_main_content_card_background: "#fff", // Example height for main content card
    },
    active: true,
  },

  {
    id: 6,
    tagline: {
      id: 6,
      title: "Successful Stories",
      icon: {
        id: 6,
        title: "App Icon",
        icon: <TaglineIcon />,
        icon_type: "small",
      },
    },
    title: "Successful Stores Using Personalization",
    short_description:
      "See how businesses of all types are using product personalization to stand out, boost sales, and keep customers coming back.",
    button: [
      {
        id: 1,
        background: ButtonType.PRIMARY,
        title: "Book a Demo",
        icon: <ShareIcon color={"primary"} />,
      },
    ],
    cards: [
      {
        id: 1,
        tagline: { id: 2, title: "Shopify" },
        image: "/static/success_story/bar_blades.svg",
        CardRating: {id:1, active: true, icon: [
            { id: 1, icon: <StarIcon /> },
            { id: 2, icon: <StarIcon /> },
            { id: 3, icon: <StarIcon /> },
            { id: 4, icon: <StarIcon /> },
            { id: 5, icon: <StarIcon /> },
          ],
          country: "UK",
          country_icon: <LocationIcon />,
        },
        title: "Barblades",
        short_description:
          "A bar blade is usually a bottle opener that is used to open the crown bottle top. It is also known as a speed opener.",
        buttons: [
          {
            id: 2,
            background: ButtonType.SECONDARY,
            title: "See Full Details",
          },
          {
            id: 3,
            background: ButtonType.PRIMARY,
            title: "Visit Store",
            icon: <ShareIcon color={"primary"} />,
          },
        ],
        active: true,
      },
      {
        id: 2,
        tagline: { id: 3, title: "Woo Commerce" },
        image: "/static/success_story/kinder_kraft.svg",
        CardRating: {id:1, active: true, icon: [
            { id: 1, icon: <StarIcon /> },
            { id: 2, icon: <StarIcon /> },
            { id: 3, icon: <StarIcon /> },
            { id: 4, icon: <StarIcon /> },
            { id: 5, icon: <StarIcon /> },
          ],
          country: "USA",
          country_icon: <LocationIcon />,
        },
        
        title: "Jostens Kinderkraft",
        short_description:
          "Jostens Kinderkraft has everything to make graduation day special for little graduates.",
        buttons: [
          {
            id: 2,
            background: ButtonType.SECONDARY,
            title: "See Full Details",
          },
          {
            id: 3,
            background: ButtonType.PRIMARY,
            title: "Visit Store",
            icon: <ShareIcon color={"primary"} />,
          },
        ],
        active: true,
      },
      {
        id: 3,
        tagline: { id: 4, title: "Magento" },
        image: "/static/success_story/pick_on_us.svg",
        CardRating: {id:1, active: true, icon: [
            { id: 1, icon: <StarIcon /> },
            { id: 2, icon: <StarIcon /> },
            { id: 3, icon: <StarIcon /> },
            { id: 4, icon: <StarIcon /> },
            { id: 5, icon: <StarIcon /> },
          ],
          country: "UK",
          country_icon: <LocationIcon />,
        },
        title: "Pick On Us",
        short_description:
          "A bar blade is usually a bottle opener that is used to open the crown bottle top. It is also known as a speed opener.",
        buttons: [
          {
            id: 2,
            background: ButtonType.SECONDARY,
            title: "See Full Details",
          },
          {
            id: 3,
            background: ButtonType.PRIMARY,
            title: "Visit Store",
            icon: <ShareIcon color={"primary"} />,
          },
        ],
        active: true,
      },
      {
        id: 4,
        tagline: { id: 5, title: "Big Commerce" },
        image: "/static/success_story/prints21.svg",
        CardRating: {id:1, active: true, icon: [
            { id: 1, icon: <StarIcon /> },
            { id: 2, icon: <StarIcon /> },
            { id: 3, icon: <StarIcon /> },
            { id: 4, icon: <StarIcon /> },
            { id: 5, icon: <StarIcon /> },
          ],
          country: "BD",
          country_icon: <LocationIcon />,
        },
        title: "Pick On Us",
        short_description:
          "Jostens Kinderkraft has everything to make graduation day special for little graduates.",
        buttons: [
          {
            id: 2,
            background: ButtonType.SECONDARY,
            title: "See Full Details",
          },
          {
            id: 3,
            background: ButtonType.PRIMARY,
            title: "Visit Store",
            icon: <ShareIcon color={"primary"} />,
          },
        ],
        active: true,
      },
    ],
    background_type: "color",
    background_color: "#F9F9FB",
    component_css: {
      id: 5,
      title: "success_stories",
      pd_main_contents__flex_direction: "column",
      pd_main_content_title__flex_direction: "row",
      pd_main_content_title__align_items: "flex-end",
      pd_main_content_title__justify_content: "space-between",

      pd_content_tagline__background: "#F2EFFF",

      pd_content_title__align_items: "flex-start",
      pd_content_title__width: "100%",
      pd_content_title__maxwidth: "680px",
      pd_content_title__text_align: "left",
      pd_content_title__font_size: "36px",

      pd_main_content_cards_justify_content: "center", // Example height for main content card
      pd_main_content_card_title__text_align: "left", // Example text alignment for main content card title
      pd_main_content_card_width: "387px",
      pd_main_content_card_align_items: "flex-start",
      pd_main_content_card_padding: "24px",
      pd_main_content_card_gap: "24px",
      pd_main_content_card_border_color: "transparent",
      pd_main_content_card_background: "#fff", // Example height for main content card

      pd_card_image_height: "200px", // Example height for card image
    },
    active: true,
  },

  {
    id: 5,
    tagline: {
      id: 5,
      title: "Integrations with Popular CMS",
      icon: {
        id: 5,
        title: "App Icon",
        icon: <TaglineIcon />,
        icon_type: "small",
      },
    },
    title: "Built to Work Where Your Business Grows",
    short_description:
      "Whether you're on Shopify, WooCommerce, or any major e-commerce platform we help you personalize products with the right tools, apps, and expert guidance.",
    button: [
      {
        id: 1,
        background: ButtonType.PRIMARY,
        title: "Book a Demo",
        icon: <ShareIcon color={"primary"} />,
      },
    ],
    cards: [
      {
        id: 16,
        image: "/static/background/integration_flowchat.svg",
        active: true,
      },
    ],
    background_type: "color",
    background_color: "#fff",
    component_css: {
      id: 5,
      title: "intrigartions",
      pd_main_contents__flex_direction: "row",
      pd_main_content_title__flex_direction: "column",
      pd_main_content_title__align_items: "flex-start",
      pd_main_content_title__justify_content: "center",

      pd_content_tagline__background: "#F2EFFF",

      pd_content_title__align_items: "flex-start",
      pd_content_title__width: "100%",
      pd_content_title__maxwidth: "524px",
      pd_content_title__text_align: "left",
      pd_content_title__font_size: "36px",

      pd_main_content_cards_justify_content: "center", // Example height for main content card
      pd_main_content_card_width: "752px",
      pd_main_content_card_align_items: "center",
      pd_main_content_card_border_color: "transparent",
      pd_main_content_card_background: "#fff", // Example height for main content card
    },
    active: true,
  },
  {
    id: 8,
    tagline: {
      id: 8,
      title: "Blog & Resources",
      icon: {
        id: 8,
        title: "App Icon",
        icon: <TaglineIcon />,
        icon_type: "small",
      },
    },
    title: "Blog & Resource Center",
    short_description:
      "Provide articles and posts about the latest trends in customization, business tips, case studies, and industry news.",
    button: [
      {
        id: 8,
        background: ButtonType.PRIMARY,
        title: "View All Resources",
        icon: <ShareIcon color={"primary"} />,
      },
    ],
    cards: [
      {
      id: 1,
      image: "/static/blog_and_resource/logo1.svg",
      title: "How Custom Products Drive E-Commerce Success",
      active: true,
    },
    {
      id: 2,
      image: "/static/blog_and_resource/logo2.svg",
      title: "How to Set Up a Product Personalization Business from Scratch",
      active: true,
    },
    {
      id: 3,
      image: "/static/blog_and_resource/logo3.svg",
      title: "Why Consumers Crave Customized Products",
      active: true,
    },
    {
      id: 4,
      image: "/static/blog_and_resource/logo4.svg",
      title: "Building Customer Loyalty with Personalized Products",
      active: true,
    },
    ],


    background_type: "color",
    background_color: "#fff",
    component_css: {
      id: 5,
      title: "blog_resources",
      pd_main_contents__flex_direction: "column",
      pd_main_content_title__flex_direction: "row",
      pd_main_content_title__align_items: "flex-end",
      pd_main_content_title__justify_content: "space-between",

      pd_content_tagline__background: "#F2EFFF",

      pd_content_title__align_items: "flex-start",
      pd_content_title__width: "100%",
      pd_content_title__maxwidth: "680px",
      pd_content_title__text_align: "left",
      pd_content_title__font_size: "36px",

      pd_main_content_cards_justify_content: "flex-start", // Example height for main content card
      pd_main_content_cards_align_items: "flex-start", // Example height for main content card
      pd_main_content_card_title__text_align: "left", // Example text alignment for main content card title
      pd_main_content_card_width: "400px",
      pd_main_content_card_align_items: "flex-start",
      pd_main_content_card_gap: "24px",
      pd_main_content_card_border_color: "transparent",
      pd_main_content_card_background: "transparent", // Example height for main content card

      // pd_card_image_height: "auto", // Example height for card image
    },
    active: true,
  },
  
];

export default function MainComponent(): ReactNode {



  return (
    <section>
      {component_all_data &&
        component_all_data.length > 0 &&
        component_all_data.map((component_data) => (
          <div
            className="pd_container"
            key={component_data.id}
            style={
              component_data.background_type === "color" &&
              component_data.background_color
                ? { background: component_data.background_color }
                : { background: "transparent" }
            }
          >
            <style
              dangerouslySetInnerHTML={{
                __html: `
          .pd_main_content_card.${component_data.component_css?.title} {
            display: flex;
            border-radius: 20px;
            flex-direction: column;
            background: ${
              component_data.component_css?.pd_main_content_card_background ||
              "#fff"
            };
            border: 1px solid ${
              component_data.component_css?.pd_main_content_card_border_color ||
              "transparent"
            };
            box-shadow: ${
              component_data.component_css?.pd_main_content_card_box_shadow ||
              "none"
            };
            // flex: 1;
          }

          .small_card_hover_effect:hover {
            border: 1px solid #C2CBFF;
            box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.08);
            cursor: pointer;
            transition: all 0.3s ease-in;
          }
          `,
              }}
            />

            {component_data.background_type === "image" &&
              component_data.background_image &&
              component_data.background_image.active && (
                <img
                  src={component_data.background_image.src}
                  alt={
                    component_data.background_image.altTitle ||
                    component_data.title
                  }
                />
              )}

            <div
              className="pd_main_contents"
              style={{
                flexDirection:
                  component_data.component_css
                    ?.pd_main_contents__flex_direction || "column",
              }}
            >
              <div
                className="pd_main_content_title"
                style={{
                  flexDirection:
                    component_data.component_css
                      ?.pd_main_content_title__flex_direction || "column",
                  justifyContent:
                    component_data.component_css
                      ?.pd_main_content_title__justify_content ||
                    "space-between",
                  alignItems:
                    component_data.component_css
                      ?.pd_main_content_title__align_items || "center",
                }}
              >
                {component_data.title && (
                  <div
                    className="pd_content_title"
                    style={{
                      alignItems:
                        component_data.component_css
                          ?.pd_content_title__align_items || "flex-start",
                      width:
                        component_data.component_css?.pd_content_title__width ||
                        "100%",
                      textAlign:
                        component_data.component_css
                          ?.pd_content_title__text_align || "center",
                      maxWidth:
                        component_data.component_css
                          ?.pd_content_title__maxwidth || "896px",
                    }}
                  >
                    {component_data.tagline && (
                      <div
                        className="pd_content_tagline"
                        style={{
                          background:
                            component_data.component_css
                              ?.pd_content_tagline__background || "transparent",
                        }}
                      >
                        <i>{component_data.tagline?.icon?.icon}</i>
                        <span>{component_data.tagline?.title}</span>
                      </div>
                    )}
                    {component_data.title && (
                      <div
                        className="pd_content_heading"
                        style={{
                          textAlign:
                            component_data.component_css
                              ?.pd_content_title__text_align || "center",
                        }}
                      >
                        <h2
                          style={{
                            fontSize:
                              component_data.component_css
                                ?.pd_content_title__font_size || "48px",
                          }}
                        >
                          {component_data.title}
                        </h2>
                      </div>
                    )}
                    {component_data.short_description && (
                      <div
                        className="pd_content_short_des"
                        style={{
                          textAlign:
                            component_data.component_css
                              ?.pd_content_title__text_align || "center",
                        }}
                      >
                        <p>{component_data.short_description}</p>
                      </div>
                    )}
                  </div>
                )}
                {component_data.button &&
                  component_data.button.map((button) => (
                    <div key={button.id}>
                      <button
                        key={button.id}
                        className={`pd_button ${button.background}`}
                      >
                        {button.title} {button.icon && (<div>{button.icon}</div>)}
                      </button>
                    </div>
                  ))}
              </div>

              {component_data.cards && component_data.cards.length > 0 && (
                <div
                  className="pd_main_content_cards"
                  style={{
                    justifyContent:
                      component_data.component_css
                        ?.pd_main_content_cards_justify_content || "center",
                    alignItems: 
                      component_data.component_css
                        ?.pd_main_content_cards_align_items || "flex-start",
                  }}
                >
                  {component_data.cards.map((card) => (
                    <div
                      key={card.id}
                      className={`pd_main_content_card ${
                        component_data.component_css?.title
                      } ${
                        component_data.component_css
                          ?.pd_main_content_card_hover_effect
                      } ${card.active ? "active" : ""}`}
                      style={{
                        maxWidth:
                          component_data.component_css
                            ?.pd_main_content_card_width || "100%",
                        alignItems:
                          component_data.component_css
                            ?.pd_main_content_card_align_items || "flex-start",
                        gap:
                          component_data.component_css
                            ?.pd_main_content_card_gap || "0",
                        padding:
                          component_data.component_css
                            ?.pd_main_content_card_padding || "0",
                      }}
                    >
                      <div
                        className="pd_card_image"
                        style={{
                          height:
                            component_data.component_css
                              ?.pd_card_image_height || "auto",
                          justifyContent:
                            component_data.component_css
                              ?.pd_card_image__justify_content || "center",
                          alignItems:
                            component_data.component_css
                              ?.pd_card_image__align_items || "center",
                          position: "relative",
                        }}
                      >
                        {card.icon &&
                          card.icon.map(
                            (c) =>
                              c.icon_type === "product" && (
                                <div key={c.id} className="pd_card_icon">
                                  {c.icon}
                                </div>
                              )
                          )}
                        {card.image && (
                          <img
                            src={card.image}
                            alt={card.title || "image"}
                            loading="lazy"
                            decoding="async"
                          />
                        )}


                        {card.tagline && (
                          <div className="pd_content_tagline" style={{position: "absolute", top: "0", right: "0"}}>
                            <i>{card.tagline.icon?.icon}</i>
                            <span>{card.tagline.title}</span>
                          </div>
                        )}
                        {card.icon && (<div style={{position: "absolute", top: "0", right: "0", display: "flex", gap: "4px"}}>

                          {card.icon.map(
                            (c) =>
                              c.icon_type === "platform" && (
                                <div key={c.id} className="pd_card_icon">
                                  {c.icon}
                                </div>
                              )
                          )}
                          
                          </div>)}
                      </div>

                      {card.CardRating && (
                        <div className="pd_card_rating">
                          <div className="pd_rating" style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "4px"}}>
                            {card.CardRating.icon.map((i) => (
                              <div key={i.id}>{i.icon}</div>
                            ))}
                          </div>
                          <div className="pd_location" style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "4px"}}>
                            <div className="icon">
                              {card.CardRating.country_icon}
                            </div>
                            <div className="text">
                              <span>{card.CardRating.country}</span>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="pd_card_title">
                        <h3
                          style={{
                            textAlign:
                              component_data.component_css
                                ?.pd_main_content_card_title__text_align ||
                              "left",
                          }}
                        >
                          {card.title}
                        </h3>
                        {card.short_description && (
                          <p
                            style={{
                              textAlign:
                                component_data.component_css
                                  ?.pd_main_content_card_title__text_align ||
                                "left",
                            }}
                          >
                            {card.short_description}
                          </p>
                        )}
                      </div>

                      {card.product_feature && (
                        <div className="pd_our_products_Card_purpose_list">
                          <div className="feature_title">
                          <h4>{card.product_feature.title}</h4>
                          </div>
                          <div>
                            <ul className="feature_items">
                              {card.product_feature.features?.map((feature) => (
                                <li key={feature.id}>
                                  {feature.title}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}


                      {card.buttons && (
                        <div className="pd_our_products_Card_buttons pd_buttons">
                          {card.buttons.map((button) => (
                            <button
                              key={button.id}
                              className={`pd_button ${button.background}`}
                            >
                              {button.title}{" "}
                              {button.icon && (
                                <ShareIcon color={button.background} />
                              )}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              <div className="blogs_resources"></div>
            </div>
          </div>
        ))}
    </section>
  );
}
