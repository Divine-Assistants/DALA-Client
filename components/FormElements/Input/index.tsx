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
  border?: string;
  width?: string;
  paddingRight?: string;
  inputImg?: string;
  name: string;
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
  border,
  width,
  paddingRight,
  inputImg,
  name,
}: InputProps) {
  return (
    <div className="relative">
      <input
        className="text-[20px] xl:text-[24px] focus:outline-none"
        type={type}
        name={name}
        placeholder={placeholder}
        style={{
          paddingBlock: `${paddingBlock}`,
          paddingInline: `${paddingInline}`,
          backgroundColor: `${backgroundColor}`,
          fontWeight: `${weight}`,
          fontSize: `${size}`,
          color: `${color}`,
          borderRadius: `${rounded}`,
          border: `${border}`,
          width: `${width}`,
          paddingRight: `${paddingRight}`,
        }}
      ></input>
      {inputImg && (
        <div className="absolute right-0 top-0 h-full grid place-items-center px-[15px]">
          <img src={inputImg} alt="search"></img>
        </div>
      )}
    </div>
  );
}
