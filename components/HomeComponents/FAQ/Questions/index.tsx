import React from "react";

interface QuestionsProps {
  question: string;
  answer: string;
}

export function Questions({ question, answer }: QuestionsProps) {
  return (
    <div
      className="p-[15px] rounded-[15px]"
      style={{ border: "1px solid gray" }}
    >
      <p className="font-semibold md:text-[25px] text-[16px]">
        What is D.A.L.A.?
      </p>
      <p className="md:text-[22px] mt-[10px] text-justify text-[13px]">
        D.A.L.A. is an online, non-profit learning academy that seeks to bridge
        the digital divide by providing online learning resources to young
        individuals from all backgrounds. By introducing them to the world of
        technology, D.A.L.A. aims to empower youths with new skills and
        knowledge that can help them build a better future for themselves while
        providing them with the platform to learn and earn.
      </p>
    </div>
  );
}
