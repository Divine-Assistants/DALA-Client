import React from "react";
import classNames from "classnames";

interface InputProps {
  type: string;
  placeholder?: string;
  paddingInline?: string;
  paddingBlock?: string;
  backgroundColor?: string;
  size?: string;
  weight?: number;
  color?: string;
  rounded?: string;
  width?: string;
  paddingRight?: string;
  inputImg?: string;
  name: string;
  className?: string;
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
  width,
  paddingRight,
  inputImg,
  name,
  className,
}: InputProps) {
  return (
    <div className="relative">
      <input
        className={classNames(`${"focus:outline-none"} ${className}`)}
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
