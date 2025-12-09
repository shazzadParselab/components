

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ChevronUpRight } from "./icons/icons_libary";

export default function NavbarComponent() {
  return (
    <header className="flex w-full border-b border-[#E4E4E4] px-4 py-3.5 justify-center items-center h-[76px] fixed top-0 z-50 backdrop-blur-sm bg-[rgba(255,255,255,0.50)]">
      <nav className="max-w-[1620px] w-full flex flex-row justify-between items-center gap-4">
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
          <div className="flex flex-row items-center justify-center gap-3 rounded-xl">
                <Link href={"/"} className="flex hover:bg-[#F2EFFF] px-2 py-3.5 flex-row items-center justify-center whitespace-nowrap gap-2.5 rounded-md cursor-pointer">
                  <span className="text-[#201F23] text-base font-normal">Home</span>
                </Link>
                <Link href={"/"} className="flex hover:bg-[#F2EFFF] px-2 py-3.5 flex-row items-center justify-center whitespace-nowrap gap-2.5 rounded-md cursor-pointer">
                  <span className="text-[#201F23] text-base font-normal">Our Solutions</span>
                  <ChevronDown />
                </Link>
                <Link href={"/"} className="flex hover:bg-[#F2EFFF] px-2 py-3.5 flex-row items-center justify-center whitespace-nowrap gap-2.5 rounded-md cursor-pointer">
                  <span className="text-[#201F23] text-base font-normal">Apps</span>
                </Link>
                <Link href={"/"} className="flex hover:bg-[#F2EFFF] px-2 py-3.5 flex-row items-center justify-center whitespace-nowrap gap-2.5 rounded-md cursor-pointer">
                  <span className="text-[#201F23] text-base font-normal">Success Stories</span>
                </Link>
                <Link href={"/"} className="flex hover:bg-[#F2EFFF] px-2 py-3.5 flex-row items-center justify-center whitespace-nowrap gap-2.5 rounded-md cursor-pointer">
                  <span className="text-[#201F23] text-base font-normal">Resources</span>
                  <ChevronDown />
                </Link>
          </div>

        <div className="pd_buttons">
          <button className="pd_button secondary">Explore Apps</button>
          <button className="pd_button primary">
            Free Consultation <ChevronUpRight color="primary" />
          </button>
        </div>
      </nav>
    </header>
  );
}
