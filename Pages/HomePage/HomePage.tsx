import Hero from "@/components/View/Hero/Hero";
import HowItWorks from "@/components/View/HowItWorks/HowItWorks";
import Services from "@/components/View/Services/Services";
import WhoWeAre from "@/components/View/WhoWeAre/WhoWeAre";


export default function HomePage() {
    return (
        <div>
            <Hero />
            <HowItWorks />
            <Services />
            <WhoWeAre />
        </div>
    )
}
