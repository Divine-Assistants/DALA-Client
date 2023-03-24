import React from "react";
import { StudentsReview } from "./studentReview";

export function CourseReview() {
  return (
    <section className="px-[28px] xl:px-[95px] mt-[200px]">
      <h2 className="text-[36px] font-semibold">Course Reviews</h2>
      <div className="flex flex-col gap-y-[70px] mt-[48px]">
        {[1, 1, 1, 1].map((item, index) => {
          return <StudentsReview />;
        })}
      </div>
    </section>
  );
}
