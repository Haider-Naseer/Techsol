"use client";
import HeroService from "@/components/hero-service/page";
import ServiceDescription from "@/components/service-description/page";
import WayChooseUs from "@/components/way-choose-us/page";

const AdvisoryOnDigitization = () => {
  const title = "Advisory on Digitization";
  const des = `Transforming businesses with innovative digital solutions.`;
  const label = "Get Advice on Digitization  ";
  const image = "/assets/icons/advisory-on-digitization.svg";
  const offering = `At Techsols, we empower organizations to thrive in a rapidly
            evolving digital landscape by serving as a strategic partner in
            their transformation journey. Our services are designed to simplify
            the complexities of digital change, helping businesses adapt to new
            technologies and innovate with confidence. By leveraging
            cutting-edge digital tools and tailored strategies, we enable
            clients to unlock new revenue opportunities, streamline operations,
            and enhance customer engagement. Whether it's optimizing internal
            processes, introducing smart automation, or crafting user-centric
            digital solutions, our mission is to turn digital disruption into a
            competitive advantage. With a focus on sustainable growth and
            long-term value, we ensure that your organization remains agile,
            efficient, and future-ready.`;

  const whyUs = `Embrace tech advancements for success. Your trusted partner in transforming your  organization through digital innovation. We help you navigate the complexities of digital  transformation, unlocking new revenue streams, improving operational efficiency, and  enhancing customer experience `;
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

export default AdvisoryOnDigitization;
