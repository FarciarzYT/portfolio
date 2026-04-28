import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GridPattern from "@/components/ui/grid-pattern";
import { Theme } from "@radix-ui/themes";
import Footer from "@/components/base/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tlusty.vercel.app/"),
  title: {
    default: "Tomasz Tłusty – Portfolio",
    template: "%s | Tomasz Tłusty",
  },
  description:
      "Portfolio Tomasza Tłustego – projekty webowe, cyberbezpieczeństwo, hardware (ESP32, PCB), aplikacje Next.js i TypeScript.",
  authors: [{ name: "Tomasz Tłusty" }],
  creator: "Tomasz Tłusty",
  openGraph: {
    title: "Tomasz Tłusty – Portfolio",
    description:
        "Projekty webowe, cyberbezpieczeństwo i hardware. Zobacz moje realizacje.",
    url: "https://tlusty.vercel.app",
    siteName: "Tomasz Tłusty Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Tomasz Tłusty",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tomasz Tłusty – Portfolio",
    description:
        "Projekty webowe, cyberbezpieczeństwo i hardware.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html
          lang="pl"
          className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
      <body className="min-h-full flex flex-col bg-mintcream text-black">
      <Theme>
        <GridPattern />
        {children}
        <Footer />
      </Theme>
      </body>
      </html>
  );
}