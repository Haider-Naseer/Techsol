import Image from "next/image";

const OurTeam = () => {
  const data = [
    {
      name: "Ayesha",
      title: "Managing Director ",
      icon: "/assets/icons/team-01.svg",
    },
    {
      name: "Muhammad Ali Mirza",
      title: "Chief Commercial Officer",
      icon: "/assets/icons/team-02.svg",
    },
    {
      name: "Zubair Baig",
      title: "Regional Head Products (MENAT)",
      icon: "/assets/icons/team-03.svg",
    },
  ];
  return (
    <div className="w-full bg-[#F1F5F9] section-gap">
      <div className="main-contain text-center">
        <h1 className="text-[#252525] lg:text-[48px] md:text-[48px] font-[600] lg:text-[35px] md:text-[35px] text-[25px] ">
          Meet our team members
        </h1>
        <h2 className="text-[#5A5C62] text-[18px] pt-[16px]">
          We Focus on the details of everything we do. All to help businesses
          around the world
          <span className="hidden md:inline">
            <br />
          </span>{" "}
          Focus on what's most important to them.
        </h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-3 pt-[60px] lg:gap-[140px] md:gap-[140px] gap-[75px]">
          {data?.map((item, index) => (
            <div
              key={index}
              className="bg-[#F8F8F8] h-full flex flex-col justify-between"
            >
              <div className="relative w-full h-[375px]">
                <Image
                  src={item.icon}
                  alt={`${item.name}'s photo`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-start py-3 px-4 flex flex-col flex-grow">
                <h3 className="text-[#19191B] text-[14px] font-[700]">
                  {item.name}
                </h3>
                <p className="text-[#67B0D1] text-[12px] pt-1">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
