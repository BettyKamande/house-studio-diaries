import { AiOutlineArrowRight } from "react-icons/ai";

const Contact = () => {
    return (
        <section className="w-full h-auto bg-dark px-5 py-10 text-background flex flex-col gap-10 justify-center items-center sm:p-20">
            <div className="flex flex-col gap-3 items-center">
                <h2 className="text-3xl font-bold font-merriweather w-full text-center leading-tight sm:w-[25ch] sm:text-4xl lg:text-5xl">Do you have a project in Mind? Get in Touch</h2>
                <p className="text-sm font-light w-full text-center text-secondary sm:w-[50ch]">
                    If our portfolio sparks inspiration, 
                    feel free to inquire about your future projects by filling out a 
                    brief and asking any questions you may have.
                </p>
            </div>
            <form className="w-full h-auto flex flex-col gap-3 sm:w-96">
                <input className="py-1 px-2 h-10 w-full border-b-[1px] bg-dark border-primary outline-none placeholder:text-secondary placeholder:uppercase  placeholder:text-xs" required placeholder="Full Name" type="text" />
                <input className="py-1 px-2 h-10 w-full border-b-[1px] bg-dark border-primary outline-none placeholder:text-secondary placeholder:uppercase  placeholder:text-xs" required placeholder="Project Address" type="text" />
                <input className="py-1 px-2 h-10 w-full border-b-[1px] bg-dark border-primary outline-none placeholder:text-secondary placeholder:uppercase  placeholder:text-xs" required placeholder="Email" type="email" />
                <input className="py-1 px-2 h-10 w-full border-b-[1px] bg-dark border-primary outline-none placeholder:text-secondary placeholder:uppercase  placeholder:text-xs" required placeholder="Phone Number" type="text" />
                <input className="py-1 px-2 h-10 w-full border-b-[1px] bg-dark border-primary outline-none placeholder:text-secondary placeholder:uppercase  placeholder:text-xs" required placeholder="Prferred Contact" type="text" />
                <input className="py-1 px-2 h-10 w-full border-b-[1px] bg-dark border-primary outline-none placeholder:text-secondary placeholder:uppercase  placeholder:text-xs" required placeholder="How Did you hear about us?" type="text" />
                <button className="flex mt-3 gap-3 w-full h-auto items-center justify-center text-primary bg-secondary py-2 px-6 rounded-full">
                    Submit
                    <AiOutlineArrowRight />
                </button>
            </form>
        </section>
    )
}

export default Contact;