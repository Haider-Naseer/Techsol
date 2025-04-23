"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const faqData = [
  {
    id: "panel1",
    question: "What is your return policy?",
    answer:
      "You can return any unused item within 30 days for a full refund.",
  },
  {
    id: "panel2",
    question: "How do I track my order?",
    answer:
      "You’ll receive a tracking link via email once your order ships.",
  },
  {
    id: "panel3",
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship internationally. Shipping charges may apply.",
  },
];

export const FAQSection = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="flex bg-[#F8F8F8] px-[120px] pt-[60px] pb-[60px] justify-center flex-wrap">
      <div className="grid grid-cols-2 gap-[60px]">
        <div>
          <Image
            src={"/assets/icons/faq_section.svg"}
            alt="faq_icon"
            width={466}
            height={466}
          />
        </div>
        <div>
          <h2 className="text-[24px] font-[600]">Frequently asked questions</h2>
          <div className="mt-[28px] flex flex-col gap-4">
            {faqData.map((faq) => (
              <Accordion
                key={faq.id}
                expanded={expanded === faq.id}
                onChange={handleChange(faq.id)}
                elevation={0}
                sx={{
                  border: 0,
                  boxShadow: "none",
                  "&:before": {
                    display: "none",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <Image
                      src={
                        expanded === faq.id
                          ? "/assets/icons/minus.svg"
                          : "/assets/icons/plus.svg"
                      }
                      alt="toggle"
                      width={12}
                      height={12}
                    />
                  }
                  aria-controls={`${faq.id}-content`}
                  id={`${faq.id}-header`}
                >
                  <Typography component="span" className="font-medium">
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
