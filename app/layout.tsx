import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/kinetic/SmoothScroll";

export const metadata: Metadata = {
  title: "BLUEFIN SWIM — Award-Winning High-Performance Aquatics",
  description: "Experience Toronto's premier light-mode architectural swimming federation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#F9F8F5] text-[#0B0B0C] antialiased selection:bg-[#003EFF] selection:text-white">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
