import Image from "next/image";
import CustomButton from "../ui/button";
import Link from "next/link";

const OurServices = () => {
  const data = [
    {
      title: "Trade Risk",
      description: `"Techsols' platform digitizes trade finance, connecting banks and corporates to execute global deals seamlessly."`,
      icon: "/assets/icons/service-01.png",
      link: "/trade-risk",
    },
    {
      title: "Advisory on digitization",
      description: `Digitization advisory: Embrace tech advancements for success`,
      icon: "/assets/icons/service-02.png",
      link: "/advisory-on-digitization",
    },
    {
      title: "Product Support",
      description: `Provide on site and off site teams for maintenance services`,
      icon: "/assets/icons/service-03.png",
      link: "/product-support",
    },
    {
      title: "It Resources Augmentation",
      description: `Enhancing operational efficiency and streamlining processes through our expert support solutions`,
      icon: "/assets/icons/service-04.png",
      link: "/resources-augmentation",
    },
  ];
  return (
    <div className="w-full bg-[#FFFFFF] section-gap">
      <div className="max-w-[1440px] m-auto  text-center">
        <h1 className="text-[#252525] lg:text-[48px] md:text-[48px] font-[600] text-[35px]">
          Our Services
        </h1>
        <div className="pt-[40px] md:lg:pt-[80px] md:pt-[80px] pt-[40px] lg:lg:pt-[80px] md:pt-[80px] pt-[40px] lg:lg:gap-[80px] md:gap-[80px] gap-[40px] md:lg:gap-[80px] md:gap-[80px] gap-[40px] gap-[40px]">
          {data?.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
              } items-center text-left`}
            >
              <div className="lg:w-[47%] md:w-[47%] py-[40px] px-[40px] lg:px-[0px] md:px-[0px] w-full h-full flex items-center">
                <div className="lg:w-[60%] md:w-[70%] w-full m-auto">
                  <h2 className="text-[24px] text-[#1A94D5] font-semibold pb-[10px]">
                    Service
                  </h2>
                  <h3 className="lg:text-[64px] md:text-[64px] text-[40px] text-[#263F49] pb-[20px] font-bold">
                    {item?.title}
                  </h3>
                  <p className="text-[#606060] lg:text-[32px] md:text-[32px] text-[25px]">
                    {item?.description}
                  </p>
                  <Link href={item?.link}>
                    <CustomButton
                      label="learn more"
                      variant="dark"
                      className="py-[15px] mt-[30px]"
                    />
                  </Link>
                </div>
              </div>
              <div className="lg:w-[53%] md:w-[53%] w-full h-[615px] relative">
                <Image
                  src={item?.icon}
                  alt={item?.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
