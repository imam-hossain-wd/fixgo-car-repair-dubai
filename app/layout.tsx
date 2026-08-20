import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Noto_Serif } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/View/Footer/Footer";
import FloatingButton from "@/components/Shared/FloatingButton/FloatingButton";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GoogleTagManager } from "@next/third-parties/google";

const notoSerif = Noto_Serif({ subsets: ['latin'], variable: '--font-serif' });

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, inter.variable, "font-serif", notoSerif.variable)}
    >
      <main>
        <Analytics />
        <SpeedInsights />
        <Navbar />
        <FloatingButton />
        <body className="min-h-full flex flex-col">
          {children}
        </body>
        <Footer />
      <GoogleTagManager gtmId="G-1KP4X3KGZC" />
      </main>
    </html>
  );
}
