"use client";
import CustomButton from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { contactUsSchema } from "@/validation/contact-us";
import { sendEmail } from "../actions/sendEmail";
import CustomToast from "@/components/ui/customToast";
import { useState } from "react";


const ContactUs = () => {

  const [isLoading, setIsLoading] = useState(false)
  interface contactUsForm {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
  }

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset, // Get reset method
  } = useForm<contactUsForm>({
    resolver: yupResolver(contactUsSchema),
  });

  const onSubmit: SubmitHandler<contactUsForm> = async (detail) => {
    try {
      setIsLoading(true)
      await sendEmail(detail);
      reset();
      CustomToast.success("Message send successfully.")
    } catch (error) {
      CustomToast.error("Failed to send message")
    } finally{
      setIsLoading(false)
    }
  };

  return (
    <div>
      <div className="main-contain">
        {" "}
        <div className="section-gap">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 w-full lg:gap-[60px] md:gap-[60px] gap-[40px]">
            <div className="flex items-center">
              <h2 className="lg:text-[48px] md:text-[48px] text-[30px] font-[600] pt-[20px]">
                Contact Information
              </h2>
            </div>
            <div>
              <Image
                src={"/assets/icons/map.svg"}
                width={628}
                height={324}
                alt="map"
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-3 w-full lg:gap-[100px] md:gap-[100px] gap-[40px] lg:mt-[95px] md:mt-[95px] mt-[40px]">
            <div>
              <div className="flex gap-[20px] lg:min-h-[100px] md:min-h-[100px]  border-r-[#C2C2C2] lg:border-r-[1px] md:border-r-[1px] items-center">
                <Image
                  src={"/assets/icons/email.svg"}
                  alt="map"
                  width={30}
                  height={30}
                />
                <span>info@techsol-bh.com</span>
              </div>
            </div>
            <div>
              <div className="flex gap-[20px] lg:min-h-[100px] md:min-h-[100px]  border-r-[#C2C2C2] lg:border-r-[1px] md:border-r-[1px] items-center">
                <Image
                  src={"/assets/icons/phone.svg"}
                  alt="map"
                  width={30}
                  height={30}
                />
                <span>+92 321 4011112</span>
              </div>
            </div>
            <div>
              {" "}
              <div className="flex gap-[20px] lg:min-h-[100px] md:min-h-[100px]  items-center">
                <Image
                  src={"/assets/icons/map-icon.svg"}
                  alt="map"
                  width={30}
                  height={30}
                />
                <span>
                  9033 Bldg 15, 3801, Block 338, Al-Qudaybiyah, Manama, Bahrain
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-contain bg-[#E6F3FB]">
        <div className="section-gap text-center">
          <h1 className="text-[#252525] lg:text-[48px] md:text-[48px] font-[600] text-[35px]">
            Contact Us
          </h1>
          <p className="text-[#4F4F4F] text-[14px] font-[500]">
            Consultancy provided for Risk planning, Trade finance and supply
            chain finance products. Worked on projects with Public & private{" "}
            <span className="hidden md:inline">
              <br />
            </span>
            organisations on providing consultancy and product support.
          </p>
          <div className="flex justify-center lg:pt-[100px] md:pt-[100px] pt-[50px]">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="lg:w-[60%] md:w-[60%] w-full"
            >
              <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-[27px]">
                <div>
                  <label className="text-[14px] font-[500] mb-[5px] text-[#000] flex">
                    First Name{" "}
                    <span className="text-red-500 mt-[1px] pl-[1px] block">
                      *
                    </span>
                  </label>
                  <input
                    {...register("firstName")}
                    placeholder="User"
                    className="p-[13px] bg-[#FFFFFF] w-full focus:outline-none rounded-[9px]"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs w-full text-start mt-[5px]">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-[14px] font-[500] mb-[5px] text-[#000] flex">
                    Last Name
                    <span className="text-red-500 mt-[1px] pl-[1px] block">
                      *
                    </span>
                  </label>
                  <input
                    {...register("lastName")}
                    placeholder="User"
                    className="p-[13px] bg-[#FFFFFF] w-full focus:outline-none rounded-[9px]"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs w-full text-start mt-[5px]">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-[27px] pt-[20px]">
                <div>
                  <label className="text-[14px] font-[500] mb-[5px] text-[#000] flex">
                    Email
                    <span className="text-red-500 mt-[1px] pl-[1px] block">
                      *
                    </span>
                  </label>
                  <input
                    {...register("email")}
                    placeholder="User@gmail.com"
                    className="p-[13px] bg-[#FFFFFF] w-full focus:outline-none rounded-[9px]"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs w-full text-start mt-[5px]">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="pt-[20px]">
                <div>
                  <label className="text-[14px] font-[500] mb-[5px] text-[#000] flex">
                    Message
                    <span className="text-red-500 mt-[1px] pl-[1px] block">
                      *
                    </span>
                  </label>
                  <textarea
                    {...register("message")}
                    placeholder="Write your message.."
                    rows={5}
                    className="p-[13px] bg-[#FFFFFF] w-full focus:outline-none rounded-[9px]"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs w-full text-start mt-[5px]">
                      {errors.message.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex justify-end pt-[25px]">
                <CustomButton
                  label="Get in Touch"
                  type="submit"
                  style={{
                    border: "0px",
                    borderRadius: "10px",
                  }}
                  loading={isLoading}
                  className="h-[50px] px-[20px]"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
