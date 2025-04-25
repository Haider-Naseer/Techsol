import React from "react";
import Image from "next/image";
import CustomButton from "../ui/button";
import Link from "next/link";

export const CallToAction = () => {
  return (
    <div className="w-full bg-[#F1F5F9] section-gap">
      <div className="main-contain text-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 lg:pt-[80px] md:pt-[80px] pt-[0px] lg:gap-[80px] md:gap-[80px] gap-[40px]">
          <div className="text-start">
            <h2 className="lg:text-[48px] md:text-[48px] text-[30px] lg:pb-[55px] md:pb-[55px] pb-[25px] font-[600] text-[#252525]">
              Call to action
            </h2>
            <p className="lg:text-[23px] md:text-[23px] text-[18px] text-[#0F172A]">
              Perfect - because I'm ready to help! Let's setup a
              <span className="hidden md:inline">
                <br />
              </span>
              time to grab a coffee (or tea!) and find out the best
              <span className="hidden md:inline">
                <br />
              </span>
              financial path to embark on.
            </p>
            <Link href="/contact-us">
              <CustomButton
                label="Engage"
                variant="dark"
                className="px-[30px] py-[13px] mt-[50px]"
              />
            </Link>
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
