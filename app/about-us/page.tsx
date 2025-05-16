import OurTeam from "@/components/our-team/page";
import Image from "next/image";

const AboutUsPage = () => {
  return (
    <>
      <div className="text-center pt-[40px]">
        <h1 className="text-[#252525] lg:text-[48px] md:text-[48px] font-[600] text-[35px]">
          About Us
        </h1>
      </div>

      <div className="w-full bg-[#FFFFFF] section-gap">
        <div className="main-contain text-center">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-[80px] md:gap-[80px] gap-[40px]">
            <div>
              <Image
                src={"/assets/icons/our-history.svg"}
                className="m-auto"
                alt="our-mission"
                width={600}
                height={300}
              />
            </div>
            <div className="flex items-center">
              <div className="text-start">
                <h2 className="text-[30px] font-[600] text-[#5A84DF]">
                  Our History
                </h2>
                <p className="text-[#868686] lg:text-[18px] md:text-[18px] text-[16px] pt-[13px]">
                  Techsol was established in Bahrain in 2018 as a Fintech
                  company specializing in digital solutions for financial
                  markets and corporates. With a cumulative human resource
                  experience of over 50 years in various markets, our team
                  excels in creative problem-solving, integrating automation
                  with the latest technology to address organizational
                  challenges and develop improvement plans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#FFFFFF] section-gap">
        <div className="main-contain text-center">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-[80px] md:gap-[80px] gap-[40px]">
            <div className="flex items-center">
              <div className="text-start">
                <h2 className="text-[30px] font-[600] text-[#5A84DF]">
                  Our Mission
                </h2>
                <p className="text-[#868686] lg:text-[18px] md:text-[18px] text-[16px] pt-[13px]">
                  "To revolutionize financial services by leveraging technology
                  to create accessible, innovative, and secure solutions that
                  empower individuals and businesses to achieve their financial
                  goals. Our mission is to be a leading consultancy firm
                  providing class-leading solutions to clients with technology
                  to transform their operations for optimal outcomes."
                </p>
              </div>
            </div>
            <div>
              <Image
                src={"/assets/icons/our-mission.svg"}
                className="m-auto"
                alt="our-mission"
                width={600}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#FFFFFF] section-gap">
        <div className="main-contain text-center relative">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-[50px]">
          <div className="lg:mt-[0px] md:mt-[0px] mt-[15px]">
              <Image
                src={"/assets/icons/our-vision.svg"}
                className="m-auto"
                alt="our-mission"
                width={500}
                height={500}
              />
            </div>
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
      <OurTeam />
    </>
  );
};
export default AboutUsPage;
