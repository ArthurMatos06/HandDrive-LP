import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "../globals.css";
import Script from "next/script";
import FacebookPixel from "@/components/metadata/facebookpixel";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "HandDrive",
  description: "Adaptação veicular para PCD",

  openGraph: {
    title: "HandDrive",
    description: "Adaptação veicular para PCD",
    url: "https://handrive.com.br",
    siteName: "HandDrive",
    images: [
      {
        url: "/og-image.png",
        width: 600,
        height: 315,
        alt: "HandDrive",
      },
    ],
    icons: {
      icon: [{ url: "/images/logo-handdrive-2026.png", type: "image/png" }],
    },
  },

  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#2a6c00",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} bg-background`}>
      <body>
        {children}
        <FacebookPixel />
      </body>
    </html>
  );
}
