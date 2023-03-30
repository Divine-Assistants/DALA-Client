import Image from "next/image";
import React from "react";

export function PartnershipCall() {
  return (
    <section className="relative bg-blue-300 h-[850px] xs:h-[1000px] sm:h-[1250px] md2:h-[850px]">
      <img
        src="/images/blue-background.svg"
        alt="background"
        className="absolute h-full"
        style={{ objectFit: "cover" }}
      ></img>
      <div className="absolute top-0 left-0 px-[28px] xl:px-[95px] py-[80px] flex flex-col gap-y-[40px] md2:grid grid-cols-2 h-full gap-x-[100px]">
        <div className="grid place-items-center">
          <div>
            <h3 className="font-semibold text-[24px] md:text-[35px] text-white">
              Become A Partner/Investor
            </h3>
            <p className="md:text-[24px] text-[16px] mt-[16px] text-white">
              D.A.L.A Academy would love to partner with you for the success of
              this organization. We need your help in planning and organizing
              our fundraiser. Your donations/sponsorship makes a difference.
            </p>
            <p className="md:text-[24px] text-[20px] mt-[63px] text-white">
              <span className="font-semibold">For more information :</span>
              +1 (888) 349-2692 ext 101 admin@dalaacademy.com
            </p>
          </div>
        </div>
        <div className="grid place-items-center">
          <Image
            src="/images/partnership-call-img.svg"
            alt="sample"
            width={642}
            height={684}
          />
        </div>
      </div>
    </section>
  );
}
