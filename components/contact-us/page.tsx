import React from "react";
import CustomButton from "../ui/button";
import { PhoneIcon } from "@/public/assets/svg/phone";
import { EmailIcon } from "@/public/assets/svg/email";
import { MapIcon } from "@/public/assets/svg/map";
import Link from "next/link";
import Image from "next/image";

export const ContactUs = () => {
  return (
    <div
      className="bg-[#F1F5F9] pb-[76px] bg-no-repeat bg-top bg-cover py-20"
      style={{
        backgroundImage: "url('/assets/icons/contact-us-background.png')",
      }}
    >
      <div className="main-contain text-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 lg:pt-[80px] md:pt-[80px] lg:pt-[40px] md:pt-[40px] lg:gap-[80px] md:gap-[80px] gap-[40px]">
          <div className="w-full justify-center">
            <div className="bg-[#F1F5F9] overflow-hidden relative lg:w-[80%] md:w-[80%] min-h-[546px] lg:ml-[35px] md:ml-[35px] rounded-[32px] lg:p-[40px] md:p-[40px] p-[20px] text-start border-[#0000002E] border-[1px]">
              <h2 className="text-[#263F49] lg:text-[28px] md:text-[28px] text-[24px] font-[700]">
                Contact Information
              </h2>
              <div className="pt-[67px]">
                <ul>
                  <li className="flex gap-[22px] text-[#263F49] text-[16px]">
                    <PhoneIcon />
                    <div>+92 321 4011112</div>
                  </li>
                  <li className="flex gap-[22px] text-[#263F49] text-[16px] pt-[30px]">
                    <EmailIcon />
                    <div>info@techsol-bh.com</div>
                  </li>
                  <li className="flex gap-[22px] text-[#263F49] text-[16px]  pt-[30px]">
                    <div className="w-[25px]">
                      <MapIcon />
                    </div>
                    <div>
                      9033 Bldg 15, 3801, Block 338, Al-{" "}
                      <br className="responsive-br" /> Qudaybiyah, Manama,
                      Bahrain
                    </div>
                  </li>
                </ul>
              </div>
              <Image
                src={"/assets/icons/contact-us-bg.png"}
                alt="design-contact"
                width={300}
                height={300}
                className="absolute right-[-22%] bottom-[-20%]"
              />
            </div>
          </div>

          <div className="flex items-center">
            <div className="text-start">
              <h2 className="lg:text-[48px] md:text-[48px] text-[30px] lg:pb-[55px] md:pb-[55px] pb-[30px] font-[600] text-[#252525]">
                Contact Us
              </h2>
              <p className="lg:text-[24px] md:text-[24px] text-[18px]">
                Contact us to consult you better
              </p>
              <Link href={"/contact-us"}>
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
