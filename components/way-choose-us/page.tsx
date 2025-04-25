import Call from "@/public/assets/svg/call";
import Image from "next/image";
import Link from "next/link";

const WayChooseUs = ({ whyUs }: { whyUs: string }) => {
  return (
    <div className="section-gap relative">
      <div className="main-contain">
        <div className="flex mb-[80px] justify-center items-center text-center w-full">
          <h2 className="text-[#0F172ACC] text-[40px] font-[800]">
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
            <p className="text-[20px]">{whyUs}</p>
            <div className="w-full flex justify-center mt-[38px]">
              <Link href='/contact-us'>
              <button className="gap-[24px] bg-[#263F49] h-[60px] text-[#ffff] flex items-center transition-all whitespace-nowrap ease-in-out duration-300 relative border border-[2px] font-[600] text-[16px] px-[25px] py-[7.5px] text-center cursor-pointer rounded-[50px]">
                <Call />
                Get in touch
              </button>
              </Link>
            </div>
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
