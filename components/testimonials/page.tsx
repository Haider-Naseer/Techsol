"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const TestimonialCards = () => {
  const testimonials = [
    {
      describe: `Qualco has collaborated with Techsol for sourcing technical staff for our complex SCF projects in the KSA, along with SCF product and implementation advisory services. They have proved to be reliable partners who have very good expertise and command over Supply chain Finance products as well as SCF digital functionalities required`,
      department: `International Business Development Director / Senior Business Consultant, Receivables & SCF solutions`,
      image: "/assets/icons/testimonials-03.png",
    },
    {
      describe: `TECHSOL has been a reliable partner in terms of engaging, advising and providing services to customers. Their approach towards transactions and processes is very professional.`,
      name: "George Koukis",
      department: `International Business Development Director / Senior Business Consultant, Receivables & SCF solutions`,
      image: "/assets/icons/testimonials-02.png",
    },
    {
      describe: `TECHSOL has been a reliable partner in terms for Premium Technology, providing valuable support for our SCF product implementation in the region. They have consistently demonstrated their dependability, making them a partner we can count on`,
      name: "George Koukis",
      department: `International Business Development Director / Senior Business Consultant, Receivables & SCF solutions`,
      image: "/assets/icons/testimonials-01.png",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto slide for mobile
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  const renderCard = (item: any, index: number) => (
    <div
      key={index}
      className="min-w-full mb-[50px] lg:mb-[0px] md:mb-[0px] px-4 transition-transform duration-500 ease-in-out"
    >
      <div className="relative text-start bg-white py-6 px-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] justify-between lg:min-h-[500px] md:min-h-[500px] min-h-[400px] max-w-[100%]">
        <div className="absolute -top-6 left-4 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shadow-md">
          <Image
            src={"/assets/icons/profile.svg"}
            width={75}
            height={75}
            alt="profile"
          />
        </div>

        <div className="flex justify-end mb-2">
          <div className="flex space-x-1 text-blue-500">
            <span>★★★★★</span>
          </div>
        </div>

        <p className="text-gray-700 text-base leading-relaxed mb-4">
          <span className="text-blue-500 text-xl font-serif font-bold pr-[5px]">
            “
          </span>
          {item?.describe}
          <span className="text-blue-500 text-xl font-serif font-bold pl-[5px]">
            ”
          </span>
        </p>

        <div className="absolute bottom-4 left-4">
          <img src={item?.image} alt="testimonials" className="w-full h-full" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white">
      <div className="section-gap text-center">
        <h2 className="text-[30px] font-[600] text-[#000]">Testimonials</h2>

        {isMobile ? (
          <div className="overflow-hidden w-full pt-[50px]">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((item, index) => renderCard(item, index))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 pt-[50px] px-[200px]">
            {testimonials.map((item, index) => renderCard(item, index))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialCards;
