import React from "react";
import { Testimony } from "./Testimony";

export function Testimonials() {
  return (
    <section className="pt-[200px] xl:pt-[422px] px-[28px] lg:px-[95px]">
      <div className="flex justify-between">
        <div>
          <h3 className="font-semibold text-[24px] md2:text-[40px] text-center md:text-left ">
            What others have to say about DALA
          </h3>
        </div>
        <div className="items-center gap-x-[30px] hidden md2:flex">
          <div className="cursor-pointer">
            <img src="/images/testimonial-nav-right.svg" alt="nav"></img>
          </div>
          <div className="cursor-pointer">
            <img src="/images/testimonial-nav-left.svg" alt="nav"></img>
          </div>
        </div>
      </div>
      <p className="md2:text-[28px] text-[16px] mt-[10px] md:w-[80%] text-center md:text-left">
        Here are some key expert reviews and customer testimonial about D.A.L.A.
      </p>
      <div className="md:flex-row flex flex-col gap-x-[61px] gap-y-[30px] mt-[37px]">
        <Testimony />
        <Testimony />
      </div>
    </section>
  );
}
