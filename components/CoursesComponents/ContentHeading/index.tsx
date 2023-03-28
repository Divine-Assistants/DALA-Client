import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./index.module.css";

interface ContentHeadingProps {
  head: string;
  opened: string[];
  setOpened: Dispatch<SetStateAction<string[]>>;
  allOpen: boolean;
}

export function ContentHeading({
  head,
  opened,
  setOpened,
  allOpen,
}: ContentHeadingProps) {
  const [hightlight, setHighlight] = useState<boolean>(false);

  useEffect(() => {
    const checkAllOpen = () => {
      if (allOpen === true) {
        setHighlight(true);
      }
    };
    checkAllOpen();
  }, [opened]);

  const setOpenedArray = (title: string) => {
    setOpened((prevVal) => [...prevVal, title]);
    return;
  };

  return (
    <div
      className="py-[18px] px-[28px] rounded-[8px] flex items-center justify-between cursor-pointer"
      style={
        hightlight === true && opened.includes(head)
          ? { backgroundColor: "#004AAD", color: "#fff" }
          : { backgroundColor: "#D2DCE8" }
      }
      onClick={(e) => {
        setHighlight((val) => !val);
        if (opened.includes(head)) {
          const headIndex: number = opened.indexOf(head);
          setOpened((prevArray) =>
            prevArray.filter((_, index) => index !== headIndex)
          );
        } else {
          setOpenedArray(head);
        }
      }}
    >
      <div className="flex gap-x-[19px] items-center">
        <img
          src={
            hightlight === true && opened.includes(head)
              ? "/images/arrow-down-white.svg"
              : "/images/arrow-right-black.svg"
          }
          alt="arrow-right"
        ></img>
        <p className="font-medium text-[14px] sm:text-[20px]">{head}</p>
      </div>
      <ul className="flex items-center text-[14px] sm:text-[20px] gap-x-[40px]">
        <li>3 Lectures </li>
        <li>27 Minutes</li>
      </ul>
    </div>
  );
}
