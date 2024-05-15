import React from "react";
import Header from "@/components/header";



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

        </>
    )
}

export default HowWeWork;