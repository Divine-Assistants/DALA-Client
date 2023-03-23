import React from "react";
import classnames from "classnames";

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
  className?: string;
  paddingRight?: string;
  paddingLeft?: string;
}

export function Button({
  paddingBlock = "11px",
  paddingInline = "55px",
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
      className={classnames(className)}
      style={{
        paddingBlock: `${paddingBlock}`,
        paddingInline: `${paddingInline}`,
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
        transition: "all 0.3s linear",
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
