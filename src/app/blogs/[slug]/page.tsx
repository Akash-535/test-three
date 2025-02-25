import Hero from "@/components/blog-details/Hero";
import React, { Suspense } from "react";

const Blog = () => {
  return (
    <>
      <Suspense>
        <Hero />
      </Suspense>
    </>
  );
};

export default Blog;
