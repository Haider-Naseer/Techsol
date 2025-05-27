"use client";
import HeroService from "@/components/hero-service/page";
import ServiceDescription from "@/components/service-description/page";
import WayChooseUs from "@/components/way-choose-us/page";

const ResourcesAugmentation = () => {
  const title = "Resources Augmentation";
  const des = `Enhancing operational efficiency and streamlining processes through our expert support solutions`;
  const label = "Get Support Augmentation";
  const image = "/assets/icons/resource.svg";
  const offering = `We enhance operational efficiency and streamline business processes through our expert support solutions. Specializing in DevOps, Angular/Microsoft-based applications, and database management, we offer comprehensive L1, L2, and L3 support tailored to your specific needs. Our team of skilled professionals is dedicated to ensuring seamless system operations and robust database performance. By integrating advanced support levels and leveraging our deep industry expertise, we help maintain smooth, efficient, and secure environments that empower your business to operate at its full potential.`;
  const whyUs = `Choosing us means partnering with a team that prioritizes reliability, expertise, and long-term value. We bring deep technical proficiency across DevOps, Angular/Microsoft  applications, and database management, offering end-to-end support from L1 to L3. Our  proactive approach ensures minimal downtime, optimized performance, and fast issue  resolution, helping your business stay agile and competitive. With a strong commitment to  quality, security, and seamless service delivery, we don't just support your operations — we  enhance them. Trust us to be the backbone of your digital infrastructure.
`;
  return (
    <>
      <HeroService title={title} des={des} label={label} image={image} />
      <>
        <ServiceDescription offering={offering} />
        <WayChooseUs whyUs={whyUs} />
      </>
    </>
  );
};

export default ResourcesAugmentation;
