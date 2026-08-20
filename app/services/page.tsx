import ServicesPage from '@/components/Pages/ServicesPage/ServicesPage'
import { siteMetadata } from '@/seo/siteMetadata/siteMetadata'
import { Metadata } from 'next'
import React from 'react'


export const metadata:Metadata = siteMetadata.services;
export default function page() {
    return <ServicesPage />
}
