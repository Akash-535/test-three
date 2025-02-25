import {
  FOOTER_LINKS_LIST,
  FOOTER_LIST,
  MEDIA_ICON_LIST,
} from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[url('/assets/images/footer-bg.webp')] bg-cover bg-no-repeat pt-[60px] max-sm:pt-12">
      <div className="container max-w-[1140px] mx-auto flex flex-col px-5 pb-20">
        <Link href="/">
          <Image
            src="/assets/images/logo-icon.webp"
            width={152}
            height={44.06}
            alt="logo"
          />
        </Link>
        <div className="flex gap-6 items-center flex-wrap gap-y-2 p-2.5 max-md:my-4 max-sm:my-3 my-[30px]">
          {FOOTER_LINKS_LIST.map((obj, i) => (
            <Link
              key={i}
              className="leading-[150%] whitespace-nowrap max-md:text-sm font-semibold text-white hover:text-cyan transition-all duration-300 hover:scale-105"
              href={obj.link}
            >
              {obj.title}
            </Link>
          ))}
        </div>
        <div className="flex justify-center gap-y-[30px] max-md:gap-y-4 max-sm:gap-y-3 flex-col">
          {FOOTER_LIST.map((obj, i) => (
            <div key={i} className="flex flex-col gap-y-2.5">
              <p className="text-white leading-[150%] font-semibold max-md:text-sm">
                {obj.title}
              </p>
              <p className="text-white opacity-80 font-normal text-base leading-6">
                {obj.description}
              </p>
              <p className="text-white opacity-80 font-normal text-base leading-6">
                {obj.descriptionTwo}
              </p>
            </div>
          ))}
        </div>
        <div className="flex pt-12 items-center gap-6 flex-wrap">
          {MEDIA_ICON_LIST.map((obj, i) => (
            <Link
              key={i}
              href={obj.link}
              className="hover:scale-105 duration-300 ease-linear"
            >
              {obj.icon}
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-white w-full h-[1px] bg-opacity-20"></div>
      <p className="text-white text-center py-4 opacity-80 leading-6 text-base font-normal">
        Copyright © {new Date().getFullYear()} ArrowTrade. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
