import { DalaTutor, DALATutors, PageLayout } from "@/components";
import React from "react";

export default function AllTutors() {
  return (
    <PageLayout title="All Tutors">
      <section className="px-[28px] xl:px-[95px] py-[236px] xl:py-[76px]">
        <div className="relative overflow-hidden hidden rounded-[15px] w-full h-full md:grid place-items-center">
          <img
            src="/images/blue-background.svg"
            alt="background"
            className="w-full h-full object-cover hidden md:block"
          ></img>
          <div className="w-full h-full z-20 absolute top-0 left-0 grid place-items-center">
            <h1 className="font-semibold text-[50px] text-white">Tutors</h1>
          </div>
        </div>
        <div className="md:hidden">
          <h1 className="font-semibold text-[32px] sm:text-[50px]">Tutors</h1>

          <p className="text-[16px] sm:text-[24px] mt-[5px]">
            Meet and learn more about the tutors behind the courses on
            DivineAssistants Learning Academy
          </p>
        </div>
      </section>
      <section className="mt-[120px] px-[28px] xl:px-[95px] mb-[237px]">
        <h2 className="font-semibold text-[50px] hidden sm:block">
          Meet the course Mentors
        </h2>
        <div className="flex flex-col gap-y-[40px] sm:grid grid-cols-2 lg:grid-cols-3 gap-x-[35px] sm:gap-y-[53px] sm:mt-[22px]">
          {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => {
            return <DALATutors key={index} />;
          })}
        </div>
      </section>
    </PageLayout>
  );
}
