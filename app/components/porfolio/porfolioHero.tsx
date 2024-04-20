"use client";
import { portfolios } from "@/app/utils/portfolioData";
import Link from "next/link";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";

const PortfolioHero = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const nextProject = () => {
        setCurrentIndex(prev => (prev == portfolios.length - 1 ? 0 : prev + 1));
    }

    const prevProject = () => {
        setCurrentIndex(prev => (prev == 0 ? portfolios.length - 1 : prev - 1));
    }

    return (
        <section className="w-full h-screen overflow-hidden">
            {portfolios.map((portfolio, index) => (
                <div key={portfolio.id} className={`w-full h-full bg-cover bg-center relative ${currentIndex === index ? "block" : "hidden"}`} style={{ backgroundImage: `url(${portfolio.img})`}}>
                    <div className="absolute w-full h-full left-0 top-0 bg-black bg-opacity-45 z-10"></div>
                    <div className="absolute w-full h-max text-white flex justify-between items-center z-10 bottom-5 px-5 left-0 sm:bottom-10 sm:px-10  lg:bottom-20 lg:px-20 ">
                        <div className="flex flex-col gap-5">
                            <h1 className="font-bold text-2xl font-merriweather sm:text-4xl" >{portfolio.title}</h1>
                            <Link className="flex gap-2 px-5 py-2 text-primary bg-secondary w-max items-center rounded-full" href={`/portfolio/${portfolio.id}`}>
                                View project
                                <AiOutlineArrowRight />
                            </Link>
                        </div>
                        <div className="flex h-max w-auto gap-3 text-primary">
                            <div className="p-2 bg-white rounded-full cursor-pointer" onClick={prevProject}>
                                <AiOutlineArrowLeft />
                            </div>
                            <div className="p-2 bg-white rounded-full cursor-pointer" onClick={nextProject}>
                                <AiOutlineArrowRight />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            
        </section>
    )
}

export default PortfolioHero;