import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "./index.module.css";

interface ContentHeadingProps {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

export function ContentHeading({ isActive, setIsActive }: ContentHeadingProps) {
  const [hightlight, setHighlight] = useState<boolean>(true);

  return (
    <div
      className="py-[18px] px-[28px] rounded-[8px] flex items-center justify-between cursor-pointer"
      style={
        hightlight
          ? { backgroundColor: "#004AAD", color: "#fff" }
          : { backgroundColor: "#D2DCE8" }
      }
      onClick={(e) => {
        setHighlight((val) => !val);
      }}
    >
      <div className="flex gap-x-[19px]">
        <img
          src={
            hightlight
              ? "/images/arrow-down-white.svg"
              : "/images/arrow-right-black.svg"
          }
          alt="arrow-right"
        ></img>
        <p className="font-medium text-[20px]">
          Introduction, Project & Course Material
        </p>
      </div>
      <ul className={styles.contentSummary}>
        <li>3 Lectures </li>
        <li>27 Minutes</li>
      </ul>
    </div>
  );
}
