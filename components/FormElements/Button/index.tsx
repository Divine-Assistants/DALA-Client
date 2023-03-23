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
  hover?: string;
  className?: string;
  paddingRight?: string;
  paddingLeft?: string;
}

export function Button({
  color = "#004AAD",
  paddingBlock = "11px",
  paddingInline = "55px",
  backgroundColor = "#fff",
  paddingRight,
  paddingLeft,
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
  className,
}: ButtonProps) {
  return (
    <button
      className={className}
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
        position: "relative",
        display: "block",
        paddingRight: `${paddingRight}`,
        paddingLeft: `${paddingLeft}`,
        transition: "all 0.5s linear",
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
