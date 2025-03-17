import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ConsultationWidget } from "@/components/consultation-widget";
import SessionProvider from "@/components/session-provider";
import { LinearLoader } from "@/components/ui/linear-loader";

const inter = Inter({ subsets: ["latin"] });

// Force dynamic rendering to avoid static generation issues
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "OroraSoft - Transforming Ideas into Digital Solutions",
  description:
    "OroraSoft provides cutting-edge software development services, helping businesses transform their ideas into powerful digital solutions.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <LinearLoader />
              <main className="flex-1">{children}</main>
              <ConsultationWidget />
              <Footer />
            </div>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

import "./globals.css";
