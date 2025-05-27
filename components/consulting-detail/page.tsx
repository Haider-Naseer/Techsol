import Image from "next/image";

const ConsultingDetail = ({
  list,
  title,
  description,
  detail,
  image,
  tipsDetail,
  tips,
  route,
}: {
  list: Array<string>;
  title: string;
  description: string;
  detail: string;
  image: string;
  tipsDetail: string;
  tips: string;
  route: string;
}) => {
  return (
    <div className="main-contain relative">
      <div className="pt-[23px] lg:text-[18px] md:text-[18px] text-[16px] font-[600]">{`Home > consuslting > ${route}`}</div>
      <div className="section-gap">
        <div className="lg:px-[30px] md:px-[30px] text-center">
          <h2 className="lg:text-[48px] md:text-[48px] text-[25px] text-[#4D4D4D] font-[600]">
            {title}
          </h2>
          <p className="pt-[30px] text-[#717171] text-[18px]">{description}</p>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 pt-[70px]">
            <div className="text-start">
              <p
                className="text-[18px]"
                dangerouslySetInnerHTML={{ __html: detail }}
              ></p>
              <div className="py-[60px]">
                <div className="flex items-center gap-[5px]">
                  <h3 className="text-[#0F172A] text-[24px] font-[600]">
                    Why choose us?
                  </h3>
                  <Image
                    src={"/assets/icons/Bulb.png"}
                    alt="bulb"
                    width={25}
                    height={25}
                  />
                </div>
                <div>
                  <ul className="list-disc pl-6 pt-[23px]">
                    {list?.map((item, index) => (
                      <li
                        key={index}
                        className="lg:text-[18px] md:text-[18px] text-[16px] pb-[5px]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-[18px] font-semibold">{tips}</h3>
                <p className="lg:text-[18px] md:text-[18px] text-[16px] pt-[10px]">
                  {tipsDetail}
                </p>
                <div className="lg:pt-[50px] md:pt-[50px] pt-[30px] flex flex-warp">
                  <Image
                    src={"/assets/icons/email-icon.svg"}
                    width={17}
                    height={13}
                    alt="email"
                  />
                  <span className="text-[#5A84DF] font-semibold pl-[10px] lg:text-[18px] md:text-[18px] text-[16px]">
                    Contact us
                    <span className="lg:text-[18px] ml-[5px] text-[#000] md:text-[18px] text-[16px]">
                      today to schedule a consultation.
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center lg:pt-[0px] md:pt-[0px] pt-[30px] justify-center">
              <Image src={image} alt="" width={492} height={412} />
            </div>
          </div>
        </div>
      </div>
      <Image
        src={"/assets/icons/consulting-bg.png"}
        alt="bg"
        width={175}
        height={175}
        className="absolute lg:visible md:visible hidden bottom-[50px] right-[50px]"
      />
      <Image
        src={"/assets/icons/consulting-top-bg.png"}
        alt="bg"
        width={175}
        height={175}
        className="absolute lg:visible md:visible hidden top-[100px] left-[50px]"
      />
    </div>
  );
};

export default ConsultingDetail;
