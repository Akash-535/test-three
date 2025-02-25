import { NextArrowIcon } from "@/utils/Icons";
import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";

interface cardData {
  image?: any;
  title?: string;
  date?: string;
  buttonOne?: string;
  buttonTwo?: string;
  description?: string;
  authorImg: string;
  authorName: string;
}

const CommonCard = ({
  image,
  date,
  title,
  description,
  buttonOne,
  buttonTwo,
  authorImg,
  authorName,
}: cardData) => {
  return (
    <div className="relative max-w-[364px] mx-auto border border-custom-skyblue rounded-[10px] bg-white bg-opacity-[0.03] pb-10 overflow-hidden duration-300 ease-linear hover:shadow-[0px_5px_10px_0px_#71CED0]">
      <div className="max-w-[364px] overflow-hidden h-[237px]">
        <Image
          width={364}
          height={237}
          className="max-w-[364px] object-cover hover:scale-110 duration-300 ease-linear"
          src={image}
          alt="article image"
        />
      </div>
      <p className="absolute top-5 right-8 text-white text-base font-semibold leading-6">
        {date}
      </p>
      <div className="px-5">
        <div className="w-full gap-6 flex items-center justify-center -mt-6 relative z-10">
          <CustomButton
            text={buttonOne}
            myClass="py-[7px] px-[34.875px] bg-custom-black text-white shadow-none hover:text-custom-black hover:bg-white rounded-full text-sm leading-[21px] min-w-[154px]"
          />
          <CustomButton
            text={buttonTwo}
            myClass="py-[7px] px-[34.875px] bg-custom-light-gray text-white shadow-none rounded-full text-sm leading-[21px] border-white min-w-[154px] hover:bg-white hover:text-custom-light-gray"
          />
        </div>
        <h2 className="text-white pt-6 pb-2.5 text-xl font-semibold leading-[24.4px]">
          {title}
        </h2>
        <p className="text-white opacity-70 max-w-[323px] pb-6 text-base leading-6">
          {description}
        </p>
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <Image
              width={50}
              height={50}
              className="max-w-[50px] object-cover"
              src={authorImg}
              alt="author image"
            />
            <p className="text-white text-base font-semibold">{authorName}</p>
          </div>
          <NextArrowIcon />
        </div>
      </div>
    </div>
  );
};

export default CommonCard;
