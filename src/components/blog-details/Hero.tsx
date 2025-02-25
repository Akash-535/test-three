"use client";
import React from "react";
import Navbar from "../common/Navbar";
import Image from "next/image";
import { ARTICLES_CARD_LIST } from "@/utils/helper";
import { useParams } from "next/navigation";
import Footer from "../common/Footer";
import TopBar from "../common/TopBar";
import MarketInsights from "./MarketInsights";
import LatestArtical from "../blog/LatestArtical";
import CustomButton from "../common/CustomButton";
import NProgress from "nprogress";

const Hero = () => {
  const { slug } = useParams();
  NProgress.start();
  setTimeout(() => {
    NProgress.done();
  }, 400);
  const blogArray = ARTICLES_CARD_LIST.filter(
    (obj) =>
      obj && obj.title && obj.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  const newBlogs: any = blogArray.length ? blogArray[0] : null;

  return (
    <div>
      <TopBar />
      <Navbar />
      {newBlogs ? (
        <div className="max-w-[1440px] mx-auto relative">
          <div className="container mt-[91px] max-w-[1140px] mx-auto pb-[277px]">
            <div className="max-w-[481px]">
              <h2 className="text-[64.09px] font-normal max-w-[718px] text-white max-lg:text-6xl max-md:text-5xl max-sm:text-4xl leading-[121%]">
                {newBlogs.title}
                <span className="text-cyan hidden font-semibold max-sm:block">
                  Market Insights
                </span>
              </h2>

              <div className="gap-4 items-center flex pt-[30px]">
                <CustomButton
                  text="Productivity"
                  myClass="py-[7px] px-[34.875px] bg-custom-black text-white shadow-none hover:text-custom-black hover:bg-white rounded-full text-sm leading-[21px] min-w-[154px]"
                />
                <CustomButton
                  text={newBlogs.timeReamining}
                  myClass="py-[7px] px-[34.875px] bg-custom-light-gray text-white shadow-none rounded-full text-sm leading-[21px] border-white min-w-[154px] hover:bg-white hover:text-custom-light-gray"
                />
                <p className="leading-[150%] font-semibold max-md:text-sm text-white">
                  {newBlogs.date}
                </p>
              </div>
            </div>
            <Image
              width={720}
              height={570}
              src={newBlogs.image}
              alt="blogs image"
              className="absolute h-[570px] object-cover right-0 -top-44 -z-[1]"
            />
          </div>
          <MarketInsights />
          <LatestArtical headingText="Related" spanText="Articles" />
          <Footer />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <h1 className="text-9xl font-bold text-white">404</h1>
          <h2 className="text-4xl font-semibold text-white mt-4">
            Page Not Found
          </h2>
          <p className="text-lg text-white mt-2">
            Sorry, the page you are looking for does not exist.
          </p>
          <a
            href="/"
            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Go Home
          </a>
        </div>
      )}
    </div>
  );
};

export default Hero;
