import type { Metadata } from "next";
import { Poppins, Sora } from "next/font/google";
import './globals.css';
import Footer from "./components/Footer";
import WhatsAppButton from './components/WhatsAppButton';
import Script from 'next/script'; 

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
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body
        
        className={`${poppins.variable} ${sora.variable} antialiased`}
      >
        {children}
        <Footer />
        <WhatsAppButton phoneNumber="923001234567" message="Hello Ecom Hyped team! I'd like to know more about your services." />

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
