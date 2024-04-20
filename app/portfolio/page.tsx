import Header from "../components/shared/header";
import PortfolioHero from "../components/porfolio/porfolioHero";
import Services from "../components/shared/services";
import Contact from "../components/shared/contact";
import Footer from "../components/shared/footer";
const Page = () => {
    return (
        <div>
            <Header page="portfolio" />
            <PortfolioHero />
            <Services />
            <Contact />
            <Footer />
        </div>
    )
}

export default Page;