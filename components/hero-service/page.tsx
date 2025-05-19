import CustomButton from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { WhitePhoneIcon } from "@/public/assets/svg/whitePhone";

const HeroService = ({
  title,
  des,
  label,
  image,
}: {
  title: string;
  des: string;
  label: string;
  image: string;
}) => {
  return (
    <div className="bg-[#F1F5F9] w-full">
      <div className="main-contain">
        <div className="section-gap relative">
          <div className="lg:grid grid-cols-2 md:grid grid-cols-2 lg:pt-[50px] md:pt-[50px] w-full gap-[100px]">
            <div>
              <h2 className="text-[#0F172A] lg:text-[64px] md:text-[64px] text-[40px] pb-[23px] font-[800]">
                {title}
              </h2>
              <p className="text-[#0F172A] lg:text-[24px] md:text-[24px] text-[20px] pb-[65px] font-[400]">
                {des}
              </p>
              <Link href={"/contact-us"}>
                <CustomButton
                  postIcon={<WhitePhoneIcon />}
                  variant="dark"
                  label={label}
                  className="py-[10px]"
                />
              </Link>
            </div>
            <div className="mt-[25px] lg:mt-[0px] md:mt-[0px]">
              <Image src={image} alt="hero-section" width={654} height={440} />
            </div>
          </div>
          <Image
            src={"/assets/icons/service-bg.png"}
            alt="hero-section"
            width={290}
            height={85}
            className="absolute top-1 right-1 lg:block md:block hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroService;
