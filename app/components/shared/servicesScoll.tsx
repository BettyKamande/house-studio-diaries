import Image from "next/image";
import services from "@/app/utils/servicesData";

const ServicesScroll = () => {
    return (
        <div className="w-full h-80 overflow-hidden text-white">
            <div className="w-auto h-96 overflow-x-scroll overflow-y-hidden flex gap-5 items-start flex-nowrap">
                {services.map((service) => (
                    <div key={service.id} className="relative flex-shrink-0 w-80 h-72 bg-white shadow-md rounded-md overflow-hidden group">
                        <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-50 z-10"></div>
                        <Image className="w-full h-full object-cover object-center" src={service.image} alt="House Dairies Studio Services" width={100} height={150}  />
                        <div className="absolute z-10 left-0 bottom-0 p-5 w-full h-full flex flex-col gap-1 justify-end">
                            <h3 className="font-merriweather text-xl font-bold  w-max h-max">{service.title}</h3>
                            <p className="hidden  font-light group-hover:block text-gray-300">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ServicesScroll;