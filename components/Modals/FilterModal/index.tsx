import { Button } from "@/components/FormElements/Button";
import React, { useState, Dispatch, SetStateAction } from "react";

interface FilterModalProp {
  setOpenFilter: Dispatch<SetStateAction<boolean>>;
}

export function FilterModal({ setOpenFilter }: FilterModalProp) {
  const [categories, setCategories] = useState<boolean>(true);

  return (
    <div
      className="w-[100vw] top-0 left-0 h-[100vh] fixed z-10 flex justify-center  pt-[130px] pb-[40px]"
      style={{ overflowY: "auto", backgroundColor: "rgba(0,0,0,0.5)" }}
      onClick={() => setOpenFilter((val) => !val)}
    >
      <div
        className="px-[27px] py-[64px] w-[80%] md:w-[70%] lg:w-[50%] xl:w-[40%] bg-white z-20 h-fit"
        style={{ boxShadow: "10px 10px 24px rgba(0, 0, 0, 0.19)" }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-[20px]">Filter by:</h3>
          <div className="flex items-center gap-x-[8px]  cursor-pointer w-fit">
            <p className="font-semibold text-[20px] text-[#DA063F]">Close</p>
            <img src="/images/close-red.svg" alt="close"></img>
          </div>
        </div>
        <section className="mt-[25px]">
          <div
            className="py-[30px]"
            style={{ borderBottom: "2px solid #E7E7E7" }}
          >
            <div
              className="flex items-center justify-between"
              onClick={() => setCategories((val) => !val)}
            >
              <p className="font-semibold text-[18px]">Course Categories</p>
              <img src="/images/arrow-right-black.svg" alt="arrow-right"></img>
            </div>
            {categories && (
              <div>
                <h3>Categories</h3>
              </div>
            )}
          </div>
          <div
            className="flex items-center justify-between py-[30px]"
            style={{ borderBottom: "2px solid #E7E7E7" }}
          >
            <p className="font-semibold text-[18px]">Tutors</p>
            <img src="/images/arrow-right-black.svg" alt="arrow-right"></img>
          </div>
          <div
            className="flex items-center justify-between py-[30px]"
            style={{ borderBottom: "2px solid #E7E7E7" }}
          >
            <p className="font-semibold text-[18px]">Price</p>
            <img src="/images/arrow-right-black.svg" alt="arrow-right"></img>
          </div>
          <div
            className="flex items-center justify-between py-[30px]"
            style={{ borderBottom: "2px solid #E7E7E7" }}
          >
            <p className="font-semibold text-[18px]">Level</p>
            <img src="/images/arrow-right-black.svg" alt="arrow-right"></img>
          </div>
        </section>
        <div className="mt-[207px] flex items-center gap-x-[30px] justify-center">
          <Button
            text="Filter"
            paddingBlock="14px"
            paddingInline="43px"
            backgroundColor="#004AAD"
            color="#E9E9E9"
            weight={600}
            size="16px"
            width="50%"
            border="2px solid #004AAD"
          />
          <Button
            text="Cancel All"
            paddingBlock="14px"
            paddingInline="43px"
            backgroundColor="#fff"
            color="#DA063F"
            border="2px solid #DA063F"
            weight={600}
            size="16px"
            width="50%"
          />
        </div>
      </div>
    </div>
  );
}
