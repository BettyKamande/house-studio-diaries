"use client";
import { portfolios } from "@/app/utils/portfolioData";
import { useEffect, useState } from "react";
import Header from "@/app/components/shared/header";
import Footer from "@/app/components/shared/footer";
import Image from "next/image";

interface PortfolioItem {
    id: number;
    title: string;
    description: string;
    img: string;
    gallery: string[];
}

const Page = ({params}: {params: {id: string}}) => {
    const [projectInfo, setProjectInfo] = useState<PortfolioItem[]>([]);
    useEffect(() => {
        return setProjectInfo(portfolios.filter(item => item.id === parseInt(params.id)));
    }, []);


    return (
        <div>
            <Header page="portfolio" />
            {projectInfo.length > 0 ? <>
                <div className="mt-20 w-full h-auto text-center pt-10 pb-10 lg:pt-20">
                    <h1 className="font-merriweather text-5xl">{projectInfo[0]?.title}</h1>
                </div>
                <div className="w-full h-72 p-5 overflow-hidden relative lg:h-screen">
                    <Image className="w-auto h-full left-0 top-0" src={projectInfo[0]?.img} alt={projectInfo[0]?.title} fill={true} />
                </div>
                <div className="flex w-full px-5 gap-5 flex-col items-center h-auto py-10 sm:px-10 lg:gap-10 lg:px-20 lg:flex-row">
                    <h2 className="w-full text-center font-semibold text-2xl lg:text-xl">{`Welcome to ${projectInfo[0]?.title} Project`}</h2>
                    <p className="font-light text-lg text-center lg:text-sm lg:text-left">{projectInfo[0]?.description}</p>
                </div>
            </>:
            <div className="h-96 mt-20 w-full font-extralight text-lg text-primary flex items-center justify-center">
                Loading...
            </div>
            }
            <div className="w-full h-auto px-5 py-10 grid grid-cols-1 gap-5 overflow-hidden sm:grid-cols-3 sm:px-10 lg:px-20">
                {projectInfo[0]?.gallery.map((image, index) => (<Image className="w-full h-full" key={index} src={image} alt="House Diaries Studio Projects" width={30} height={50} />))}
            </div>
            <Footer />
        </div>
    )
}

export default Page;