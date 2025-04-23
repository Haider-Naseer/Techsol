import HeroService from "@/components/hero-service/page";
import ServiceDescription from "@/components/service-description/page";
import WayChooseUs from "@/components/way-choose-us/page";

const ProductSupport = () => {
  const title = "Product Support";
  const des = `Provide on site and off site teams for maintenance services`;
  const label = "Get Product support";
  const image = "/assets/icons/supply-chain.svg";
  const offering = `The goal is to deliver timely, effective, and expert support that addresses product-related issues, enhances overall performance, and drives better business outcomes. Our services focus on ensuring seamless product operation with minimal downtime, backed by skilled technical assistance and in-depth troubleshooting. We work to optimize product configurations for peak efficiency while also helping users maximize their proficiency and adoption, ultimately contributing to improved productivity and operational success.`;
  const whyUs = `At Techsols, we combine deep industry expertise with innovative technology solutions to deliver real, measurable impact. Our client-centric approach ensures every solution is tailored to your unique business needs, driving efficiency, scalability, and growth. With a proven track record of successful digital transformations, we are trusted partners in navigating complex challenges and unlocking new opportunities. From strategic consultation to seamless implementation and ongoing support, we’re committed to excellence at every step. Choose Techsols for a partnership rooted in trust, innovation, and results.`;
  return (
    <>
      <HeroService title={title} des={des} label={label} image={image} />
      <ServiceDescription offering={offering} />
      <WayChooseUs whyUs={whyUs} />
    </>
  );
};

export default ProductSupport;
