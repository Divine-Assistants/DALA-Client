import React from "react";

export function WhyDala() {
  return (
    <section className="flex flex-col-reverse lg:grid grid-cols-2 px-[28px] lg:px-[95px]">
      <div className="grid place-items-center h-full rounded-[15px] overflow-hidden">
        <img
          src="/images/why-dala-img.svg"
          alt="sample"
          className="h-full"
          style={{ objectFit: "cover" }}
        ></img>
      </div>
      <div className="lg:pl-[100px] py-[50px]">
        <h3 className="font-semibold text-[24px] md:text-[40px] lg:text-[50px]">
          Why D.A.L.A.?
        </h3>
        <p className="sm:text-[20px] text-[16px] md:text-[28px] mt-[23px] text-justify">
          Lets face it: youve probably already heard this a million times
          before: there are million-in-one programs in the world today that
          educate people and give them free education; nevertheless, there is
          one thing that makes Divine Assistants Learning Academy stand out from
          the crowd. People who attend our Academy will not only receive an
          education but will also be guaranteed a job offer once they have
          completed their studies. This indicates that once they have finished
          all of their learning programs, they will be eligible to work with
          Divine Assistants in the organization.
        </p>
      </div>
    </section>
  );
}
