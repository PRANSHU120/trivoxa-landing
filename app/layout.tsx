import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TRIVOXA TECH - Digital Growth Solutions",
  description: "Empowering Digital Growth. Custom websites, SaaS development, and brand-ready experiences crafted for scale.",
  keywords: "web development, SaaS, digital agency, branding, UI/UX design",
  openGraph: {
    title: "TRIVOXA TECH - Digital Growth Solutions",
    description: "Empowering Digital Growth through innovation and design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-dark-bg text-white">
        {children}
      </body>
    </html>
  );
}
