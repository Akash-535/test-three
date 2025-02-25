"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { NAVBAR_LIST } from "@/utils/helper";
import { DropDownIcon } from "@/utils/Icons";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Number | null>(4);
  const activeHandler = (index: number) => {
    setActive(active === index ? null : index);
  };
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);
  return (
    <div
      className={`px-4 pt-4 max-sm:py-3 shadow-header-shadow overflow-hidden`}
    >
      <div
        className={`max-w-[1220px] mx-auto flex justify-between items-center w-full py-4 bg-white bg-opacity-10 rounded-full pr-10 pl-[88px] border border-white border-opacity-15 max-lg:pl-12 backdrop-filter lg:backdrop-blur-[24px] ${
          !open && "max-lg:backdrop-blur-[24px]"
        }`}
      >
        <Link href="#">
          <Image
            width={150.2}
            height={44.06}
            src="/assets/images/logo-icon.webp"
            className="max-lg:w-28 max-sm:w-20 object-cover"
            alt="logo image"
          />
        </Link>
        <div
          className={`flex gap-6 max-lg:fixed max-lg:top-0 max-lg:flex-col max-lg:justify-center max-lg:w-full z-10 max-lg:items-center max-lg:h-full duration-300 ease-linear ${
            open ? "max-lg:right-0 max-lg:bg-black" : "max-lg:-right-full"
          }`}
        >
          {NAVBAR_LIST.map((obj, i) => (
            <div key={i} className=" cursor-pointer">
              <Link
                href={obj.link}
                onMouseEnter={() => obj.dropDown && setDropdownOpen(true)}
                onMouseLeave={() => obj.dropDown && setDropdownOpen(false)}
                onClick={() => {
                  {
                    setOpen(!open);
                  }
                  activeHandler(i);
                }}
                className={`cursor-pointer text-base leading-[19.36px] duration-300 ease-linear opacity-70 font-normal flex items-center ${
                  active === i
                    ? "text-custom-skyblue opacity-100"
                    : "text-white"
                }`}
              >
                {obj.title}
                {obj.dropDown && (
                  <span className="ml-1">
                    <DropDownIcon />
                  </span>
                )}
              </Link>
              {obj.dropDown && dropdownOpen && (
                <div
                  className="absolute bg-white shadow-lg rounded"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  {obj.dropDown.map((val, idx) => (
                    <Link
                      key={idx}
                      href={val.link}
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      {val.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="flex flex-col gap-6 items-center">
            <CustomButton
              text="Sign Up"
              myClass="lg:hidden shadow-none text-custom-skyblue py-4 px-7 rounded-full hover:bg-custom-skyblue hover:text-black"
            />
            <CustomButton
              text="Login"
              myClass="lg:hidden bg-custom-skyblue py-4 px-9 rounded-full hover:text-custom-skyblue hover:bg-transparent"
            />
          </div>
        </div>

        <div className="flex gap-6 items-center">
          <CustomButton
            text="Sign Up"
            myClass="max-lg:hidden shadow-none text-custom-skyblue py-4 px-4 rounded-full hover:bg-custom-skyblue hover:text-black"
          />
          <CustomButton
            text="Login"
            myClass="max-lg:hidden bg-custom-skyblue py-4 px-[24.145px] rounded-full hover:text-custom-skyblue hover:bg-transparent"
          />
        </div>

        {/* Toggle button */}
        <div
          onClick={() => setOpen(!open)}
          className="z-[15] flex-col gap-1 lg:hidden flex cursor-pointer"
        >
          <span
            className={`w-8 h-1 bg-white duration-300 ease-linear rounded ${
              open && "rotate-45 translate-y-3"
            }`}
          ></span>
          <span
            className={`w-8 h-1 bg-white duration-300 ease-linear rounded ${
              open && "-translate-x-10 opacity-0 duration-700"
            }`}
          ></span>
          <span
            className={`w-8 h-1 bg-white duration-300 ease-linear rounded ${
              open && "-rotate-45 -translate-y-1"
            }`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
