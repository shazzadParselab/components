/*
--> need review full page size, color, padding,everything
*/

import { ReactElement } from "react";
import { ChevronUpRight, TaglineIcon } from "./icons/icons_libary";

type buttonType = "primary" | "secondary";

interface Button {
  id: number;
  background: buttonType;
  title: string;
  icon?: React.ReactElement;
}
interface Tagline {
  id: number;
  title: string;
  icon?: ReactElement;
}

interface BlogType {
  id: number;
  image: string;
  title: string;
}

interface ResourcesType {
  id: number;
  title: string;
  short_des: string;
  button: Button[];
  image: string;
}

interface BlogResourceType {
  id: number;
  tagline: Tagline;
  title: string;
  short_description: string;
  button?: Button[];
  blogs: BlogType[];
  resources: ResourcesType[];
  active: boolean;
}

const blog_and_resource_datas: BlogResourceType = {
  id: 1,
  tagline: { id: 1, title: "Blog & Resources", icon: <TaglineIcon /> },
  title: "Blog & Resource Center",
  short_description:
    "Provide articles and posts about the latest trends in customization, business tips, case studies, and industry news.",
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
      image: "/static/blog_and_resource/logo1.svg",
      title: "How Custom Products Drive E-Commerce Success",
    },
    {
      id: 2,
      image: "/static/blog_and_resource/logo2.svg",
      title: "How to Set Up a Product Personalization Business from Scratch",
    },
    {
      id: 3,
      image: "/static/blog_and_resource/logo3.svg",
      title: "Why Consumers Crave Customized Products",
    },
    {
      id: 4,
      image: "/static/blog_and_resource/logo4.svg",
      title: "Building Customer Loyalty with Personalized Products",
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
      image: "/static/blog_and_resource/img1.svg",
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
      image: "/static/blog_and_resource/img1.svg",
    },
  ],
  active: true,
};

export default function BlogAndResource() {
  return (
    <section id="our_resource" className="pd_blog_resource_container pd_container">
      {blog_and_resource_datas && (
        <div className="pd_blog_resources">
          {/* ----- title ------ */}
          <div className="pd_blog_resource_title">
            <div className="pd_blog_resource_heading">
              {/* ----- Tagline ----- */}
              <div className="pd_hero_section_content_tagline">
                <div className="icon_box">
                  {blog_and_resource_datas.tagline.icon}
                </div>
                <span className="content_tagline">
                  {blog_and_resource_datas.tagline.title}
                </span>
              </div>

              <h2>{blog_and_resource_datas.title}</h2>
              <p>{blog_and_resource_datas.short_description}</p>
            </div>
            {blog_and_resource_datas.button &&
              blog_and_resource_datas.button.map((button) => (
                <button key={button.id} className={`pd_button ${button.background}`}>
                  {button.title}
                  {button.icon}
                </button>
              ))}
          </div>

          {/* ----- Blog ------ */}
          {blog_and_resource_datas.blogs && (
            <div className="pd_blogs">
              {blog_and_resource_datas.blogs.map((blog) => (
                <div key={blog.id} className="pd_blog">
                  <div className="pd_blog_image">
                    <img src={blog.image} alt={blog.title} loading="lazy"/>
                  </div>
                  <div className="pd_blog_title">
                    <h3>{blog.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ----- Resource ------ */}

          {blog_and_resource_datas.resources && (
            <div className="pd_resources">
              {blog_and_resource_datas.resources.map((resource) => (
                <div key={resource.id} className="pd_resource">
                  <div className="pd_resource_title">
                    <div className="pd_resource_heading">
                      <h3>{resource.title}</h3>
                      <span>{resource.short_des}</span>
                    </div>
                    <div className="pd_buttons">
                    {resource.button?.map((button) => (
                      <button key={button.id} className={`pd_button ${button.background}`}>
                        {button.title}
                        {button.icon}
                      </button>
                    ))}
                    </div>
                  </div>
                  <div className="pd_resource_img">
                    <img src={resource.image} alt={resource.title} loading="lazy"/>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
