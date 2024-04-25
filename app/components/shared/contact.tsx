"use client";
import { useState} from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import axios from "axios";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        email: "",
        phone: "",
        preferredContact: "",
        referral: ""
    });
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] =useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const {name, value} = event.target;
        setFormData(prev => ({...prev, [name]: value}))
    }

    const handleSubmit  = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        axios.post("/api/sendEmail", formData).then((res)=> {
            setSuccess(true);
            setFormData({
                name: "",
                address: "",
                email: "",
                phone: "",
                preferredContact: "",
                referral: ""
            });
            setTimeout(() => {setSuccess(false)}, 3000);
            setLoading(false);
        }).catch(
            err => {
                console.log(err);
                setLoading(false);
            }
        )
    }

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
            <form onSubmit={handleSubmit} className="w-full h-auto relative flex flex-col gap-3 sm:w-96">
                {success && <div className="left-0 bottom-full absolute rounded-md text-sm flex justify-center items-center h-10 w-full bg-green-200 text-green-900">Thank you for contacting us</div>}
                <input autoComplete="new-password" value={formData.name} onChange={handleChange} className="py-1 px-2 h-10 w-full border-b-[1px] bg-dark border-primary outline-none placeholder:text-secondary placeholder:uppercase  placeholder:text-xs" name="name" required placeholder="Full Name" type="text" />
                <input autoComplete="new-password" value={formData.address} onChange={handleChange} className="py-1 px-2 h-10 w-full border-b-[1px] bg-dark border-primary outline-none placeholder:text-secondary placeholder:uppercase  placeholder:text-xs" name="address" required placeholder="Project Address" type="text" />
                <input autoComplete="new-password" value={formData.email} onChange={handleChange} className="py-1 px-2 h-10 w-full border-b-[1px] bg-dark border-primary outline-none placeholder:text-secondary placeholder:uppercase  placeholder:text-xs" name="email" required placeholder="Email" type="email" />
                <input autoComplete="new-password" value={formData.phone} onChange={handleChange} className="py-1 px-2 h-10 w-full border-b-[1px] bg-dark border-primary outline-none placeholder:text-secondary placeholder:uppercase  placeholder:text-xs" name="phone" required placeholder="Phone Number" type="text" />
                <select value={formData.preferredContact} onChange={handleChange} className="py-1 px-2 h-10 w-full border-b-[1px] bg-dark border-primary outline-none text-secondary uppercase  text-xs" required name="preferredContact">
                    <option value="">Preferred Contact</option>
                    <option value="Email">Email</option>
                    <option value="Phone">Phone</option>
                </select>
                <select value={formData.referral} onChange={handleChange} className="py-1 px-2 h-10 w-full border-b-[1px] bg-dark border-primary outline-none text-secondary uppercase  text-xs" required name="referral">
                    <option value="">How Did you hear about us?</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Pinterest">Pinterest</option>
                    <option value="Youtube">Youtube</option>
                    <option value="Referral">Referral</option>
                </select>
                <button disabled={loading} className="disabled:opacity-50 disabled:cursor-not-allowed flex mt-3 gap-3 w-full h-auto items-center justify-center text-primary bg-secondary py-2 px-6 rounded-full">
                    {loading? "Loading" : "Submit"}
                    <AiOutlineArrowRight />
                </button>
            </form>
        </section>
    )
}

export default Contact;