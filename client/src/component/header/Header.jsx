"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [language, setLanguage] = useState("English");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Strategy", href: "/strategy" },
    { name: "Industries", href: "/industries" },
    { name: "Products", href: "/products" },
    { name: "Technology & Innovation", href: "/technology" },
    { name: "Resources", href: "/resources" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "About", href: "/about" },
    { name: "Career", href: "/career" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 left-0 z-50 ">
      {/* Absolute Logo */}
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

      {/* Top Blue Header */}
      <div className="bg-[#0E509E] px-4 sm:px-10 sm:py-2 py-5">
        <div className="flex items-center justify-end gap-2 md:gap-4">
          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Link href="/quote">
              <button className="bg-white text-[#0E509E] font-medium px-4 py-1 rounded text-sm hover:bg-gray-100">
                Get A Quote
              </button>
            </Link>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-white text-[#0E509E] font-medium px-3 py-1 rounded text-sm border"
            >
              <option>English</option>
              <option>Hindi</option>
              <option>German</option>
              <option>Spanish</option>
            </select>
          </div>

          {/* Mobile Hamburger */}
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

      {/* White Nav Bar (below blue bar) */}
      <nav className="bg-white px-4 sm:px-10 py- hidden md:block ">
        <ul className="flex justify-end items-center text-[#0E509E] text-md font-medium h-12 border-r-2  border-[#D9D9D9]">
          {navLinks.map((link, index) => (
            <li key={link.name} className="flex items-center">
              <Link href={link.href} className="px-3 py-1 hover:text-[#003d7a]">
                {link.name}
              </Link>
              {index < navLinks.length - 1 && (
                <div className="h-12 border-r-2 border-[#D9D9D9]"></div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden  bg-white px-4 py-3 ">
          <ul className="flex flex-col gap-3 text-[#0E509E] text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} onClick={() => setMobileMenuOpen(false)}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Buttons */}
          <div className="mt-4 flex flex-col gap-3">
            <Link href="/quote">
              <button className="bg-[#0E509E] text-white px-4 py-2 rounded w-full">
                Get A Quote
              </button>
            </Link>

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
