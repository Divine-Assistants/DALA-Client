import React from "react";

export function Aims() {
  return (
    <>
      <div className='bg-[url("/images/about-back.svg")]  bg-center mb-[202px] pb-[81px] w-[100%] '>
        <div className=" pt-[80px] w-[90%] lg:w-[70%]  m-auto lg:m-auto text-[#FAFAFA] lg:flex lg:items-center lg:gap-[143px]   ">
          <div className="lg:w-[60%]  ">
            <h2 className="font- semibold text-[24px]  mb-[5px] md:text-[38px] lg:text-[50px]  ">
              Aims
            </h2>
            <p className="text-[16px] mb-[40px] md:text-[28px]  ">
              DALAs aim is to help young people gain the skills and knowledge
              they need to build a career in technology that contributes to
              sustainable development. Through its innovative tech learning
              academy, DALA provides access to a broad range of courses,
              activities, and resources. In addition to providing a
              comprehensive learning environment, DALA also offers guidance and
              support to help youth understand the goal and reach their full
              potential. This includes counseling services, mentorship
              opportunities, and career advice. With its aim to empower youth
              with the right skills and resources, DALA is committed to helping
              individuals achieve their ambitions and contribute to a more
              sustainable future.
            </p>
          </div>

          <div className="rounded-[17px] w-[369px] h-[354px] pb-[81px] m-auto lg:h-[471px] lg:w-[367px] ">
            <img
              src="/images/about-lady.svg"
              alt="Divine Onyeleonu"
              className="w-contain h-fit"
            />
          </div>
        </div>
      </div>
    </>
  );
}
