import Image from "next/image";

const OurProcess = () => {
  const detail = [
    {
      title: "Data assisted research",
      description: "Leaverage data for research findings.",
    },
    {
      title: "Advisory consultants",
      description:
        "Leverage years of experience of a globally disperesd consuktant network.",
    },
    {
      title: "Final Solution",
      description: "Based on research and data a solution is presented.",
    },
    {
      title: "Implementation",
      description: "Training and implementation support is provided.",
    },
  ];
  return (
    <div className="w-full bg-[#F1F5F9] pt-[26px] section-gap">
      <div className="main-contain text-center">
        <h1 className="text-[#252525] lg:text-[48px] md:text-[48px] font-[600] text-[35px]">Our Process</h1>
        <div className="flex flex-wrap lg:lg:pt-[80px] md:pt-[80px] pt-[40px] md:lg:pt-[80px] md:pt-[80px] pt-[40px] pt-[40px] gap-[55px]">
          <div className="lg:w-[60%] md:w-[60%] w-full">
            <Image
              src={"/assets/icons/process-image.jpg"}
              alt="icon"
              width={800}
              height={800}
            />
          </div>
          <div className="text-start lg:w-[35%] md:w-[35%] w-full">
            <ul>
              {detail?.map((item, index) => (
                <li key={index} className="mb-[12px]">
                  <p className="text-[#262626E5] text-[24px] font-[600]">
                    {index + 1}. {item?.title}
                  </p>
                  <div className="pl-[28px]">
                    <span className="text-[#262626BF] text-[16px]">
                      {item?.description}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
