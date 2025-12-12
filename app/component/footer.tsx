'use client'

import Link from "next/link";
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
} from "./icons_libary";
import Image from "next/image";

export default function FooterComponent() {
  return (
    <section className="flex w-full px-5 pt-12 sm:pt-20">
      <div className="max-w-[1620] w-full mx-auto flex flex-col items-center gap-12 md:gap-20">

        <div className="flex w-full flex-wrap flex-col md:flex-row gap-14 md:gap-5 justify-between">
          <div className="max-w-[387px] flex flex-col items-start gap-8">
            <div className="flex flex-col items-start gap-6">
              <Image
                src="/icon.svg"
                alt="no icon"
                width={152}
                height={44}
                className="max-w-[152px] max-h-11 object-contain"
              />
              <p className="text-[#36364A] font-normal text-lg">
                Products Designer is your all-in-one platform for launching and
                scaling personalized product businesses.
              </p>
            </div>
            <div className="flex flex-col items-start gap-1">
              <span className="text-[#777584] text-base font-normal">Email</span>
              <span className="text-[#201F23] text-xl font-medium">info@productsdesigner.com</span>
            </div>

            <div className="flex flex-row items-center gap-4">
              <FacebookIcon />
              <XIcon />
              <InstaIcon />
              <LinkdinIcon />
              <YoutubeIcon />
              <PintestIcon />
              <TikTokIcon />
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 max-w-[226px]">
            <span className="text-[#201F23] text-lg font-medium">Solutions</span>
            <ul className="flex flex-col items-start gap-4 max-w-[226px] text-[#777584] text-base font-normal">
              <li>DesignLab Customization</li>
              <li>Theme Customization</li>
              <li>Shopping Cart Integration</li>
              <li>Product Setup</li>
              <li>ClipArt Design & Management</li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-4 max-w-[226px]">
            <span className="text-[#201F23] text-lg font-medium">Resources</span>
            <ul className="flex flex-col items-start gap-4 max-w-[226px] text-[#777584] text-base font-normal">
              <li>Blog</li>
              <li>Webinars</li>
              <li>Industry Insights</li>
              <li>Integration</li>
              <li>Affiliate Program</li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-4 max-w-[290px] w-full">
            <span className="text-[#201F23] text-lg font-medium">Products</span>
            <ul className="flex flex-col items-start gap-4 max-w-[226px] text-[#777584] text-base font-normal">
              <li className="flex flex-row items-center gap-2 whitespace-nowrap"><InkybayIcon size={22} /> <strong>Inkybay -</strong> Product Personalizer</li>
              <li className="flex flex-row items-center gap-2 whitespace-nowrap"><JewelsLabIcon size={22} /><strong>JewelsLab -</strong>Jewelry Personalizer</li>
              <li className="flex flex-row items-center gap-2 whitespace-nowrap"><DecoraLive size={22} /><strong>Decoralive -</strong> Interior Designer</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 w-[290px]">
            <span className="text-xl font-medium">Newsletter Signup</span>

            <input name="newslatter" type="email" className="flex w-full py-3.5 px-2.5 border border-[#DAD7ED] rounded-md" placeholder="Enter Your Email Address" />

            <button className="btn btn-primary w-full">Subscribe Now <ChevronUpRight color={"primary"} /></button>
          </div>
        </div>

        <div className="w-full flex py-5 flex-row flex-wrap justify-start md:justify-between gap-5 border-t border-[rgba(181,182,189,0.50)] text-[#777584] text-lg font-normal">
          <p>© 2025 Products Designer. All rights reserved</p>
          <div className="text-">
            <Link href="/">Terms & Conditions</Link>.
            <Link href="/">Privacy Policy</Link>.
            <Link href="/">Cookies Policy</Link>
          </div>
        </div>

      </div>
    </section>
  );
}
