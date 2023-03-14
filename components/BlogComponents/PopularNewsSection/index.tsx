import { NewsCover } from "@/components/HomeComponents/LatestNews/NewsCover";
import { News } from "@/components/HomeComponents/LatestNews/News";
import React from "react";

export function PopularNewsSection() {
  return (
    <section className="px-[28px] xl:px-[95px] mt-[412px]">
      <h3 className="font-semibold text-[50px]">Popular News</h3>
      <div className="flex flex-col gap-y-[30px]">
        {[1, 1, 1, 1, 1].map((item, index) => {
          return (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[30px]">
              <News
                coverImg="/images/news1.svg"
                title="Development"
                description="8 E-Commerce Email Marketing Best Practices To Boost Your ROI in 2022"
                content="Nihil, aperiam, ad molestiae ut enim reprehenderit rem repudiandae ducimus dolorum obcaecati..."
                date="November 9th 2023"
              />
              <News
                coverImg="/images/news2.svg"
                title="Development"
                description="8 E-Commerce Email Marketing Best Practices To Boost Your ROI in 2022"
                content="Nihil, aperiam, ad molestiae ut enim reprehenderit rem repudiandae ducimus dolorum obcaecati..."
                date="November 9th 2023"
              />
              <News
                coverImg="/images/news3.svg"
                title="Development"
                description="8 E-Commerce Email Marketing Best Practices To Boost Your ROI in 2022"
                content="Nihil, aperiam, ad molestiae ut enim reprehenderit rem repudiandae ducimus dolorum obcaecati..."
                date="November 9th 2023"
              />
              <News
                coverImg="/images/news4.svg"
                title="Development"
                description="8 E-Commerce Email Marketing Best Practices To Boost Your ROI in 2022"
                content="Nihil, aperiam, ad molestiae ut enim reprehenderit rem repudiandae ducimus dolorum obcaecati..."
                date="November 9th 2023"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
