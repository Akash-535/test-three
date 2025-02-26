import React from "react";
import TopBar from "../common/TopBar";
import Navbar from "../common/Navbar";
import Image from "next/image";
import BlogCards from "./BlogCards";
import LatestArtical from "./LatestArtical";
import Footer from "../common/Footer";

const Articles = () => {
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
      <div className="px-4">
        <h1 className="text-[64px] text-white text-center max-w-[718px] mx-auto pt-[70px] pb-4 leading-[77.56px] max-lg:text-5xl max-md:text-3xl max-xl:pt-16 max-lg:pt-12 max-md:pt-8 max-sm:pt-5">
          Unlock Knowledge with Our{" "}
          <span className="text-custom-skyblue">Featured Articles</span>
        </h1>
        <p className="text-white opacity-70 leading-6 text-base font-normal max-w-[674px] mx-auto text-center max-md:text-sm">
          Explore our latest articles, insights, and expert advice on industry
          trends. Stay informed, gain new perspectives, and discover valuable
          tips to help you stay ahead.
        </p>
      </div>
      <BlogCards />
      <LatestArtical headingText="Latest" spanText="Articles" />
      <Footer />
    </div>
  );
};

export default Articles;
