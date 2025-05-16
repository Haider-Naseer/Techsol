import React from "react";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <div className="w-full section-gap">
      <div className="main-contain text-center">
        <Image
          src="/assets/icons/call-to-action.png"
          alt="logo"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};
