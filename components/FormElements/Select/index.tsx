import React from "react";

interface SelectProps {
  options: string[];
  border?: string;
  paddingBlock?: string;
  paddingInline?: string;
  rounded?: string;
  backgroundColor?: string;
  color?: string;
}

export function Select({
  options,
  border,
  paddingBlock,
  paddingInline,
  rounded,
  backgroundColor,
  color,
}: SelectProps) {
  const allOptions = options?.map((item, index) => {
    return (
      <option
        key={index}
        className="rounded-0 bg-white text-[#8F8F8F] hover:bg-mine hover:text-white"
        style={{ border: "2px solid red" }}
      >
        {item}
      </option>
    );
  });

  return (
    <select
      style={{
        border: `${border}`,
        paddingInline: `${paddingInline}`,
        paddingBlock: `${paddingBlock}`,
        borderRadius: `${rounded}`,
        backgroundColor: `${backgroundColor}`,
        color: `${color}`,
      }}
      className="text-[24px] focus:outline-none text-[#8F8F8F]"
    >
      {allOptions}
    </select>
  );
}
