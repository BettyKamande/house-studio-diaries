import Header from "../components/shared/header";
import Footer from "../components/shared/footer";
import Image from "next/image";

const Page = () => {
    return (
        <div className="">
            <Header page="betty" />
            <div className="bg-cover bg-center w-full h-auto px-5 mt-20 py-10 flex flex-col gap-5 sm:px-10 lg:px-20 lg:grid grid-cols-2 grid-rows-1 lg:gap-10 lg:h-screen" style={{ backgroundImage: `url(/about-betty-hero.svg)`}}>
                <div className="w-full h-full relative">
                    <Image className="w-full h-full" src="/about-betty.svg" alt="Betty Kamande" width={100} height={200} />
                </div>
                <div className="flex flex-col justify-center gap-5 text-white">
                    <h1 className="text-5xl font-extrabold font-merriweather">About Me</h1>
                    <div className="w-full flex flex-col gap-2 text-gray-300 leading-5 text-lg font-light">
                        <p>Hello! My name is Betty Kamande and I&apos;m an interior stylist with House Diaries Studio based in Nairobi.</p>
                        <p>With a passion for design and eye for detail, I specialize in crafting personalized spaces that exude style and comfort.</p>
                        <p>Let&apos;s collaborate to turn your vision into a reality and create a home that truly reflects who you are.</p>
                        <p>Welcome to House Diaries Studio, where your space becomes your story.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Page;