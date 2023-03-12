import React from "react";
import { Testimony } from "./Testimony";

export function Testimonials() {
  return (
    <section className="pt-[200px] xl:pt-[422px] px-[28px] lg:px-[95px]">
      <div className="flex justify-between">
        <div>
          <h3 className="font-semibold text-[24px] md2:text-[40px] ">
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
      <p className="md2:text-[28px] text-[16px] mt-[10px] w-[80%]">
        Here are some key expert reviews and customer testimonial about D.A.L.A.
      </p>
      <div className="flex gap-x-[61px] mt-[37px]">
        <Testimony />
        <Testimony />
      </div>
    </section>
  );
}
