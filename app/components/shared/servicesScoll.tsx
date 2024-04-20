import Image from "next/image";
import services from "@/app/utils/servicesData";

const ServicesScroll = () => {
    return (
        <div className="w-full h-72 overflow-hidden">
            <div className="w-auto h-80 overflow-x-scroll overflow-y-hidden flex gap-5 items-start flex-nowrap">
                {services.map((service) => (
                    <div key={service.id} className="relative flex-shrink-0 w-56 h-64 bg-white shadow-md rounded-md overflow-hidden ">
                        <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-45 z-10"></div>
                        <Image className="w-full h-full object-cover object-center" src={service.image} alt="House Dairies Studio Services" width={100} height={150}  />
                        <h3 className="font-merriweather text-lg font-medium text-white z-10 absolute w-max h-max left-5 bottom-5">{service.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ServicesScroll;