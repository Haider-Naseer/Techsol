const OurTeam = () => {
  const data = [
    {
      name: "Ayesha",
      title: "Managing Director ",
      description: "Team Manager",
      icon: "/assets/icons/team-01.svg",
    },
    {
      name: "Muhammad Ali Mirza",
      title: "Chief Commercial Officer",
      description: "MBA-(Fin), PMP (Project Management Professional)",
      icon: "/assets/icons/team-02.svg",
    },
    {
      name: "Zubair Baig",
      title: "Regional Head Products (MENAT)",
      description: "MBA(Finance) ",
      icon: "/assets/icons/team-02.svg",
    },
  ];
  return (
    <div className="w-full bg-[#fff] section-gap">
      <div className="main-contain text-center">
        <h1 className="text-[#252525] text-[48px] font-[600]">
          Meet our team members
        </h1>
        <h2 className="text-[#5A5C62] text-[18px] pt-[16px]">
          We Focus on the details of everything we do. All to help businesses
          around the world <br /> Focus on what's most important to them.
        </h2>
        <div className="grid grid-cols-3 pt-[60px] gap-[140px]">
        {data?.map((item, index) => (
            <div
              key={index}
              className="bg-[#F8F8F8] h-full flex flex-col justify-between"
            >
              <img
                src={item.icon}
                alt={`${item.name}'s photo`}
                className="w-full h-[300px] object-cover"
              />
              <div className="text-start py-3 px-4 flex flex-col flex-grow">
                <h3 className="text-[#19191B] text-[14px] font-[700]">{item.name}</h3>
                <p className="text-[#67B0D1] text-[12px] pt-1">{item.title}</p>
                <span className="text-[#787A82] text-[12px] pt-3">
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
