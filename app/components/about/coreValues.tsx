const CoreValues = () => {
    return (
        <div className="flex flex-col gap-10 px-5 py-14 sm:px-10 lg:px-20">
            <h2 className="text-4xl font-bold font-merriweather text-center text-primary sm:text-5xl">Our Core Values</h2>
            <div className="bg-cover bg-center w-full h-auto rounded-lg grid grid-cols-1 grid-rows-4 text-background overflow-hidden sm:grid-cols-2 sm:grid-rows-2 sm:h-96 lg:grid-cols-4 lg:grid-rows-1" style={{ backgroundImage: "url(/house-diaries-studio-corevalues.svg)"}}>
                <div className="w-full h-48 border-[0.5px] border-background relative overflow-hidden cursor-pointer group sm:h-full">
                    <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-50"></div>
                    <div className="w-full h-max flex flex-col gap-3 absolute left-0 px-5 bottom-5">
                        <h4 className="font-extrabold text-lg font-merriweather">Innovative Creativity</h4>
                        <p className="text-sm font-light  hidden group-hover:block text-justify">
                            Embracing cutting-edge design technologies, we infuse innovative creativity into every home, 
                            ensuring spaces are both modern and uniquely personalised.
                        </p>
                    </div>
                </div>
                <div className="w-full h-full border-[0.5px] border-background relative overflow-hidden cursor-pointer group">
                    <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-50"></div>
                    <div className="w-full h-max flex flex-col gap-3 absolute left-0 px-5 bottom-5">
                        <h4 className="font-extrabold text-lg font-merriweather">Collaboration</h4>
                        <p className="text-sm font-light  hidden group-hover:block text-justify">
                            Tech-enabled collaboration is the backbone of our designs. 
                            We leverage AI tools to foster open communication and teamwork, 
                            crafting homes that seamlessly adapt to the evolving needs of modern living.
                        </p>
                    </div>
                </div>
                <div className="w-full h-full border-[0.5px] border-background relative overflow-hidden cursor-pointer group">
                    <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-50"></div>
                    <div className="w-full h-max flex flex-col gap-3 absolute left-0 px-5 bottom-5">
                        <h4 className="font-extrabold text-lg font-merriweather">Sustainable Futurism</h4>
                        <p className="text-sm font-light  hidden group-hover:block text-justify">
                            Rooted in sustainable futurism, 
                            we are dedicated to crafting homes that not only embrace the latest in design but also champion sustainable practices, 
                            harmonising modernity with environmental consciousness.
                        </p>
                    </div>
                </div>
                <div className="w-full h-full border-[0.5px] border-background relative overflow-hidden cursor-pointer group">
                    <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-50"></div>
                    <div className="w-full h-max flex flex-col gap-3 absolute left-0 px-5 bottom-5">
                        <h4 className="font-extrabold  text-lg font-merriweather">Community Homeliness</h4>
                        <p className="text-sm font-light  hidden group-hover:block text-justify">
                            Actively engaging with and contributing to our local and global communities, 
                            we recognise the broader impact of our work, aiming to spread the warmth of homeliness beyond individual homes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoreValues;