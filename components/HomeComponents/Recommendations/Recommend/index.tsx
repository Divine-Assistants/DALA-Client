import React, { useState } from "react";
import { CoursesModal } from "@/components";
interface RecommendationProps {
  coverImg: string;
  category: string;
  description: string;
  review?: number;
}

export function Recommend({
  coverImg,
  category,
  description,
  review,
}: RecommendationProps) {
  const [modalOn, setModalOn] = useState<boolean>(false);

  return (
    <>
      {modalOn && <CoursesModal setModalOn={setModalOn} />}
      <div
        className="p-[15px] rounded-[15px] mt-[25px] md:mt-0 bg-white cursor-pointer hover:bg-gray-100 relative"
        style={{ boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.12)" }}
        onClick={() => setModalOn((val) => !val)}
      >
        <div className="rounded-[10px] overflow-hidden">
          <img src={coverImg} alt="sample" className="w-full"></img>
        </div>
        <div className="mt-[14px] flex items-center justify-between">
          <p className="font-semibold text-[16px] sm:text-[24px] md:text-[16px] text-mine">
            {category}
          </p>
          <div className="flex items-center gap-x-[16px]">
            <div className="flex items-center gap-x-[5px]">
              <p className="font-semibold text-[16px] sm:text-[20px] md:text-[16px] text-[#8F8F8F]">
                4.7
              </p>

              <div>
                <img src="/images/yellow-star.svg" alt="star"></img>
              </div>
            </div>
            <p className="font-semibold text-[16px] sm:text-[20px] md:text-[16px] text-[#8F8F8F]">
              (5.7k)
            </p>
          </div>
        </div>
        <p className="font-semibold text-[21px] sm:text-[35px] md:text-[21px] mt-[8px]">
          {description}
        </p>
        <div className="flex justify-between items-center mt-[8.5px]">
          <div className="flex items-center gap-x-[20px]">
            <div className="rounded-[50%] w-[50px] h-[50px]">
              <img
                src="/images/recommendation-avatar.svg"
                alt="avatar"
                className="w-full h-full object-cover"
              ></img>
            </div>
            <div>
              <p className="font-semibold text-[16px] sm:text-[20px] md:text-[16px]">
                James Wan
              </p>
              <p className="text-[15px] sm:text-[20px] md:text-[16px]">
                Software Engineer
              </p>
            </div>
          </div>
          <div>
            {review ? (
              <div className="flex items-center gap-x-[7px]">
                <img src="/images/review-img-gray.svg" alt="review"></img>
                <p className="font-semibold text-[15px] text-[#8F8F8F]">
                  {review} Reviews
                </p>
              </div>
            ) : (
              <p className="font-semibold text-[20px] text-mine">$84.99</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
