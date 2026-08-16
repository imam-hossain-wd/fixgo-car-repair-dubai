
import ContactPage from '@/components/Pages/ContactPage/ContactPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact FixGo - 24/7 Mobile Car Repair Dubai | Call or Book Online",
  description: "Contact FixGo Car Repair Dubai for 24/7 emergency mobile car repair. Call +971 54 144 6338, WhatsApp, or book online. Certified mechanics arrive in 5-15 minutes.",
  keywords: "contact fixgo, car repair dubai phone, mobile mechanic dubai, emergency car repair, book car service dubai",
  openGraph: {
    title: "Contact FixGo - 24/7 Mobile Car Repair Dubai",
    description: "Contact FixGo Car Repair Dubai for 24/7 emergency mobile car repair.",
    type: "website",
    url: "https://www.fixgocarrepair.com/contact",
  },
};


export default function page() {
    return <ContactPage />
}
