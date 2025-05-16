import { SliderCarousel } from "@/components/ui/sliderCarousel";
import Image from "next/image";

const Testimonials = () => {
  const detail = [
    {
      describe: `“Qualco has collaborated with Techsol for sourcing technical staff for our complex SCF projects in the KSA, along with SCF product and implementation advisory services. They have proved to be reliable partners who have very good expertise and command over Supply chain Finance products as well as SCF digital functionalities required`,
      department: `International Business Development Director / Senior Business Consultant, Receivables & SCF solutions`,
      image: "/assets/icons/testimonials-01.png",
    },
    {
      describe: `TECHSOL has been a reliable partner in terms of engaging, advising and providing services to customers. Their approach towards transactions and processes is very professional.`,
      name: "George Koukis",
      department: `International Business Development Director / Senior Business Consultant, Receivables & SCF solutions`,
      image: "/assets/icons/testimonials-02.png",
    },
    {
      describe: `TECHSOL has been a reliable partner in terms for Premium Technology, providing valuable support for our SCF product implementation in the region. They have consistently demonstrated their dependability, making them a partner we can count on`,
      name: "George Koukis",
      department: `International Business Development Director / Senior Business Consultant, Receivables & SCF solutions`,
      image: "/assets/icons/testimonials-03.png",
    },
  ];

  return (
    <>
      <div className="w-full bg-[#FFFFFF]">
        <div className="main-contain relative">
          <Image
            src={"/assets/icons/testimonials-bg.png"}
            alt="bg"
            className="absolute bottom-[10px] right-[10px]"
            width={176}
            height={176}
          />
          <div className="lg:pt-[80px] md:pt-[80px] pt-[40px] pb-[200px] text-center">
            <h2 className="text-[30px] font-[600] text-[#5A84DF]">
              Testimonials
            </h2>
            <div className="pt-[110px]">
              <SliderCarousel>
                {detail?.map((item, index) => (
                  <div
                    key={index}
                    className="max-w-[90%] min-h-[400px] my-[25px] mx-auto text-start bg-white rounded-2xl shadow-[0_1px_2px_rgba(0,0,0,0.05),_2px_2px_6px_rgba(0,0,0,0.1)] p-6 relative"
                  >
                    <div className="absolute -top-6 left-4 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shadow-md">
                      <Image
                        src={"/assets/icons/profile.svg"}
                        width={75}
                        height={75}
                        alt="profile"
                      />
                    </div>

                    <div className="flex justify-end mb-2">
                      <div className="flex space-x-1 text-blue-500">
                        <span>★★★★★</span>
                      </div>
                    </div>

                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                      <span className="text-blue-500 text-xl font-serif font-bold pr-[5px]">
                        “
                      </span>
                      {item?.describe}
                      <span className="text-blue-500 text-xl font-serif font-bold pl-[5px]">
                        ”
                      </span>
                    </p>

                    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
                      <div className="mt-4 text-start">
                        <img src={item?.image} alt="testimonials" />
                      </div>
                    </div>
                  </div>
                ))}
              </SliderCarousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Testimonials;
