import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CANHOPE STEEL | 钢材重量计算与询盘工具",
  description:
    "钢材重量计算与询盘工具，支持镀锌管、镀锌板管、黑料钢管、方矩管、角钢、槽钢和沟槽管件。",
  icons: {
    icon: "/canhope-logo.png",
    shortcut: "/canhope-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
