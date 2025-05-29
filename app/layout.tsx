import type React from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ConsultationWidget } from "@/components/consultation-widget";
import { LinearLoader } from "@/components/ui/linear-loader";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Force dynamic rendering to avoid static generation issues
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "OroraSoft | Software Development & AI Solutions Company",
  description:
    "Leading software development company specializing in custom software solutions, web applications, mobile apps, and AI integration. Expert in ERP systems, e-commerce platforms, and digital transformation. Transform your business with our innovative technology solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-screen bg-background font-sans antialiased ${roboto.className}`}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <LinearLoader />
          <main className="flex-1">{children}</main>
          <ConsultationWidget />
          <Footer />
        </div>
      </body>
    </html>
  );
}

import "./globals.css";
