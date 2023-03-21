import { Input, PageLayout, Select } from "@/components";
import { CoursesCover } from "@/components/CoursesComponents/CoursesCover";
import { Recommend } from "@/components/HomeComponents/Recommendations/Recommend";
import { courses } from "@/utils/courses";
import React from "react";

export default function Courses() {
  const myCourses = courses.map((item, index) => {
    return (
      <div>
        <h3 className="font-semibold text-[20px] mb-[20px]">{item.title}</h3>
        <ul className="flex flex-col gap-y-[29px]">
          {item.contentList.map((title, index) => {
            if (title.courseNumber) {
              return (
                <li className="flex  gap-x-[26px] justify-between relative left-[15px] course-category">
                  <p className="font-semibold text-[16px] text-[#414141]">
                    {title.courseTitle}
                  </p>
                  <p className="font-semibold text-[16px] text-[#414141]">
                    ({title.courseNumber})
                  </p>
                </li>
              );
            } else {
              return (
                <li className="font-semibold text-[16px] text-[#414141]">
                  {title.courseTitle}
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  });

  return (
    <PageLayout title="Courses">
      <CoursesCover />
      <div className="grid grid-cols-2 items-center mb-[85px] px-[28px] xl:px-[95px]">
        <h3 className="font-semibold text-[40px]">All Courses</h3>
        <div className="grid grid-cols-2 items-center gap-x-[30px] select-input-container">
          <Select
            options={[
              "All Course",
              "Latest Courses",
              "Popular Courses",
              "Saved",
            ]}
            border="1px solid #8F8F8F"
            paddingBlock="10px"
            paddingInline="15px"
            rounded="10px"
            backgroundColor="transparent"
          />
          <Input
            name="search-courses"
            type="text"
            placeholder="Search Courses"
            inputImg="/images/Search-gray.svg"
            border="1px solid #8F8F8F"
            color="#8F8F8F"
            width="100%"
            rounded="8px"
            paddingBlock="10px"
            paddingInline="10px"
            paddingRight="50px"
            backgroundColor="transparent"
          />
        </div>
      </div>
      <section className="grid grid-cols-4 gap-x-[15px] px-[28px] xl:px-[95px] mb-[160px]">
        <div
          className="col-span-1 rounded-[10px] flex flex-col gap-y-[60px] py-[15px] px-[30px]"
          style={{ border: "1px solid gray" }}
        >
          {myCourses}
          <div className="my-[40px]">
            <button className="font-semibold text-[20px] text-white bg-[#004AAD] w-full p-5 rounded-[10px]">
              Filter Results
            </button>
          </div>
        </div>
        <div className="col-span-3 md2:grid md2:grid-cols-2 2xl:grid-cols-3 gap-[20px] ">
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => {
            return (
              <Recommend
                coverImg="/images/recommendation-img-2.svg"
                category="Marketing"
                description="Social Media Marketing | with Hidden Tips and Tricks"
              />
            );
          })}
        </div>
      </section>
    </PageLayout>
  );
}
