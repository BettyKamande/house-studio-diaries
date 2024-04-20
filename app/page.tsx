import Header from "./components/shared/header";
import Hero from "./components/shared/hero";
import Intro from "./components/landingPage/intro";
import PortfolioSection from "./components/shared/portfolioSection";
import Services from "./components/shared/services";
import Contact from "./components/shared/contact";
import Footer from "./components/shared/footer";

export default function Home() {
  return (
    <main className="">
      <Header page={"home"} />
      <Hero 
        title="Elevate Your Space"
        text="Step into a world where creativity meets functionality. 
        At House Diaries Studio, we curate exceptional interiors tailored to your unique style and preferences. 
        Explore our portfolio and find inspiration for your next project." 
        bgImg="/house-diaries-studio.jpg"
      />
      <Intro />
      <PortfolioSection title="Portfolio" />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
