import Image from "next/image";
import CustomButton from "../ui/button";
import Link from "next/link";

const OurServices = () => {
  const data = [
    {
      title: "Trade Risk",
      description: `Techsol’s platform digitizes trade finance , <br class="responsive-br" /> connecting banks and corporates to <br class="responsive-br" /> execute global deals seamlessly.`,
      icon: "/assets/icons/service-01.png",
      link: "/trade-risk",
    },
    {
      title: "Advisory on digitization",
      description: `Digitization advisory: Embrace tech <br class="responsive-br" /> advancements for success`,
      icon: "/assets/icons/service-02.png",
      link: "/advisory-on-digitization",
    },
    {
      title: "Product Support",
      description: `Provide on site and off site teams for <br class="responsive-br" /> maintenance services`,
      icon: "/assets/icons/service-03.png",
      link: "/product-support",
    },
    {
      title: "It Resources Augmentation",
      description: `Enhancing operational efficiency and <br class="responsive-br" /> streamlining processes through our expert <br class="responsive-br" /> support solutions`,
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
        <div className="md:pt-[80px] lg:pt-[80px] gap-[40px] md:gap-[80px] lg:gap-[80px]">
          {data?.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
              } items-center text-left`}
            >
              <div className="lg:w-[50%] md:w-[50%] py-[50px] px-[40px] lg:px-[0px] md:px-[0px] w-full h-full flex items-center">
                <div className="w-full m-auto lg:ml-[80px] md:ml-[80px]">
                  <h3 className="lg:text-[40px] md:text-[40px] text-[25px] text-[#263F49] lg:pb-[20px] md:pb-[20px] pb-[15px] font-bold">
                    {item?.title}
                  </h3>
                  <p
                    className="text-[#606060] lg:text-[24px] md:text-[24px] font-medium text-[20px]"
                    dangerouslySetInnerHTML={{ __html: item?.description }}
                  />
                  <Link href={item?.link}>
                    <CustomButton
                      label="Learn more"
                      variant="dark"
                      className="py-[15px] lg:mt-[30px] md:mt-[30px] mt-[20px]"
                    />
                  </Link>
                </div>
              </div>
              <div className="lg:w-[50%] md:w-[50%] w-full lg:h-[615px] md:h-[615px] h-[400px] relative">
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
