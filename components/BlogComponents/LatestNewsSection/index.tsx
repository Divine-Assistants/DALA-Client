import { NewsCover } from "@/components/HomeComponents/LatestNews/NewsCover";
import { News } from "@/components/HomeComponents/LatestNews/News";
import React from "react";

export function LatestNewsSection() {
  return (
    <section className="px-[28px] xl:px-[95px] mt-[100px]">
      <h3 className="font-semibold text-[50px]">Latest News</h3>
      <div className="flex flex-col gap-y-[79px]">
        <div className="grid grid-cols-2 gap-[50px] mt-[30px]">
          <div>
            <NewsCover />
          </div>
          <div className="grid grid-cols-2 gap-[40px]">
            <News
              coverImg="/images/news1.svg"
              title="Development"
              description="8 E-Commerce Email Marketing Best Practices To Boost Your ROI in 2022"
              content="Nihil, aperiam, ad molestiae ut enim reprehenderit rem repudiandae ducimus dolorum obcaecati..."
              date="November 9th 2023"
            />
            <News
              coverImg="/images/news1.svg"
              title="Development"
              description="8 E-Commerce Email Marketing Best Practices To Boost Your ROI in 2022"
              content="Nihil, aperiam, ad molestiae ut enim reprehenderit rem repudiandae ducimus dolorum obcaecati..."
              date="November 9th 2023"
            />
            <News
              coverImg="/images/news1.svg"
              title="Development"
              description="8 E-Commerce Email Marketing Best Practices To Boost Your ROI in 2022"
              content="Nihil, aperiam, ad molestiae ut enim reprehenderit rem repudiandae ducimus dolorum obcaecati..."
              date="November 9th 2023"
            />
            <News
              coverImg="/images/news1.svg"
              title="Development"
              description="8 E-Commerce Email Marketing Best Practices To Boost Your ROI in 2022"
              content="Nihil, aperiam, ad molestiae ut enim reprehenderit rem repudiandae ducimus dolorum obcaecati..."
              date="November 9th 2023"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[50px] mt-[30px]">
          <div>
            <NewsCover />
          </div>
          <div className="grid grid-cols-2 gap-[40px]">
            <News
              coverImg="/images/news1.svg"
              title="Development"
              description="8 E-Commerce Email Marketing Best Practices To Boost Your ROI in 2022"
              content="Nihil, aperiam, ad molestiae ut enim reprehenderit rem repudiandae ducimus dolorum obcaecati..."
              date="November 9th 2023"
            />
            <News
              coverImg="/images/news1.svg"
              title="Development"
              description="8 E-Commerce Email Marketing Best Practices To Boost Your ROI in 2022"
              content="Nihil, aperiam, ad molestiae ut enim reprehenderit rem repudiandae ducimus dolorum obcaecati..."
              date="November 9th 2023"
            />
            <News
              coverImg="/images/news1.svg"
              title="Development"
              description="8 E-Commerce Email Marketing Best Practices To Boost Your ROI in 2022"
              content="Nihil, aperiam, ad molestiae ut enim reprehenderit rem repudiandae ducimus dolorum obcaecati..."
              date="November 9th 2023"
            />
            <News
              coverImg="/images/news1.svg"
              title="Development"
              description="8 E-Commerce Email Marketing Best Practices To Boost Your ROI in 2022"
              content="Nihil, aperiam, ad molestiae ut enim reprehenderit rem repudiandae ducimus dolorum obcaecati..."
              date="November 9th 2023"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
