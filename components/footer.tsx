import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const socialIcon = [
    {
      image: "/assets/icons/social-icon-01.svg",
      link: "https://www.linkedin.com/company/techsol-management-consultants-wll/",
    },
  ];

  return (
    <div className="bg-[#1A94D5] w-full">
      <div className="main-contain">
        <div className="lg:pt-[80px] md:pt-[80px] pt-[40px] pb-[60px] text-[#fff] flex justify-center flex-wrap">
          <div className="flex w-full">
            <div className="lg:grid grid-cols-3 md:grid-cols-3 grid-cols-1 w-full gap-[30px]">
              <div>
                <div className="lg:text-center md:text-center text-start w-max">
                  <h2 className="text-[26px] text-[#fff] font-[800]">
                    Techsol
                  </h2>
                  <p className="pt-[15px] text-[#fff] text-[15px] font-[400]">
                    9033 Bldg 15, 3801, Block 338, <br /> Al-Qudaybiyah, Manama,
                    Bahrain.
                  </p>
                  <p className="pt-[15px] text-[#fff] text-[15px] font-[400]">
                    Phone: +92 321 4011112
                  </p>
                  <p className="text-[#fff] text-[15px] font-[400]">
                    Email: info@techsol-bh.com
                  </p>
                </div>
                <div className="flex gap-[10px] mt-[10px]">
                Follow us on our Social:
                  {socialIcon?.map((item, index) => (
                    <Link href={item?.link} key={index} target="_blank">
                      <Image
                        key={index}
                        src={item?.image}
                        width={20}
                        height={20}
                        alt={`social-icon`}
                      />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="lg:pl-[80px] md:pl-[80px] pl-[0px] lg:my-[0px] md:my-[0px] my-[30px]">
                <h2 className="m-0 text-[#fff] font-[600] lg:pb-[24px] md:pb-[24px] pb-[15px]">
                  Useful Links
                </h2>
                <ul className="leading-[40px]">
                  <li>
                    <a href="/"> Home</a>
                  </li>
                  <li>
                    <a href="/about-us">About us</a>
                  </li>
                  <li>
                    <a href="/trade-risk">Trade Risk</a>
                  </li>
                  <li>
                    <a href="/contact-us">Contact us</a>
                  </li>
                </ul>
              </div>
              <div className="lg:pl-[80px] md:pl-[80px] pl-[0px]">
                <h2 className="m-0 text-[#fff] font-[600] lg:pb-[24px] md:pb-[24px] pb-[15px]">
                  Our Services
                </h2>
                <ul className="leading-[40px]">
                  <li>
                    <a href="/advisory-on-digitization">
                      Advisory on digitization
                    </a>
                  </li>
                  <li>
                    <a href="/product-support">Product Support</a>
                  </li>
                  <li>
                    <a href="/resources-augmentation">
                      It Resource Augmentation
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:flex md:flex justify-between container-max-width  border-t-[1px] pt-[36px] mt-[36px] pt-[36px] border-t-[#FFFFFF36] w-full">
            <div>
              <span>©2025 Techsol. All rights reserved</span>
            </div>
            <div className="flex gap-[60px] lg:mt-[0px] md:mt-[0px] mt-[15px]">
              <Link href="/privacy-policy">
                <span className="text-[#fff] font-[600] text-[16px]">
                  Privacy & Policy
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
