import { Button } from "@/components/FormElements/Button";
import React, { useState, Dispatch, SetStateAction } from "react";

interface FilterModalProp {
  setOpenFilter: Dispatch<SetStateAction<boolean>>;
}

export function FilterModal({ setOpenFilter }: FilterModalProp) {
  const [categories, setCategories] = useState<boolean>(false);
  const [tutors, setTutors] = useState<boolean>(false);
  const [price, setPrice] = useState<boolean>(false);
  const [level, setLevel] = useState<boolean>(false);

  return (
    <div
      className="w-[100vw] top-0 left-0 h-[100vh] fixed z-10 flex justify-center  pt-[130px] pb-[40px]"
      style={{ overflowY: "auto", backgroundColor: "rgba(0,0,0,0.5)" }}
      onClick={() => setOpenFilter((val) => !val)}
    >
      <div
        className="px-[27px] py-[64px] w-full sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[40%] bg-white z-20 h-fit"
        style={{ boxShadow: "10px 10px 24px rgba(0, 0, 0, 0.19)" }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-[20px]">Filter by:</h3>
          <div
            className="flex items-center gap-x-[8px]  cursor-pointer w-fit"
            onClick={() => setOpenFilter((val) => !val)}
          >
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
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setCategories((val) => !val)}
            >
              <p className="font-semibold text-[18px] sm:text-[28px]">
                Course Categories
              </p>
              <img
                src={
                  categories
                    ? "/images/arrow-down-black.svg"
                    : "/images/arrow-right-black.svg"
                }
                alt="arrow-right"
              ></img>
            </div>
            {categories && (
              <section className="mt-[20px] flex flex-col gap-y-[20px]">
                <div className="flex items-center gap-x-[10px]">
                  <input
                    type={"checkbox"}
                    className="sm:w-[20px] sm:h-[20px]"
                  />
                  <p className="font-semibold text-[14px] sm:text-[24px] text-[#1E1E1E]">
                    Administrative Management (2)
                  </p>
                </div>
                <div className="flex items-center gap-x-[10px]">
                  <input
                    type={"checkbox"}
                    className="sm:w-[20px] sm:h-[20px]"
                  />
                  <p className="font-semibold text-[14px] sm:text-[24px] text-[#1E1E1E]">
                    Business Management (2)
                  </p>
                </div>
                <div className="flex items-center gap-x-[10px]">
                  <input
                    type={"checkbox"}
                    className="sm:w-[20px] sm:h-[20px]"
                  />
                  <p className="font-semibold text-[14px] sm:text-[24px] text-[#1E1E1E]">
                    Sales Training (5)
                  </p>
                </div>
                <div className="flex items-center gap-x-[10px]">
                  <input
                    type={"checkbox"}
                    className="sm:w-[20px] sm:h-[20px]"
                  />
                  <p className="font-semibold text-[14px] sm:text-[24px] text-[#1E1E1E]">
                    Project Management (5)
                  </p>
                </div>
                <div className="flex items-center gap-x-[10px]">
                  <input
                    type={"checkbox"}
                    className="sm:w-[20px] sm:h-[20px]"
                  />
                  <p className="font-semibold text-[14px] sm:text-[24px] text-[#1E1E1E]">
                    Web Development (4)
                  </p>
                </div>
                <div className="flex items-center gap-x-[10px]">
                  <input
                    type={"checkbox"}
                    className="sm:w-[20px] sm:h-[20px]"
                  />
                  <p className="font-semibold text-[14px] sm:text-[24px] text-[#1E1E1E]">
                    Web Design (2)
                  </p>
                </div>
                <div className="flex items-center gap-x-[10px]">
                  <input
                    type={"checkbox"}
                    className="sm:w-[20px] sm:h-[20px]"
                  />
                  <p className="font-semibold text-[14px] sm:text-[24px] text-[#1E1E1E]">
                    Divital Marketing (9)
                  </p>
                </div>
                <div className="flex items-center gap-x-[10px]">
                  <input
                    type={"checkbox"}
                    className="sm:w-[20px] sm:h-[20px]"
                  />
                  <p className="font-semibold text-[14px] sm:text-[24px] text-[#1E1E1E]">
                    Elective Courses (9)
                  </p>
                </div>
              </section>
            )}
          </div>

          <div
            className="py-[30px]"
            style={{ borderBottom: "2px solid #E7E7E7" }}
          >
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setTutors((val) => !val)}
            >
              <p className="font-semibold text-[18px] sm:text-[28px]">Tutors</p>
              <img
                src={
                  tutors
                    ? "/images/arrow-down-black.svg"
                    : "/images/arrow-right-black.svg"
                }
                alt="arrow-right"
              ></img>
            </div>

            {tutors && (
              <section className="mt-[20px] flex flex-col gap-y-[20px]">
                <div className="flex items-center gap-x-[10px]">
                  <input
                    type={"checkbox"}
                    className="sm:w-[20px] sm:h-[20px]"
                  />
                  <p className="font-semibold text-[14px] sm:text-[24px] text-[#1E1E1E]">
                    Barisua George
                  </p>
                </div>
                <div className="flex items-center gap-x-[10px]">
                  <input
                    type={"checkbox"}
                    className="sm:w-[20px] sm:h-[20px]"
                  />
                  <p className="font-semibold text-[14px] sm:text-[24px] text-[#1E1E1E]">
                    Nyesome Rita
                  </p>
                </div>
                <div className="flex items-center gap-x-[10px]">
                  <input
                    type={"checkbox"}
                    className="sm:w-[20px] sm:h-[20px]"
                  />
                  <p className="font-semibold text-[14px] sm:text-[24px] text-[#1E1E1E]">
                    Gratta Orji
                  </p>
                </div>
                <div className="flex items-center gap-x-[10px]">
                  <input
                    type={"checkbox"}
                    className="sm:w-[20px] sm:h-[20px]"
                  />
                  <p className="font-semibold text-[14px] sm:text-[24px] text-[#1E1E1E]">
                    Selah Ahmed
                  </p>
                </div>
              </section>
            )}
          </div>

          <div
            className="py-[30px]"
            style={{ borderBottom: "2px solid #E7E7E7" }}
          >
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setPrice((val) => !val)}
            >
              <p className="font-semibold text-[18px] sm:text-[28px]">Price</p>
              <img
                src={
                  price
                    ? "/images/arrow-down-black.svg"
                    : "/images/arrow-right-black.svg"
                }
                alt="arrow-right"
              ></img>
            </div>

            {price && (
              <section className="mt-[20px] flex flex-col gap-y-[20px]">
                <div className="flex items-center gap-x-[10px]">
                  <input
                    type={"checkbox"}
                    className="sm:w-[20px] sm:h-[20px]"
                  />
                  <p className="font-semibold text-[14px] sm:text-[24px] text-[#1E1E1E]">
                    $100 - $200 (2)
                  </p>
                </div>
                <div className="flex items-center gap-x-[10px]">
                  <input
                    type={"checkbox"}
                    className="sm:w-[20px] sm:h-[20px]"
                  />
                  <p className="font-semibold text-[14px] sm:text-[24px] text-[#1E1E1E]">
                    $200 - $300 (2)
                  </p>
                </div>
                <div className="flex items-center gap-x-[10px]">
                  <input
                    type={"checkbox"}
                    className="sm:w-[20px] sm:h-[20px]"
                  />
                  <p className="font-semibold text-[14px] sm:text-[24px] text-[#1E1E1E]">
                    $400 - $500 (5)
                  </p>
                </div>
                <div className="flex items-center gap-x-[10px]">
                  <input
                    type={"checkbox"}
                    className="sm:w-[20px] sm:h-[20px]"
                  />
                  <p className="font-semibold text-[14px] sm:text-[24px] text-[#1E1E1E]">
                    $600 - $700 (5)
                  </p>
                </div>
                <div className="flex items-center gap-x-[10px]">
                  <input
                    type={"checkbox"}
                    className="sm:w-[20px] sm:h-[20px]"
                  />
                  <p className="font-semibold text-[14px] sm:text-[24px] text-[#1E1E1E]">
                    $800 - $900 (4)
                  </p>
                </div>
                <div className="flex items-center gap-x-[10px]">
                  <input
                    type={"checkbox"}
                    className="sm:w-[20px] sm:h-[20px]"
                  />
                  <p className="font-semibold text-[14px] sm:text-[24px] text-[#1E1E1E]">
                    $1000 (4)
                  </p>
                </div>
              </section>
            )}
          </div>
          <div
            className="py-[30px]"
            style={{ borderBottom: "2px solid #E7E7E7" }}
          >
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setLevel((val) => !val)}
            >
              <p className="font-semibold text-[18px] sm:text-[28px]">Level</p>
              <img
                src={
                  level
                    ? "/images/arrow-down-black.svg"
                    : "/images/arrow-right-black.svg"
                }
                alt="arrow-right"
              ></img>
            </div>

            {level && (
              <section className="mt-[20px] flex flex-col gap-y-[20px]">
                <div className="flex items-center gap-x-[10px]">
                  <input
                    type={"checkbox"}
                    className="sm:w-[20px] sm:h-[20px]"
                  />
                  <p className="font-semibold text-[14px] sm:text-[24px] text-[#1E1E1E]">
                    All Levels
                  </p>
                </div>
                <div className="flex items-center gap-x-[10px]">
                  <input
                    type={"checkbox"}
                    className="sm:w-[20px] sm:h-[20px]"
                  />
                  <p className="font-semibold text-[14px] sm:text-[24px] text-[#1E1E1E]">
                    Beginner
                  </p>
                </div>
                <div className="flex items-center gap-x-[10px]">
                  <input
                    type={"checkbox"}
                    className="sm:w-[20px] sm:h-[20px]"
                  />
                  <p className="font-semibold text-[14px] sm:text-[24px] text-[#1E1E1E]">
                    Intermediate
                  </p>
                </div>
                <div className="flex items-center gap-x-[10px]">
                  <input
                    type={"checkbox"}
                    className="sm:w-[20px] sm:h-[20px]"
                  />
                  <p className="font-semibold text-[14px] sm:text-[24px] text-[#1E1E1E]">
                    Expert
                  </p>
                </div>
              </section>
            )}
          </div>
        </section>
        <div className="mt-[207px] flex items-center gap-x-[30px] justify-center">
          <Button
            text="Filter"
            paddingBlock="14px"
            paddingInline="43px"
            weight={600}
            size="16px"
            width="50%"
            border="2px solid #004AAD"
            className="hover:bg-mine text-mine hover:text-white"
          />
          <Button
            text="Cancel All"
            paddingBlock="14px"
            paddingInline="43px"
            border="2px solid #DA063F"
            weight={600}
            size="16px"
            width="50%"
            className="text-[#DA063F] text-[#DA063F] hover:bg-[#DA063F] hover:text-white"
          />
        </div>
      </div>
    </div>
  );
}
