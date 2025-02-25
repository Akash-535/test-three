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
    <div className="bg-[url('/assets/images/footer-bg.webp')] bg-cover bg-no-repeat pt-[60px] max-sm:pt-12 relative">
      <Image
        width={375}
        height={375}
        className="absolute top-0 right-0 object-cover pointer-events-none"
        src="/assets/images/footer-layer.webp"
        alt="shadow"
      />
      <Image
        width={91}
        height={202}
        className="absolute top-10 right-20 pointer-events-none max-lg:right-10"
        src="/assets/images/footer-side-image.webp"
        alt="side vector"
      />
      <div className="container max-w-[1140px] mx-auto flex flex-col px-5 pb-20 max-lg:pb-16 max-md:pb-12 max-sm:pb-8 relative z-10">
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
        <div className="flex justify-center gap-y-[30px] max-md:gap-y-4 max-sm:gap-y-2 flex-col">
          {FOOTER_LIST.map((obj, i) => (
            <div key={i} className="flex flex-col gap-y-2.5">
              <p className="text-white leading-[150%] font-semibold">
                {obj.title}
              </p>
              <p className="text-white opacity-80 font-normal text-base leading-6 max-md:text-sm">
                {obj.description}
              </p>
              <p className="text-white opacity-80 font-normal text-base leading-6 max-md:text-sm">
                {obj.descriptionTwo}
              </p>
            </div>
          ))}
        </div>
        <div className="flex pt-12 items-center gap-6 flex-wrap max-lg:pt-8 max-md:pt-6">
          {MEDIA_ICON_LIST.map((obj, i) => (
            <Link
              key={i}
              href={obj.link}
              target="_blank"
              className="hover:scale-105 duration-300 ease-linear media-icon"
            >
              {obj.icon}
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-white w-full h-[1px] bg-opacity-20"></div>
      <p className="text-white text-center py-4 opacity-80 leading-6 text-base font-normal max-md:text-sm">
        Copyright © {new Date().getFullYear()} ArrowTrade. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
