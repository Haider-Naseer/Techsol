"use client";
import Slider from "react-slick";
import { IconButton } from "@mui/material";
import Image from "next/image";

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      className="!absolute top-1/2 lg:right-[-50px] md:right-[-50px] right-[-30px] z-10 transform -translate-y-1/2 bg-gray-100"
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
      className="!absolute top-1/2 lg:left-[-50px] md:left-[-50px] left-[-30px] z-10 transform -translate-y-1/2 bg-gray-100"
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

export const SliderCarousel = ({
  children,
  slidesToShow = 3,
}: {
  children: React.ReactNode;
  slidesToShow?: number;
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
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
    <div>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};
