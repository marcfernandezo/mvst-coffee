import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "MVST Coffee | Exclusive Roasted Coffee",
  description: "Discover and create exclusive Arabica and Robusta blends.",
  keywords: ["coffee", "arabica", "robusta", "roasted coffee", "MVST"],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://mvst-coffee.vercel.app",
    title: "MVST Coffee",
    description: "Discover and create exclusive Arabica and Robusta blends.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MVST Coffee - Exclusive Roasted Coffee",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@mvst",
    images: ["/og-image.png"],
  },
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
