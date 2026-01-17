import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_Devanagari } from "next/font/google";

export const metadata: Metadata = {
  title: "Sadaiv Satya Media",
  description: "Latest news in Hindi",

  openGraph: {
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },

};



const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-devanagari",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi">
      <body className={notoSansDevanagari.className}>
        {children}
      </body>
    </html>
  );
}


