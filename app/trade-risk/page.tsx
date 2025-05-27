"use client";
import HeroService from "@/components/hero-service/page";
import WayChooseUs from "@/components/way-choose-us/page";
import Image from "next/image";
import { useState } from "react";

const Services = () => {

  const detail = [
    {
      title: "Enhanced Global Network",
      describe:
        "Compare & secure deals from thousands of bank and Corporates worldwide",
      icon: "/assets/icons/website.svg",
    },
    {
      title: "Speeds Deals ",
      describe: "Slash processing times with automated workows.",
      icon: "/assets/icons/speed.svg",
    },
    {
      title: "Real-Time Visibility",
      describe: "Track progress & insights on one digital platform.",
      icon: "/assets/icons/eye.svg",
    },
    {
      title: "In-Depth Analytics",
      describe: "Gain unmatched risk pricing data for informaed decisions.",
      icon: "/assets/icons/chart.svg",
    },
    {
      title: "Artificial intelligence",
      describe: "A.I powered solutions.",
      icon: "/assets/icons/AI.svg",
    },
    {
      title: "Quick onboarding",
      describe: "Easy onboarding, powerful results.",
      icon: "/assets/icons/onboard.svg",
      link: "resources-augmentation",
    },
  ];

  const title = "Trade Risk";
  const des = `Techsols' platform digitizes trade finance, connecting banks and corporates to execute global deals seamlessly.`;
  const label = "Get Trade risks services";
  const image = "/assets/icons/hero-section-icon.svg";
  const whyUs = `Techsols in house developed transformative digital platform that
            empowers the bank with access to trade deals originating from
            various corporates and banks worldwide A revolutionary single deal
            making platform digitizing the conventional trade finance landscape
            between Corporates and banks, as well as between banks. Building a
            wider network of Digitized Ecosystem to facilitate banks: Connect,
            Negotiate, Execute deals with corporates & banks.`;
  return (
    <>
      <HeroService
        title={title}
        des={des}
        label={label}
        image={image}
      />
        <>
          <div className="main-contain">
            <div className="section-gap">
              <div className="w-full text-center">
                <h2 className="text-[#0F172A] lg:text-[40px] md:text-[40px] text-[30px] font-[800]">
                  What Trade Risk is offering to our clients
                </h2>
              </div>
              <div className="lg:mt-[80px] mb:mt-[80px] mt-[40px]">
                <div className="lg:grid grid-cols-2 md:grid grid-cols-2 gap-[50px] lg:w-[60%] md:w-[60%] m-auto">
                  {detail?.map((item, index) => (
                    <div key={index} className="text-center mb-[20px]">
                      <div className="flex justify-center mb-[16px] min-h-[50px]">
                        <Image
                          src={item?.icon}
                          alt={`icon ${index}`}
                          width={36}
                          height={36}
                        />
                      </div>
                      <h3 className="m-0 text-[#0F172A] text-[24px] font-[700]">
                        {item?.title}
                      </h3>
                      <p className="text-[#0F172A] text-[18px] pt-[15px]">
                        {item?.describe}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <WayChooseUs whyUs={whyUs} />
        </>
    </>
  );
};
export default Services;
