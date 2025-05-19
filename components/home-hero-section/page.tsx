"use client";
import Link from "next/link";
import CustomButton from "../ui/button";

export const HeroSection = () => {
  return (
    <div className="max-h-[1100px] min-h-[600px] relative h-[104.5vh] overflow-hidden -mt-[170px] pt-[250px] lg:pt-[270px] md:pt-[270px]">
      <div className="main-contain">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/assets/videos/hero-section.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#426a78] opacity-40 z-10"></div>
        <div className="relative z-10 justify-start items-center h-full px-4">
          {" "}
          <div className="lg:w-[55%] md:w-[55%] w-full">
            <div>
              <h1 className="text-[#fff] lg:text-[72px] md:text-[72px] text-[45px] font-[800] m-0">
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
        </div>
      </div>
    </div>
  );
};
