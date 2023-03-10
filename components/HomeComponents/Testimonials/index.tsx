import React from "react";
import { Testimony } from "./Testimony";

export function Testimonials() {
  return (
    <section className="pt-[422px] px-[95px]">
      <div className="flex justify-between">
        <div>
          <h3 className="font-semibold text-[40px] ">
            What others have to say about DALA
          </h3>
        </div>
        <div className="flex items-center gap-x-[30px]">
          <div className="cursor-pointer">
            <img src="/images/testimonial-nav-right.svg" alt="nav"></img>
          </div>
          <div className="cursor-pointer">
            <img src="/images/testimonial-nav-left.svg" alt="nav"></img>
          </div>
        </div>
      </div>
      <p className="text-[28px] mt-[10px] w-[80%]">
        Here are some key expert reviews and customer testimonial about D.A.L.A.
      </p>
      <div className="grid grid-cols-2 gap-x-[61px] mt-[37px]">
        <Testimony />
        <Testimony />
      </div>
    </section>
  );
}
