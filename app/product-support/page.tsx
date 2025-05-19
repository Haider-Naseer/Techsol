"use client";
import HeroService from "@/components/hero-service/page";
import WayChooseUs from "@/components/way-choose-us/page";

const ProductSupport = () => {
  const title = "SCF Product Support";
  const des = `Provide on site and off site teams for maintenance services`;
  const label = "Get Product support";
  const image = "/assets/icons/supply-chain.svg";
  const whyUs = `At Techsols, we combine deep industry expertise with innovative technology solutions to deliver real, measurable impact. Our client-centric approach ensures every solution is tailored to your unique business needs, driving efficiency, scalability, and growth. With a proven track record of successful digital transformations, we are trusted partners in navigating complex challenges and unlocking new opportunities. From strategic consultation to seamless implementation and ongoing support, we’re committed to excellence at every step. Choose Techsols for a partnership rooted in trust, innovation, and results.`;

  const detail = [
    {
      describe: `Develop Strategy and SCF product programs tailored for different business segments and sectors they do business in, and additionally implementing the right SoF digital platform to meet their strategic business model and products.`,
      department: `International Business Development Director / Senior Business Consultant, Receivables & SCF solutions`,
      image: "/assets/icons/testimonials-01.png",
    },
    {
      describe: `Creating MultiFinder SC programs for a single large corporates to cater to their SC business model that would cater to its suppliers on a single MultiFinder SCF platform that best suits them. Techsol follows a comprehensive approach to developing supply chain finance (SCF) products.`,
      name: "George Koukis",
      department: `International Business Development Director / Senior Business Consultant, Receivables & SCF solutions`,
      image: "/assets/icons/testimonials-02.png",
    },
  ];

  return (
    <>
      <HeroService title={title} des={des} label={label} image={image} />
      <>
        <div className="lg:pt-[80px] md:pt-[80px] pt-[40px]">
          <div className="main-contain">
            <div className="flex mb-[60px] justify-center items-center text-center w-full">
              <h2 className="text-[#0F172ACC] lg:text-[40px] md:text-[40px] text-[30px] font-[800]">
                Specialization in SCF product implementation
              </h2>
            </div>
          </div>
          <div className="main-contain">
            <div className="text-center justify-center lg:w-[85%] md:w-[85%] m-auto">
              <p className="lg:text-[20px] md:text-[20px] text-[18px]">
                SCF Product Development involves the creation and evolution of
                financial solutions that optimize the financing of a supply
                chain. Both conventional and Islamic finance approaches can be
                applied to develop these SC products, catering to different
                customer bases and compliance requirements. Techsol specializes
                in developing Tailored SC Product programs and implement the
                best digital proposition for clients who could be Financial
                Institutions or Large Corporate that want to implement their
                proprietary SC Programs through multiple products tailored to
                their needs.
              </p>

              <img
                className="mt-[57px]"
                src="/assets/icons/SCF-Product.png"
                alt="SCF Product Support"
              />

              <div className="pb-[40px] text-center">
                <div className="pt-[110px] flex gap-[16px]">
                  {detail?.map((item, index) => (
                    <div
                      key={index}
                      className="relative w-[50%] my-[25px] mx-auto text-start bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.15),_-2px_4px_8px_rgba(0,0,0,0.1),_2px_4px_8px_rgba(0,0,0,0.1)] p-6"

                    >
                      <ul className="list-disc pl-5 ">
                        <li className="text-[#1A94D5] font-bold text-[30px] mb-[20px]">For Financial Institutions (FI):</li>
                      </ul>
                      <p className="text-gray-700 text-[20px] leading-relaxed mb-4">
                        {item?.describe}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <WayChooseUs whyUs={whyUs} />
      </>
    </>
  );
};

export default ProductSupport;
