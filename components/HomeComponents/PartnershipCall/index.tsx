import React from "react";

export function PartnershipCall() {
  return (
    <section className="relative bg-blue-300 h-[850px]">
      <img
        src="/images/blue-background.svg"
        alt="background"
        className="absolute h-full"
        style={{ objectFit: "cover" }}
      ></img>
      <div className="absolute top-0 left-0 px-[95px] py-[80px] grid grid-cols-2 h-full gap-x-[100px]">
        <div className="grid place-items-center">
          <div>
            <h3 className="font-semibold text-[35px] text-white">
              Become A Partner/Investor
            </h3>
            <p className="text-[24px] mt-[16px] text-white">
              D.A.L.A Academy would love to partner with you for the success of
              this organization. We need your help in planning and organizing
              our fundraiser. Your donations/sponsorship makes a difference.
            </p>
            <p className="text-[24px] mt-[63px] text-white">
              <span className="font-semibold">For more information :</span>
              +1 (888) 349-2692 ext 101 admin@dalaacademy.com
            </p>
          </div>
        </div>
        <div className="grid place-items-center">
          <img src="/images/partnership-call-img.svg" alt="sample"></img>
        </div>
      </div>
    </section>
  );
}
