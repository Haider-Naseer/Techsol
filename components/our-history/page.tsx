import Image from "next/image";

const OurHistory = () => {
  const data = [
    {
      title: "Bahrain",
      description:"Consultancy provided for Risk planning, Trade finance and supply chain finance products.",
      icon: "/assets/icons/bahrain-icon.svg",
    },
    {
      title: "Pakistan",
      description:"Worked on projects with Public & private organisations on providing consultancy and product support.",
      icon: "/assets/icons/pakistan-icon.svg",
    },
  ];
  return (
    <div className="w-full bg-[#FFFFFF] section-gap">
      <div className="main-contain text-center">
        <h1 className="text-[#252525] lg:text-[48px] md:text-[48px] font-[600] text-[35px] pb-[50px]">Our History</h1>
        <div className="grid  md:grid-cols-2 lg;grid-cols-2 text-start gap-[30px] lg:px-[80px] md:px-[80px]">
          {data?.map((item, index) => (
            <div key={index} className="bg-[#E6F3FB] lg:p-[30px] md:p-[30px] p-[20px]">
              <div>
                <Image src={item?.icon} alt="icon" width={54} height={54} />
                <h2 className="text-[#000000] text-[20px] pt-[15px] font-[600]">
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

export default OurHistory;
