"use client";

import Slider from "react-slick";
import { Avatar, Card, CardContent, IconButton } from "@mui/material";
import { ArrowBackIosNew } from "@mui/icons-material";
import Image from "next/image";

const testimonials = [
  {
    name: "Jacqueline Wright",
    title: "CFO, Titan Traders",
    message:
      "Trade Risk simplified our trade finance process with fast approvals and competitive rates. The platform is user-friendly, and the support team is always helpful. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?img=31",
  },
  {
    name: "Jacqueline Wright",
    title: "CEO, Global Exports Ltd.",
    message:
      "We found the best financing options through Trade Risk without the usual delays and complexities. The platform offers great transparency and security. A must-have for global traders!",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
];

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      className="!absolute top-1/2 right-[-50px] z-10 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200"
    >
      <Image
        src={"/assets/icons/slider_left_arrow.svg"}
        alt="right"
        width={36}
        height={36}
      />
    </IconButton>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      className="!absolute top-1/2 left-[-50px] z-10 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200"
    >
      <Image
        src={"/assets/icons/slider_right_arrow.svg"}
        alt="right"
        width={36}
        height={36}
      />
    </IconButton>
  );
}

export const TestimonialSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="px-[120px] flex bg-[#fff] pt-[100px] pb-[55px] justify-center flex-wrap">
      <div className="w-full text-center">
        <p className="text-[#262626] text-[40px] font-[600]">
          People Reviews about Trade Risk
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-8 relative">
        <Slider {...settings}>
          {testimonials.map((item, idx) => (
            <div key={idx} className="px-2">
              <div className="bg-[#F8F8F8] p-[30px] shadow-none h-full">
                <p className="text-[#606060] text-[16px] mb-[36px]">
                  {item.message}
                </p>
                <div className="flex items-center gap-4">
                  <Avatar src={item.avatar} />
                  <div>
                    <p className="text-[16px] font-[400] text-[#000000]">
                      {item.name}
                    </p>
                    <p className="text-[#909B99] text-[14px] font-[400]">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
