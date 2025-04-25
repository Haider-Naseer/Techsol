"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export const LandingPageHeader = () => {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const homePath = [
    "/",
    "/advisory-supply-chain",
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
    <header className="z-[9999] w-full py-[23px] bg-[#1A94D5]" role="banner" aria-label="Main navigation">
      <div className="main-contain flex justify-between items-center relative">
        {/* Logo */}
        <Link href="/">
          <Image src="/assets/icons/Logo.svg" alt="logo" width={123} height={70} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-[40px] pr-[150px]" aria-label="Main navigation">
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
                <span>{item.name}</span>
              </Link>

              {item.hasSubmenu && isHovered && (
                <div className="absolute top-full left-0 bg-white shadow-lg py-2 px-2 rounded z-50 min-w-[200px]">
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

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
         {mobileMenuOpen ? <CloseIcon fontSize="inherit" /> : <MenuIcon fontSize="inherit" />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#1A94D5] shadow-md z-50 flex flex-col gap-2 p-4 md:hidden">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                <Link
                  href={item.link}
                  className={`${
                    item.active && "font-semibold underline"
                  } block text-white py-2`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.hasSubmenu && (
                  <div className="pl-4 flex flex-col gap-1">
                    {item.submenu?.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.link}
                        className="text-white text-sm py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
