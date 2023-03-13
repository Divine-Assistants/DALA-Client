import React from "react";
import { Partner } from "./Partner";

export function Partnership() {
  return (
    <section className="lg:px-[95px] px-[28px] py-[200px] xl:py-[422px]">
      <h3 className="font-semibold text-[24px] md:text-[50px]">
        Meet our Partners
      </h3>
      <p className="md:text-[28px] text-[16px] mt-[10px]">
        Discover the individuals and people we work with to achieve our goals
      </p>
      <div className="mt-[59px] flex flex-col gap-y-[20px] md:grid grid-cols-2 gap-x-[100px]">
        <Partner
          coverImg="/images/partner1.svg"
          name="Shashikanth Barrenkula"
          portfolio="Shashikanth Barrenkula is a real estate
                    investor and IT specialist with over 31 properties in Canada and 25+ years of
                    experience in the IT field. Shashikanth is one of our partners in the Divine Group of companies and will be donating over $20,000 to this project."
        />
        <Partner
          coverImg="/images/partner2.svg"
          name="Dr. Haider Uzzaman"
          portfolio="Dr. Haider has Over his 30-year career, he has been exceptionally
                    influential in his ways of working for the betterment of society
                    across the globe. Like a piercing vision of an eagle, he understood
                    the gap between the private and public sectors, governments,
                    and multinational corporations. He founded IPSSL Group in 1994
                    and launched airlines, air ambulances, helicopters, hotels and
                    resorts, car rental, security services, and business consultancy."
        />
      </div>
    </section>
  );
}
