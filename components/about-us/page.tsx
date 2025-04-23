import React from "react";
import Image from "next/image";
import CustomButton from "../ui/button";

export const AboutUs = () => {
  return (
    <div className="w-full bg-[#FFFFFF] section-gap">
      <div className="main-contain text-center">
        <h1 className="text-[#252525] text-[48px] font-[600]">About Us</h1>
        <div className="grid grid-cols-2 pt-[80px] gap-[80px]">
          <div
            style={{
              backgroundImage: `url('/assets/icons/about-us-background.png')`,
              backgroundSize: "contain",
              backgroundPosition: "center center",
              backgroundRepeat:"no-repeat"
            }}
          >
            <Image
              src="/assets/icons/about-us-image.svg"
              alt="logo"
              width={589}
              height={350}
            />
          </div>
          <div className="text-start">
            <h2 className="text-[30px] font-[600] text-[#252525]">
              Global Consulting Excellence for Organizational Transformation
            </h2>
            <ul className="list-disc pl-5 text-[#545454] text-[16px] pt-[45px]">
              <li>
                An emerging company meeting global demand for top-notch
                management consulting
              </li>
              <li>
                We specialize in creative problem-solving to enhance client
                performance. Our dedicated team analyzes Integrating automation
                with Latest Technology organizational challenges, develops
                improvement plans.
              </li>
              <li>
                We Offer tailored services for Technology Assessment, Product
                Development and Implementation Strategy
              </li>
            </ul>
            <CustomButton label="About Us" variant="dark" className="px-[30px] py-[13px] mt-[50px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
