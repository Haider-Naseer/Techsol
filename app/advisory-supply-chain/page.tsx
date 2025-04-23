import ConsultingDetail from "@/components/consulting-detail/page";

const AdvisorySupplyChain = () => {
  const list = [
    "Deep expertise in trade finance and SCF models",
    "Customized solutions based on your industry and needs",
    "Cross-functional approach combining finance, logistics, and technology",
    "Proven track record of enhancing cash flow and supplier performance",
  ];
  const title = "Advisory of Supply chain Financing";
  const description =
    "Optimize your financial processes with our Supply Chain solutions for seamless efficiency.";
  const detail =
    "At Techsol, we provide expert advisory services in Supply Chain Financing (SCF) to help businesses optimize working capital, strengthen supplier relationships, and ensure end-to-end financial stability. Our tailored strategies are designed to unlock liquidity within the supply chain and drive operational efficiency.";
  const image = "/assets/icons/supply-chain.svg";
  const tips = "Let is Optimize Your Supply Chain";
  const tipsDetail =
    "Whether you are looking to implement a new SCF program or improve an existing one, our advisory team is here to support your financial transformation.";
  const route = " Advisory of supply chain";
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

export default AdvisorySupplyChain;
