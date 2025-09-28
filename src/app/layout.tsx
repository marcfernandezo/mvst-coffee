import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "MVST Coffee | Exclusive Roasted Coffee",
  description: "Discover and create exclusive Arabica and Robusta blends at MVST.",
  keywords: ["coffee", "arabica", "robusta", "roasted coffee", "MVST"],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://mvst-coffee-marc.vercel.app",
    title: "MVST Coffee",
    description: "Discover and create exclusive Arabica and Robusta blends at MVST.",
    images: [
      {
        url: "/mvst_logo.webp",
        width: 1200,
        height: 630,
        alt: "MVST Coffee - Exclusive Roasted Coffee",
      },
    ],
    locale: "en_US",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bebas.className} bg-black text-white antialiased`}>
        {children}

        <Toaster position="top-right" aria-live="polite" />
      </body>
    </html>
  );
}
