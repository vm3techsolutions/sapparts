"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#363636] text-white">
      {/* Main Footer Content */}
      <div className="grid grid-cols-2 md:grid-cols-2 md:grid-cols-4 gap-4 md:gap-0  px-6 md:px-10 pt-6 pb-3">
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
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ..
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:ml-20">
          <h3 className="text-[#FACC48] font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-md">
            <li><Link href="/strategy">Strategy</Link></li>
            <li><Link href="/industries">Industries</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/technology">Technology</Link></li>
            <li><Link href="/resources">Resources</Link></li>
            <li><Link href="/sustainability">Sustainability</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/career">Career</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Other Links */}
        <div>
          <h3 className="text-[#FACC48] font-semibold text-lg mb-3">Other Links</h3>
          <ul className="space-y-2 text-md">
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms-conditions">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-[#FACC48] font-semibold text-lg mb-3">Get in Touch</h3>
          <p className="text-md text-gray-300 mb-2">
            Address: Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <p className="text-md text-gray-300 my-5">Phone: +91 12345 12345</p>
          <p className="text-md text-gray-300 my-5">Email: sales@sapparts.com</p>
          <div className="flex items-center gap-3 text-[#363636] text-2xl ">
            <Link href="#"><FaFacebookF className="rounded-full bg-[#FACC48] p-1"/></Link>
            <Link href="#"><FaInstagram className="rounded-full bg-[#FACC48] p-1"/></Link>
            <Link href="#"><FaYoutube className="rounded-full bg-[#FACC48] p-1"/></Link>
            <Link href="#"><FaLinkedinIn className="rounded-full bg-[#FACC48] p-1"/></Link>
          </div>
        </div>
      </div>

    {/* Bottom Bar */}
<div className="bg-[#0E509E] text-white text-center py-3 text-md">
  Designed & Development By:{" "}
  <Link
    href="https://vm3techsolution.com/?v=212bd1cfe3fb" 
    target="_blank"
    rel="noopener noreferrer"
    className=""
  >
    VM3 Tech Solutions LLP
  </Link>
</div>

    </footer>
  );
}
