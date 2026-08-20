import AboutPage from "@/components/Pages/AboutPage/AboutPage";
import { siteMetadata } from "@/seo/siteMetadata/siteMetadata";
import { Metadata } from "next";


export const metadata:Metadata = siteMetadata.about;
export default function about() {
    return <AboutPage />
}
