import Image from "next/image";

const WayChooseUs = ({ whyUs }: { whyUs: string }) => {
  return (
    <div className="section-gap relative">
      <div className="main-contain">
        <div className="flex lg:mb-[80px] md:mb-[80px] mb-[40px] justify-center items-center text-center w-full">
          <h2 className="text-[#0F172ACC] lg:text-[40px] md:text-[40px] text-[30px] font-[800]">
            Why choose us?
          </h2>
          <Image
            src={"/assets/icons/bulb.png"}
            alt="bulb"
            width={35}
            height={35}
          />
        </div>
      </div>

      <div className="bg-[#F1F5F9] w-full">
        <div className="main-contain">
          <div className="py-[55px] text-center justify-center w-[85%] m-auto">
            <p className="lg:text-[20px] md:text-[20px] text-[18px]">{whyUs}</p>
          </div>
        </div>
      </div>

      <Image
        src={"/assets/icons/why-bg.png"}
        alt="bulb"
        width={175}
        height={175}
        className="absolute top-[100px] left-[10px]"
      />
    </div>
  );
};

export default WayChooseUs;
