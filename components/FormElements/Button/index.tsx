import React from "react";

interface ButtonProps {
  color?: string;
  paddingBlock?: string;
  paddingInline?: string;
  backgroundColor?: string;
  size?: string;
  weight?: number;
  text: string;
  rounded?: string;
  border?: string;
}

export function Button({
  color = "#004AAD",
  paddingBlock = "11px",
  paddingInline = "55px",
  backgroundColor = "#fff",
  rounded = "15px",
  size = "24px",
  weight = 400,
  border = "none",
  text,
}: ButtonProps) {
  return (
    <button
      className="py-[11px] px-[55px]"
      style={{
        color: `${color}`,
        paddingBlock: `${paddingBlock}`,
        paddingInline: `${paddingInline}`,
        backgroundColor: `${backgroundColor}`,
        fontSize: `${size}`,
        fontWeight: weight,
        borderRadius: `${rounded}`,
        border: `${border}`,
      }}
    >
      {text}
    </button>
  );
}
