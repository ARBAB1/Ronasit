import React from 'react';
import Style from './secondaryFooter.module.css'
import Link from 'next/link';

const SecondaryFooter = () => {
    return (
        <>
            <div className="container mx-auto lg:px-28 sm:px-4">
                <div className="grid md:grid-cols-12">
                    <div className="px-12 pb-12 pt-0 lg:col-span-12 sm:col-span-12 animate__animated animate__fadeInUp">
                        <h6 className='text-2xl font-ZonaNormalFont'>Contacts</h6>
                        <h1 className={`${Style.GetInTouch} text-7xl font-ZonaBoldFont py-12`}>Get In Touch</h1>
                    </div>

                    <div className='px-12 lg:col-span-12 sm:col-span-12 animate__animated animate__fadeInUp'>
                        <p className='font-ZonaNormalFont text-theme-gray'>All services</p>
                    </div>

                    <div className="px-12 py-6 lg:col-span-4 sm:col-span-12 animate__animated animate__fadeInUp">
                        <h6 className='font-ZonaBoldFont pb-2 pt-6'>Services for startups</h6>
                        <p className='font-ZonaThinFont py-2 text-white cursor-pointer'>MVP development</p>
                        <p className='font-ZonaThinFont py-2 text-white cursor-pointer'>Design services</p>
                        <p className='font-ZonaThinFont py-2 text-white cursor-pointer'>App development services</p>
                        <p className='font-ZonaThinFont py-2 text-white cursor-pointer'>CTO services</p>
                        <p className='font-ZonaThinFont py-2 text-white cursor-pointer'>Software development services</p>

                        <h6 className='font-ZonaBoldFont pb-2 pt-6'>Analytics</h6>
                        <p className='font-ZonaThinFont py-2 text-white cursor-pointer'>Analytics services</p>
                        <p className='font-ZonaThinFont py-2 text-white cursor-pointer'>AI integration</p>
                        <p className='font-ZonaThinFont py-2 text-white cursor-pointer'>AI marketing solutions</p>
                        <p className='font-ZonaThinFont py-2 text-white cursor-pointer'>AI business integration</p>
                    </div>



                    <div className="p-12 lg:col-span-4 sm:col-span-12 animate__animated animate__fadeInUp">
                        <h6 className='font-ZonaBoldFont pb-2 '>Development</h6>
                        <p className='font-ZonaThinFont py-2 text-white cursor-pointer'>Web development</p>
                        <p className='font-ZonaThinFont py-2 text-white cursor-pointer'>React Native app development</p>
                        <p className='font-ZonaThinFont py-2 text-white cursor-pointer'>Web apps</p>
                        <p className='font-ZonaThinFont py-2 text-white cursor-pointer'>Mobile app development</p>
                        <p className='font-ZonaThinFont py-2 text-white cursor-pointer'>iOS</p>
                        <p className='font-ZonaThinFont py-2 text-white cursor-pointer'>Android</p>
                        <p className='font-ZonaThinFont py-2 text-white cursor-pointer'>E-commerce development</p>
                        <p className='font-ZonaThinFont py-2 text-white cursor-pointer'>Frontend development services</p>
                        <p className='font-ZonaThinFont py-2 text-white cursor-pointer'>Backend development services</p>
                        <p className='font-ZonaThinFont py-2 text-white cursor-pointer'>Custom enterprise software</p>


                        <h6 className='font-ZonaBoldFont pb-2 pt-6'>DevOps</h6>
                        <p className='font-ZonaThinFont py-2 text-white cursor-pointer'>DevOps services</p>
                    </div>




                    <div className="p-12 lg:col-span-4 sm:col-span-12 animate__animated animate__fadeInUp">
                    <h6 className='font-ZonaBoldFont pb-2'>Design</h6>
                       
                        <p className='font-ZonaThinFont py-2 text-white cursor-pointer'>Graphic design</p>
                        <p className='font-ZonaThinFont py-2 text-white cursor-pointer'><a href={'/innerPage/logoDesign/LogoDesign'}>Logos</a></p>
                        <p className='font-ZonaThinFont py-2 text-white cursor-pointer'>Strategy and branding</p>
                        <p className='font-ZonaThinFont py-2 text-white cursor-pointer'>Illustration</p>
                        <p className='font-ZonaThinFont py-2 text-white cursor-pointer'><Link href={'/Web'}>Web</Link></p>
                        <p className='font-ZonaThinFont py-2 text-white cursor-pointer'>Creative landing pages</p>
                        <p className='font-ZonaThinFont py-2 text-white cursor-pointer'>Concept design services</p>
                        <p className='font-ZonaThinFont py-2 text-white cursor-pointer'>Desktop</p>
                        <p className='font-ZonaThinFont py-2 text-white cursor-pointer'><a href={'./innerPage/app'}>Mobile app</a></p>
                        <p className='font-ZonaThinFont py-2 text-white cursor-pointer'>Tablet</p>
                        <p className='font-ZonaThinFont py-2 text-white cursor-pointer'><a href={'./innerPage/uiux/uiux'}>UI/UX design services</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecondaryFooter;