import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

const Intro = () => {
    return (
        <section className="flex flex-col gap-5 p-5 justify-center items-center w-full h-auto text-primary mb-20 sm:p-0">
            <div className="flex flex-col text-4xl font-extrabold font-merriweather w-max h-auto items-center sm:text-6xl sm:gap-2">
                <div className="flex gap-2 h-auto items-center">
                    We
                    <Image className="w-12 h-auto sm:w-16" src="/house-diaries-studio-intro-1.svg" alt="house-diaries-studio" width={30} height={50} />
                    offer more
                </div>
                <div className="flex gap-2 h-auto items-center">
                    than just a place
                    <Image className="w-12 h-auto sm:w-16" src="/house-diaries-studio-intro-2.svg" alt="house-diaries-studio" width={30} height={50} />
                </div>
                <div className="flex gap-2 h-auto items-center">
                    to live...
                    <Image className="h-12 w-auto sm:h-16" src="/house-diaries-studio-intro-3.svg" alt="house-diaries-studio" width={30} height={50} />
                </div>
            </div>
            <p className="w-full text-center text-sm font-medium sm:w-3/4 sm:text-base">
                We believe that in an increasingly dynamic world, it&apos;s crucial to consider the impact of the environments 
                we inhabit and envision how they will shape our everyday experiences. 
                In times of turmoil, having a sanctuary becomes paramount—a place where tranquility reigns and the desire to 
                escape is palpable. Our approach has always been deeply cinematic; we aspire to evoke positive emotions and 
                reveal the inherent beauty within spaces, enhancing the way people feel and interact with their surroundings.
            </p>
            <Link href="/about" className="flex gap-3 w-max h-auto items-center font-semibold bg-secondary py-2 px-6 rounded-full">
                Learn More
                <AiOutlineArrowRight />
            </Link>
        </section>
    )
}

export default Intro;