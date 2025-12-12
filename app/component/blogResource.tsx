'use client'
import Image from "next/image";
import { ChevronUpRight, TaglineIcon } from "./icons_libary";

const blog_and_resource_datas = {
  id: 1,
  button: [
    {
      id: 1,
      title: "View All Resources",
      icon: <ChevronUpRight color={"primary"} />,
      background: "primary",
    },
  ],
  blogs: [
    {
      id: 1,
      image: "/blog/1.png",
      title: "How Custom Products Drive E-Commerce Success",
    },
    {
      id: 2,
      image: "/blog/2.png",
      title: "How to Set Up a Product Personalization Business from Scratch",
    },
    {
      id: 3,
      image: "/blog/3.png",
      title: "Why Consumers Crave Customized Products",
    },
  ],
  resources: [
    {
      id: 1,
      title: "How to Launch a Personalized Product Store in 30 Days",
      short_des:
        "From setting up your website and choosing the right platform to marketing strategies.",
      button: [
        {
          id: 1,
          title: "Watch Now",
          icon: <ChevronUpRight color={"primary"} />,
          background: "primary",
        },
      ],
      image: "/blog/r-1.png",
    },
    {
      id: 2,
      title: "Top 15 e commerce User Experience Design Tips",
      short_des:
        "We’re sharing 15 expert tips on how to design a seamless, intuitive shopping experience.",
      button: [
        {
          id: 1,
          title: "Read Online",
          background: "secondary",
        },
        {
          id: 2,
          title: "Download",
          background: "primary",
        },
      ],
      image: "/blog/r-2.png",
    },
  ],
  active: true,
};

export default function BlogAndResourceComponent() {
  return (
    <section className="flex w-full px-5 py-12 sm:py-20">
      <div className="max-w-[1620] w-full mx-auto flex flex-col gap-12 overflow-hidden">
        {/* ----- title ------ */}
        <div className="w-full flex flex-row flex-wrap items-end justify-between gap-4">
          <div className="flex flex-col gap-4 items-start max-w-[592px] w-full">
            {/* ----- Tagline ----- */}
            <div className="tagline text-[#432AD8]">
              <TaglineIcon />Blog & Resources
            </div>
            <h2 className="text-3xl lg:text-5xl font-medium">Blog & Resource Center</h2>
            <p className="text-[#616170] text-lg font-normal">Provide articles and posts about the latest trends in customization, business tips, case studies, and industry news.</p>
          </div>

          {blog_and_resource_datas.button &&
            blog_and_resource_datas.button.map((button) => (
              <button key={button.id} className={`btn btn-${button.background}`}>
                {button.title}
                {button.icon}
              </button>
            ))}
        </div>

        {/* ----- Blog ------ */}
        <div className="flex w-full flex-wrap justify-center gap-6">
          {blog_and_resource_datas.blogs.map((blog) => (
            <div key={blog.id} className="flex flex-col items-start max-w-[524px] w-full">
              <Image src={blog.image} alt={blog.title} loading="lazy" width={524} height={296} className="w-full max-w-[524px] max-h-[296px] aspect-[1.7] object-contain" />
              <div className="flex flex-col items-start gap-3">
                <span className="text-[#5F57FF] text-base font-medium">E-commerce, Shopify</span>
                <span className="text-xl font-medium">{blog.title}</span>
                <span className="text-[#4D5761] text-sm font-normal flex flex-row items-center gap-3">
                  <div className="flex flex-row items-center gap-1">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path d="M11.084 0.75V2.08333M3.08398 0.75V2.08333" stroke="#4D5761" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M0.75 7.57915C0.75 4.67428 0.75 3.22185 1.58475 2.31942C2.41949 1.41699 3.76299 1.41699 6.45 1.41699H7.71667C10.4037 1.41699 11.7472 1.41699 12.5819 2.31942C13.4167 3.22185 13.4167 4.67428 13.4167 7.57915V7.9215C13.4167 10.8264 13.4167 12.2788 12.5819 13.1812C11.7472 14.0837 10.4037 14.0837 7.71667 14.0837H6.45C3.76299 14.0837 2.41949 14.0837 1.58475 13.1812C0.75 12.2788 0.75 10.8264 0.75 7.9215V7.57915Z" stroke="#4D5761" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M1.08398 4.75H13.084" stroke="#4D5761" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    November 01, 2025
                  </div>
                  <div className="flex flex-row items-center gap-1">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <circle cx="7.41667" cy="7.41667" r="6.66667" stroke="#4D5761" strokeWidth="1.5" />
                      <path d="M5.75 5.75L8.08325 8.08309M10.0833 4.75L6.75 8.08333" stroke="#4D5761" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    7 min read
                  </div>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ----- Resource ------ */}

        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6">
          {blog_and_resource_datas.resources.map((resource) => (
            <div key={resource.id} className="flex flex-col-reverse md:flex-nowrap rounded-3xl bg-[#F2EFFF] max-w-[790px] min-h-[360px] md:flex-row items-center md:w-full overflow-hidden">
              
              <div className="w-full p-6 flex justify-center items-center">
                <div className="w-full flex flex-col items-start md:gap-14 gap-4 max-w-[292px]">
                  <div className="flex flex-col gap-2 text-start">
                    <span className="text-[#201F23] text-xl font-semibold">{resource.title}</span>
                    <p className="text-[#36364A] text-sm font-normal">{resource.short_des}</p>
                  </div>
                  <div className="flex flex-row items-center justify-center gap-2">
                    {resource.button?.map((button) => (
                      <button key={button.id} className={`btn btn-${button.background}`}>
                        {button.title}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-full flex items-start justify-start object-cover max-w-[360px]">
                <Image src={resource.image} alt={resource.title} loading="lazy" width={360} height={360} className="aspect-square object-contain" />
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
