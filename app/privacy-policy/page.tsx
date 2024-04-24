import Footer from "../components/shared/footer";
import Header from "../components/shared/header";
const Page = () => {
    return (
        <div>
            <Header page="Privacy" />
            <div className="w-full h-auto px-5 flex flex-col gap-10 mt-20 py-10 sm:px-10 lg:px-20 text-primary">
                <h1 className="w-full h-max text-center text-5xl font-merriweather font-bold">Privacy Policy</h1>
                <p>
                    This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your 
                    information when You use the Service and tells You about Your privacy rights and how the law protects You. 
                    We use Your Personal data to provide and improve the Service. 
                    By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. 
                </p>
                <div className="flex flex-col gap-5">
                    While using Our Service, We may ask You to provide House Diaries Studio with certain personally identifiable information that can be used to contact or identify You. 
                    Personally identifiable information may include, but is not limited to:
                    <ul className="list-disc pl-10">
                        <li>Email Address</li>
                        <li>First Name and Last Name</li>
                        <li>Mobile Number</li>
                        <li>Physical Address</li>
                        <li>Usage Data</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-5">
                    <h3 className="font-bold text-lg">Usage Data</h3>
                    <p>Usage Data is collected automatically when using the Service</p>
                    <p>
                        Usage Data may include information succh as your Device&apos;s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, 
                        the time spent on those pages, unique device identifiers and other diagnostic data.
                    </p>
                    <p>
                        When You access the Service by or through a mobile device, We may collect certain information automatically, including, 
                        but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, 
                        Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
                    </p>
                    <p>
                        We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    <h4 className="font-bold text-lg">
                        Tracking Technologies and Cookies
                    </h4>
                    <p>
                        We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. 
                        Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. 
                        The technologies We use may include:
                    </p>
                    <p>
                        Cookies or Browser Cookies. 
                        A cookie is a small file placed on Your Device. 
                        You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. 
                        However, if You do not accept Cookies, You may not be able to use some parts of our Service. 
                        Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.
                        Flash Cookies. Certain features of our Service may use local stored objects (or Flash Cookies) to 
                        collect and store information about Your preferences or Your activity on our Service. 
                        Flash Cookies are not managed by the same browser settings as those used for Browser Cookies. 
                        For more information on how You can delete Flash Cookies, please read “Where can I change the settings 
                        for disabling, or deleting local shared objects?”Web Beacons. 
                        Certain sections of our Service and our emails may contain small electronic files known as web beacons 
                        (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, 
                        for example, to count users who have visited those pages or opened an email and for other related 
                        website statistics (for example, recording the popularity of a certain section and verifying system and 
                        server integrity).
                    </p>
                    <p>
                        Cookies can be “Persistent” or “Session” Cookies. 
                        Persistent Cookies remain on Your personal computer or mobile device when You go offline, 
                        while Session Cookies are deleted as soon as You close Your web browser. 
                        You can learn more about cookies here: Cookies by TermsFeed Generator.
                    </p>
                    <p>
                        We use both Session and Persistent Cookies for the purposes set out below:
                    </p>
                    <p>
                        Necessary / Essential Cookies <br />
                        Type: Session Cookies <br />
                        Administered by House Diaries Studio 
                    </p>
                    <p>
                        Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.
                    </p>
                    <p>
                        Cookies Policy / Notice Acceptance Cookies <br />
                        Type: Persistent Cookies <br />
                        Administered by House Diaries Studio
                    </p>
                    <p>
                        Purpose: These Cookies identify if users have accepted the use of cookies on the Website.
                    </p>
                    <p>
                        Functionality Cookies <br />
                        Type: Persistent Cookies <br />
                        Administered by House Diaries Studio
                    </p>
                    <p>
                        Purpose: These Cookies allow us to remember choices You make when You use the Website, 
                        such as remembering your login details or language preference. 
                        The purpose of these Cookies is to provide You with a more personal experience and to avoid 
                        You having to re-enter your preferences every time You use the Website.
                    </p>
                    <p>
                        Tracking and Performance Cookies <br />
                        Type: Persistent Cookies <br />
                        Administered by: Third-Parties
                    </p>
                    <p>
                        Purpose: These Cookies are used to track information about traffic to the Website and how users use the Website. 
                        The information gathered via these Cookies may directly or indirectly identify you as an individual visitor. 
                        This is because the information collected is typically linked to a pseudonymous identifier associated with the device 
                        you use to access the Website. We may also use these Cookies to test new pages, 
                        features or new functionality of the Website to see how our users react to them.
                    </p>
                    <p>
                        For more information about the cookies we use and your choices regarding cookies, 
                        please visit our Cookies Policy or the Cookies section of our Privacy Policy.
                    </p>
                </div>
                <div>
                    <h4>Use of Your Personal Data</h4>
                    <p>
                        The Company may use Personal Data for the following purposes:
                    </p>
                    <ul className="list-disc pl-10">
                        <li>To manage Your Account: to manage Your registration as a user of the Service.</li>
                        <li>The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</li>
                        <li>For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</li>
                        <li>To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application&apos;s push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</li>
                        <li>To provide You with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</li>
                        <li>To manage Your requests: To attend and manage Your requests to Us.</li>
                        <li>For business transfers: We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</li>
                        <li>For other purposes: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns, and evaluating and improving our Service, products, services, marketing, and your experience.</li>
                    </ul>
                    <p>The company may share your data for the following purposes:</p>
                    <ul className="list-disc pl-10">
                        <li>With Service Providers: We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.</li>
                        <li>For business transfers: We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
                        <li>With Affiliates: We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners, or other companies that We control or that are under common control with Us.</li>
                        <li>With business partners: We may share Your information with Our business partners to offer You certain products, services, or promotions.</li>
                        <li>With other users: when you share personal information or otherwise interact in public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</li>
                        <li>With Your consent: We may disclose Your personal information for any other purpose with Your consent.</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Page;