import React from "react";
import CustomButton from "../ui/button";
import { PhoneIcon } from "@/public/assets/svg/phone";
import { EmailIcon } from "@/public/assets/svg/email";
import { MapIcon } from "@/public/assets/svg/map";
import Link from "next/link";


export const ContactUs = () => {
  return (
    <div
      className="bg-[#F1F5F9] pb-[76px] bg-no-repeat bg-top bg-cover py-20"
      style={{
        backgroundImage: "url('/assets/icons/contact-us-background.png')",
      }}
    >
      <div className="main-contain text-center">
        <div className="grid grid-cols-2 pt-[80px] gap-[80px]">
          <div className="w-full justify-center">
            <div className="bg-[#F1F5F9] w-[80%] min-h-[546px] ml-[35px]  rounded-[32px] p-[40px] text-start border-[#0000002E] border-[1px]">
              <h2 className="text-[#263F49] text-[28px] font-[700]">
                Contact Information
              </h2>
              <div className="pt-[67px]">
                <ul>
                  <li className="flex gap-[22px] text-[#263F49] text-[16px]">
                    <PhoneIcon />
                    <div>+1 5589 55488 55</div>
                  </li>
                  <li className="flex gap-[22px] text-[#263F49] text-[16px] pt-[30px]">
                    <EmailIcon />
                    <div>info@techsol-bh.com</div>
                  </li>
                  <li className="flex gap-[22px] text-[#263F49] text-[16px]  pt-[30px]">
                    <MapIcon />
                    <div>
                      9033 Bldg 15, 3801, Block 338, Al-Qudaybiyah, Manama,
                      Bahrain
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="text-start">
            <h2 className="text-[48px] pb-[55px] font-[600] text-[#252525]">
              Contact Us
            </h2>
            <p className="text-[24px]">
              Consultancy provided for Risk planning, Trade finance and supply
              chain finance products. Worked on projects with Public & private
              organisations on providing consultancy and product support.
            </p>
            <Link href={'/contact-us'} >
            <CustomButton
              label="Get in touch"
              variant="dark"
              className="px-[30px] py-[13px] mt-[50px]"
            />
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
