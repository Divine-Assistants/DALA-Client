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
  src?: string;
  bottom?: string;
  right?: string;
  shadow?: string;
  width?: string;
  mt?: string;
  ml?: string;
}

export function Button({
  color = "#004AAD",
  paddingBlock = "11px",
  paddingInline = "55px",
  backgroundColor = "#fff",
  rounded = "15px",
  weight = 400,
  border = "none",
  src,
  shadow,
  bottom = "0",
  right = "0",
  text,
  width,
  mt,
  ml,
}: ButtonProps) {
  return (
    <button
      className={`relative h-fit w-fit block`}
      style={{
        color: `${color}`,
        paddingBlock: `${paddingBlock}`,
        paddingInline: `${paddingInline}`,
        backgroundColor: `${backgroundColor}`,
        fontWeight: weight,
        borderRadius: `${rounded}`,
        border: `${border}`,
        boxShadow: `${shadow}`,
        width: `${width}`,
        marginTop: `${mt}`,
        marginLeft: `${ml}`,
      }}
    >
      {src && (
        <img
          src={`${src}`}
          className="absolute"
          style={{ bottom: `${bottom}`, right: `${right}` }}
        ></img>
      )}
      {text}
    </button>
  );
}
