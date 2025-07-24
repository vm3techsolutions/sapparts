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
    { name: t("Resources"), href: "/resources" },
    { name: t("Sustainability"), href: "/sustainability" },
    { name: t("About"), href: "/about" },
    { name: t("Career"), href: "/career" },
    { name: t("Contact Us"), href: "/contact" },
  ];

  return (
    <header className="sticky top-0 left-0 z-50">
      {/* Logo */}
      <div className="absolute sm:top-6 top-2 left-4 sm:left-10 z-50">
        <Link href="/">
          <Image
            src="/assets/home/headerLogo.png"
            alt="SAP Parts"
            width={140}
            height={40}
            priority
          />
        </Link>
      </div>

      {/* Top Blue Bar */}
      <div className="bg-[#0E509E] px-4 sm:px-10 sm:py-2 py-5">
        <div className="flex items-center justify-end gap-2 md:gap-4">
          {/* Desktop Controls */}
          <div className="hidden md:flex items-center gap-2">
            <Link href="/quote">
              <button className="bg-white text-[#0E509E] font-medium px-4 py-1 rounded text-sm hover:bg-[#FACC48] hover:text-black">
                {t("Get A Quote")}
              </button>
            </Link>
            <select
              value={language}
              onChange={(e) => changeLanguage(e.target.value)}
              className="bg-white text-[#0E509E] hover:bg-[#FACC48] hover:text-black font-medium px-3 py-1 rounded text-sm border"
            >
              <option value="en">English</option>
              <option value="ja">Japanese</option>
              <option value="hi">Hindi</option>
              <option value="de">German</option>
            </select>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden ml-auto">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <FiX className="text-white text-2xl" />
              ) : (
                <FiMenu className="text-white text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navbar */}
      <nav className="bg-white px-4 sm:px-10 py- hidden md:block">
        <ul className="flex justify-end items-center text-[#0E509E] text-md font-medium h-10 border-r-2 border-[#D9D9D9]">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <li
                key={link.name}
                className="flex flex-col items-center relative group px-1"
              >
                {link.subLinks ? (
                  <span className="py-1 px-3 cursor-default group-hover:text-[#003d7a] text-[#0E509E]">
                    {link.name}
                  </span>
                ) : (
                  <Link
                    href={link.href}
                    className={`py-1 px-2 hover:text-[#003d7a] ${
                      isActive ? "text-[#003d7a]" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                )}

                <div
                  className={`w-full h-0.5 mt-1 mb-0.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-[#FACC48]"
                      : "bg-transparent group-hover:bg-[#FACC48]"
                  }`}
                ></div>

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

                {index < navLinks.length - 1 && (
                  <div className="absolute right-0 top-0 bottom-0 border-r-2 border-[#D9D9D9]"></div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-4 py-3">
          <ul className="flex flex-col gap-3 text-[#0E509E] text-sm font-medium">
            {navLinks.map((link) =>
              link.subLinks ? (
                link.subLinks.map((sub) => (
                  <li key={sub.name}>
                    <Link
                      href={sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {sub.name}
                    </Link>
                  </li>
                ))
              ) : (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            )}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            
            <Link href="/quote">
              <button className="bg-[#0E509E] text-white px-4 py-2 rounded w-full">
                {t("Get A Quote")}
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
