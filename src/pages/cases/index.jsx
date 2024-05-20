import React from 'react';
import Header from '@/components/header';

const Cases = () => {
    return (
        <>
            <Header />
            <div className="container pt-28 mx-auto lg:px-28 sm:px-4">
                <div className="grid md:grid-cols-12 pt-12">
                    <div className="px-12 m-2 lg:col-span-12 sm:col-span-12 animate__animated animate__fadeInUp">
                        <p className="font-ZonaNormalFont text-lg">Our portfolio</p>
                    </div>

                    <div className="px-12 pb-12 pt-6 m-2 lg:col-span-8 sm:col-span-12 animate__animated animate__fadeInUp">
                        <h2 className="text-4xl font-ZonaSemiFont leading-tight	mb-12">
                            Our team has been engineering custom software solutions for 15 years already and has gained considerable expertise in UI/UX design and development.
                        </h2>
                        <button className="font-ZonaNormalFont px-14 py-5 border rounded-full">Learn more about the ronas IT services</button>

                    </div>


                    <div className="px-12 pb-12 pt-6 m-2 lg:col-span-4 sm:col-span-12 animate__animated animate__fadeInUp">
                        <p className='font-ZonaNormalFont'>In the following business cases, we are sharing our experience of creating software for different industries, types of users, and devices.</p>
                    </div>
                </div>
            </div>


            <div className="container pt-28 mx-auto lg:px-28 sm:px-4">
                <div className="grid md:grid-cols-12 bg-theme-black rounded-3xl ">
                    <div className="px-12 pb-12 pt-6 m-2 lg:col-span-5 sm:col-span-12 flex flex-col justify-center text-left">
                        <h6 className='font-ZonaNormalFont pt-6 text-xl	'>React native mobile app</h6>
                        <h4 className='font-ZonaSemiFont text-5xl py-6'>Lainappi</h4>
                        <p className='font-ZonaNormalFont text-theme-gray text'>Lainappi is a cross-platform application for taking and giving items for rent. Our work was to build an MVP within 3 months, so our customers could test their business idea on the market.</p>
                    </div>
                    <div style={{height:'600px',backgroundSize:'cover',backgroundPosition:'-1093px 47px'}} className="px-12 pb-12 pt-6 m-2 lg:col-span-7 sm:col-span-12 bg-[url('https://ronasit.com/img/cases/page/dark/lainappi.webp')] bg-cover">
                    </div>
                </div>
            </div>


            <div className="container pt-28 mx-auto lg:px-28 sm:px-4">
                <div className="grid md:grid-cols-12 bg-theme-black rounded-3xl ">
                    
                    <div style={{height:'600px',backgroundSize:'cover',backgroundPosition:'-1093px 47px'}} className="px-12 pb-12 pt-6 m-2 lg:col-span-7 sm:col-span-12 bg-[url('https://ronasit.com/img/cases/page/dark/lainappi.webp')] bg-cover">
                    </div>
                    <div className="px-12 pb-12 pt-6 m-2 lg:col-span-5 sm:col-span-12 flex flex-col justify-center text-left">
                        <h6 className='font-ZonaNormalFont pt-6 text-xl	'>React native mobile app</h6>
                        <h4 className='font-ZonaSemiFont text-5xl py-6'>Lainappi</h4>
                        <p className='font-ZonaNormalFont text-theme-gray text'>Lainappi is a cross-platform application for taking and giving items for rent. Our work was to build an MVP within 3 months, so our customers could test their business idea on the market.</p>
                    </div>
                </div>
            </div>



            <div className="container pt-28 mx-auto lg:px-28 sm:px-4">
                <div className="grid md:grid-cols-12 bg-theme-black rounded-3xl ">
                    <div className="px-12 pb-12 pt-6 m-2 lg:col-span-5 sm:col-span-12 flex flex-col justify-center text-left">
                        <h6 className='font-ZonaNormalFont pt-6 text-xl	'>React native mobile app</h6>
                        <h4 className='font-ZonaSemiFont text-5xl py-6'>Lainappi</h4>
                        <p className='font-ZonaNormalFont text-theme-gray text'>Lainappi is a cross-platform application for taking and giving items for rent. Our work was to build an MVP within 3 months, so our customers could test their business idea on the market.</p>
                    </div>
                    <div style={{height:'600px',backgroundSize:'cover',backgroundPosition:'-1093px 47px'}} className="px-12 pb-12 pt-6 m-2 lg:col-span-7 sm:col-span-12 bg-[url('https://ronasit.com/img/cases/page/dark/lainappi.webp')] bg-cover">
                    </div>
                </div>
            </div>



            <div className="container pt-28 mx-auto lg:px-28 sm:px-4">
                <div className="grid md:grid-cols-12 bg-theme-black rounded-3xl ">
                   
                    <div style={{height:'600px',backgroundSize:'cover',backgroundPosition:'-1093px 47px'}} className="px-12 pb-12 pt-6 m-2 lg:col-span-7 sm:col-span-12 bg-[url('https://ronasit.com/img/cases/page/dark/lainappi.webp')] bg-cover">
                    </div>
                    <div className="px-12 pb-12 pt-6 m-2 lg:col-span-5 sm:col-span-12 flex flex-col justify-center text-left">
                        <h6 className='font-ZonaNormalFont pt-6 text-xl	'>React native mobile app</h6>
                        <h4 className='font-ZonaSemiFont text-5xl py-6'>Lainappi</h4>
                        <p className='font-ZonaNormalFont text-theme-gray text'>Lainappi is a cross-platform application for taking and giving items for rent. Our work was to build an MVP within 3 months, so our customers could test their business idea on the market.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cases;