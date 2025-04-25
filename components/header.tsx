"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const LandingPageHeader = () => {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);

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
    { name: "About us", link: "/about-us", active: pathname === "/about-us" },
    {
      name: "Services",
      link: "/services",
      active: servicePath.includes(pathname),
      hasSubmenu: true,
      submenu: [
        { name: "Advisory on Digitization", link: "/advisory-on-digitization" },
        { name: "Product Support", link: "/product-support" },
        { name: "Resource Augmentation", link: "/resources-augmentation" },
      ],
    },
    { name: "Team", link: "/team", active: pathname === "/team" },
    { name: "Contact", link: "/contact-us", active: pathname === "/contact-us" },
  ];

  return (
    <header className="z-999 w-full py-[23px] bg-[#1A94D5] z-[9999]" role="banner" aria-label="Main navigation">
      <div className="main-contain flex justify-between items-center relative">
        <div>
          <Link href="/">
            <Image src="/assets/icons/Logo.svg" alt="logo" width={123} height={70} />
          </Link>
        </div>
        <div className="flex items-center w-full justify-center">
          <nav className="flex gap-[60px]" aria-label="Main navigation">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => item.hasSubmenu && setIsHovered(true)}
                onMouseLeave={() => item.hasSubmenu && setIsHovered(false)}
              >
                <Link
                  href={item.link}
                  className={`${
                    item.active && "font-[600] border-b-[2px] border-b-[#fff]"
                  } block cursor-pointer m-[10px] text-[#fff]`}
                >
                  <span className="cursor-pointer text-[#fff]">{item.name}</span>
                </Link>

                {/* Submenu for Services */}
                {item.hasSubmenu && isHovered && (
                  <div className="absolute top-full right-[-50px] bg-white shadow-lg py-2 px-2 rounded z-50 min-w-[200px]">
                    {item.submenu?.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.link}
                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
