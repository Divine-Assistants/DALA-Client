import { NewsCover } from "@/components/HomeComponents/LatestNews/NewsCover";
import React from "react";

export function FeaturedBlogSection() {
  return (
    <section className="px-[28px] xl:px-[95px]">
      <h3 className="font-semibold text-[24px] md:text-[50px]">
        Featured Blogs
      </h3>
      <div className=" flex flex-col sm:grid grid-cols-2 sm:gap-[30px] xl:gap-[75px] mt-[30px]">
        {[1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => {
          return <NewsCover key={index} />;
        })}
      </div>
    </section>
  );
}
