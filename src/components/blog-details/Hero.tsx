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
import nProgress from "nprogress";

const Hero = () => {
  const { slug } = useParams();
  nProgress.start();
  setTimeout(() => {
    nProgress.done();
  }, 400);
  const blogArray = ARTICLES_CARD_LIST.filter(
    (obj) =>
      obj &&
      obj.title &&
      obj.title.toLowerCase().replace(/\s+/g, "-").replace("&", "%26") === slug
  );

  const newBlogs: any = blogArray.length ? blogArray[0] : null;

  return (
    <div className="relative">
      <TopBar />
      <Navbar />
      <Image
        width={237.32}
        height={237.32}
        className="absolute left-0 top-16"
        src="/assets/images/hero-top-layer.webp"
        alt="hero layer"
      />
      <Image
        width={237.32}
        height={237.32}
        className="absolute left-0 top-1/3 rotate-180"
        src="/assets/images/skyblue-layer.webp"
        alt="hero layer"
      />
      {newBlogs ? (
        <div>
          <div className="max-w-[1440px] mx-auto relative px-5">
            <div className="container mt-[91px] max-xl:mt-16 max-lg:mt-8 max-md:mt-5 max-w-[1140px] mx-auto pb-[277px] max-xl:flex flex-col items-center justify-center gap-6 max-xl:pb-40 max-lg:pb-32 max-md:pb-20 max-sm:pb-20">
              <div className="max-w-[481px]">
                <h2 className="text-[64.09px] font-normal max-w-[718px] text-white max-lg:text-5xl max-md:text-3xl leading-[121%] max-xl:mx-auto max-xl:text-center">
                  {newBlogs.title}
                  <span className="text-cyan hidden font-semibold max-sm:block">
                    Market Insights
                  </span>
                </h2>
                <p className="text-white opacity-70 pt-4">
                  {newBlogs.description}
                </p>
                <div className="gap-4 items-center flex pt-[30px] flex-wrap-reverse justify-center">
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
                className="absolute max-w-[720px] h-[570px] object-cover right-0 -top-44 -z-[1] max-xl:static max-xl:max-w-[600px] max-xl:w-full max-xl:h-[480px] max-lg:max-w-[540px] max-lg:h-[440px] max-md:max-w-[480px] max-md:h-auto"
              />
            </div>
            <MarketInsights />
            <LatestArtical headingText="Related" spanText="Articles" />
          </div>
          <Footer />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-9xl font-bold text-red-400">404</h1>
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
