import { Button } from "@/components/FormElements/Button";
import React from "react";
import { Questions } from "./Questions";

export function FrequentQuestions() {
  return (
    <section className="py-[422px] px-[95px]">
      <h3 className="font-semibold text-[40px]">Frequently Asked Questions</h3>
      <p className="text-[24px] mt-[10px] w-[90%]">
        Everything you need to know about Divine Assistants Learning Academy.
        Can’t find the answers you are looking for? Contact our team.
      </p>
      <div className="mt-[20px] grid grid-cols-3 gap-[15px]">
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
        className="hidden py-[52px] px-[40px] bg-white rounded-[15px] mt-[50px] md:flex justify-between"
        style={{ boxShadow: "20px 20px 52px rgba(0, 0, 0, 0.05)" }}
      >
        <div className="flex">
          <div className="w-[115px] h-[100px] rounded-[50%] grid place-items-center">
            <img
              src="/images/recommendation-avatar.svg"
              alt="avatar"
              className="w-full h-full"
              style={{ objectFit: "cover" }}
            ></img>
          </div>
          <div>
            <p className="font-semibold text-[25px]">Still have questions?</p>
            <p className="text-[22px]">
              Can’t find the answers you’re looking for?, Get in touch with us!
            </p>
          </div>
        </div>
        <div className="w-[40%]">
          <Button
            paddingBlock="24px"
            color="white"
            paddingInline="45px"
            backgroundColor="#004AAD"
            text="Get in Touch"
            ml="auto"
          />
        </div>
      </div>
    </section>
  );
}
