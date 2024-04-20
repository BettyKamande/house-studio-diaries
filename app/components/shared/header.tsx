"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Header = ({page}: {page: string}) => {
    const [navExpanded, setNavExpanded] = useState(false);
    return (
        <header className="fixed top-0 left-0 w-full h-20 flex items-center justify-center z-20">
            <div className="relative bg-background text-primary shadow-sm w-full h-full flex justify-between items-center font-medium text-base z-50 px-5 sm:px-10 lg:px-20">
                <Link className="h-full w-auto" href="/">
                    <Image className="h-full w-32 lg:w-40" src="/logo.svg" alt="House Studio Diaries" width={64} height={32} priority />
                </Link>
                <div className={`gap-16 lg:gap-0 flex-col bg-background flex lg:p-0 lg:flex-row lg:right-0 lg:top-0 lg:h-full lg:bg-dark-blue justify-between ${navExpanded ? "absolute  h-auto py-10 px-5 sm:p-10 top-full -right-0 w-full": "hidden lg:flex"}`}>
                    <div className="h-full  flex flex-col text-2xl gap-5  lg:flex-row lg:items-center lg:gap-14 lg:text-base  font-medium tracking-wide ">
                        <Link className={`py-3 flex h-full items-center ${page === "studio" ? "lg:border-b-[3px] lg:border-primary" : undefined}`} href="/studio">Studio</Link>
                        <Link className={`py-3 flex h-full items-center ${page === "portfolio" ? "lg:border-b-[3px] lg:border-primary" : undefined}`} href="/portfolio">Portfolio</Link>
                        <Link className={`py-3 flex h-full items-center ${page === "about" ? "lg:border-b-[3px] lg:border-primary" : undefined}`} href="/about">About</Link>
                    </div>
                </div>
                <div className="h-full flex items-center text-primary lg:hidden">
                    {
                        navExpanded ? <AiOutlineClose size={30} onClick={() => {setNavExpanded(false)}}  /> :
                        <RxHamburgerMenu size={30}  onClick={() => {setNavExpanded(true)}} />
                    }
                </div>
            </div>
        </header>
    )
}
export default Header;