import Header from "../components/shared/header";
import Footer from "../components/shared/footer";
import Hero from "../components/shared/hero";
import Services from "../components/shared/services";
import PortfolioSection from "../components/shared/portfolioSection";
import Contact from "../components/shared/contact";
import FAQS from "../components/shared/faqs";

const Page = () => {
    return (
        <div className="flex flex-col gap-10">
            <Header page="studio" />
            <Hero 
                title="With you every step of the way"
                text="At House Diaries Studio, collaboration is at the heart of everything we 
                do. We work closely with our clients, listening attentively to their vision, 
                preferences, and aspirations. From concept to completion, 
                we ensure a seamless process, delivering bespoke solutions that exceed 
                expectations." 
                bgImg="/studio-hero.svg"
            />
            <Services />
            <PortfolioSection title="Featured Projects" />
            <FAQS />
            <Contact />
            <Footer />
        </div>
    )
}

export default Page;