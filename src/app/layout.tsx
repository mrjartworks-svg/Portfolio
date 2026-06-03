import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { getSiteUrl } from "@/lib/site";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const siteDescription =
  "Senior product designer specializing in enterprise systems, AI-assisted workflows, and technically complex experiences.";

const openGraphDescription =
  "Designing enterprise systems, AI-assisted workflows, and experiences that simplify complexity.";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Mradul Jain · Product Designer",
    template: "%s · Mradul Jain",
  },
  description: siteDescription,
  openGraph: {
    title: "Mradul Jain · Product Designer",
    description: openGraphDescription,
    type: "website",
    siteName: "Mradul Jain",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mradul Jain · Product Designer",
    description: openGraphDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@500,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} font-body`}>
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
