import React from "react";
import Image from "next/image";
import CustomButton from "../ui/button";
import Link from "next/link";

export const AboutUs = ({ showButton = true }: { showButton?: boolean }) => {
  return (
    <div className="w-full bg-[#FFFFFF] section-gap">
      <div className="main-contain text-center">
        <h1 className="text-[#252525] lg:text-[48px] md:text-[48px] font-[600] text-[35px]">
          About Us
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 lg:pt-[80px] md:pt-[80px] pt-[40px] lg:gap-[80px] md:gap-[80px] gap-[40px]">
          <div
            style={{
              backgroundImage: `url('/assets/icons/about-us-background.png')`,
              backgroundSize: "contain",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="w-full h-[350px]">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/WAj7oR3HKMc?autoplay=1&mute=1&loop=1&playlist=WAj7oR3HKMc"
                title="About Us Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="text-start">
            <h2 className="lg:text-[30px] md:text-[30px] text-[20px] font-[600] text-[#252525]">
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
            {showButton && (
              <Link href="/about-us">
                <CustomButton
                  label="About Us"
                  variant="dark"
                  className="px-[30px] py-[13px] mt-[50px]"
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
