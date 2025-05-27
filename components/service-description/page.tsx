const ServiceDescription = ({ offering }: { offering: string }) => {
  return (
    <div className="lg:pt-[80px] md:pt-[80px] pt-[40px]">
      <div className="main-contain">
        <div className="flex lg:mb-[70px] md:mb-[70px] mb-[40px] justify-center items-center text-center w-full">
          <h2 className="text-[#0F172ACC] lg:text-[40px] md:text-[40px] text-[30px] font-[800]">
            What we are offering to our clients
          </h2>
        </div>
      </div>
      <div className="main-contain">
        <div className="text-center justify-center lg:w-[85%] md:w-[85%] m-auto">
          <p className="lg:text-[20px] text-[#0F172A] md:text-[20px] text-[18px]">
            {offering}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDescription;
