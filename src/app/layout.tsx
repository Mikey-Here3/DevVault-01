import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { TopNavBar } from "@/components/layout/TopNavBar";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { Providers } from "@/components/Providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DevVault — Discover the Best Developer Resources",
    template: "%s | DevVault",
  },
  description:
    "A curated hub for developers to discover, save, and share the best icons, coding snippets, AI tools, and ChatGPT prompts.",
  keywords: [
    "developer tools",
    "coding snippets",
    "AI tools",
    "ChatGPT prompts",
    "icons",
    "developer resources",
  ],
  authors: [{ name: "DevVault" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "DevVault",
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
      className={`${inter.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="min-h-screen flex flex-col bg-surface-dim text-on-surface font-sans antialiased">
        <Providers>
          <TopNavBar />
          <main className="flex-1">{children}</main>
          <Footer />
          <MobileNav />
        </Providers>
      </body>
    </html>
  );
}
