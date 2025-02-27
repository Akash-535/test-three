import { TOP_BAR_LIST } from "@/utils/helper";
import React from "react";
import Marquee from "react-fast-marquee";

const TopBar = () => {
  return (
    <div className="w-full bg-custom-skyblue flex items-center py-[18px] overflow-hidden">
      <Marquee pauseOnHover={true}>
        <div className="w-full items-center flex justify-center">
          {TOP_BAR_LIST.map((obj, i) => (
            <div key={i} className="flex items-center gap-2 ml-[60px]">
              <p className="text-base font-normal leading-[19.36px]">
                {obj.title}
              </p>
              <p className="bg-custom-gray text-white text-base font-normal leading-[19.36px] rounded-full p-[5px_8px_4px_11px] flex items-center gap-1.5">
                {obj.price}{" "}
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    i === 1 ? "bg-custom-green" : "bg-custom-red"
                  }`}
                ></span>
              </p>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default TopBar;
