import ArrowIcon from "@/public/assets/svg/arrow";
import CustomButton from "../ui/button";
import Image from "next/image";

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
    <>
      <div className="main-contain bg-[#F1F5F9]">
        <div className="section-gap relative">
          <div className="grid grid-cols-2 pt-[50px] w-full gap-[100px]">
            <div>
              <h2 className="text-[#0F172A] text-[64px] pb-[23px] font-[800]">
                {title}
              </h2>
              <p className="text-[#0F172A] text-[24px] pb-[65px] font-[400]">
                {des}
              </p>
              <CustomButton
                icon={<ArrowIcon />}
                variant="dark"
                label={label}
                className="py-[10px]"
              />
            </div>
            <div>
              <Image
                src={image}
                alt="hero-section"
                width={654}
                height={440}
              />
            </div>
          </div>
          <Image
            src={'/assets/icons/service-bg.png'}
            alt="hero-section"
            width={290}
            height={85}
            className="absolute top-1 right-1"
          />
        </div>
      </div>
    </>
  );
};

export default HeroService;
