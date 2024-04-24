interface Iservice {
    id: number,
    image: string,
    title: string,
    description: string
}
const services:Iservice[] = [
    {
        id: 1,
        image: "/house-diaries-studio-services-general-consultation.svg",
        title: "General Consultation",
        description: "A comprehensive, 90 minutes virtual meeting designed to kickstart your home decor or renovation project. During this session, we'll discuss your vision for the space then we'll offer our professional opinion."
    },
    {
        id: 2,
        image: "/house-diaries-studio-services-assessment.svg",
        title: "Home Assessment",
        description: "A comprehensive, 2-hours, home assessment with expert recommendations. Mood board creation. Resource list and Shopping guide"
    },
    {
        id: 3,
        image: "/house-diaries-studio-services-interior-design.svg",
        title: "Interior Design",
        description: "We provide e-design services, offering clients virtual consultations and personalized design solutions tailored to their preferences and budget."
    },
    {
        id: 4,
        image: "/house-diaries-studio-services-home-deco.svg",
        title: "Home Decoration",
        description: "Whether it is color scheme selection, furniture selection + placement, lighting, textiles & fabrics, wall decor, decorative accessories, space planning & functional design, theme & style or even flooring, we are here to work with you."
    },
    {
        id: 5,
        image: "/house-diaries-studio-services-house-staging.svg",
        title: "Home Staging",
        description: "We transform your property into a buyer's or renter's dream! Our professional team specializes in strategically arranging furniture, decor, and accessories to showcase your property's best features and create an irresistible atmosphere."
    },
    {
        id: 6,
        image: "/house-diaries-studio-services-house-organization.svg",
        title: "Home Organization",
        description: "We will transform your home into a harmonious sanctuary where functionality meets style. With a keen eye for detail and a passion for efficiency, we offer bespoke organization solutions tailored to your unique lifestyle and preferences."
    },
    {
        id: 7,
        image: "/house-diaries-studio-services-shopping-assistance.svg",
        title: "Shopping Assistance",
        description: "Personal shopping assistance including personalised shopping lists, visits to showrooms and vendor discounts.Resource list and shopping guide"
    },
]

export default services;