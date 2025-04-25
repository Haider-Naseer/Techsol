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
      <div className="pt-[23px] text-[18px] font-[600]">{`Home > consuslting > ${route}`}</div>
      <div className="section-gap">
        <div className="px-[30px] text-center">
          <h2 className="text-[48px] text-[#4D4D4D] font-[600]">{title}</h2>
          <p className="pt-[30px] text-[#717171] text-[18px]">{description}</p>
          <div className="grid grid-cols-2 pt-[70px]">
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
                      <li key={index} className="text-[18px] pb-[5px]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-[18px] font-semibold">{tips}</h3>
                <p className="text-[18px] pt-[10px]">{tipsDetail}</p>
                <div className="pt-[50px] flex">
                  <Image src={'/assets/icons/email-icon.svg'} width={17} height={13} alt="email" />
                  <span className="text-[#5A84DF] font-semibold pl-[10px] text-[18px]">
                    Contact us
                  </span>
                  <span className="text-[18px]">
                    today to schedule a consultation.
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
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
        className="absolute bottom-[50px] right-[50px]"
      />
      <Image
        src={"/assets/icons/consulting-top-bg.png"}
        alt="bg"
        width={175}
        height={175}
        className="absolute top-[100px] left-[50px]"
      />
    </div>
  );
};

export default ConsultingDetail;
