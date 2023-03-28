import { Button } from "@/components/FormElements/Button";
import React from "react";
import { Questions } from "./Questions";

export function FrequentQuestions() {
  return (
    <section className="xl:py-[422px] py-[200px] px-[28px] xl:px-[95px]">
      <h3 className="font-semibold text-[24px] md:text-[40px]">
        Frequently Asked Questions
      </h3>
      <p className="md:text-[24px] text-[16px] mt-[10px] w-[90%]">
        Everything you need to know about Divine Assistants Learning Academy.
        Can’t find the answers you are looking for? Contact our team.
      </p>
      <div className="mt-[20px] grid grid-cols-1 md2:grid-cols-2 lg:grid-cols-3 gap-[15px]">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => {
          return (
            <Questions
              question="What is D.A.L.A.?"
              answer="D.A.L.A. is an online, non-profit learning academy that seeks to bridge the digital divide by providing online learning resources to young individuals from all backgrounds. By introducing them to the world of technology, D.A.L.A. aims to empower youths with new skills and knowledge that can help them build a better future for themselves while providing them with the platform to learn and earn."
              key={index}
            />
          );
        })}
      </div>
      <div
        className=" flex flex-col gap-y-[10px] items-center py-[52px] px-[22px] md2:px-[40px] bg-white rounded-[15px] mt-[50px] md2:flex-row justify-between"
        style={{ boxShadow: "20px 20px 52px rgba(0, 0, 0, 0.05)" }}
      >
        <div className="flex items-center justify-center gap-x-[10px]">
          <div className="md2:w-[115px] md2:h-[100px] w-[64px] h-[64px] rounded-[50%] grid place-items-center z-10">
            <img
              src="/images/recommendation-avatar.svg"
              alt="avatar"
              className="w-full h-full"
              style={{ objectFit: "cover" }}
            ></img>
          </div>
          <div>
            <p className="font-semibold text-[16px] md2:text-[25px]">
              Still have questions?
            </p>
            <p className="md2:text-[22px] text-[13px]">
              Can’t find the answers you’re looking for?, Get in touch with us!
            </p>
          </div>
        </div>
        <div className="md2:w-[40%]">
          <Button
            className="bg-mine text-white text-[14px] sm:text-[24px] py-[24px] px-[45px]"
            text="Get in Touch"
            ml="auto"
          />
        </div>
      </div>
    </section>
  );
}
