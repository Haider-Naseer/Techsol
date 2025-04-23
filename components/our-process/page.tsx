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
    <div className="w-full bg-[#F1F5F9] pb-[80px] pt-[26px]">
      <div className="main-contain text-center">
        <h1 className="text-[#252525] text-[48px] font-[600]">Our Process</h1>
        <div className="flex pt-[80px] gap-[55px]">
          <div className="w-[60%]">
            <Image
              src={"/assets/icons/process-image.jpg"}
              alt="icon"
              width={800}
              height={800}
            />
          </div>
          <div className="text-start w-[45%]">
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
