import Image from "next/image";
import React from "react";
import CustomButton from "../ui/button";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div
      className="py-[40px] lg:py-[0px] md:py-[0px] w-full bg-contain bg-no-repeat bg-center lg:h-[650px] md:h-[650px] lg:-mt-[141px] md:-mt-[141px] lg:pt-[200px] md:pt-[200px] lg:bg-[#E6F3FB] md:bg-[#E6F3FB] bg-[#1A94D5]"
      style={{
        backgroundImage: "url('/assets/icons/hero-section.png')",
      }}
    >
      <div className="main-contain">
        <div className="flex flex-wrap">
          {" "}
          <div className="lg:w-[55%] md:w-[55%] w-full">
            <div>
              <h1 className="text-[#fff] lg:text-[72px] md:text-[72px] text-[50px] font-[800] m-0">
                We Believe in
              </h1>
              <h2 className="text-[#CBD5E1] lg:text-[48px] md:text-[48px] text-[30px] font-[600] m-0">
                Simplifying the Complex
              </h2>
              <p className="text-[#CBD5E1] lg:text-[24px] md:text-[24px] text-[18px]">
                Synchronizing technology, amplifying potential
              </p>
            </div>
            <div className="lg:pt-[58px] md:pt-[58px] pt-[30px] flex gap-[20px]">
              <Link href={"/contact-us"}>
              <CustomButton
                variant="transparent"
                label="Get Started"
                className="px-[50px] py-[13px]"
              />
              </Link>
            </div>
          </div>
          <div className="lg:w-[45%] md:w-[45%] w-full lg:-mr-[5px] md:-mr-[5px] mt-[30px]">
            <Image
              src="/assets/icons/hero-section-image.svg"
              alt="logo"
              width={625}
              height={415}
            />
          </div>
        </div>
      </div>
    </div>
  );
};