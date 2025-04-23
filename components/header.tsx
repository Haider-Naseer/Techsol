"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const LandingPageHeader = () => {
  const pathname = usePathname();

  // Navigation menu items data

  const homePath = [
    "/",
    "/advisory-supply-chain",
    "/digital-platform",
    "/digital-platform",
  ];

  const servicePath = [
    "/services",
    "/advisory-on-digitization",
    "/product-support",
    "/resources-augmentation",
  ];

  const navItems = [
    { name: "Home", link: "/", active: homePath.includes(pathname) },
    { name: "About us", link: "/about-us", active: pathname == "/about-us" },
    {
      name: "Services",
      link: "/services",
      active: servicePath.includes(pathname),
    },
    {
      name: "Team",
      link: "/team",
      active: pathname == "/team",
    },
    {
      name: "Contact",
      link: "/contact-us",
      active: pathname == "/contact-us",
    },
  ];

  return (
    <header
      className="z-999 w-full py-[23px] bg-[#1A94D5]"
      role="banner"
      aria-label="Main navigation"
    >
      <div className="main-contain flex">
        <div>
          <Link href="/">
            <Image
              src="/assets/icons/Logo.svg"
              alt="logo"
              width={123}
              height={70}
            />
          </Link>
        </div>
        <div className="flex items-center w-full justify-center">
          <nav className="flex gap-[60px]" aria-label="Main navigation">
            {navItems?.map((item, index) => (
              <Link
                key={index}
                href={item?.link}
                className={`${
                  item?.active && "font-[600] border-b-[2px] border-b-[#fff] "
                } block cursor-pointer m-[10px] text-[#fff]`}
              >
                <span className="cursor-pointer text-[#fff]">{item?.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
