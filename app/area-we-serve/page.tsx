import AreaWeServePage from '@/components/Pages/AreaWeServePage/AreaWeServePage'
import { siteMetadata } from '@/seo/siteMetadata/siteMetadata'
import { Metadata } from 'next'



export const metadata:Metadata = siteMetadata.areaWeServe
export default function page() {
    return <AreaWeServePage />
}
