import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rajat Choudhary — Senior Full Stack Software Engineer",
  description:
    "Personal portfolio of Rajat Choudhary, Senior Full Stack Software Engineer with 4+ years of experience building resilient logistics SaaS, enterprise platforms, and cross-platform mobile systems.",
  keywords: [
    "Rajat Choudhary",
    "Senior Full Stack Software Engineer",
    "React",
    "TypeScript",
    "Node.js",
    "React Native",
    "PostgreSQL",
    "AWS",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${plusJakarta.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="bg-[#F5EEDC] text-[#20251F] antialiased selection:bg-[#F45B91]/25 selection:text-[#174D38]">
        {children}
      </body>
    </html>
  );
}
