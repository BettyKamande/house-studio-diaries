import ServicesScroll from "./servicesScoll";

const Services = () => {
    return (
        <section className="px-5 py-10 flex flex-col sm:px-10 lg:px-20">
            <h2 className="text-5xl font-bold font-merriweather text-center text-primary mb-10">Our Services</h2>
            <ServicesScroll />
        </section>
    )
}

export default Services;