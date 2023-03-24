import {
  Button,
  CourseContent,
  CourseReview,
  PageLayout,
  PurchaseCourse,
  PurchaseCourse2,
} from "@/components";
import React from "react";

export default function ViewCourse() {
  return (
    <PageLayout title="View Course">
      <section className="hidden sm:block">
        <div className="relative w-full sm:h-[1400px] lg:h-[800px] grid place-items-center">
          <img
            src="/images/blue-background.svg"
            alt="background"
            className="w-full h-full object-cover block"
          ></img>
          <div className="w-full h-full z-20 absolute top-0 left-0 px-[28px] lg:px-[95px] py-[50px] lg:py-[80px] flex flex-col gap-y-[30px] lg:grid grid-cols-3 gap-x-[50px] items-center">
            <div className="col-span-2">
              <p className="font-semibold text-[20px] text-white">Sales</p>
              <h1 className="font-semibold text-[50px] text-white mt-[5px]">
                Build A Profitable Online Business Using A Sales Funnel
              </h1>
              <p className="font-semibold text-[20px] text-white mt-[14px]">
                Everything you need to know about starting a business. Common
                errors associated with new businessess and firms{" "}
              </p>
              <div className="mt-[14px] text-white flex items-center gap-x-[38px]">
                <div className="flex items-center gap-x-[15px] font-semibold text-[18px]">
                  <p className="text-[#FFDC64]">4.7</p>
                  <div className="flex items-center gap-x-[2px]">
                    <img src="/images/yellow-star.svg" alt="star"></img>
                    <img src="/images/yellow-star.svg" alt="star"></img>
                    <img src="/images/yellow-star.svg" alt="star"></img>
                    <img src="/images/yellow-star.svg" alt="star"></img>
                    <img src="/images/yellow-star.svg" alt="star"></img>
                  </div>
                  <p>[53 Ratings]</p>
                </div>
                <p className="font-semibold text-[18px]">
                  250 Students Enrolled
                </p>
              </div>
              <div className="font-semibold text-[20px] text-white mt-[126px]">
                <p className="text-[23px]">Created by Gratta Orji</p>
                <div className="mt-[13px] flex gap-x-[42px]">
                  <div className="flex items-center gap-x-[20px]">
                    <img src="/images/Timer.svg" alt="time"></img>
                    <p>50+ Total Hours</p>
                  </div>
                  <div className="flex items-center gap-x-[20px]">
                    <img src="/images/Volume-level.svg" alt="time"></img>
                    <p>Advanced Level</p>
                  </div>
                  <div className="flex items-center gap-x-[20px]">
                    <img src="/images/Subtitles.svg" alt="time"></img>
                    <p>English Subtitles</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 rounded-[15px] overflow-hidden h-[455px] w-full">
              <img
                src="/images/view-course-cover.svg"
                alt="course cover"
                className="w-full h-full object-cover"
              ></img>
            </div>
          </div>
        </div>
      </section>
      <section className="sm:hidden">
        <section className="px-[28px] xl:px-[95px]">
          <div className="font-semibold flex items-center gap-x-[7px] py-[15px] cursor-pointer">
            <img src="/images/arrow-left-black.svg" alt="arrow-left"></img>
            <p className="sm:text-[24px]">Go Back</p>
          </div>
          <Button
            text="Sales"
            border="2px solid #004AAD"
            paddingInline="20px"
            paddingBlock="10px"
            size="14px"
            weight={600}
            className="text-[#004AAD]"
          />
          <h1 className="font-bold text-[24px] mt-[15px] text-[#1E1E1E]">
            Build A Profitable Online Business Using A Sales Funnel
          </h1>
        </section>
        <div className="mt-[27px]">
          <PurchaseCourse />
        </div>
      </section>
      <section className="px-[28px] xl:px-[95px] py-[83px] grid grid-cols-2 gap-x-[40px] xl:gap-x-[109px]">
        <div>
          <h2 className="font-semibold text-[36px]">Description</h2>
          <p className="font-medium text-[20px] text-justify">
            Lorem ipsum dolor sit amet consectetur. Proin at odio gravida at
            ornare quis pulvinar. Tristique consectetur amet id risus nunc.
            Dictumst tempus tincidunt pulvinar tristique convallis elementum
            ante laoreet suspendisse. Mauris facilisis ridiculus enim volutpat
            et. Maecenas molestie ut purus rhoncus consectetur mi neque quisque
            sit. Consectetur augue massa non nunc vulputate est et. Dignissim
            viverra curabitur pulvinar dignissim. Suspendisse ipsum tristique
            iaculis mi pellentesque fringilla urna sollicitudin. Justo suscipit
            purus in lacus volutpat. Nibh aliquet aliquam eget magnis rhoncus
            at. Scelerisque ultricies quis tincidunt arcu viverra. Nunc gravida
            mattis aliquam tincidunt dui. <br />
            <br /> At donec hac non leo ornare gravida nunc odio. Urna fusce
            risus dolor fermentum sagittis et pulvinar.Tempor eu nunc velit arcu
            tellus. Massa ultrices faucibus a lobortis turpis consequat congue.
            Molestie ultrices placerat vulputate quis sit. Posuere ac tincidunt
            proin sed nunc sed amet non. Scelerisque tellus auctor amet
            fringilla. Adipiscing cursus tempus orci volutpat id tristique. In
            quis dictum dignissim malesuada suspendisse quis in morbi. Pretium
            sed rutrum non ac quam habitant ipsum. Ligula sit enim integer
            phasellus ac dolor sodales eget. Cursus nullam in adipiscing cursus.
            Velit etiam magna adipiscing purus faucibus eu eget ipsum. <br />
            <br /> At donec hac non leo ornare gravida nunc odio. Urna fusce
            risus dolor fermentum sagittis et pulvinar.Tempor eu nunc velit arcu
            tellus. Massa ultrices faucibus a lobortis turpis consequat congue.
            Molestie ultrices placerat vulputate quis sit. Posuere ac tincidunt
            proin sed nunc sed amet non. Scelerisque tellus auctor amet
            fringilla. Adipiscing cursus tempus orci volutpat id tristique. In
            quis dictum dignissim malesuada suspendisse quis in morbi.{" "}
          </p>
          <h2 className="mt-[57px] font-semibold text-[36px]">Requirements</h2>
          <p className="font-medium text-[20px] mt-[15px]">
            A Personal Computer
          </p>
          <p className="font-medium text-[20px] mt-[15px]">
            Prior Knowledge of Sales and Business management
          </p>
          <p className="font-medium text-[20px] mt-[15px]">
            Knowledge of technical project management tools like Asana and Jira
          </p>
        </div>
        <div>
          <div className="mb-[54px]">
            <h2 className="font-semibold text-[36px]">What you’ll learn</h2>
            <div className="flex items-center gap-x-[20px]">
              <img src="/images/tick-good-blue.svg" alt="bullet"></img>
              <p className="font-semibold text-[24px] mt-[15px]">
                Learn business startup the right way
              </p>
            </div>
            <div className="flex items-center gap-x-[20px]">
              <img src="/images/tick-good-blue.svg" alt="bullet"></img>
              <p className="font-semibold text-[24px] mt-[15px]">
                The 13 rules in starting a successful business
              </p>
            </div>
            <div className="flex items-center gap-x-[20px]">
              <img src="/images/tick-good-blue.svg" alt="bullet"></img>
              <p className="font-semibold text-[24px] mt-[15px]">
                Business Project Management
              </p>
            </div>
          </div>
          <PurchaseCourse2 />
        </div>
      </section>
      <CourseContent />
      <CourseReview />
    </PageLayout>
  );
}
