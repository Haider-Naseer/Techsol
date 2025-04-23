import React from "react";
import Image from "next/image";
import CustomButton from "../ui/button";

export const CallToAction = () => {
  return (
    <div className="w-full bg-[#F1F5F9] section-gap">
      <div className="main-contain text-center">
        <div className="grid grid-cols-2 pt-[80px] gap-[80px]">
          <div className="text-start">
            <h2 className="text-[48px] pb-[55px] font-[600] text-[#252525]">
              Call to action
            </h2>
            <p className="text-[23px] text-[#0F172A]">
              Perfect - because I'm ready to help! Let's setup a <br/> time to grab a
              coffee (or tea!) and find out the best <br/> financial path to embark
              on.
            </p>{" "}
            <CustomButton
              label="Engage"
              variant="dark"
              className="px-[30px] py-[13px] mt-[50px]"
            />
          </div>
          <div
            style={{
              backgroundImage: `url('/assets/icons/about-us-background.png')`,
              backgroundSize: "contain",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Image
              src="/assets/icons/call-to-action.svg"
              alt="logo"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
