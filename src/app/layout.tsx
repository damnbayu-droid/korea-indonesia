import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://southkoreaindonesiavisa.online"),
  title: "Gold Visa Indonesia from Korea | Indonesian Visa from Korea - 인도네시아 비자",
  description: "Expert Indonesian Visa services from Korea. We provide Gold Visa, Tourist Visa, Business Visa. 한국인을 위한 전문 인도네시아 비자 서비스.",
  keywords: [
    "인도네시아 비자",
    "발리 비자",
    "한국인을 위한 인도네시아 비자",
    "인도네시아 관광 비자",
    "인도네시아 비즈니스 비자",
    "인도네시아 디지털 노마드 비자",
    "발리 여행 비자",
    "Indonesia visa for Koreans",
    "Bali visa South Korea",
    "Indonesia tourist visa Korea",
    "Indonesia digital nomad visa Korea",
    "Indonesia business visa",
    "Bali travel visa",
    "VOA Indonesia",
    "Indonesia KITAS",
  ],
  authors: [{ name: "Indonesian Visas Agency" }],
  icons: {
    icon: "/Favicon.webp",
  },
  openGraph: {
    title: "Gold Visa Indonesia from Korea | Indonesian Visa from Korea",
    description: "Expert Indonesian Visa services from Korea. We provide Gold Visa, Tourist Visa, Business Visa. 한국인을 위한 전문 인도네시아 비자.",
    url: "https://southkoreaindonesiavisa.online",
    siteName: "Indonesia Visa for Koreans",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/images/hero-bali.png",
        width: 1344,
        height: 768,
        alt: "Bali Indonesia Beach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gold Visa Indonesia from Korea | Indonesian Visa from Korea",
    description: "Expert Indonesian Visa services from Korea. We provide Gold Visa, Tourist Visa, Business Visa. 한국인을 위한 전문 인도네시아 비자.",
    images: ["/images/hero-bali.png"],
  },
  alternates: {
    canonical: "https://southkoreaindonesiavisa.online",
    languages: {
      "ko-KR": "https://southkoreaindonesiavisa.online",
      "en-US": "https://southkoreaindonesiavisa.online?lang=en",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <meta name="geo.region" content="KR" />
        <meta name="geo.placename" content="Seoul" />
        <meta name="author" content="Indonesian Visas Agency" />
        <link rel="preconnect" href="https://indonesianvisas.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
