"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomButton from "../common/CustomButton";
import { NextArrowIcon, SwiperArrowIcon } from "@/utils/Icons";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation } from "swiper/modules";
import { ARTICLES_CARD_LIST } from "@/utils/helper";
interface headingData {
  headingText?: string;
  spanText?: string;
}
const LatestArtical = ({ headingText, spanText }: headingData) => {
  return (
    <div className="w-full relative pb-[180px] px-4 max-xl:pb-36 max-lg:pb-20 max-md:pb-12">
      <h2 className="text-5xl font-normal leading-[58px] text-center text-white pb-[70px] max-lg:text-3xl max-md:text-2xl max-xl:pb-16 max-lg:pb-11 max-md:pb-7">
        {headingText}{" "}
        <span className="text-custom-skyblue font-semibold">{spanText}</span>
      </h2>
      <div
        className="absolute top-1/2 -translate-y-1/2 right-10 bg-custom-skyblue border border-transparent hover:border-custom-skyblue hover:bg-transparent size-[60px] flex items-center justify-center cursor-pointer duration-300 ease-linear next-arrow
       rounded-full"
      >
        <SwiperArrowIcon />
      </div>
      <div
        className="absolute top-1/2 -translate-y-1/2 left-10 bg-custom-skyblue border border-transparent hover:border-custom-skyblue hover:bg-transparent size-[60px] flex items-center justify-center cursor-pointer duration-300 ease-linear rotate-180 prev-arrow
       rounded-full"
      >
        <SwiperArrowIcon />
      </div>
      <Swiper
        loop={true}
        modules={[Navigation]}
        navigation={{
          nextEl: ".next-arrow",
          prevEl: ".prev-arrow",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: true,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        className="flex gap-6 overflow-hidden w-full max-w-[1140px] mx-auto justify-center items-center mySwiper"
      >
        {ARTICLES_CARD_LIST.map((obj, i) => (
          <SwiperSlide
            key={i}
            className="relative w-4/12 max-w-[364px] mx-auto border border-custom-skyblue rounded-[10px] bg-white bg-opacity-[0.03] pb-10 overflow-hidden whitespace-nowrap"
          >
            <div className="max-w-[364px] overflow-hidden h-[237px]">
              <Image
                width={364}
                height={237}
                className="max-w-[364px] object-cover hover:scale-110 duration-300 ease-linear"
                src={obj.image}
                alt="article image"
              />
            </div>
            <p className="absolute top-5 right-8 text-white text-base font-semibold leading-6">
              {obj.date}
            </p>
            <div className="px-5">
              <div className="w-full gap-6 flex items-center justify-center -mt-6 relative z-10 max-md:gap-3 max-sm:gap-2">
                <CustomButton
                  text="Productivity"
                  myClass="py-[7px] px-[34.875px] bg-custom-black text-white shadow-none hover:text-custom-black hover:bg-white rounded-full text-sm leading-[21px] min-w-[154px] max-md:min-w-[140px]"
                />
                <CustomButton
                  text={obj.timeReamining}
                  myClass="py-[7px] px-[34.875px] bg-custom-light-gray text-white shadow-none rounded-full text-sm leading-[21px] border-white min-w-[154px] max-md:min-w-[140px] hover:bg-white hover:text-custom-light-gray"
                />
              </div>
              <h2 className="text-white pt-6 pb-2.5 text-xl font-semibold leading-[24.4px]">
                {obj.title}
              </h2>
              <p className="text-white opacity-70 max-w-[323px] pb-6 text-base leading-6">
                {obj.description}
              </p>
              <div className="w-full flex justify-between items-center">
                <div className="flex items-center gap-2.5">
                  <Image
                    width={50}
                    height={50}
                    className="max-w-[50px] object-cover"
                    src={obj.authorImg}
                    alt="author image"
                  />
                  <p className="text-white text-base font-semibold">
                    {obj.authorName}
                  </p>
                </div>
                <NextArrowIcon />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LatestArtical;
