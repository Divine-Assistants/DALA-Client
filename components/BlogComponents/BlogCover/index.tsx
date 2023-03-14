import React from "react";

export function BlogCover() {
  return (
    <section className="px-[28px] xl:px-[95px] py-[236px] xl:py-[76px]">
      <div className="relative overflow-hidden hidden rounded-[15px] w-full h-full md:grid place-items-center">
        <img
          src="/images/blue-background.svg"
          alt="background"
          className="w-full h-full object-cover hidden md:block"
        ></img>
        <div className="w-full h-full z-20 absolute top-0 left-0 grid place-items-center">
          <h1 className="font-semibold text-[50px] text-white">News/Blogs</h1>
        </div>
      </div>
      <div className="md:hidden">
        <h1 className="font-semibold text-[32px]">News/Blogs</h1>
        <p className="text-[16px] mt-[5px]">
          Here are some of the news and blogs available at DivineAssistants
          Learning Academy
        </p>
      </div>
    </section>
  );
}
