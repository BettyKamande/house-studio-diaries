import Image from "next/image";

interface Mission {
    img: string,
    title: string,
    text: string,
    reversed: boolean
}

const MissionVisionCard = ({img, title, text, reversed}: Mission) => {
    return (
        <div className="w-full h-auto flex flex-col gap-5 sm:gap-10 sm:grid sm:grid-cols-2 sm:grid-rows-1">
            <div className={`w-full h-auto relative overflow-hidden ${reversed && ' sm:order-2'}`}>
                <Image className="w-full h-auto object-cover" src={img} alt="House studio diaries" width={200} height={350} />
            </div>
            <div className={`${reversed && 'sm:order-1'} flex flex-col gap-2 justify-center`}>
                <h3 className="font-merriweather text-4xl font-bold sm:text-5xl">{title}</h3>
                <p className="font-light text-xl" >{text}</p>
            </div>
        </div>
    )
}

export default MissionVisionCard;