import type { Metadata } from "next";
import {
  Inter,
  Noto_Sans_Devanagari,
  Playfair_Display,
} from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp";
import { Header } from "@/components/layout/header";
import { LanguageProvider } from "@/lib/language";
import { seo } from "@/content/site";
import { getAbsoluteUrl, getSiteUrl } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  display: "swap",
  variable: "--font-noto-devanagari",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: seo.defaultTitle,
    template: seo.titleTemplate,
  },
  description: seo.defaultDescription,
  applicationName: seo.siteName,
  openGraph: {
    type: seo.ogType,
    siteName: seo.siteName,
    images: [
      {
        url: getAbsoluteUrl(seo.ogImage.url),
        width: seo.ogImage.width,
        height: seo.ogImage.height,
        alt: seo.ogImage.alt,
        type: seo.ogImage.type,
      },
    ],
  },
  twitter: {
    card: seo.twitterCard,
  },
  icons: {
    icon: [
      {
        url: "/images/favicon.ico",
        type: "image/x-icon",
        sizes: "any",
      },
    ],
    apple: [
      {
        url: "/images/apple-touch-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-language="en"
      className={`${inter.variable} ${playfair.variable} ${devanagari.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-text">
        <LanguageProvider>
          <Header />
          <div className="flex-1 pb-24 md:pb-0">{children}</div>
          <Footer />
          <FloatingWhatsApp />
        </LanguageProvider>
      </body>
    </html>
  );
}
