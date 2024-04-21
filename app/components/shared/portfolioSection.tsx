import PortfolioCarousel from "./portfolioCarousel";
const PortfolioSection = ({title}: {title: string}) => {
    return (
        <section className="px-5 flex flex-col gap-5 sm:px-10 lg:px-20">
            <h2 className="text-4xl font-bold font-merriweather text-center text-primary my-10 sm:text-5xl">{title}</h2>
            <PortfolioCarousel />
        </section>
    )
}

export default PortfolioSection;