import RightArrow from "@/public/assets/svg/rightArrow";
import Image from "next/image";
import Link from "next/link";

const Consulting = () => {
  const data = [
    {
      title: "Advisory of Supply chain Financing",
      description: `Optimize your financial processes with our Supply Chain solutions for seamless efficiency.`,
      icon: "/assets/icons/consulting-icon-01.png",
      link: "advisory-supply-chain",
    },
    {
      title: "Support and Maintenance of Digital Platforms",
      description: `Unlock financial excellence with our streamlined services for strategic growth.`,
      icon: "/assets/icons/consulting-02.svg",
      link: "digital-platform",
    },
    {
      title: "I.T Software Development Services",
      description: `Navigate the digital frontier with our cutting-edge Digital solutions for transformative success`,
      icon: "/assets/icons/consulting-03.svg",
      link: "development-services",
    },
  ];
  return (
    <div className="w-full bg-[#F1F5F9] pt-[80px]">
      <div className="main-contain text-center">
        <h1 className="text-[#252525] text-[48px] font-[600]">Consulting</h1>
        <div className="grid grid-cols-3 pt-[55px] gap-[130px]">
          {data?.map((item, index) => (
            <Link href={item?.link}>
              <div
                key={index}
                className="bg-[#FFFFFF] rounded-[8px] pt-[24px] pb-[36px]"
              >
                <div className="w-[75%] m-auto">
                  <div className="pb-[16px] flex justify-center">
                    <Image src={item?.icon} alt="icon" width={65} height={56} />
                  </div>
                  <h2 className="text-[#4D4D4D] text-[24px] font-[700]">
                    {item?.title}
                  </h2>
                  <p className="text-[#717171] text-[14px] py-[10px]">
                    {item?.description}
                  </p>
                  <div className="flex justify-center items-center gap-[5px]">
                    <span className="text-[#263F49] text-[16px] font-[600]">
                      Learn more
                    </span>
                    <RightArrow color="#000" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Consulting;
