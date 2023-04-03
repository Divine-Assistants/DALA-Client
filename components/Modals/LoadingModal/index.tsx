import Image from "next/image";
import React from "react";

export function LoadingModal() {
  return (
    <div
      className="w-[100vw] h-[100vh] bg-[rgb(0,0,0,0.75)] fixed top-0 left-0 z-200 grid place-items-center"
      style={{ zIndex: 50 }}
    >
      <div className="p-[95px] rounded-[15px] bg-white">
        <Image
          src={"/images/loader2.svg"}
          alt="loader"
          height={172}
          width={172}
        />
      </div>
    </div>
  );
}
