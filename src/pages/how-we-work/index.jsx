import React from "react";
import Header from "@/components/header";
import { MdLightbulbOutline } from "react-icons/md";
import Footer from "@/components/footer";
import SecondaryFooter from "@/components/secondaryFooter";

const HowWeWork = () => {
    return (
        <>
            <Header />
            <div className="container pt-28 mx-auto lg:px-28 sm:px-4">
                <div className="grid md:grid-cols-6 pt-12">
                    <div className="px-12 m-2 lg:col-span-6 sm:col-span-6 animate__animated animate__fadeInUp">
                        <p className="font-ZonaNormalFont text-lg">How we work</p>
                    </div>

                    <div className="px-12 pb-12 pt-6 m-2 lg:col-span-6 sm:col-span-4 animate__animated animate__fadeInUp">
                        <h2 className="text-5xl font-ZonaBoldFont leading-tight	mb-12 color-white">
                            What should you expect when<br /> working with us?
                        </h2>
                    </div>


                    <div className="px-12 m-2 lg:col-span-6 sm:col-span-6 animate__animated animate__fadeInUp">
                        <p className="font-ZonaNormalFont text-lg">
                            Over the years, we have defined our favorite workflow that we've tested with many<br /> clients. This workflow is based on transparency, collaboration, and a goal-driven<br /> mindset.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto lg:px-28 sm:px-4">
                <div className="grid md:grid-cols-6 pt-12">
                    <div className="px-12 pb-12 pt-6 m-2 lg:col-span-6 sm:col-span-4 animate__animated animate__fadeInUp">
                        <img className="w-full h-full" src="https://ronasit.com/_next/static/media/how-we-work-dark.55c07059.svg" alt="" />
                    </div>
                </div>
            </div>

            <div className="container pt-28 mx-auto lg:px-28 sm:px-4">
                <div className="grid md:grid-cols-6 pt-12">
                    <div className="px-12 m-2 lg:col-span-6 sm:col-span-6 animate__animated animate__fadeInUp">
                        <p className="font-ZonaNormalFont text-lg">Approach</p>
                    </div>

                    <div className="px-12 pb-12 pt-6 m-2 lg:col-span-6 sm:col-span-4 animate__animated animate__fadeInUp">
                        <h2 className="text-5xl font-ZonaBoldFont leading-tight	mb-12 color-white">
                            We use a project-based approach where the<br /> product undergoes three stages:
                        </h2>
                    </div>
                </div>
            </div>

            <div className="container pt-28 mx-auto lg:px-28 sm:px-4">
                <div className="grid md:grid-cols-12 pt-12">
                    <div className="px-8 pt-6 m-2 lg:col-span-12 sm:col-span-12">
                        <h2 className="text-5xl font-ZonaBoldFont leading-tight	mb-12 color-white">
                            Analytics
                        </h2>
                    </div>
                    <div className="px-8 pt-6 m-2 lg:col-span-4 sm:col-span-12 animate__animated animate__fadeInUp">
                        <h6 className="text-2xl leading-relaxed	font-ZonaNormalFont">
                            Every project starts with analytics. At this stage, we do some preparatory work that will help optimize development time and resources and ultimately launch a successful product on the market.
                        </h6>
                    </div>

                    <div className="pl-40 pb-12 pt-6 m-2 lg:col-span-8 sm:col-span-12 animate__animated animate__fadeInUp">
                        <h6 className="leading-relaxed text-base font-ZonaNormalFont leading-tight mb-12 color-white">
                            Our analyst team works together with the client to establish a clear <br /> vision of the product and answer these questions:
                        </h6>
                        <div className="flex items-center text-left py-6">
                            <div className="h-20 w-20 flex items-center justify-start">
                                <MdLightbulbOutline size={65} color="#459afc" />
                            </div>
                            <h4 className="text-3xl font-ZonaSemiFont">What is the idea behind the <br /> product?</h4>
                        </div>
                        <div className="flex items-center text-left py-6">
                            <div className="h-20 w-20 flex items-center justify-start">
                                <MdLightbulbOutline size={65} color="#459afc" />
                            </div>
                            <h4 className="text-3xl font-ZonaSemiFont">What is the idea behind the <br /> product?</h4>
                        </div>
                        <div className="flex items-center text-left py-6">
                            <div className="h-20 w-20 flex items-center justify-start">
                                <MdLightbulbOutline size={65} color="#459afc" />
                            </div>
                            <h4 className="text-3xl font-ZonaSemiFont">What is the idea behind the <br /> product?</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto lg:px-28 sm:px-4">
                <div className="grid md:grid-cols-12 pt-12">
                    <div className="pl-8 pt-6 m-2 lg:col-span-4 sm:col-span-12 animate__animated animate__fadeInUp">
                        <h3 style={{ fontSize: '45px' }} className="font-ZonaSemiFont leading-snug	">
                            Here are some steps that we take to get the answers:
                        </h3>
                    </div>

                    <div className="pl-40 pb-12 pt-6 m-2 lg:col-span-8 sm:col-span-12 animate__animated animate__fadeInUp">
                        <div className="py-6">
                            <div className="pb-6">
                                <h1 className="text-5xl font-ZonaBoldFont text-theme-blue">1</h1>
                            </div>
                            <h4 className="text-3xl font-ZonaSemiFont">What is the idea behind the <br /> product?</h4>
                        </div>
                        <div className="py-6">
                            <div className="pb-6">
                                <h1 className="text-5xl font-ZonaBoldFont text-theme-blue">2</h1>
                            </div>
                            <h4 className="text-3xl font-ZonaSemiFont">What is the idea behind the <br /> product?</h4>
                        </div>
                        <div className="py-6">
                            <div className="pb-6">
                                <h1 className="text-5xl font-ZonaBoldFont text-theme-blue">3</h1>
                            </div>
                            <h4 className="text-3xl font-ZonaSemiFont">What is the idea behind the <br /> product?</h4>
                        </div>
                        <div className="py-6">
                            <div className="pb-6">
                                <h1 className="text-5xl font-ZonaBoldFont text-theme-blue">4</h1>
                            </div>
                            <h4 className="text-3xl font-ZonaSemiFont">What is the idea behind the <br /> product?</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pt-28 mx-auto lg:px-28 sm:px-4">
                <div className="grid md:grid-cols-12">
                    <div className="pl-8 m-2 lg:col-span-12 sm:col-span-12 animate__animated animate__fadeInUp">
                        <h3 className="text-4xl leading-normal font-ZonaBoldFont">As a result, the client gets:</h3>
                    </div>
                    <div className="grid grid-cols-12 lg:col-span-12 p-28">
                        <div className="pl-8 m-2 lg:col-span-6 sm:col-span-6 animate__animated animate__fadeInUp pr-28 flex items-center justify-center">
                            <h3 className="text-3xl leading-normal font-ZonaBoldFont">A detailed project breakdown by features, which is written in the form of user stories</h3>
                        </div>
                        <div className="pl-8 m-2 lg:col-span-6 sm:col-span-6 animate__animated animate__fadeInUp pr-28">
                            <div className="h-96 w-100 bg-white"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 lg:col-span-12 pb-20 px-28">
                        <div className="pl-8 m-2 lg:col-span-6 sm:col-span-6 animate__animated animate__fadeInUp pr-28">
                            <div className="h-96 w-100 bg-white"></div>
                        </div>
                        <div className="pl-8 m-2 lg:col-span-6 sm:col-span-6 animate__animated animate__fadeInUp pr-28 flex items-center justify-center">
                            <h3 className="text-3xl leading-normal font-ZonaBoldFont">A detailed project breakdown by features, which is written in the form of user stories</h3>
                        </div>
                    </div>


                    <div className="grid grid-cols-12 lg:col-span-12 pb-20 px-28">
                        <div className="pl-8 m-2 lg:col-span-6 sm:col-span-6 animate__animated animate__fadeInUp pr-28 flex items-center justify-center">
                            <h3 className="text-3xl leading-normal font-ZonaBoldFont">A detailed project breakdown by features, which is written in the form of user stories</h3>
                        </div>
                        <div className="pl-8 m-2 lg:col-span-6 sm:col-span-6 animate__animated animate__fadeInUp pr-28">
                            <div className="h-96 w-100 bg-white"></div>
                        </div>
                    </div>


                    <div className="grid grid-cols-12 lg:col-span-12 pb-20 px-28">
                        <div className="pl-8 m-2 lg:col-span-6 sm:col-span-6 animate__animated animate__fadeInUp pr-28">
                            <div className="h-96 w-100 bg-white"></div>
                        </div>
                        <div className="pl-8 m-2 lg:col-span-6 sm:col-span-6 animate__animated animate__fadeInUp pr-28 flex items-center justify-center">
                            <h3 className="text-3xl leading-normal font-ZonaBoldFont">A detailed project breakdown by features, which is written in the form of user stories</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pt-28 mx-auto lg:px-28 sm:px-4">
                <div className="grid md:grid-cols-12 pt-12">
                    <div className="px-8 pt-6 m-2 lg:col-span-12 sm:col-span-12">
                        <h2 className="text-5xl font-ZonaBoldFont leading-tight	mb-12 color-white">
                            Design
                        </h2>
                    </div>
                    <div className="pl-8 pt-6 m-2 lg:col-span-4 sm:col-span-12 animate__animated animate__fadeInUp">
                        <h6 className="text-2xl leading-relaxed	font-ZonaNormalFont">
                            After analytics, we move to the design stage. At this stage, we work on defining the user experience and make sure that the app or website is easy-to-use and intuitive. Our designers also check that the designs are clear to the development team and make sense from the development perspective.
                        </h6>
                    </div>

                    <div className="pl-40 pb-12 pt-6 m-2 lg:col-span-8 sm:col-span-12 animate__animated animate__fadeInUp">
                        <h6 className="leading-relaxed text-base font-ZonaNormalFont leading-tight mb-12 color-white">
                            At this stage, we work to create:
                        </h6>
                        <div className="flex items-center text-left py-6">
                            <div className="h-20 w-20 flex items-center justify-start">
                                <MdLightbulbOutline size={65} color="#459afc" />
                            </div>
                            <h4 className="text-3xl font-ZonaSemiFont">An eye-catching design that<br />will establish a visual<br />connection with end-user</h4>
                        </div>
                        <div className="flex items-center text-left py-6">
                            <div className="h-20 w-20 flex items-center justify-start">
                                <MdLightbulbOutline size={65} color="#459afc" />
                            </div>
                            <h4 className="text-3xl font-ZonaSemiFont">A product that will suit end-<br />users in terms of design and<br />functionality</h4>
                        </div>
                        <div className="flex items-center text-left py-6">
                            <div className="h-20 w-20 flex items-center justify-start">
                                <MdLightbulbOutline size={65} color="#459afc" />
                            </div>
                            <h4 className="text-3xl font-ZonaSemiFont">A design optimized for the<br />future development</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto lg:px-28 sm:px-4">
                <div className="grid md:grid-cols-12 pt-12">
                    <div className="pl-8 pt-6 m-2 lg:col-span-4 sm:col-span-12 animate__animated animate__fadeInUp">
                        <h3 style={{ fontSize: '45px' }} className="font-ZonaSemiFont leading-snug	">
                            Here are the steps that we take when designing:
                        </h3>
                    </div>

                    <div className="pl-40 pb-12 pt-6 m-2 lg:col-span-8 sm:col-span-12 animate__animated animate__fadeInUp">
                        <div className="py-6">
                            <div className="pb-6">
                                <h1 className="text-5xl font-ZonaBoldFont text-theme-blue">1</h1>
                            </div>
                            <h4 className="text-3xl font-ZonaSemiFont">We create a project mind map and design low-fidelity wireframes of the most complicated flows</h4>
                        </div>
                        <div className="py-6">
                            <div className="pb-6">
                                <h1 className="text-5xl font-ZonaBoldFont text-theme-blue">2</h1>
                            </div>
                            <h4 className="text-3xl font-ZonaSemiFont">We prepare a concept of the project, which consists of 2–3 app screens or web pages and a project presentation</h4>
                        </div>
                        <div className="py-6">
                            <div className="pb-6">
                                <h1 className="text-5xl font-ZonaBoldFont text-theme-blue">3</h1>
                            </div>
                            <h4 className="text-3xl font-ZonaSemiFont">We finish off the designs with weekly sprints</h4>
                        </div>
                        <div className="py-6">
                            <div className="pb-6">
                                <h1 className="text-5xl font-ZonaBoldFont text-theme-blue">4</h1>
                            </div>
                            <h4 className="text-3xl font-ZonaSemiFont">Based on the finished design, we prepare a detailed development time and cost estimate</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pt-28 mx-auto lg:px-28 sm:px-4">
                <div className="grid md:grid-cols-12">
                    <div className="pl-8 m-2 lg:col-span-12 sm:col-span-12 animate__animated animate__fadeInUp">
                        <h3 className="text-4xl leading-normal font-ZonaBoldFont">As a result, the client gets:</h3>
                    </div>
                    <div className="grid grid-cols-12 lg:col-span-12 p-28">
                        <div className="pl-8 m-2 lg:col-span-6 sm:col-span-6 animate__animated animate__fadeInUp pr-28 flex items-center justify-center">
                            <h3 className="text-3xl leading-normal font-ZonaBoldFont">A detailed project breakdown by features, which is written in the form of user stories</h3>
                        </div>
                        <div className="pl-8 m-2 lg:col-span-6 sm:col-span-6 animate__animated animate__fadeInUp pr-28">
                            <div className="h-96 w-100 bg-white"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 lg:col-span-12 pb-20 px-28">
                        <div className="pl-8 m-2 lg:col-span-6 sm:col-span-6 animate__animated animate__fadeInUp pr-28">
                            <div className="h-96 w-100 bg-white"></div>
                        </div>
                        <div className="pl-8 m-2 lg:col-span-6 sm:col-span-6 animate__animated animate__fadeInUp pr-28 flex items-center justify-center">
                            <h3 className="text-3xl leading-normal font-ZonaBoldFont">A detailed project breakdown by features, which is written in the form of user stories</h3>
                        </div>
                    </div>


                    <div className="grid grid-cols-12 lg:col-span-12 pb-20 px-28">
                        <div className="pl-8 m-2 lg:col-span-6 sm:col-span-6 animate__animated animate__fadeInUp pr-28 flex items-center justify-center">
                            <h3 className="text-3xl leading-normal font-ZonaBoldFont">A detailed project breakdown by features, which is written in the form of user stories</h3>
                        </div>
                        <div className="pl-8 m-2 lg:col-span-6 sm:col-span-6 animate__animated animate__fadeInUp pr-28">
                            <div className="h-96 w-100 bg-white"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pt-28 mx-auto lg:px-28 sm:px-4">
                <div className="grid md:grid-cols-12 pt-12">
                    <div className="px-8 pt-6 m-2 lg:col-span-12 sm:col-span-12">
                        <h2 className="text-5xl font-ZonaBoldFont leading-tight	mb-12 color-white">
                            Development
                        </h2>
                    </div>
                    <div className="pl-8 pt-6 m-2 lg:col-span-4 sm:col-span-12 animate__animated animate__fadeInUp">
                        <h6 className="text-2xl leading-relaxed	font-ZonaNormalFont">After the design, the project goes to development. We provide our clients with a high level of transparency on the process with biweekly reports.
                        </h6>
                    </div>

                    <div className="pl-40 pb-12 pt-6 m-2 lg:col-span-8 sm:col-span-12 animate__animated animate__fadeInUp">
                        <h6 className="leading-relaxed text-base font-ZonaNormalFont leading-tight mb-12 color-white">
                            What are the advantages of working with us?
                        </h6>
                        <div className="flex items-center text-left py-6">
                            <div className="h-20 w-20 flex items-center justify-start">
                                <MdLightbulbOutline size={65} color="#459afc" />
                            </div>
                            <h4 className="text-3xl font-ZonaSemiFont">In-built code reviews that help<br />to maintain code quality</h4>
                        </div>
                        <div className="flex items-center text-left py-6">
                            <div className="h-20 w-20 flex items-center justify-start">
                                <MdLightbulbOutline size={65} color="#459afc" />
                            </div>
                            <h4 className="text-3xl font-ZonaSemiFont">
                                A team of IT professionals<br />sharing communication and<br />development standards</h4>
                        </div>
                        <div className="flex items-center text-left py-6">
                            <div className="h-20 w-20 flex items-center justify-start">
                                <MdLightbulbOutline size={65} color="#459afc" />
                            </div>
                            <h4 className="text-3xl font-ZonaSemiFont">A product developed with the<br />use of best industry practices</h4>
                        </div>
                        <div className="flex items-center text-left py-6">
                            <div className="h-20 w-20 flex items-center justify-start">
                                <MdLightbulbOutline size={65} color="#459afc" />
                            </div>
                            <h4 className="text-3xl font-ZonaSemiFont">A flexible development<br />process — we quickly adjust<br />when your plans change</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto lg:px-28 sm:px-4">
                <div className="grid md:grid-cols-12 pt-12">
                    <div className="pl-8 pt-6 m-2 lg:col-span-4 sm:col-span-12 animate__animated animate__fadeInUp">
                        <h3 style={{ fontSize: '40px' }} className="font-ZonaSemiFont leading-snug">
                            Here's what our tech team does when developing a product:
                        </h3>
                    </div>

                    <div className="pl-40 pb-12 pt-6 m-2 lg:col-span-8 sm:col-span-12 animate__animated animate__fadeInUp">
                        <div className="py-6">
                            <div className="pb-6">
                                <h1 className="text-5xl font-ZonaBoldFont text-theme-blue">1</h1>
                            </div>
                            <h4 className="text-3xl font-ZonaSemiFont">We create a project mind map and design low-fidelity wireframes of the most complicated flows</h4>
                        </div>
                        <div className="py-6">
                            <div className="pb-6">
                                <h1 className="text-5xl font-ZonaBoldFont text-theme-blue">2</h1>
                            </div>
                            <h4 className="text-3xl font-ZonaSemiFont">We prepare a concept of the project, which consists of 2–3 app screens or web pages and a project presentation</h4>
                        </div>
                        <div className="py-6">
                            <div className="pb-6">
                                <h1 className="text-5xl font-ZonaBoldFont text-theme-blue">3</h1>
                            </div>
                            <h4 className="text-3xl font-ZonaSemiFont">We finish off the designs with weekly sprints</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pt-28 mx-auto lg:px-28 sm:px-4">
                <div className="grid md:grid-cols-12">
                    <div className="pl-8 m-2 lg:col-span-12 sm:col-span-12 animate__animated animate__fadeInUp">
                        <h3 className="text-4xl leading-normal font-ZonaBoldFont">As a result, the client gets:</h3>
                    </div>
                    <div className="grid grid-cols-12 lg:col-span-12 p-28">
                        <div className="pl-8 m-2 lg:col-span-6 sm:col-span-6 animate__animated animate__fadeInUp pr-28 flex items-center justify-center">
                            <h3 className="text-3xl leading-normal font-ZonaBoldFont">A detailed project breakdown by features, which is written in the form of user stories</h3>
                        </div>
                        <div className="pl-8 m-2 lg:col-span-6 sm:col-span-6 animate__animated animate__fadeInUp pr-28">
                            <div className="h-96 w-100 bg-white"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 lg:col-span-12 pb-20 px-28">
                        <div className="pl-8 m-2 lg:col-span-6 sm:col-span-6 animate__animated animate__fadeInUp pr-28">
                            <div className="h-96 w-100 bg-white"></div>
                        </div>
                        <div className="pl-8 m-2 lg:col-span-6 sm:col-span-6 animate__animated animate__fadeInUp pr-28 flex items-center justify-center">
                            <h3 className="text-3xl leading-normal font-ZonaBoldFont">A detailed project breakdown by features, which is written in the form of user stories</h3>
                        </div>
                    </div>


                    <div className="grid grid-cols-12 lg:col-span-12 pb-20 px-28">
                        <div className="pl-8 m-2 lg:col-span-6 sm:col-span-6 animate__animated animate__fadeInUp pr-28 flex items-center justify-center">
                            <h3 className="text-3xl leading-normal font-ZonaBoldFont">A detailed project breakdown by features, which is written in the form of user stories</h3>
                        </div>
                        <div className="pl-8 m-2 lg:col-span-6 sm:col-span-6 animate__animated animate__fadeInUp pr-28">
                            <div className="h-96 w-100 bg-white"></div>
                        </div>
                    </div>
                </div>
            </div>

            
            <SecondaryFooter/>
            <Footer/>
        </>
    )
}

export default HowWeWork;