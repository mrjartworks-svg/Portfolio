import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mradul Jain · Product Designer",
    template: "%s · Mradul Jain",
  },
  description:
    "Senior product designer specializing in enterprise systems, AI-assisted workflows, and technically complex experiences.",
  openGraph: {
    title: "Mradul Jain · Product Designer",
    description:
      "Designing enterprise systems, AI-assisted workflows, and experiences that simplify complexity.",
    type: "website",
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
