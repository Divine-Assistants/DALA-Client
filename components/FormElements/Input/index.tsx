import { type } from "os";
import React from "react";

interface InputProps {
  type: string;
  placeholder: string;
  paddingInline?: string;
  paddingBlock?: string;
  backgroundColor?: string;
  size?: string;
  weight?: string;
  color?: string;
  rounded?: string;
}

export function Input({
  type,
  placeholder,
  paddingBlock,
  paddingInline,
  backgroundColor,
  size,
  weight,
  color,
  rounded,
}: InputProps) {
  return (
    <input
      className="text-[24px] focus:outline-none placeholder:text-white"
      type={type}
      placeholder={placeholder}
      style={{
        paddingBlock: `${paddingBlock}`,
        paddingInline: `${paddingInline}`,
        backgroundColor: `${backgroundColor}`,
        fontWeight: `${weight}`,
        fontSize: `${size}`,
        color: `${color}`,
        borderRadius: `${rounded}`,
      }}
    ></input>
  );
}
