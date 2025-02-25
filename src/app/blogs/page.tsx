import Articles from "@/components/blog/Articles";
import React, { Suspense } from "react";

const Hero = () => {
  return (
    <>
      <Suspense>
        <Articles />
      </Suspense>
    </>
  );
};

export default Hero;
