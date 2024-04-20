import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    const date = new Date();
    return (
        <section className="px-5 w-full h-auto  text-primary flex flex-col gap-10 sm:px-10 sm:pt-10 lg:px-20">
            <div className="grid grid-cols-1 grid-rows-2 sm:grid-cols-5 sm:grid-rows-1">
                <Link className="h-full w-auto sm:col-span-2" href="/">
                    <Image className="h-full w-32 lg:w-40" src="/logo.svg" alt="House Studio Diaries" width={64} height={32} priority />
                </Link>
                <div className="flex w-full h-auto justify-between sm:col-span-3">
                    <div className="flex flex-col gap-5">
                        <h4 className="text-lg font-semibold">Follow Us</h4>
                        <div className="flex flex-col gap-1 text-sm font-light">
                            <Link href="#">Instagram</Link>
                            <Link href="#">Youtube</Link>
                            <Link href="#">Pinterest</Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h4 className="text-lg font-semibold">Contact Us</h4>
                        <div className="flex flex-col gap-1 text-sm font-light">
                            <p>+254 743 529 153</p>
                            <p>contact@housediaries.studio</p>
                            <p>12336 - 00400 Nairobi</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="w-full text-center text-xs font-light py-2">House Diaries Studio © {date.getFullYear()}</p>
        </section>
    )
}

export default Footer;