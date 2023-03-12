import React from "react";

interface RecommendationProps {
  coverImg: string;
  category: string;
  description: string;
}

export function Recommend({
  coverImg,
  category,
  description,
}: RecommendationProps) {
  return (
    <div
      className="p-[15px] bg-white rounded-[15px] mt-[25px] md:mt-0"
      style={{ boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.12)" }}
    >
      <div className="rounded-[10px] overflow-hidden">
        <img src={coverImg} alt="sample" className="w-full"></img>
      </div>
      <div className="mt-[14px] flex items-center justify-between">
        <p className="font-semibold text-[16px] text-mine">{category}</p>
        <div className="flex items-center gap-x-[16px]">
          <div className="flex items-center gap-x-[5px]">
            <p className="font-semibold text-[16px] text-[#8F8F8F]">4.7</p>

            <div>
              <img src="/images/yellow-star.svg" alt="star"></img>
            </div>
          </div>
          <p className="font-semibold text-[16px] text-[#8F8F8F]">(5.7k)</p>
        </div>
      </div>
      <p className="font-semibold text-[21px] mt-[8px]">{description}</p>
      <div className="flex justify-between items-center mt-[8.5px]">
        <div className="flex items-center gap-x-[20px]">
          <div className="rounded-[50%]">
            <img src="/images/recommendation-avatar.svg" alt="avatar"></img>
          </div>
          <div>
            <p className="font-semibold text-[16px]">James Wan</p>
            <p className="text-[15px]">Software Engineer</p>
          </div>
        </div>
        <div>
          <p className="font-semibold text-[20px] text-mine">$ 84.99</p>
        </div>
      </div>
    </div>
  );
}
