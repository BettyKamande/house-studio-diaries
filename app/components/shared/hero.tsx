import Image from "next/image";

interface Project {bgImg: string, title: string, text:string}
const Hero = ({bgImg, title, text}: Project) => {
    return (
        <section className="bg-cover bg-center relative w-full  h-80 overflow-hidden flex items-center justify-center flex-col gap-6 py-5 mt-20 mb-10 sm:py-10 sm:h-96 sm:mb-20 lg:h-screen" style={{ backgroundImage: `url(${bgImg})`}}>
            <div className="absolute w-full h-full left-0 top-0 bg-black bg-opacity-45 z-10"></div>
            <div className="w-full p-5 h-max text-white flex flex-col gap-5 z-10 sm:w-[60ch] sm:p-0">
                <h1 className="font-bold text-4xl font-merriweather text-center sm:text-6xl" >{title}</h1>
                <p className="text-center text-sm font-light sm:text-base sm:font-normal" >{text}</p>
            </div>
        </section>
    )
}

export default Hero;