import { NewsCover } from "@/components/HomeComponents/LatestNews/NewsCover";
import React from "react";

export function FeaturedBlogSection() {
  return (
    <section className="px-[28px] xl:px-[95px]">
      <h3 className="font-semibold text-[50px]">Featured Blogs</h3>
      <div className="grid grid-cols-2 gap-[75px] mt-[30px]">
        {[1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => {
          return <NewsCover />;
        })}
      </div>
    </section>
  );
}
