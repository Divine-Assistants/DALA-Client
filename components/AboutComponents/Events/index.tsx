import React from "react";

export function Events() {
  return (
    <div className="w-[90%] m-auto text-[#1E1E1E]">
      <div className="lg:shadow-[25px_28px_65px_rgba(0,0,0,0.08)] lg:rounded-[49px] lg:flex lg:gap-[39px] lg:justify-around lg:py-[101px] lg:mb-[388px] ">
        <div className="lg:w-[40%] ">
          <h2 className="text-[24px] font-semibold md:text-[38px] ">Events</h2>
          <p className="text-[16px] mb-[30px] md:text-[24px] ">
            The DALA project is an ambitious effort to provide quality education
            and training for the youths of Nigeria. In line with this vision, a
            fundraising event is scheduled to take place in Aug/Sep this year.
            This event will be an opportunity for potential donors to come
            forward and contribute their support for the cause of learning
            academy. It will also be a chance to spread awareness about the
            importance of investing in the growth and development of young
            people. The DALA project is dedicated to transforming the lives of
            Nigerian youths by equipping them with valuable skills and knowledge
            that will aid them in achieving success. We invite everyone to come
            forth and join us in our mission. We need your support to make this
            dream a reality.
          </p>
        </div>

        <div className="w-[100%] relative mb-[272px] lg:w-[40%] ">
          <img src="/images/puzzle.svg" alt="DALA Roadmap" className="m-auto" />
          <div className="bg-[#DA063F] w-[12.44px] h-[12.44px] rounded-[100%] absolute top-[0%] left-[15%] "></div>
          <div className="bg-[#BF780E] w-[12.44px] h-[12.44px] rounded-[100%] absolute top-[10%] left-[95%] "></div>
          <div className="bg-[#DBFF00] w-[12.44px] h-[12.44px] rounded-[100%] absolute top-[50%] left-[50%] "></div>
          <div className="bg-[#DBFF00] w-[12.44px] h-[12.44px] rounded-[100%] absolute top-[48%] left-[0%] "></div>
          <div className="bg-[#02CFC3] w-[12.44px] h-[12.44px] rounded-[100%] absolute top-[46%] left-[100%] "></div>
          <div className="bg-[#8E049A] w-[12.44px] h-[12.44px] rounded-[100%] absolute bottom-[10%] left-[45%] "></div>
          <div className="bg-[#157C20] w-[12.44px] h-[12.44px] rounded-[100%] absolute bottom-[0%] left-[95%] "></div>
        </div>
      </div>
    </div>
  );
}
