import Image from "next/image";

const Team = () => {
  return (
    <>
      <div className="w-full bg-[#FFFFFF] section-gap">
        <div className="main-contain text-center">
          <h1 className="text-[#252525] text-[48px] font-[600]">
            Meet our team members
          </h1>
          <div className="pt-[16px] text-[#5A5C62]">
            <h2>
              We Focus on the details of everything we do. All to help
              businesses around the world <br />
              Focus on what's most important to them.
            </h2>
          </div>
          <div>
            <div className="flex pt-[99px] gap-[85px]">
              <div className="min-w-[265px] bg-[#F8F8F8] h-full flex flex-col justify-between">
                <div className="text-start flex flex-col flex-grow">
                  <div className="relative w-full h-[280px]">
                    <Image
                      src="/assets/icons/team-01.svg"
                      alt={`icon photo`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="px-4 py-3 pt-[10px]">
                    <h3 className="text-[#19191B] text-[14px] font-[700]">
                      Ayesha
                    </h3>
                    <p className="text-[#67B0D1] text-[12px] pt-1">
                      Managing Director
                    </p>
                    <span className="text-[#787A82] text-[12px] pt-3">
                      Team Manager
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-[80%] text-start">
                <p className="text-[23px]">
                  <span className="text-[#82BED8]">Ayesha</span> is a seasoned
                  professional with a highly successful 16-year banking career
                  primarily focused on Branch Management, Priority Banking,
                  Compliance, and Wealth Management at Standard Chartered Bank
                  and Banque Internationale Luxembourg. She excels in client
                  relationships, business development, compliance and team
                  management. <br /> Her leadership roles including Regional
                  Head at Standard Chartered Bank, Compliance Manager at Banque
                  Internationale Luxembourg and Managing Director at Techsol
                  Management Consultant highlight her success in client
                  management, strategic business management, creating sales
                  channels and process planning.
                </p>
              </div>
            </div>
            <div className="flex pt-[99px] gap-[85px]">
              <div className="min-w-[265px] bg-[#F8F8F8] h-full flex flex-col justify-between">
                <div className="text-start flex flex-col flex-grow">
                  <div className="relative w-full h-[375px]">
                    <Image
                      src="/assets/icons/team-02.svg"
                      alt={`icon photo`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="px-4 py-3 pt-[10px]">
                    <h3 className="text-[#19191B] text-[14px] font-[700]">
                      Muhammad Ali Mirza
                    </h3>
                    <p className="text-[#67B0D1] text-[12px] pt-1">
                      Chief Commercial Officer
                    </p>
                    <span className="text-[#787A82] text-[12px] pt-3">
                      MBA-(Fin), PMP (Project Management Professional)
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-[80%] text-start">
                <p className="text-[23px]">
                  <span className="text-[#82BED8]">Muhammad Ali Mirza</span> is
                  a seasoned financial expert with a proven track record in
                  banking, fintech, and supply chain finance. As the Chief
                  Commercial Officer at Techsol, he leads the company’s
                  commercial strategy, driving growth, partnerships, and market
                  expansion. With deep expertise in Corporate and Commercial
                  Asset Lending, Trade finance and Supply Chain Financing
                  advisory, he plays a pivotal role in delivering innovative
                  financial solutions that empower businesses to optimize their
                  working capital and mitigate risks. He has worked several
                  banks in  with a distinguished career spanning 24 years,
                  he has held key positions in leading banks like,   Citi Bank,
                  ABN AMRO Bank Alfalah and Dubai Islamic Bank, where he
                  specialized in trade finance, corporate banking, and
                  structured finance. His extensive experience in the banking
                  sector combined with his fintech expertise, enables him to
                  bridge the gap between traditional financial institutions and
                  cutting-edge digital financing solutions. <br /> <br /> At Techsol,
                  Ali spearheads the development of the company’s proprietary
                  trade finance platform called “Trade Risk”, ensuring seamless
                  access to trade pricing solutions tailored to the needs of
                  businesses across various industries.
                </p>
              </div>
            </div>
            <div className="flex pt-[99px] gap-[85px]">
              <div className="min-w-[265px] bg-[#F8F8F8] h-full flex flex-col justify-between">
                <div className="text-start flex flex-col flex-grow">
                  <div className="relative w-full h-[280px]">
                    <Image
                      src="/assets/icons/team-03.svg"
                      alt={`icon photo`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="px-4 py-3 pt-[10px]">
                    <h3 className="text-[#19191B] text-[14px] font-[700]">
                      Zubair Baig
                    </h3>
                    <p className="text-[#67B0D1] text-[12px] pt-1">
                      Regional Head Products (MENAT)
                    </p>
                    <span className="text-[#787A82] text-[12px] pt-3">
                      MBA(Finance)
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-[75%] text-start">
                <p className="text-[23px]">
                  A result driven professional with a vast banking experience of
                  over twenty years in Corporate and Commercial banking with
                  holding key position in Banks including Société Generale,
                  Standard Chartered Bank, Mashreq Bank and Emirates Islamic and
                  few other notable regional banks. He has played pivotal roles
                  in Transaction Banking, Trade Sales and advising Supply Chain
                  Finance Platforms with a focus on digitization to improve
                  operational efficiency. Worked on several projects and engaged
                  technology teams to provide multi bank trade finance
                  electronic platform solutions to the clients and also
                  successfully managed to issue innovative green trade finance.
                  Zubair has been instrumental in managing of Supply Chain
                  Finance, Receivable Purchase and Vanilla Trade Finance
                  mandates with usage of multi bank digital platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
