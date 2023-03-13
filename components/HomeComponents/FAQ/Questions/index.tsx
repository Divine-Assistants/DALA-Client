import React, { useState } from "react";

interface QuestionsProps {
  question: string;
  answer: string;
}

export function Questions({ question, answer }: QuestionsProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="sm:p-[15px] rounded-[15px] FAQ-container">
      <p
        className="sm:hidden font-semibold relative md:text-[25px] text-[16px] bg-white sm:bg-transparent px-[23px] py-[15px] sm:py-[0] sm:px-[0] rounded-t-[10px] sm:rounded-0"
        onClick={() => setIsOpen((currentVal) => !currentVal)}
        style={
          isOpen
            ? {
                borderTopRightRadius: "10px",
                borderTopLeftRadius: "10px",
              }
            : { borderRadius: "10px" }
        }
      >
        What is D.A.L.A.?
        {isOpen ? (
          <img
            src="/images/arrow-up-gray.svg"
            alt="arrow"
            className="absolute top-0 right-[23px] top-[50%] sm:hidden"
            style={{ transform: "translateY(-50%)" }}
          ></img>
        ) : (
          <img
            src="/images/arrow-down-gray.svg"
            alt="arrow"
            className="absolute top-0 right-[23px] top-[50%] sm:hidden"
            style={{ transform: "translateY(-50%)" }}
          ></img>
        )}
      </p>
      {isOpen && (
        <p className="sm:hidden md:text-[22px] mt-[1px] sm:mt-[10px] text-justify text-[13px] bg-white sm:bg-transparent px-[27px] py-[16px] sm:p-0 rounded-b-[10px]">
          D.A.L.A. is an online, non-profit learning academy that seeks to
          bridge the digital divide by providing online learning resources to
          young individuals from all backgrounds. By introducing them to the
          world of technology, D.A.L.A. aims to empower youths with new skills
          and knowledge that can help them build a better future for themselves
          while providing them with the platform to learn and earn.
        </p>
      )}
      <p className="hidden sm:block font-semibold relative md:text-[25px] text-[16px] bg-white sm:bg-transparent px-[23px] py-[15px] sm:py-[0] sm:px-[0] rounded-t-[10px] sm:rounded-0">
        What is D.A.L.A.?
        {isOpen ? (
          <img
            src="/images/arrow-up-gray.svg"
            alt="arrow"
            className="absolute top-0 right-[23px] top-[50%] sm:hidden"
            style={{ transform: "translateY(-50%)" }}
          ></img>
        ) : (
          <img
            src="/images/arrow-down-gray.svg"
            alt="arrow"
            className="absolute top-0 right-[23px] top-[50%] sm:hidden"
            style={{ transform: "translateY(-50%)" }}
          ></img>
        )}
      </p>

      <p className="hidden sm:block md:text-[22px] mt-[1px] sm:mt-[10px] text-justify text-[13px] bg-white sm:bg-transparent px-[27px] py-[16px] sm:p-0 rounded-b-[10px]">
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
