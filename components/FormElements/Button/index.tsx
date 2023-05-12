import React from "react";
import classNames from "classnames";

interface ButtonProps {
  size?: string;
  weight?: number;
  text: string;
  rounded?: string;
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
  border?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button({
  paddingRight,
  paddingLeft,
  rounded = "15px",
  weight = 400,
  border,
  src,
  shadow,
  bottom = "0",
  right = "0",
  text,
  width,
  mt,
  ml,
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={classNames(className)}
      style={{
        fontWeight: weight,
        borderRadius: `${rounded}`,
        boxShadow: `${shadow}`,
        width: `${width}`,
        marginTop: `${mt}`,
        marginLeft: `${ml}`,
        position: "relative",
        display: "block",
        paddingRight: `${paddingRight}`,
        paddingLeft: `${paddingLeft}`,
        transition: "all 0.3s linear",
        border: `${border}`,
      }}
      onClick={onClick}
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
