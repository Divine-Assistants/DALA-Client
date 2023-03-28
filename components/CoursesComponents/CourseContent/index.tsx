import { Button } from "@/components/FormElements/Button";
import React, { useState } from "react";
import { ContentHeading } from "../ContentHeading";
import { MainContent } from "../MainContents";
import styles from "./index.module.css";

export function CourseContent() {
  const headings: string[] = [
    "introduction",
    "fundamentals",
    "setting",
    "project",
    "defining",
    "chart",
    "extra",
    "before",
    "what",
  ];

  const [opened, setOpened] = useState<string[]>([]);
  const [allOpen, setAllOpen] = useState<boolean>(false);

  return (
    <section className="mt-[230px] px-[28px] xl:px-[95px] overflow-hidden">
      <h2 className="font-semibold text-[24px] sm:text-[36px] text-mine2">
        Course Content
      </h2>
      <div className="flex flex-col gap-y-[10px] md2:flex-row mt-[7px] justify-between">
        <ul className={styles.contentSummary}>
          <li className="font-medium text-[14px] sm:text-[20px]">9 Sections</li>
          <li className="font-medium text-[14px] sm:text-[20px]">
            59 Lectures
          </li>
          <li className="font-medium text-[14px] sm:text-[20px]">
            9h 4m Total Length
          </li>
        </ul>
        <p
          className="font-medium text-[14px] sm:text-[20px] text-mine cursor-pointer"
          onClick={() => {
            setOpened((prevArray) => {
              return [...headings];
            });
            setAllOpen(true);
          }}
        >
          Expand All Sections
        </p>
      </div>
      <div className="mt-[39px] flex flex-col gap-y-[35px]">
        {headings.map((item, index) => {
          return (
            <div key={index}>
              <ContentHeading
                head={item}
                opened={opened}
                setOpened={setOpened}
                allOpen={allOpen}
              />
              {opened.includes(item) && (
                <div>
                  {[1, 1, 1].map((item, index) => {
                    return <MainContent documentSize="1.9KB" key={index} />;
                  })}
                </div>
              )}
            </div>
          );
        })}
        <div className="sm:hidden">
          <Button
            text="See More"
            width="100%"
            mt="15px"
            border="2px solid #1E1E1E"
            className="py-[15px]"
          />
        </div>
      </div>
    </section>
  );
}
