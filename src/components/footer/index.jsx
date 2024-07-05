import React from 'react';

const Footer = () => {
    return (
        <>
            <div className="container pt-28 mx-auto lg:px-28 sm:px-4">
                <div className="grid md:grid-cols-12">


                    <div className="p-12 lg:col-span-3 sm:col-span-12 animate__animated animate__fadeInUp">
                        <h6 className='text-lg font-ZonaBoldFont'>Call</h6>
                        <p className='text-base	font-ZonaNormalFont  pt-3'>+372 5399 9974</p>
                    </div>


                    <div className="p-12 lg:col-span-3 sm:col-span-12 animate__animated animate__fadeInUp">
                        <h6 className='text-lg font-ZonaBoldFont'>Write</h6>
                        <p className='text-base font-ZonaNormalFont  pt-3'>hello@ronasit.com</p>
                        <p className='text-base font-ZonaNormalFont  pt-3'>Telegram</p>
                        <p className='text-base font-ZonaNormalFont  pt-3'>Whatsapp</p>
                    </div>


                    <div className="p-12 lg:col-span-3 sm:col-span-12 animate__animated animate__fadeInUp">
                        <h6 className='text-lg font-ZonaBoldFont'>Legal Address</h6>
                        <p className='text-base	font-ZonaNormalFont  pt-3'>10151<br />
                            Ahtri 12<br />
                            Tallinn, Estonia</p>
                    </div>



                    <div className='pb-6 pt-12 px-12 lg:col-span-12 sm:col-span-12 flex items-center justify-between'>
                        <div>
                            <p className='text-base	font-ZonaNormalFont  pt-3'>© 2024 Ronas IT.<br />all rights reserved.</p>
                        </div>
                        <div className='flex items-center'>
                            <p className='text-base	font-ZonaNormalFont  pt-3'>Public Offer Agreement</p>
                            <p className='text-base	font-ZonaNormalFont  pt-3 ml-6'>Privacy Policy</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;