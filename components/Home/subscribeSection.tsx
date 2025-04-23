import CustomButton from "../ui/button";

export const SubscribeSection = () => {
  return (
    <div className="px-[120px] flex bg-[#E8F3F9] pt-[148px] pb-[108px] justify-center flex-wrap">
      <h2 className="text-[#262626] text-[30px] font-[600]">
        For more information connect <br /> with us on our newsletter
      </h2>
      <div className="w-full mt-[80px] flex justify-center">
        <input
          placeholder="Enter your email"
          className="shadow-[0px_4px_114px_#00000017] bg-[#fff] h-[67px] pl-[36px] py-[20px] rounded-[10px] w-[500px] mr-[14px]"
        />
        <CustomButton
          variant="dark"
          label="SUBSCRIBE"
          className="h-[67px] w-[173px] rounded-[10px]"
        />
      </div>
    </div>
  );
};
