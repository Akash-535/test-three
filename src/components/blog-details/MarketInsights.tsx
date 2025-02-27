import {
  ARTICLES_CARD_LIST,
  CHANGING_GAME_LIST,
  MARKET_INSIGHTS_LIST,
} from "@/utils/helper";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const MarketInsights = () => {
  const { slug } = useParams();
  const blogArray = ARTICLES_CARD_LIST.filter(
    (obj) =>
      obj &&
      obj.title &&
      obj.title.toLowerCase().replace(/\s+/g, "-").replace("&", "%26") === slug
  );

  const newBlogs: any = blogArray.length ? blogArray[0] : null;
  return (
    <div className="pb-[190px] relative max-xl:pb-40 max-lg:pb-32 max-md:pb-24 max-sm:pb-16 max-w-[1140px] mx-auto">
      <div className="flex relative max-w-[1140px] mx-auto w-full justify-center gap-28">
        <div>
          <h2 className="text-white leading-[58px] text-5xl font-normal max-w-[450px] max-lg:text-3xl max-md:text-2xl max-lg:text-center max-lg:mx-auto">
            What are AI-Driven{" "}
            <span className="text-custom-skyblue font-semibold">
              Market Insights?
            </span>
          </h2>
          <p className="text-white opacity-70 leading-6 text-base max-w-[655px] max-lg:mx-auto max-lg:text-center max-md:text-sm">
            AI-driven market insights harness the power of artificial
            intelligence to analyze vast amounts of market data in real time,
            providing actionable information that can help traders and investors
            make informed decisions.
          </p>
          {MARKET_INSIGHTS_LIST.map((obj, i) => (
            <div
              key={i}
              className={`${i === 0 ? "pt-[30px] max-md:pt-4" : "pt-5"}`}
            >
              <h4 className="text-white text-xl leading-6 pb-4 max-md:text-lg max-md:text-center max-md:pb-2">
                {obj.title}
              </h4>
              <p className="text-white opacity-70 leading-6 text-base max-w-[655px] max-lg:mx-auto max-lg:text-center max-md:text-sm">
                {obj.description}
              </p>
            </div>
          ))}
          <Image
            width={635}
            height={550}
            className="max-w-[635px] object-cover pt-[50px] max-lg:pt-8 max-md:pt-5 max-xl:max-w-[590px] max-xl:w-full max-lg:max-w-[540px] max-md:max-w-[470px]"
            src="/assets/images/market-insights-img.webp"
            alt="maket image"
          />
          <div className="pt-[190px] max-xl:pt-32 max-lg:pt-24 max-md:pt-16">
            <h2 className="text-white leading-[58px] text-5xl font-normal max-w-[655px] max-lg:text-3xl max-md:text-2xl max-lg:text-center max-lg:mx-auto">
              How AI-Driven Market insights are{" "}
              <span className="text-custom-skyblue font-semibold">
                changing the Game
              </span>
            </h2>
            {CHANGING_GAME_LIST.map((obj, i) => (
              <div
                key={i}
                className={`${
                  i === 0 ? "pt-[30px] max-md:pt-4" : "pt-5 max-md:pt-3"
                }`}
              >
                <h4 className="text-white text-xl leading-6 pb-4 max-md:text-lg max-md:text-center max-md:pb-2">
                  {obj.title}
                </h4>
                <p className="text-white opacity-70 leading-6 text-base max-w-[655px] max-md:text-sm max-lg:text-center max-lg:mx-auto">
                  {obj.description}
                </p>
              </div>
            ))}
            <Image
              width={635}
              height={550}
              className="max-w-[635px] object-cover pt-[50px] max-lg:pt-8 max-md:pt-5 max-xl:max-w-[590px] max-xl:w-full max-lg:max-w-[540px] max-md:max-w-[470px]"
              src="/assets/images/changing-game-img.webp"
              alt="market image"
            />
          </div>
        </div>
        <div className="max-lg:hidden sticky top-6 right-0 bg-[url('/assets/images/footer-bg.webp')] bg-cover bg-no-repeat bg-center py-[30px] max-w-[364px] border-2 border-custom-skyblue rounded-3xl max-h-[550px] duration-300 ease-linear hover:shadow-[0px_5px_10px_0px_#71CED0]">
          <div className="flex gap-4 items-center px-5">
            <Image
              width={50}
              height={50}
              className="object-cover max-w-[50px] rounded-full min-h-[50px]"
              src={newBlogs.authorImg}
              alt="darell image"
            />
            <p className="text-white font-semibold">{newBlogs.authorName}</p>
          </div>
          <h4 className="text-white font-semibold leading-[19px] pt-6 px-5">
            What are AI-Driven Market Insights?
          </h4>
          <div className="text-white opacity-70 flex flex-col gap-4 pt-4 pb-5 px-5">
            <p>Real-Time Analytics</p>
            <p>News Updates</p>
            <p>Expert Market Research</p>
          </div>
          <div className="w-full h-0.5 bg-white bg-opacity-25"></div>
          <h4 className="text-white font-semibold leading-[19px] pt-6 px-5">
            How AI-Driven Market insights are changing the Game
          </h4>
          <div className="text-white opacity-70 flex flex-col gap-4 pt-4 px-5">
            <p>Faster Decision-Making</p>
            <p>Enhanced Accuracy and Predictive Power</p>
            <p>Customized Insights for Individual Strategies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketInsights;
