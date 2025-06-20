// app/layout.tsx
import type { Metadata } from "next";
import { Poppins, Sora } from "next/font/google";
import './globals.css';
import Footer from "./components/Footer";
import WhatsAppButton from './components/WhatsAppButton'; // Tumhara WhatsAppButton import
import Script from 'next/script'; // **Naya Import:** Next.js se Script component import kiya

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
        {/* **Naya Code:** Calendly ki CSS file yahan add ki hai */}
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body>
        {children} {/* Tumhari poori website ka content yahan render hota hai */}
        <Footer />
        {/* Tumhara WhatsApp Button */}
        <WhatsAppButton phoneNumber="923001234567" message="Hello Ecom Hyped team! I'd like to know more about your services." />

        {/* **Naya Code:** Calendly ki JavaScript file yahan add ki hai */}
        {/* 'lazyOnload' ka matlab hai ke ye script thoda der baad load hoga, jisse website tez khulegi. */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          type="text/javascript"
          async
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}


// {/* NEW: WhatsApp Button integrated */}
// <WhatsAppButton phoneNumber="923001234567" message="Hello Ecom Hyped team! I'd like to know more about your services." />