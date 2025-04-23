import Image from "next/image";
import React from "react";
import CustomButton from "../ui/button";

export const HeroSection = () => {
  return (
    <div
      className="w-full bg-contain bg-no-repeat bg-center h-[650px] -mt-[141px] pt-[200px] bg-[#E6F3FB]"
      style={{
        backgroundImage: "url('/assets/icons/hero-section.png')",
      }}
    >
      <div className="main-contain flex">
        <div className="w-[65%]">
          <div>
            <h1 className="text-[#fff] text-[72px] font-[800] m-0">
              We Believe in
            </h1>
            <h2 className="text-[#CBD5E1] text-[48px] font-[600] m-0">
              Simplifying the Complex
            </h2>
            <p className="text-[#CBD5E1] text-[24px]">
              Synchronizing technology, amplifying potential
            </p>
          </div>
          <div className="pt-[58px] flex gap-[20px]">
            <CustomButton
              variant="transparent"
              label="Get Started"
              className="px-[50px] py-[13px]"
            />
            <div className="w-[50px] h-[50px] flex justify-center items-center border border-[#fff] rounded-full">
              <Image
                src="/assets/icons/hero-button.svg"
                alt="logo"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
        <div className="-mr-[5px]">
          <Image
            src="/assets/icons/hero-section-image.svg"
            alt="logo"
            width={625}
            height={415}
          />
        </div>
      </div>
    </div>
  );
};
