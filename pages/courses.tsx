import { Input, PageLayout, Select } from "@/components";
import { CoursesCover } from "@/components/CoursesComponents/CoursesCover";
import React from "react";

export default function Courses() {
  return (
    <PageLayout title="Courses">
      <CoursesCover />
      <div className="grid grid-cols-2 items-center mb-[85px] px-[28px] xl:px-[95px]">
        <h3 className="font-semibold text-[40px]">All Courses</h3>
        <div className="grid grid-cols-2 items-center gap-x-[30px]">
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
      <section className="grid grid-cols-4 gap-x-[15px] h-[50vh] px-[28px] xl:px-[95px]">
        <div
          className="col-span-1 rounded-[10px]"
          style={{ border: "1px solid gray" }}
        ></div>
        <div className="col-span-3"></div>
      </section>
    </PageLayout>
  );
}
