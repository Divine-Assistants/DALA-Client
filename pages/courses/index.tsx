import {
  Button,
  FilterModal,
  Input,
  PageLayout,
  Select,
  TopCourses,
} from "@/components";
import { CoursesCover } from "@/components/CoursesComponents/CoursesCover";
import { Recommend } from "@/components/HomeComponents/Recommendations/Recommend";
import { courses } from "@/utils/courses";
import React, { useState } from "react";

export default function Courses() {
  const myCourses = courses.map((item, index) => {
    return (
      <div key={index}>
        <h3 className="font-semibold text-[20px] mb-[20px]">{item.title}</h3>
        <ul className="flex flex-col gap-y-[29px]">
          {item.contentList.map((title, index) => {
            if (title.courseNumber) {
              return (
                <li
                  className="flex  gap-x-[26px] justify-between relative left-[15px] course-category"
                  key={index}
                >
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
                <li
                  className="font-semibold text-[16px] text-[#414141]"
                  key={index}
                >
                  {title.courseTitle}
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  });

  const [openFilter, setOpenFilter] = useState<boolean>(false);

  return (
    <PageLayout title="Courses">
      <CoursesCover />
      <div className="md:grid grid-cols-2 items-center md:mb-[85px] px-[28px] xl:px-[95px]">
        <h3 className="font-semibold text-[24px] sm:text-[40px]">
          All Courses
        </h3>
        <div className="hidden md:grid grid-cols-2 items-center gap-x-[30px] select-input-container">
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
            color="#8F8F8F"
            width="100%"
            rounded="8px"
            paddingBlock="10px"
            paddingInline="10px"
            paddingRight="50px"
            backgroundColor="transparent"
            className="border-1 border-[#8F8F8F]"
          />
        </div>
        <>
          {openFilter && <FilterModal setOpenFilter={setOpenFilter} />}
          <div
            className="lg:hidden w-fit"
            onClick={() => setOpenFilter((val) => !val)}
          >
            <Button
              text="Filters"
              weight={600}
              size="16px"
              src="/images/filter-gray.svg"
              bottom="40%"
              right="20px"
              paddingLeft="24px"
              paddingRight="61px"
              mt="5px"
              className="bg-[#DDDDDD] text-[#1E1E1E] py-[10px]"
            />
          </div>
        </>
      </div>
      <section className="md:grid grid-cols-1 lg:grid-cols-4 gap-x-[15px] px-[28px] xl:px-[95px] mb-[160px]">
        <h3 className="md:hidden font-semibold text-[20px] sm:text-[40px] mt-[51px]">
          Latest Courses
        </h3>
        <div
          className="hidden lg:col-span-1 rounded-[10px] lg:flex flex-col gap-y-[60px] py-[15px] px-[30px] h-fit"
          style={{ border: "1px solid gray" }}
        >
          {myCourses}
          <div className="my-[40px]">
            <button
              className="font-semibold text-[20px] text-white bg-[#004AAD] w-full p-5 rounded-[10px]"
              onClick={() => setOpenFilter((val) => !val)}
            >
              Filter Results
            </button>
          </div>
        </div>
        <div className="lg:col-span-3 md:grid md:grid-cols-2 2xl:grid-cols-3 gap-[20px] ">
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => {
            return (
              <Recommend
                coverImg="/images/recommendation-img-2.svg"
                category="Marketing"
                description="Social Media Marketing | with Hidden Tips and Tricks"
                key={index}
              />
            );
          })}
        </div>
      </section>
      <section className="mt-[200px] px-[28px] xl:px-[95px] md:hidden">
        <h3 className="font-semibold text-[20px]">Tags</h3>
        <div className="mt-[17px] mb-[200px] flex gap-[15px] flex-wrap justify-center">
          <p
            className="font-semibold text-[14px] py-[15px] px-[30px] rounded-[25px] w-fit"
            style={{ border: "2px solid #1E1E1E" }}
          >
            Marketing
          </p>
          <p
            className="font-semibold text-[14px] py-[15px] px-[30px] rounded-[25px] w-fit"
            style={{ border: "2px solid #1E1E1E" }}
          >
            Adobe Illustrator
          </p>
          <p
            className="font-semibold text-[14px] py-[15px] px-[30px] rounded-[25px] w-fit"
            style={{ border: "2px solid #1E1E1E" }}
          >
            Drawing
          </p>
          <p
            className="font-semibold text-[14px] py-[15px] px-[30px] rounded-[25px] w-fit"
            style={{ border: "2px solid #1E1E1E" }}
          >
            Graphics
          </p>
          <p
            className="font-semibold text-[14px] py-[15px] px-[30px] rounded-[25px] w-fit"
            style={{ border: "2px solid #1E1E1E" }}
          >
            Sales
          </p>
          <p
            className="font-semibold text-[14px] py-[15px] px-[30px] rounded-[25px] w-fit"
            style={{ border: "2px solid #1E1E1E" }}
          >
            Project Management
          </p>
        </div>
      </section>
      <section className="px-[28px] xl:px-[95px] md:hidden">
        <h3 className="font-semibold text-[20px] text-[#1E1E1E]">
          Top Courses
        </h3>
        <div className="mt-[20px] flex flex-col gap-y-[30px]">
          <TopCourses />
          <TopCourses />
          <TopCourses />
        </div>
      </section>
      <section className="px-[28px] xl:px-[95px] mt-[200px] md:hidden">
        <h3 className="font-semibold text-[20px] text-[#1E1E1E]">
          Popular Courses
        </h3>
        <div className="flex flex-col gap-y-[40px]">
          <Recommend
            coverImg="/images/recommendation-img-1.svg"
            category="Accounting"
            description="Accounting-Financial Accounting Total For Beginners"
            review={25}
          />
          <Recommend
            coverImg="/images/recommendation-img-1.svg"
            category="Accounting"
            description="Accounting-Financial Accounting Total For Beginners"
            review={25}
          />
          <Recommend
            coverImg="/images/recommendation-img-1.svg"
            category="Accounting"
            description="Accounting-Financial Accounting Total For Beginners"
            review={25}
          />
          <Recommend
            coverImg="/images/recommendation-img-1.svg"
            category="Accounting"
            description="Accounting-Financial Accounting Total For Beginners"
            review={25}
          />
          <Recommend
            coverImg="/images/recommendation-img-1.svg"
            category="Accounting"
            description="Accounting-Financial Accounting Total For Beginners"
            review={25}
          />
        </div>
      </section>
      <section className="px-[28px] xl:px-[95px] mt-[200px] md:hidden">
        <h3 className="font-semibold text-[20px] text-[#1E1E1E]">Suggested</h3>
        <div className="flex flex-col gap-y-[40px]">
          <Recommend
            coverImg="/images/recommendation-img-1.svg"
            category="Accounting"
            description="Accounting-Financial Accounting Total For Beginners"
            review={25}
          />
          <Recommend
            coverImg="/images/recommendation-img-1.svg"
            category="Accounting"
            description="Accounting-Financial Accounting Total For Beginners"
            review={25}
          />
          <Recommend
            coverImg="/images/recommendation-img-1.svg"
            category="Accounting"
            description="Accounting-Financial Accounting Total For Beginners"
            review={25}
          />
          <Recommend
            coverImg="/images/recommendation-img-1.svg"
            category="Accounting"
            description="Accounting-Financial Accounting Total For Beginners"
            review={25}
          />
          <Recommend
            coverImg="/images/recommendation-img-1.svg"
            category="Accounting"
            description="Accounting-Financial Accounting Total For Beginners"
            review={25}
          />
        </div>
      </section>
      <section className="px-[28px] xl:px-[95px] md:hidden mt-[200px] mb-[190px]">
        <h3 className="font-semibold text-[20px] text-[#1E1E1E]">
          More For You
        </h3>
        <div className="mt-[20px] flex flex-col gap-y-[30px]">
          <TopCourses />
          <TopCourses />
          <TopCourses />
        </div>
      </section>
    </PageLayout>
  );
}
