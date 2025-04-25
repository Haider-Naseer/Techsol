import ArrowIcon from "@/public/assets/svg/arrow";
import CustomButton from "../ui/button";
import Image from "next/image";
import DownArrowIcon from "@/public/assets/svg/downArrow";

const HeroService = ({
  title,
  des,
  label,
  image,
  setShowDetail,
  showDetail,
}: {
  title: string;
  des: string;
  label: string;
  image: string;
  setShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
  showDetail: boolean;
}) => {
  return (
    <div className="bg-[#F1F5F9] w-full">
      <div className="main-contain">
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
                icon={!showDetail ? <DownArrowIcon /> : <ArrowIcon />}
                variant="dark"
                label={label}
                className="py-[10px]"
                onClick={() => setShowDetail(!showDetail)}
              />
            </div>
            <div>
              <Image src={image} alt="hero-section" width={654} height={440} />
            </div>
          </div>
          <Image
            src={"/assets/icons/service-bg.png"}
            alt="hero-section"
            width={290}
            height={85}
            className="absolute top-1 right-1"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroService;
