
import ContactPage from '@/components/Pages/ContactPage/ContactPage';
import { siteMetadata } from '@/seo/siteMetadata/siteMetadata';
import { Metadata } from 'next';

export const metadata:Metadata = siteMetadata.contact


export default function page() {
    return <ContactPage />
}
