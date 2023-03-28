import { NewsCover } from "@/components/HomeComponents/LatestNews/NewsCover";
import { News } from "@/components/HomeComponents/LatestNews/News";
import React from "react";

export function LatestNewsSection() {
  return (
    <section className="px-[28px] xl:px-[95px] mt-[100px]">
      <h3 className="font-semibold text-[24px] md:text-[50px]">Latest News</h3>
      <div className="flex flex-col md:gap-y-[79px]">
        <div className="md:grid grid-cols-2 gap-[50px] mt-[30px]">
          <div>
            <NewsCover />
            <div className="md:hidden mt-[40px]">
              <NewsCover />
            </div>
          </div>
          <div className="flex flex-col gap-y-[40px] sm:grid grid-cols-2 mt-[40px] md:mt-0">
            <News
              coverImg="/images/news1.svg"
              title="Development"
              description="8 E-Commerce Email Marketing Best Practices To Boost Your ROI in 2022"
              content="Nihil, aperiam, ad molestiae ut enim reprehenderit rem repudiandae ducimus dolorum obcaecati..."
              date="November 9th 2023"
              link={1}
            />
            <News
              coverImg="/images/news1.svg"
              title="Development"
              description="8 E-Commerce Email Marketing Best Practices To Boost Your ROI in 2022"
              content="Nihil, aperiam, ad molestiae ut enim reprehenderit rem repudiandae ducimus dolorum obcaecati..."
              date="November 9th 2023"
              link={1}
            />
            <News
              coverImg="/images/news1.svg"
              title="Development"
              description="8 E-Commerce Email Marketing Best Practices To Boost Your ROI in 2022"
              content="Nihil, aperiam, ad molestiae ut enim reprehenderit rem repudiandae ducimus dolorum obcaecati..."
              date="November 9th 2023"
              link={1}
            />
            <News
              coverImg="/images/news1.svg"
              title="Development"
              description="8 E-Commerce Email Marketing Best Practices To Boost Your ROI in 2022"
              content="Nihil, aperiam, ad molestiae ut enim reprehenderit rem repudiandae ducimus dolorum obcaecati..."
              date="November 9th 2023"
              link={1}
            />
          </div>
        </div>
        <div className="md:grid grid-cols-2 gap-[50px] md:mt-[30px]">
          <div className="hidden md:block h-full">
            <NewsCover />
          </div>
          <div className="flex flex-col gap-y-[40px] sm:grid grid-cols-2 mt-[40px] sm:mt-0">
            <News
              coverImg="/images/news1.svg"
              title="Development"
              description="8 E-Commerce Email Marketing Best Practices To Boost Your ROI in 2022"
              content="Nihil, aperiam, ad molestiae ut enim reprehenderit rem repudiandae ducimus dolorum obcaecati..."
              date="November 9th 2023"
              link={1}
            />
            <News
              coverImg="/images/news1.svg"
              title="Development"
              description="8 E-Commerce Email Marketing Best Practices To Boost Your ROI in 2022"
              content="Nihil, aperiam, ad molestiae ut enim reprehenderit rem repudiandae ducimus dolorum obcaecati..."
              date="November 9th 2023"
              link={1}
            />
            <News
              coverImg="/images/news1.svg"
              title="Development"
              description="8 E-Commerce Email Marketing Best Practices To Boost Your ROI in 2022"
              content="Nihil, aperiam, ad molestiae ut enim reprehenderit rem repudiandae ducimus dolorum obcaecati..."
              date="November 9th 2023"
              link={1}
            />
            <News
              coverImg="/images/news1.svg"
              title="Development"
              description="8 E-Commerce Email Marketing Best Practices To Boost Your ROI in 2022"
              content="Nihil, aperiam, ad molestiae ut enim reprehenderit rem repudiandae ducimus dolorum obcaecati..."
              date="November 9th 2023"
              link={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
