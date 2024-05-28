import React from "react";
import style from './web.module.css'
import Header from "@/components/header";


const WebDevelopment = () => {
    return (
        <>
            <Header />
            <div className="container pt-28 mx-auto lg:px-28 sm:px-4">
                <div className="grid md:grid-cols-12 pt-12">
                    <div className="px-12 m-2 lg:col-span-12 sm:col-span-12 animate__animated animate__fadeInUp">
                        <p className="font-ZonaNormalFont text-lg">Development</p>
                    </div>

                    <div className="px-12 pb-12 pt-6 m-2 lg:col-span-12 sm:col-span-12 animate__animated animate__fadeInUp">
                        <h2 className="text-6xl font-ZonaSemiFont leading-tight	mb-12">
                            Custom web development<br />services
                        </h2>
                        <p className="font-ZonaNormalFont text-lg">
                            We create secure web products that ensure a smooth user experience
                        </p>
                        <button className="font-ZonaSemiFont mt-8 px-10 py-3 bg-white text-black rounded-3xl">Hire us</button>
                    </div>
                    <div className="px-12 pb-12 pt-6 m-2 lg:col-span-12 sm:col-span-12 animate__animated animate__fadeInUp">
                        <img src="https://ronasit.com/_next/static/media/web-development-dark.59f70076.svg" alt="WebDevBanner" />
                    </div>
                    <div className="px-12 pb-12 pt-6 m-2 lg:col-span-7 sm:col-span-12">
                        <h3 style={{ fontSize: "40px" }} className="font-ZonaSemiFont leading-tight">We have designed and developed more than 200 web products with booking systems, marketplaces, real estate, and corporate sites among them.</h3>
                    </div>
                    <div className="pr-12 pb-12 pt-6 m-2 lg:col-span-5 sm:col-span-12">
                        <div className="flex items-start">
                            <div className="mr-6">
                                <div style={{ backgroundColor: "#d4ecfe", height: '48px', width: '48px', borderRadius: '50%', border: '20px solid #0a223d' }}>

                                </div>
                            </div>
                            <h6 className="font-ZonaNormalFont text-lg">We engineer software of any complexity: from one-page sites to complex eCommerce platforms with high-load fintech applications.</h6>
                        </div>
                        <div className="flex items-start pt-12">
                            <div className="mr-6">
                                <div style={{ backgroundColor: "#d4ecfe", height: '48px', width: '48px', borderRadius: '50%', border: '20px solid #0a223d' }}>

                                </div>
                            </div>
                            <h6 className="font-ZonaNormalFont text-lg">Digital products we create as part of our custom web development services are usually secure, easy to access from all types of devices, and high performing.</h6>
                        </div>
                    </div>

                    <div className="pl-12 pr-32 pb-12 pt-6 m-2 lg:col-span-12 sm:col-span-12">
                        <h4 className="text-3xl font-ZonaSemiFont">In the process of delivering custom web development services, we use Django and Laravel for the backend and React and Angular for the frontend. Here are a few reasons for that:</h4>
                    </div>
                    <div className="px-12 pb-12 pt-6 m-2 lg:col-span-4 sm:col-span-12">
                        <div className="flex items-center justify-center"></div>
                        <h5 className="text-3xl font-ZonaSemiFont">They provide diverse development resources, so any of your software ideas can be brought to reality.</h5>
                    </div>
                    <div className="px-12 pb-12 pt-6 m-2 lg:col-span-4 sm:col-span-12">
                        <div></div>
                        <h5 className="text-3xl font-ZonaSemiFont">They have big development communities and a lot of pre-built code pieces that speed up the development process.</h5>
                    </div>
                    <div className="px-12 pb-12 pt-6 m-2 lg:col-span-4 sm:col-span-12">
                        <div></div>
                        <h5 className="text-3xl font-ZonaSemiFont">They provide tools that help to avoid many common security mistakes.</h5>
                    </div>

                </div>
            </div>
        </>
    )
}

export default WebDevelopment;