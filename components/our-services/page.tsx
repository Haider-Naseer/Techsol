import Image from "next/image";

const OurServices = () => {
  const data = [
    {
      title: "Trade Risk",
      description: `"Techsols' platform digitizes trade finance, connecting banks and corporates to execute global deals seamlessly."`,
      icon: "/assets/icons/service-01.svg",
    },
    {
      title: "Advisory on digitization",
      description: `Digitization advisory: Embrace tech advancements for success`,
      icon: "/assets/icons/service-02.svg",
    },
    {
      title: "Product Support",
      description: `Provide on site and off site teams for maintenance services`,
      icon: "/assets/icons/service-03.svg",
    },
    {
      title: "It Resources Augmentation",
      description: `Enhancing operational efficiency and streamlining processes through our expert support solutions`,
      icon: "/assets/icons/service-04.svg",
    },
  ];
  return (
    <div className="w-full bg-[#FFFFFF] section-gap">
      <div className="main-contain text-center">
        <h1 className="text-[#252525] text-[48px] font-[600]">Our Services</h1>
        <div className="grid grid-cols-2 pt-[80px] gap-[80px]">
          {data?.map((item, index) => (
            <div
              key={index}
              className="border-[#9CA3AF59] border-[5px] rounded-[10px] pt-[30px] pb-[20px]"
            >
              <div className="w-[75%] m-auto">
                <div className="pb-[40px] flex justify-center">
                  <Image src={item?.icon} alt="icon" width={54} height={54} />
                </div>
                <h2 className="text-[#262626] text-[18px] font-[600]">
                  {item?.title}
                </h2>
                <p className="text-[#606060] text-[16px] pt-[20px]">
                  {item?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
