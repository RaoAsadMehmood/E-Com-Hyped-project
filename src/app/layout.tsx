import type { Metadata } from "next";
import { Poppins, Sora } from "next/font/google";
import './globals.css';
// import Navbar from "./components/Navbar"; // Keep this commented out if not used
import Footer from "./components/Footer";
import WhatsAppButton from './components/WhatsAppButton'; // NEW: Import WhatsAppButton

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
      <body
        className={`
          ${poppins.variable}
          ${sora.variable}
          antialiased
        `}
      >
        {/* <Navbar /> */}
        {children}
        <Footer />
        {/* NEW: WhatsApp Button integrated */}
        <WhatsAppButton phoneNumber="923001234567" message="Hello Ecom Hyped team! I'd like to know more about your services." />
      </body>
    </html>
  );
}
