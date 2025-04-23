import Image from "next/image";
import React from "react";
import CustomButton from "../ui/button";

export const TradeSolution = () => {
  const tradeSolution = [
    {
      title: "Letter of Credit",
      description: ` Our LC suite gives you the platform to bid or get the
                competitive rates for your transactions lighting fast, may it be
                LC confirmation or LC discounting or both. With cutting edge
                technology Trade Risk gets your transaction deals executed fast
                with complementing time saving platform features.`,
      icon: "/assets/icons/trade_solution_01.svg",
    },
    {
      title: "Letter of Credit",
      description: ` Our LC suite gives you the platform to bid or get the
                competitive rates for your transactions lighting fast, may it be
                LC confirmation or LC discounting or both. With cutting edge
                technology Trade Risk gets your transaction deals executed fast
                with complementing time saving platform features.`,
      icon: "/assets/icons/trade_solution_02.svg",
    },
    {
      title: "Letter of Credit",
      description: ` Our LC suite gives you the platform to bid or get the
                competitive rates for your transactions lighting fast, may it be
                LC confirmation or LC discounting or both. With cutting edge
                technology Trade Risk gets your transaction deals executed fast
                with complementing time saving platform features.`,
      icon: "/assets/icons/trade_solution_03.svg",
    },
  ];
  return (
    <div className="flex bg-[#fff] pt-[60px] justify-center flex-wrap">
      <div className="w-full text-center">
        <p className="text-[#262626] text-[40px] font-[600]">Trade Solutions</p>
      </div>
      <div className="bg-[#F8F8F8] w-full px-[120px] mt-[55px] pt-[42px] pb-[30px]">
        <div className="grid grid-cols-3 gap-[60px]">
          {tradeSolution?.map((item) => (
            <div className="bg-[#F4F4F4]">
              <Image
                src={item?.icon}
                alt="trade_solution"
                height={400}
                width={360}
              />
              <div className="px-[12px] py-[16px]">
                <h2 className="text-[18px] font-[500] m-0 text-[#000]">
                  {item?.title}
                </h2>
                <p className="text-[16px] font-[400] text-[#606060]">
                  {item?.description}
                </p>
                <span className="text-[#225CC5] pt-[15px] block">
                  Learn more
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
        <CustomButton
          label="Trade Solutions"
          className="h-[60px] w-[160px] mt-[50px]"
        />
        </div>
      </div>
    </div>
  );
};
