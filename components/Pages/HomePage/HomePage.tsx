import CTA from "@/components/View/CTA/CTA";
import FAQ from "@/components/View/FAQ/FAQ";
import Gallery from "@/components/View/Gallery/Gallery";
import Hero from "@/components/View/Hero/Hero";
import HowItWorks from "@/components/View/HowItWorks/HowItWorks";
import LocationMap from "@/components/View/LocationMap/LocationMap";
import FeactureServices from "@/components/View/Services/Services";
import WhoWeAre from "@/components/View/WhoWeAre/WhoWeAre";
import WhyChooseUs from "@/components/View/WhyChooseUs/WhyChooseUs";



export default function HomePage() {
    return (
        <div>
            <Hero />
            <HowItWorks />
            <FeactureServices />
            <Gallery />
            <WhoWeAre />
            <WhyChooseUs />
            <LocationMap />
            <FAQ />
            <CTA />
        </div>
    )
}
