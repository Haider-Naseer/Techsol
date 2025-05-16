import ConsultingDetail from "@/components/consulting-detail/page";

const DevelopmentServices = () => {
  const list = [
    "A skilled team of developers, designers, and solution architects",
    "Proven experience across industries and project scales",
    "Transparent communication and project management",
    "Post-deployment support and continuous improvement",
  ];
  const title = "I.T Software Development Services";
  const description =
    "Navigate the digital frontier with our cutting-edge Digital solutions for transformative success";
  const detail = `At <span class="text-[#5A84DF] font-semibold">Techsol</span> , we specialize in delivering custom software solutions that empower businesses to innovate, grow, and stay competitive in a fast-changing digital world. From concept to deployment, we offer full-cycle I.T software development services tailored to your unique goals and operational needs.`;
  const image = "/assets/icons/development-services.svg";
  const tips = "Build with Confidence";
  const tipsDetail = 'Whether you are building a product from scratch or modernizing existing systems, our team is ready to bring your vision to life with precision and professionalism.'
  const route = " Advisory of development services";
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

export default DevelopmentServices;
