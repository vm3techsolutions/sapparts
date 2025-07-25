"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";



export default function Header() {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [industryOpen, setIndustryOpen] = useState(false);
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

    { name: t("Products"), href: "/products" },
    { name: t("Technology & Innovation"), href: "/technology" },
    {
      name: t("Resources"),
      href: "#",
      subLinks: [
        { name: "Seals Assembly Guide", href: "/industries/agriculture" },
        { name: "Seal-O-Fix", href: "/industries/automotive" },
        { name: "Seal For Rotovator", href: "/industries/construction" },
       
      ],
    },
   
    { name: t("Sustainability"), href: "/sustainability" },
    { name: t("About"), href: "/about" },
    { name: t("Career"), href: "/career" },

  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="flex items-center justify-between px-4 sm:px-10 py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/home/headerLogo.png"
            alt="SAP Parts"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex items-center gap-2 text-[#0E509E] text-md font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <div key={link.name} className="relative group">
                {link.subLinks ? (
                  <span className="px-2 py-1 cursor-default group-hover:text-[#003d7a]">
                    {link.name}
                  </span>
                ) : (
                  <Link
                    href={link.href}
                    className={`px-2 py-1 ${
                      isActive ? "text-[#003d7a]" : ""
                    } hover:text-[#FACC48]`}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown */}
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

          {/* Contact Us Button */}
          <Link href="/contact">
            <button className="ml-2 bg-[#0E509E] text-white px-2 py-0.5 rounded hover:bg-[#FACC48] hover:text-black text-md">
              {t("Contact Us")}
            </button>
          </Link>

          {/* Language Selector */}
          <div className="hidden md:block">
            {/* <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-[#0E509E] text-white hover:bg-[#FACC48] hover:text-black px-2 py-1 rounded text-md"
            >
              <option>English</option>
              <option>Hindi</option>
              <option>German</option>
              <option>Spanish</option>
            </select> */}
            <select
              value={language}
              onChange={(e) => changeLanguage(e.target.value)}
              className= "bg-[#0E509E] text-white hover:bg-[#FACC48] hover:text-black px-2 py-1 rounded text-md"
            >
              <option value="en">English</option>
              <option value="ja">Japanese</option>
              {/* <option value="hi">Hindi</option>
              <option value="de">German</option> */}
            </select>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-4 py-3">
          <ul className="flex flex-col gap-3 text-[#0E509E] text-sm font-medium">
            {navLinks.map((link) => {
              if (link.name === "Industries") {
                return (
                  <li key={link.name}>
                    <button
                      className="w-full text-left font-medium"
                      onClick={() => setIndustryOpen(!industryOpen)}
                    >
                      {link.name}
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
                  Contact Us
                </button>
              </Link>
            </li>
          </ul>

          {/* Mobile Language Selector */}
          <div className="mt-4">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-gray-100 text-[#0E509E] px-2 py-2 rounded w-full border"
            >
              <option>English</option>
              <option>Hindi</option>
              <option>German</option>
              <option>Spanish</option>
            </select>
          </div>
        </div>
      )}
    </header>
  );
}
