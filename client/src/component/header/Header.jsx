"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [industryOpen, setIndustryOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [resourceOpen, setResourceOpen] = useState(false);
  const pathname = usePathname();

  const [language, setLanguage] = useState(i18n.language || "en");
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  const navLinks = [
    { name: t("Strategy"), href: "/strategy" },
    {
      name: t("Industries"),
      href: "#",
      subLinks: [
        { name: t("Agriculture"), href: "/industries/agriculture" },
        { name: t("Automotive"), href: "/industries/automotive" },
        { name: t("Construction"), href: "/industries/construction" },
        { name: t("Defence"), href: "/industries/defence" },
        { name: t("Industrial"), href: "/industries/industrial" },
        { name: t("Mining"), href: "/industries/mining" },
        { name: t("High-Tech"), href: "/industries/high-tech" },
      ],
    },
    {
      name: t("Products"),
      href: "#",
      subLinks: [
        { name: "Mechanical Face Seals", href: "/products/mechanical-face-seals" },
        { name: "Bushings", href: "/products/bushings" },
        { name: "Sintered Products", href: "/products/sintered-products" },
        { name: "Pump & Valves Components", href: "/products/pump-valves-components" },
        { name: "SAP Hub Bearings", href: "/products/sap-hub-bearings" },
        { name: "Precision Components", href: "/products/precision-components" },
      ],
    },
    { name: t("Technology & Innovation"), href: "/technology" },
    {
      name: t("Resources"),
      href: "#",
      subLinks: [
        { name: "Seals Assembly Guide", href: "/MaintenanceTips/SealsAssemblyGuide" },
        { name: "Seal-O-Fix", href: "/MaintenanceTips/Seal-O-Fix" },
        { name: "Seal For Rotovator", href: "/MaintenanceTips/SealForRotovator" },
      ],
    },
    { name: t("Sustainability"), href: "/sustainability" },
    { name: t("About"), href: "/about" },
    { name: t("Career"), href: "/career" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="flex items-center justify-between px-4 sm:px-10 py-2">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/home/headerLogo.png"
            alt="SAP Parts"
            width={120}
            height={40}
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-[#0E509E] text-md font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <div key={link.name} className="relative group">
                {link.subLinks ? (
                  <span className="px-2 py-1 cursor-default group-hover:text-[#003d7a] flex items-center gap-1">
                    {link.name} <FiChevronDown className="text-sm mt-[1px]" />
                  </span>
                ) : (
                  <Link
                    href={link.href}
                    className={`px-2 py-1 ${isActive ? "text-[#003d7a]" : ""} hover:text-[#FACC48]`}
                  >
                    {link.name}
                  </Link>
                )}
                {link.subLinks && (
                  <ul className="absolute top-full left-0 mt-1 bg-white border rounded shadow-sm opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                    {link.subLinks.map((sub) => (
                      <li key={sub.name}>
                        <Link
                          href={sub.href}
                          className="block whitespace-nowrap px-4 py-2 text-sm text-[#0E509E] hover:bg-[#FACC48] hover:text-black"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
          <Link href="/contact">
            <button className="ml-2 bg-[#0E509E] text-white px-2 py-0.5 rounded hover:bg-[#FACC48] hover:text-black text-md">
              {t("Contact Us")}
            </button>
          </Link>
          <div className="hidden md:block ml-2">
            <select
              value={language}
              onChange={(e) => changeLanguage(e.target.value)}
              className="bg-[#0E509E] text-white py-1.5 rounded text-sm focus:outline-none hover:bg-[#FACC48] hover:text-black"
            >
              <option value="en">English</option>
              <option value="ja">Japanese</option>
            </select>
          </div>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <FiX className="text-[#0E509E] text-2xl" />
            ) : (
              <FiMenu className="text-[#0E509E] text-2xl" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-4 py-3">
          <ul className="flex flex-col gap-3 text-[#0E509E] text-sm font-medium">
            {navLinks.map((link) => {
              const isIndustry = link.name === t("Industries");
              const isResource = link.name === t("Resources");
              const isProduct = link.name === t("Products");

              if (isIndustry) {
                return (
                  <li key={link.name}>
                    <button
                      className="w-full text-left font-medium flex items-center gap-1"
                      onClick={() => setIndustryOpen(!industryOpen)}
                    >
                      {link.name} <FiChevronDown className="text-sm" />
                    </button>
                    {industryOpen && (
                      <ul className="ml-4 mt-1 space-y-1">
                        {link.subLinks.map((sub) => (
                          <li key={sub.name}>
                            <Link
                              href={sub.href}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setIndustryOpen(false);
                              }}
                              className="block"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              } else if (isProduct) {
                return (
                  <li key={link.name}>
                    <button
                      className="w-full text-left font-medium flex items-center gap-1"
                      onClick={() => setProductOpen(!productOpen)}
                    >
                      {link.name} <FiChevronDown className="text-sm" />
                    </button>
                    {productOpen && (
                      <ul className="ml-4 mt-1 space-y-1">
                        {link.subLinks.map((sub) => (
                          <li key={sub.name}>
                            <Link
                              href={sub.href}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setProductOpen(false);
                              }}
                              className="block"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              } else if (isResource) {
                return (
                  <li key={link.name}>
                    <button
                      className="w-full text-left font-medium flex items-center gap-1"
                      onClick={() => setResourceOpen(!resourceOpen)}
                    >
                      {link.name} <FiChevronDown className="text-sm" />
                    </button>
                    {resourceOpen && (
                      <ul className="ml-4 mt-1 space-y-1">
                        {link.subLinks.map((sub) => (
                          <li key={sub.name}>
                            <Link
                              href={sub.href}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setResourceOpen(false);
                              }}
                              className="block"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              } else {
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block"
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              }
            })}
            <li>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <button className="bg-[#0E509E] text-white hover:bg-[#FACC48] hover:text-black px-4 py-2 rounded w-full mt-2">
                  {t("Contact Us")}
                </button>
              </Link>
            </li>
          </ul>

          <div className="mt-4">
            <select
              value={language}
              onChange={(e) => changeLanguage(e.target.value)}
              className="bg-gray-100 text-[#0E509E] px-3 py-2 rounded w-full border text-sm focus:outline-none"
            >
              <option value="en">English</option>
              <option value="ja">Japanese</option>
            </select>
          </div>
        </div>
      )}
    </header>
  );
}
