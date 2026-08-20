import HomePage from "@/components/Pages/HomePage/HomePage";
import { siteMetadata } from "@/seo/siteMetadata/siteMetadata";
import { Metadata } from "next";


export const metadata:Metadata = siteMetadata.home;
export default function Home() {
  return <HomePage />
}
