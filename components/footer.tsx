export const Footer = () => {
  return (
    <div className="main-contain bg-[#1A94D5]">
      <div className="pt-[80px] pb-[60px] text-[#fff] flex justify-center flex-wrap">
        <div className="flex w-full">
          <div className="grid grid-cols-3 w-full gap-[30px]">
            <div>
              <div className="text-center w-max">
                <h2 className="text-[26px] text-[#fff] font-[800]">Techsol</h2>
                <p className="pt-[15px] text-[#fff] text-[15px] font-[400]">
                  9033 Bldg 15, 3801, Block 338, <br /> Al-Qudaybiyah, Manama,
                  Bahrain.
                </p>
                <p className="pt-[15px] text-[#fff] text-[15px] font-[400]">
                  Phone: +1 5589 55488 55
                </p>
                <p className="text-[#fff] text-[15px] font-[400]">
                  Email: info@techsol-bh.com
                </p>
              </div>
            </div>
            <div className="pl-[80px]">
              <h2 className="m-0 text-[#fff] font-[600] pb-[24px]">
                Useful Links
              </h2>
              <ul className="leading-[40px]">
                <li>Home</li>
                <li>About us</li>
                <li>Services</li>
                <li>Terms of service</li>
                <li>Privacy policy</li>
              </ul>
            </div>
            <div className="pl-[80px]">
              <h2 className="m-0 text-[#fff] font-[600] pb-[24px]">
                Our Services
              </h2>
              <ul className="leading-[40px]">
                <li>Trade Risk</li>
                <li>Advisory on digitization</li>
                <li>Product Support</li>
                <li>It Resource Augmentation</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between container-max-width  border-t-[1px] pt-[36px] mt-[36px] pt-[36px] border-t-[#FFFFFF36] w-full">
          <div>
            <span>©2022 Techsol. All rights reserved</span>
          </div>
          <div className="flex gap-[60px]">
            <span className="text-[#fff] font-[600] text-[16px]">
              Privacy & Policy
            </span>
            <span className="text-[#fff] font-[600] text-[16px]">
              Terms & Condition
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
