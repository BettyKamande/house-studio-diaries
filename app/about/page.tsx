import Contact from "../components/shared/contact";
import Footer from "../components/shared/footer";
import Header from "../components/shared/header";
import Hero from "../components/shared/hero";
import MissionVisionCard from "../components/shared/missionVisionCard";
import CoreValues from "../components/about/coreValues";
const Page = () => {
    return (
        <div>
            <Header page="about" />
            <Hero 
                title="Discover the Story Behind Us"
                text="Whether you seek modern minimalism, timeless elegance, or bold statements, we invite you to embrace the art of interior design with us."
                bgImg="/house-diaries-studio-portfolio-2.svg"
            />
            <div className="flex flex-col gap-16 px-5 py-10 sm:px-10 lg:px-20">
                <MissionVisionCard
                    img="/vision.svg"
                    title="Our Vision"
                    text="Crafting Enduring Homes, Weaving Tales: Elevating the essence of every client's dream home through warm, personalised design solutions that inspire a sense of belonging and comfort."
                    reversed={false}
                />
                <MissionVisionCard
                    img="/mission.svg"
                    title="Our Mission"
                    text="To curate living spaces that transcend mere functionality. We dedicate ourselves to understanding the unique stories, lifestyles, and aspirations of our clients, infusing every design with a touch of homely warmth and enduring charm. Our commitment is to foster collaborative relationships, cultivating creativity, sustainability, and joy in every cozy corner we create."
                    reversed={true}
                />
            </div>
            <CoreValues />
            <Contact />
            <Footer />
        </div>
    )
}

export default Page;