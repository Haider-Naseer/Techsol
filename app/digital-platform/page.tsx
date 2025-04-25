import ConsultingDetail from "@/components/consulting-detail/page";

const DigitalPlatform = () => {
  const list = [
    "Proactive support with a focus on prevention, not just resolution",
    "Flexible service-level agreements tailored to your business model",
    "Experienced professionals with expertise across platforms and technologies",
    "Transparent communication and reporting to keep you in control",
  ];
  const title = "Support and Maintenance of Digital Platforms";
  const description =
    "Unlock financial excellence with our streamlined services for strategic growth.";
  const detail = `At <span class="text-[#5A84DF] font-semibold">Techsol</span> , we understand that launching a digital platform is just the beginning. Ongoing support and maintenance are critical to ensuring consistent performance, user satisfaction, and long-term value. Our dedicated team provides end-to-end services to keep your digital platforms secure, up-to-date, and running smoothly.`;
  const image = "/assets/icons/digital-platforms.svg";
  const tips = "Let’s Keep Your Platform Future-Ready";
  const tipsDetail =
    "Let’s Keep Your Platform Future-Ready With Techsol as your support partner, you gain peace of mind knowing your digital platform is in expert hands.";
  const route = "Advisory of digital platforms";
  return (
    <ConsultingDetail
      list={list}
      title={title}
      description={description}
      detail={detail}
      tips={tips}
      tipsDetail={tipsDetail}
      image={image}
      route={route}
    />
  );
};

export default DigitalPlatform;
