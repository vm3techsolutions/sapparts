import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/component/header/Header";
import Footer from "@/component/footer/Footer";
import Preloader from "@/component/preloader/Preloader";
// import ScrollRing from "@/component/scroller/ScrollRing";
import TranslationProvider from "@/component/TranslationProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SAP",
  description: "Generated by create next app",
   icons: {
    icon: "/assets/home/footerLogo.png", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
         {/* <ScrollRing/> */}
         <TranslationProvider/>
        <Preloader/>
          <Header />
         
          {children}
          <Footer />
       
      </body>
    </html>
  );
}
