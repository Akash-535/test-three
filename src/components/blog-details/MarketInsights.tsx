import { CHANGING_GAME_LIST, MARKET_INSIGHTS_LIST } from "@/utils/helper";
import Image from "next/image";
import React from "react";

const MarketInsights = () => {
  return (
    <div className="pb-[190px] relative">
      <div className="flex relative container mx-auto w-full justify-between">
        <div>
          <h2 className="text-white leading-[58px] text-5xl font-normal max-w-[450px]">
            What are AI-Driven{" "}
            <span className="text-custom-skyblue font-semibold">
              Market Insights?
            </span>
          </h2>
          <p className="text-white opacity-70 leading-6 text-base max-w-[655px]">
            AI-driven market insights harness the power of artificial
            intelligence to analyze vast amounts of market data in real time,
            providing actionable information that can help traders and investors
            make informed decisions.
          </p>
          {MARKET_INSIGHTS_LIST.map((obj, i) => (
            <div key={i} className={`${i === 0 ? "pt-[30px]" : "pt-5"}`}>
              <h4 className="text-white text-xl leading-6 pb-4">{obj.title}</h4>
              <p className="text-white opacity-70 leading-6 text-base max-w-[655px]">
                {obj.description}
              </p>
            </div>
          ))}
          <Image
            width={635}
            height={550}
            className="max-w-[635px] object-cover pt-[50px]"
            src="/assets/images/market-insights-img.webp"
            alt="maket image"
          />
          <div className="pt-[190px]">
            <h2 className="text-white leading-[58px] text-5xl font-normal max-w-[655px]">
              How AI-Driven Market insights are{" "}
              <span className="text-custom-skyblue font-semibold">
                changing the Game
              </span>
            </h2>
            {CHANGING_GAME_LIST.map((obj, i) => (
              <div key={i} className={`${i === 0 ? "pt-[30px]" : "pt-5"}`}>
                <h4 className="text-white text-xl leading-6 pb-4">
                  {obj.title}
                </h4>
                <p className="text-white opacity-70 leading-6 text-base max-w-[655px]">
                  {obj.description}
                </p>
              </div>
            ))}
            <Image
              width={635}
              height={550}
              className="max-w-[635px] object-cover pt-[50px]"
              src="/assets/images/changing-game-img.webp"
              alt="market image"
            />
          </div>
        </div>
        <div className="sticky top-6 right-0 bg-[url('/assets/images/footer-bg.webp')] bg-cover bg-no-repeat bg-center py-[30px] max-w-[364px] border-2 border-custom-skyblue rounded-3xl max-h-[550px] duration-300 ease-linear hover:shadow-[0px_5px_10px_0px_#71CED0]">
          <div className="flex gap-4 items-center px-5">
            <Image
              width={50}
              height={50}
              className="object-cover max-w-[50px]"
              src="/assets/images/darrell-img.webp"
              alt="darell image"
            />
            <p className="text-white font-semibold">Darrell Steward</p>
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
