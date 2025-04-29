import { AboutUs } from "@/components/about-us/page";
import { SliderCarousel } from "@/components/ui/sliderCarousel";
import Image from "next/image";

const AboutUsPage = () => {
  const detail = [
    {
      describe: `Qualco has collaborated with Techsol for sourcing technical
                  staff for our complex SCF projects in the KSA, along with SCF
                  product and implementation advisory services. They have proved
                  to be reliable partners who have very good expertise and
                  command over Supply chain Finance products as well as SCF
                  digital functionalities required.`,
      name: "George Koukis",
      department: `International Business Development Director / Senior Business Consultant, Receivables & SCF solutions`,
    },
    {
      describe: `Qualco has collaborated with Techsol for sourcing technical
                  staff for our complex SCF projects in the KSA, along with SCF
                  product and implementation advisory services. They have proved
                  to be reliable partners who have very good expertise and
                  command over Supply chain Finance products as well as SCF
                  digital functionalities required.`,
      name: "George Koukis",
      department: `International Business Development Director / Senior Business Consultant, Receivables & SCF solutions`,
    },
  ];

  return (
    <>
      <AboutUs  showButton={false} />
      <div className="w-full bg-[#FFFFFF] section-gap">
        <div className="main-contain text-center">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-[80px] md:gap-[80px] gap-[40px]">
            <div>
              <Image
                src={"/assets/icons/our-mission.svg"}
                className="m-auto"
                alt="our-mission"
                width={360}
                height={360}
              />
            </div>
            <div className="flex items-center">
              <div className="text-start">
                <h2 className="text-[30px] font-[600] text-[#5A84DF]">
                  Our Mission
                </h2>
                <p className="text-[#868686] lg:text-[18px] md:text-[18px] text-[16px] pt-[13px]">
                  At TechSol, our mission is to empower businesses with
                  innovative technology solutions that drive efficiency, enhance
                  productivity, and enable sustainable growth. We strive to
                  bridge the gap between cutting-edge technology and real-world
                  business challenges, delivering tailor-made solutions that
                  create value and long-term success for our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#FFFFFF] section-gap">
        <div className="main-contain text-center relative">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-[50px]">
            <div className="flex items-center">
              <div className="text-start">
                <h2 className="text-[30px] font-[600] text-[#5A84DF]">
                  Our Vision
                </h2>
                <p className="text-[#868686] lg:text-[18px] md:text-[18px] text-[16px] pt-[13px] lg:pr-[150px] md:pr-[150px]">
                  Our vision is to be a global leader in technology solutions,
                  recognized for our expertise in digital transformation, cloud
                  computing, AI-driven insights, and enterprise solutions. We
                  aim to build a future where businesses can seamlessly
                  integrate technology into their operations, unlocking new
                  opportunities for growth and innovation.
                </p>
              </div>
            </div>
            <div className="lg:mt-[0px] md:mt-[0px] mt-[15px]">
              <Image
                src={"/assets/icons/our-vision.svg"}
                className="m-auto"
                alt="our-mission"
                width={500}
                height={500}
              />
            </div>
          </div>
          <Image
            src={"/assets/icons/our-vision-bg.png"}
            alt="bg"
            className="absolute left-5 top-[40%]"
            width={176}
            height={176}
          />
        </div>
      </div>
      <div className="w-full bg-[#FFFFFF]">
        <div className="main-contain relative">
          <div className="section-gap lg:text-center md:text-center">
            <h2 className="text-[30px] font-[600] text-[#5A84DF]">
              Our Journey
            </h2>
            <div className="pt-[50px] lg:w-[80%] md:w-[80%] m-auto">
              <p className="text-[#585858] lg:text-[20px] md:lg:text-[20px] text-[16px] text-start">
                TechSol was founded with a vision to revolutionize the
                technology landscape by providing cutting-edge solutions
                tailored to modern business needs. From humble beginnings as a
                small tech startup, we have grown into a trusted technology
                partner for businesses worldwide. Our journey has been marked by
                continuous innovation, client success stories, and an unwavering
                commitment to excellence. Today, TechSol stands as a leader in
                delivering bespoke software solutions, cloud services, and
                AI-driven insights, empowering businesses to navigate digital
                transformation with confidence.
              </p>
            </div>
            <Image
              src={"/assets/icons/our-journey-bg.png"}
              alt="bg"
              className="absolute top-[0px] left-[2px]"
              width={176}
              height={176}
            />
            <Image
              src={"/assets/icons/our-journey-bg.png"}
              alt="bg"
              className="absolute lg:block md:block hidden top-[30%] right-[200px]"
              width={176}
              height={176}
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-[#FFFFFF] section-gap">
        <div className="main-contain lg:text-center md:text-center">
          <h2 className="text-[30px] font-[600] text-[#5A84DF]">Our Impact</h2>
          <div className="pt-[50px] lg:w-[80%] md:w-[80%] m-auto">
            <p className="text-[#585858] lg:text-[20px] md:text-[20px] text-[16px]">
              TechSol has consistently delivered high-quality technology
              solutions, making a significant impact on businesses across
              industries. Here’s how we have contributed to digital
              transformation:
            </p>
          </div>
        </div>
      </div>{" "}
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
                    className="max-w-lg my-[25px] mx-auto text-start bg-white rounded-2xl shadow-[0_1px_2px_rgba(0,0,0,0.05),_2px_2px_6px_rgba(0,0,0,0.1)] p-6 relative"
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
                        <p className="text-[14px] font-[800]">{item?.name}</p>
                        <p className="text-[#505050] text-[10px]">
                          {item?.department}
                        </p>
                      </div>

                      <div className="mt-4 flex justify-end">
                        <span className="text-blue-600 font-bold tracking-wide">
                          QUALCO s.a
                        </span>
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
export default AboutUsPage;
