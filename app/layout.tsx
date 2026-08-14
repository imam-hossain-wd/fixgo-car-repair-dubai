import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Noto_Serif } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Shared/Navbar/Navbar";

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

export const metadata: Metadata = {
  title: "FixGo Car Repair Dubai | Onsite Auto Repair Services",
  description: "FixGo car repair dubai provide 24/7 professional onsite mobile car repair and mechanical service anywhere in dubai",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, inter.variable, "font-serif", notoSerif.variable)}
    >
      <main>
        <Navbar />
        <body className="min-h-full flex flex-col">
          {children}
        </body>
      </main>
    </html>
  );
}
