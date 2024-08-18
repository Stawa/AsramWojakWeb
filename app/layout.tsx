import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "AsramWojak - Minecraft Server",
    template: "%s - AsramWojak",
  },
  description:
    "Join Asram Wojak's Minecraft server for fun adventures and a friendly community. Connect on Java or Bedrock!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
