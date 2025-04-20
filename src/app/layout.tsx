import type { Metadata } from "next";
import { Poppins, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";



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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
