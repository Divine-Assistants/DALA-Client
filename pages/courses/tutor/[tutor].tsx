import { Button, PageLayout } from "@/components";
import { StudentsReview } from "@/components/CoursesComponents/CourseReview/studentReview";
import { Recommend } from "@/components/HomeComponents/Recommendations/Recommend";
import React from "react";

export default function AboutTutor() {
  return (
    <PageLayout title="About Tutor">
      <div className="relative w-full sm:h-[1400px] lg:h-[1000px] grid place-items-center">
        <img
          src="/images/blue-background.svg"
          alt="background"
          className="w-full h-full object-cover block hidden md:block"
        ></img>
        <div className="w-full h-full z-20 md:absolute top-0 left-0 px-[28px] lg:px-[95px] py-[50px] lg:py-[80px]  items-center">
          <div className="flex items-center gap-x-[7px] cursor-pointer">
            <img
              src="/images/arrow-left-white.svg"
              alt="arrow-left"
              className="hidden md:block"
            ></img>
            <img
              src="/images/arrow-left-black.svg"
              alt="arrow-left"
              className="md:hidden"
            ></img>
            <p className="font-semibold text-[20px] md:text-white">Go Back</p>
          </div>
          <div className="flex flex-col gap-y-[20px] md:grid grid-cols-3 gap-x-[50px] mt-[16px]">
            <div className="col-span-1 rounded-[15px] overflow-hidden img md:h-[50%] lg:h-full">
              <img src="/images/tutor-picture.svg" alt="tutor"></img>
            </div>
            <div className="md:text-white col-span-2">
              <h2 className="font-semibold text-[40px] text-mine md:text-white">
                Gratta Orji
              </h2>
              <p className="font-semibold text-[24px]">
                Business Analyst & Specialist
              </p>
              <div className="mt-[14px] flex flex-col gap-y-[10px] gap-x-[43px]">
                <div className="flex items-center gap-x-[10px]">
                  <img
                    src="/images/star-white.svg"
                    alt="star"
                    className="hidden md:block"
                  ></img>
                  <img
                    src="/images/star-outline-black.svg"
                    alt="star"
                    className="md:hidden"
                  ></img>
                  <p className="font-medium text-[24px]">4 Star Rating </p>
                </div>
                <div className="flex items-center gap-x-[10px]">
                  <img
                    src="/images/Comments-white.svg"
                    alt="star"
                    className="hidden md:block"
                  ></img>
                  <img
                    src="/images/Comments-black.svg"
                    alt="star"
                    className="md:hidden"
                  ></img>
                  <p className="font-medium text-[24px]">11,467 Reviews </p>
                </div>
                <div className="flex items-center gap-x-[10px]">
                  <img
                    src="/images/courses-white.svg"
                    alt="star"
                    className="hidden md:block"
                  ></img>
                  <img
                    src="/images/courses-black.svg"
                    alt="star"
                    className="md:hidden"
                  ></img>
                  <p className="font-medium text-[24px]">76 Courses</p>
                </div>
              </div>
              <div className="mt-[50px] md:mt-[34px]">
                <h2 className="font-semibold text-[24px] sm:text-[36px]">
                  About Me
                </h2>
                <p className="font-medium text-[14px] sm:text-[20px] mt-[5px] text-justify">
                  Lorem ipsum dolor sit amet consectetur. Proin at odio gravida
                  at ornare quis pulvinar. Tristique consectetur amet id risus
                  nunc. Dictumst tempus tincidunt pulvinar tristique convallis
                  elementum ante laoreet suspendisse. Mauris facilisis ridiculus
                  enim volutpat et. Maecenas molestie ut purus rhoncus
                  consectetur mi neque quisque sit. Consectetur augue massa non
                  nunc vulputate est et. Dignissim viverra curabitur pulvinar
                  dignissim. Suspendisse ipsum tristique iaculis mi pellentesque
                  fringilla urna sollicitudin. Justo suscipit purus in lacus
                  volutpat. Nibh aliquet aliquam eget magnis rhoncus at.
                  Scelerisque ultricies quis tincidunt arcu viverra. Nunc
                  gravida mattis aliquam tincidunt dui. Lorem ipsum dolor sit
                  amet consectetur. Proin at odio gravida at ornare quis
                  pulvinar. Tristique consectetur amet id risus nunc. Dictumst
                  tempus tincidunt pulvinar tristique convallis elementum ante
                  laoreet suspendisse.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="mt-[166px] sm:mt-[400px] md:mt-[166px] bg-[#D2DDE8] px-[28px] xl:px-[95px] py-[115px]">
        <h2 className="font-semibold text-[36px]">My Courses (76)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] mt-[46px]">
          {[1, 1, 1, 1, 1, 1].map((_, index) => {
            return (
              <Recommend
                coverImg="/images/recommendation-img-1.svg"
                category="Accounting"
                description="Accounting-Financial Accounting Total For Beginners"
                key={index}
              />
            );
          })}
        </div>
        <div className="hidden md:block">
          <Button
            text="View More"
            paddingBlock="18px"
            size="32px"
            weight={600}
            width="100%"
            className="bg-mine text-white"
            mt="41px"
          />
        </div>
        <div className="md:hidden">
          <Button
            text="View More"
            paddingBlock="18px"
            size="32px"
            weight={600}
            width="100%"
            mt="41px"
            border="1.5px solid #1E1E1E"
          />
        </div>
      </section>
      <section className="px-[28px] xl:px-[95px] mt-[200px] mb-[200px]">
        <h2 className="text-[36px] font-semibold">Tutor Reviews</h2>
        <div className="flex flex-col gap-y-[70px] mt-[48px]">
          {[1, 1, 1, 1].map((item, index) => {
            return <StudentsReview key={index} />;
          })}
        </div>
        <div className="md:hidden">
          <Button
            text="Load More"
            paddingBlock="15px"
            border="1.5px solid #1E1E1E"
            width="100%"
            size="16px"
            weight={500}
            mt="30px"
          />
        </div>
      </section>
    </PageLayout>
  );
}
