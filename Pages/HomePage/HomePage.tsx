import Hero from "@/components/View/Hero/Hero";
import HowItWorks from "@/components/View/HowItWorks/HowItWorks";
import LocationMap from "@/components/View/LocationMap/LocationMap";
import Services from "@/components/View/Services/Services";
import WhoWeAre from "@/components/View/WhoWeAre/WhoWeAre";
import WhyChooseUs from "@/components/View/WhyChooseUs/WhyChooseUs";


export default function HomePage() {
    return (
        <div>
            <Hero />
            <HowItWorks />
            <Services />
            <WhoWeAre />
            <WhyChooseUs />
            <LocationMap />
        </div>
    )
}
