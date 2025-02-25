"use client";
import React, { useState, useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import CustomButton from "../common/CustomButton";
import { useSearchParams } from "next/navigation";
import { ARTICLES_CARD_LIST } from "@/utils/helper";
import Link from "next/link";
import CommonCard from "../common/CommonCard";
import { SearchIcon } from "@/utils/Icons";

const BlogCards = () => {
  const [open, setOpen] = useState(6);
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const param = searchParams.get("page");
    if (param) {
      setOpen(parseInt(param) * 3);
    }
  }, [searchParams]);

  const allCard = ARTICLES_CARD_LIST.slice(0, open).filter(
    (obj) => obj.title && obj.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleShowMore = () => {
    const nextPage = open < ARTICLES_CARD_LIST.length ? open / 3 + 1 : 2;
    setOpen(nextPage * 3);
    NProgress.start();
    window.history.pushState(null, "", `blogs?page=${nextPage}`);
    setTimeout(() => {
      NProgress.done();
    }, 400);
  };

  return (
    <div className="pt-[30px] container mx-auto pb-[180px] px-4 max-xl:pb-36 max-lg:pb-20 max-md:pb-12">
      <div className="flex items-center justify-start py-[17px] pl-[30px] gap-2.5 border border-white border-opacity-25 max-w-[558px] mx-auto rounded-full">
        <label htmlFor="search" className="cursor-pointer">
          <SearchIcon />
        </label>
        <input
          type="text"
          id="search"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="bg-transparent outline-none placeholder:text-white placeholder:opacity-80 text-white opacity-80 placeholder:leading-6 leading-6"
        />
      </div>
      <div className="flex flex-wrap gap-6 max-xl:gap-y-20 max-lg:gap-y-5 max-w-[1140px] mx-auto justify-center w-full pt-[70px] max-xl:gap-2 max-lg:pt-14 max-md:pt-9">
        {allCard.map((obj, i) => (
          <Link
            key={i}
            href={`/blogs/${obj.title.toLowerCase().replace(/\s/g, "-")}`}
          >
            <CommonCard
              image={obj.image}
              date={obj.date}
              title={obj.title}
              description={obj.description}
              buttonOne="Productivity"
              buttonTwo={obj.timeReamining}
              authorImg={obj.authorImg}
              authorName={obj.authorName}
            />
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center pt-10">
        <CustomButton
          myOnclick={handleShowMore}
          myClass="py-[15px] px-6 border rounded-full bg-custom-skyblue text-center hover:text-custom-skyblue hover:bg-transparent"
          text={
            open < ARTICLES_CARD_LIST.length
              ? "Show all blogs"
              : "Hide all blogs"
          }
        />
      </div>
    </div>
  );
};

export default BlogCards;
