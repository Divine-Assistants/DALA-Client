import React from "react";
import { News } from "./News";
import { NewsCover } from "./NewsCover";

export function LatestNews() {
  return (
    <section className="px-[95px]">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-[50px]">Our Latest News</h3>
        <p className="text-[28px] text-mine cursor-pointer">view all</p>
      </div>
      <p className="text-[28px] mt-[10px] w-[60%]">
        Stay up-to-date with the latest developments and happenings
      </p>
      <div className="grid grid-cols-2 mt-[37px] gap-x-[40px]">
        <div>
          <NewsCover />
        </div>
        <div className="grid grid-cols-2 gap-[20px]">
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
      </div>
    </section>
  );
}
