import { Button } from "@/components/FormElements/Button";
import React from "react";
import styles from "./index.module.css";
import Link from "next/link";

export function PurchaseCourse2() {
  return (
    <div
      className="py-[35px] px-[25px] bg-white rounded-[15px]"
      style={{ boxShadow: "12px 12px 16px 3px rgba(0, 0, 0, 0.08)" }}
    >
      <div className="w-full rounded-[10px] overflow-hidden">
        <img
          src="/images/view-course-cover.svg"
          alt="course-cover"
          className="w-full h-full object-cover"
        ></img>
      </div>
      <div className="mt-[38px]">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-[50px] text-mine">$ 84.99</p>
          <Button
            text="Purchase"
            className="bg-[#004AAD1A] text-mine hover:bg-mine hover:text-white py-[18px] px-[60px]"
            size="24px"
            weight={600}
          />
        </div>
        <div className="mt-[46px]">
          <h3 className="font-semibold text-[29px] text-mine2">
            This Course Includes:
          </h3>
          <ul className={styles.courseSummary}>
            <li>50 Hours of self-paced video lessons</li>
            <li>79 Articles</li>
            <li>Completion Certificate </li>
            <li>Life Time Access</li>
          </ul>
        </div>
        <Link href={"/login"}>
          {" "}
          <Button
            text="Start Learning"
            width="100%"
            className="text-white bg-mine py-[18px]"
            weight={600}
            size="24px"
            mt="46px"
          />
        </Link>
      </div>
    </div>
  );
}
