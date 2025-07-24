"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#363636] text-white">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 px-6 md:px-10 pt-6 pb-3">
        {/* Logo and Description */}
        <div className="md:pt-10">
          <Image
            src="/assets/home/headerLogo.png"
            alt="SAP Parts"
            width={140}
            height={50}
            className="mb-4"
          />
          <p className="text-md text-gray-300">
            {t("Footer Description")}
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:ml-20">
          <h3 className="text-[#FACC48] font-semibold text-lg mb-3">
            {t("Quick Links")}
          </h3>
          <ul className="space-y-2 text-md">
            <li><Link href="/strategy">{t("Strategy")}</Link></li>
            <li><Link href="/industries">{t("Industries")}</Link></li>
            <li><Link href="/products">{t("Products")}</Link></li>
            <li><Link href="/technology">{t("Technology")}</Link></li>
            <li><Link href="/resources">{t("Resources")}</Link></li>
            <li><Link href="/sustainability">{t("Sustainability")}</Link></li>
            <li><Link href="/about">{t("About Us")}</Link></li>
            <li><Link href="/career">{t("Career")}</Link></li>
            <li><Link href="/contact">{t("Contact Us")}</Link></li>
          </ul>
        </div>

        {/* Other Links */}
        <div>
          <h3 className="text-[#FACC48] font-semibold text-lg mb-3">{t("Other Links")}</h3>
          <ul className="space-y-2 text-md">
            <li><Link href="/privacy-policy">{t("Privacy Policy")}</Link></li>
            <li><Link href="/terms-conditions">{t("Terms & Conditions")}</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-[#FACC48] font-semibold text-lg mb-3">{t("Get in Touch")}</h3>
          <p className="text-md text-gray-300 mb-2">{t("Address")}:</p>
          <p className="text-md text-gray-300 my-5">{t("Phone")}: +91 12345 12345</p>
          <p className="text-md text-gray-300 my-5">{t("Email")}: sales@sapparts.com</p>
          <div className="flex items-center gap-3 text-[#363636] text-2xl ">
            <Link href="#"><FaFacebookF className="rounded-full bg-[#FACC48] p-1" /></Link>
            <Link href="#"><FaInstagram className="rounded-full bg-[#FACC48] p-1" /></Link>
            <Link href="#"><FaYoutube className="rounded-full bg-[#FACC48] p-1" /></Link>
            <Link href="#"><FaLinkedinIn className="rounded-full bg-[#FACC48] p-1" /></Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0E509E] text-white text-center py-3 text-md">
        {t("Designed By")}:{" "}
        <Link
          href="https://vm3techsolution.com/?v=212bd1cfe3fb"
          target="_blank"
          rel="noopener noreferrer"
        >
          VM3 Tech Solutions LLP
        </Link>
      </div>
    </footer>
  );
}
