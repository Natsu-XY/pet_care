import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "毛孩子洗护所 | 宠物洗护店",
  description:
    "毛孩子洗护所提供犬猫洗护、造型修剪、皮毛护理和预约接送服务。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
