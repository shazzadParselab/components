'use client'
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUpRight } from "../icons/icons_libary";

export default function NavbarComponent() {
  return (
    <header className="flex w-full border-b border-[#E4E4E4] px-4 py-3.5 justify-center items-center h-[76px] fixed top-0 z-50 backdrop-blur-sm bg-[rgba(255,255,255,0.50)]">
      <nav className="max-w-[1620px] w-full flex flex-row justify-between items-center gap-3">
        {/*-------Home icon------*/}
        <Link href={"/"} className="flex items-center">
          <Image
            width={156}
            height={39}
            src={"/icon.svg"}
            alt={""}
            className="max-w-[156px] max-h-[39px] aspect-4/1"
          />
        </Link>

        {/*-------Navbar Links------*/}
        <div className="hidden lg:flex flex-row flex-wrap items-center justify-center gap-3 rounded-xl">
          <Link href={"/"} className="flex text-base font-medium text-[#5F57FF] py-2 flex-row items-center justify-center whitespace-nowrap gap-0.5 rounded-md cursor-pointer">
            Home
          </Link>
          <Link href={"/"} className="flex text-base font-normal hover:text-[#5F57FF] py-2 flex-row items-center justify-center whitespace-nowrap gap-0.5 rounded-md cursor-pointer">
            Our Solutions
            <ChevronDown />
          </Link>
          <Link href={"/"} className="flex text-base font-normal hover:text-[#5F57FF] py-2 flex-row items-center justify-center whitespace-nowrap gap-0.5 rounded-md cursor-pointer">
            Apps
          </Link>
          <Link href={"/"} className="flex text-base font-normal hover:text-[#5F57FF] py-2 flex-row items-center justify-center whitespace-nowrap gap-0.5 rounded-md cursor-pointer">
            Success Stories
          </Link>
          <Link href={"/"} className="flex text-base font-normal hover:text-[#5F57FF] py-2 flex-row items-center justify-center whitespace-nowrap gap-0.5 rounded-md cursor-pointer">
            Resources
            <ChevronDown />
          </Link>
        </div>

        <div className="hidden lg:flex flex-row items-center justify-center gap-3">
          <button className="btn btn-secondary">Explore Apps</button>
          <button className="btn btn-primary">
            Free Consultation <ChevronUpRight color="primary" />
          </button>
        </div>

        <button className="flex lg:hidden p-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="#101011" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
