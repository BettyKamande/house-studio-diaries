import PortfolioCarousel from "./portfolioCarousel";
const PortfolioSection = ({title}: {title: string}) => {
    return (
        <section className="px-5 flex flex-col gap-5 sm:px-10 lg:px-20">
            <h2 className="text-5xl font-bold font-merriweather text-center text-primary my-10">{title}</h2>
            <PortfolioCarousel />
        </section>
    )
}

export default PortfolioSection;