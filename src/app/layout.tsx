import type { Metadata } from "next";

import { Poppins, Sora } from "next/font/google";

import "./globals.css";

import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Script from "next/script";
import FixedMeetingButton from "./components/FixedMeetingButton";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ecom Hyped",
  description: "Trusted Amazon FBA Automation Services provider",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Calendly Widget CSS */}
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${poppins.variable} ${sora.variable} antialiased`}>
        {children}
        <Footer />

        {/* WhatsApp Floating Button */}
        <WhatsAppButton
          phoneNumber="923001234567"
          message="Hello Ecom Hyped team! I'd like to know more about your services."
        />

        {/* Calendly Widget Script */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          type="text/javascript"
          async
          strategy="lazyOnload"
        />

        {/* Tawk.to Chat Script */}
        <Script id="tawkto-chat-widget" strategy="lazyOnload">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/686436ea988cbd190bbeaa4a/1iv3nd20q';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>

        {/* HubSpot Embed Code */}
        <Script
          id="hubspot-loader"
          src="//js-na2.hs-scripts.com/243207229.js"
          type="text/javascript"
          async
          defer
          strategy="lazyOnload"
        />

        {/* Fixed Meeting Button */}
        <FixedMeetingButton
          calendlyUrl="https://calendly.com/ecommerce-automation-ecomhyped/30min"
          fallbackHref="/contact"
        />
      </body>
    </html>
  );
}
