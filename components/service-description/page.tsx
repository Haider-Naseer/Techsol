const ServiceDescription = ({ offering }: { offering: string }) => {
  return (
    <div className="pt-[80px]">
      <div className="main-contain">
        <div className="flex mb-[70px] justify-center items-center text-center w-full">
          <h2 className="text-[#0F172ACC] text-[40px] font-[800]">
            What we are offering to our clients
          </h2>
        </div>
      </div>
      <div className="main-contain">
        <div className="py-[55px] text-center justify-center w-[85%] m-auto">
          <p className="text-[20px]">{offering}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDescription;
