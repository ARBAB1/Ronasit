import React from "react";
import Header from "../../components/header/index";
import Developmenpic from '../../../src/assets/Images/Developmenpic.jpg';
import Image from 'next/image';
import Style from "./services.module.css"

const Services = () => {
    return (
        <>
            {/* <Header /> */}
            <div className="mt-10 md:mt-24 px-4 md:px-0 md:pl-24">
                <p className="font-ZonaNormalFont text-lg md:text-base mb-4 md:mb-8 pl-4 md:pl-10">Services</p>
                <p className="text-5xl md:text-5xl font-ZonaSemiFont pl-4 md:pl-10 md:leading-tight">
                    From proof of concepts <span className="text-neutral-400"> (PoC) </span> and minimum viable products <span className="text-neutral-400"> (MVP) </span> to complex <span className="pr-48"></span>enterprise-level systems – we’ve got <span className="pr-48"></span> everything covered.
                </p>
            </div>

            <div className="container mx-auto">
                <div className="md:flex mt-48">
                    <div className="md:pl-14">
                        <div className="mt-10 md:mt-24">
                            <h3 className="text-4xl font-ZonaSemiFont mb-10">Development</h3>
                            <p className="font-ZonaNormalFont text-xl">Implementing your project with scalable architecture design,modern technology, and an excellent level of data security.</p>
                        </div>
                    </div>
                    <div className="md:w-2/3 pt-20 pr-20"> 
                        <Image src={Developmenpic} alt="Your Image" className={Style.Developmenpic} />
                    </div>
                </div>
            </div>

            <div class="container mx-auto">
                <div class="md:flex mt-48">
                    <div class="md:w-1/2 px-4 md:pl-24">
                        <div class="mt-10 md:mt-20">
                            <span class="font-ZonaNormalFont pb-10 block">Development</span>
                            <h3 class="text-4xl font-ZonaSemiFont mb-6">Web Services</h3>
                            <p class="font-ZonaNormalFont text-sm">We create web products tailored exclusively for your business goals, be it a high converting landing page, a complex web app to automate your processes or a high-load platform with sensitive data. </p>
                            <button class=" font-ZonaNormalFont p-4 pl-10 pr-10 mt-12 rounded-3xl border border-gray-500 rounded-md hover:bg-gray-100 hover:border-gray-600">View more</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Services;
