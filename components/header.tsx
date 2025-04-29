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
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false); // NEW: for mobile submenu

  const homePath = ["/", "/advisory-supply-chain", "/digital-platform"];
  const servicePath = [
    "",
    "/advisory-on-digitization",
    "/product-support",
    "/resources-augmentation",
  ];

  const navItems = [
    { name: "Home", link: "/", active: homePath.includes(pathname) },
    { name: "About us", link: "/about-us", active: pathname === "/about-us" },
    {
      name: "Services",
      link: "",
      active: servicePath.includes(pathname),
      hasSubmenu: true,
      submenu: [
        { name: "Advisory on Digitization", link: "/advisory-on-digitization" },
        { name: "Product Support", link: "/product-support" },
        { name: "Resource Augmentation", link: "/resources-augmentation" },
      ],
    },
    { name: "Team", link: "/team", active: pathname === "/team" },
    {
      name: "Trade Risk",
      color: "#5625f2",
      link: "/trade-risk",
      active: pathname === "/trade-risk",
    },
    {
      name: "Contact",
      link: "/contact-us",
      active: pathname === "/contact-us",
    },
  ];

  return (
    <header
      className={`relative z-20 w-full py-[23px] ${
        pathname != "/" && "bg-[#1A94D5]"
      } `}
      role="banner"
      aria-label="Main navigation"
    >
      <div className="main-contain flex justify-between items-center relative">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/assets/icons/Logo.svg"
            alt="logo"
            width={220}
            height={100}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-[40px]" aria-label="Main navigation">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => item.hasSubmenu && setIsHovered(true)}
              onMouseLeave={() => item.hasSubmenu && setIsHovered(false)}
            >
              {item.hasSubmenu ? (
                <button
                  type="button"
                  className={`${
                    item.active && "font-[800]"
                  } block cursor-pointer px-[15px] py-[10px] text-[#fff] bg-transparent`}
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  href={item.link}
                  className={`${
                    item.active && "font-[800] bg-[#a0cce180]"
                  } block cursor-pointer text-[#fff] px-[15px] py-[10px]`}
                >
                  {item.name}
                </Link>
              )}

              {/* Desktop submenu */}
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
          {mobileMenuOpen ? (
            <CloseIcon fontSize="inherit" />
          ) : (
            <MenuIcon fontSize="inherit" />
          )}
        </button>

        {mobileMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-white shadow-md z-50 flex flex-col gap-4 p-6">
            <div className="flex justify-end">
              <button
                className="text-2xl text-gray-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                <CloseIcon fontSize="inherit" />
              </button>
            </div>
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                {item.hasSubmenu ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                      className={`${
                        item.active
                          ? "text-[#1A94D5] font-bold"
                          : "text-gray-800"
                      } text-lg w-full text-center`}
                    >
                      {item.name}
                    </button>
                    {mobileSubmenuOpen && (
                      <div className="pl-4 flex flex-col gap-2 mt-2 text-center">
                        {item.submenu?.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.link}
                            className="text-gray-700 text-sm"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.link}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`${
                      item.active ? "text-[#1A94D5] font-bold" : "text-gray-800"
                    } text-lg block text-center`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
