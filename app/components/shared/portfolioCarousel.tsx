"use client";
import Image from "next/image";
import { portfolios } from "@/app/utils/portfolioData";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const PortfolioCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [nextIndex, setNextIndex] = useState<number>(1);

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? portfolios.length - 1 : prevIndex - 1));
        setNextIndex(prev => (nextIndex === 0 ? portfolios.length - 1: prev - 1))
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === portfolios.length - 1 ? 0 : prevIndex + 1));
        setNextIndex((prev) => (nextIndex === portfolios.length-1 ? 0 : prev + 1))
    };

    const clickIndicator = (index: number) => {
        setCurrentIndex(index);
        if (index === portfolios.length-1) {
            setNextIndex(0);
        } else {
            setNextIndex(index + 1);
        }
    }
    return (
        <div className="flex flex-col gap-5">
            <div className="w-full relative h-auto flex flex-nowrap items-center gap-10">
                <div className={`h-96 rounded-md overflow-hidden w-full relative sm:w-3/4 lg:w-2/3`}>
                    <div className="absolute w-full h-full left-0 top-0 bg-black bg-opacity-30 z-10"></div>
                    <Image className="w-full h-full object-cover" src={portfolios[currentIndex].img} alt="house-diaries-studio-portfolio" width={400} height={200} />
                    <div className="absolute z-10 w-max flex flex-col gap-3 bottom-10 left-10">
                        <h3 className="font-bold text-white text-3xl font-merriweather sm:text-4xl">{portfolios[currentIndex].title}</h3>
                        <Link className="flex gap-2 px-5 py-2 text-primary bg-background w-max items-center rounded-full" href={`/portfolio/${portfolios[currentIndex].id}`}>
                            View project
                            <AiOutlineArrowRight />
                        </Link>
                    </div>
                </div>
                <div className={`h-96 hidden rounded-md overflow-hidden w-0 relative sm:w-1/4 sm:block lg:w-1/3`}>
                    <div className="absolute w-full h-full left-0 top-0 bg-black bg-opacity-45 z-10"></div>
                    <Image className="w-full h-full object-cover" src={portfolios[nextIndex].img} alt="house-diaries-studio-portfolio" width={400} height={200} />
                    <div className="absolute z-10 w-max flex flex-col gap-3 bottom-10 left-10">
                        <h3 className="font-bold text-white text-4xl font-merriweather">{portfolios[nextIndex].title}</h3>
                        <Link className="flex gap-2 px-5 py-2 text-primary bg-background w-max items-center rounded-full" href={`/portfolio/${portfolios[nextIndex].id}`}>
                            View project
                            <AiOutlineArrowRight />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex w-full h-auto items-center justify-between">
                <div className="z-50 w-10 cursor-pointer h-8 border-dashed border-[0.1px] border-secondary flex flex-col items-center justify-center" onClick={goToPrevSlide}>
                    <AiOutlineArrowLeft size={25}  />
                </div>
                <div className="flex gap-1">
                    {portfolios.map((image, index) => {
                        return (<div onClick={() => {clickIndicator(index)}} key={image.id} className={`w-10 cursor-pointer h-[3px] ${index === currentIndex ? 'bg-primary h-[4px]' : 'bg-secondary'}`}></div>)
                    })}
                </div>
                <div className="w-10 cursor-pointer h-8 border-dashed border-[0.1px] border-secondary flex flex-col items-center justify-center" onClick={goToNextSlide}>
                    <AiOutlineArrowRight className="cursor-pointer" size={25} />
                </div>
            </div>
        </div>
    )
}

export default PortfolioCarousel;