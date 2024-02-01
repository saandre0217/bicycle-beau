import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bicycle Beau's Website",
  description: "created by his even smarter wife, Software Syd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link   rel="icon"
        href="/icon.png"
        type="image/png"
        sizes="500x500" 
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
