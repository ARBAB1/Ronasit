'use client'
import Header from '@/components/header';
import { useState, useEffect, useRef } from 'react';
import StickyCursor from '../../components/stickyCursor/index';
import style from "./index.module.css"
import img_hero from '../../assets/Images/web-development-light.70611adc.svg'
import circle_icons from '../../assets/icon/Untitled-1-removebg-preview.png'
import demoImg from '../../assets/Images/cover.webp'


import Image from 'next/image';

const index = () => {
    const stickyElement = useRef(null);
    return (
        <>
            <Header ref={stickyElement} />
            <StickyCursor stickyElement={stickyElement} />
            <section className='flex flex-col items-center justify-center' id={`${style.maginTop}`}>
                <div className="container">
                    <div className="">
                        <div className={`${style.web_hero_content_section}`}>
                            <h6 className='font-ZonaNormalFont'>Development</h6>
                            <h5 className='mt-5 font-ZonaSemiFont'>Custom web development services</h5>
                            <span className='font-ZonaNormalFont'>We create secure web products that ensure a smooth user experience</span>
                            <button className='font-ZonaSemiFont'>Hire us</button>
                            <Image src={img_hero} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container mt-5">
                    <div className={`${style.gridColums} grid grid-cols-2 gap-6`}>
                        <div className="">
                            <span className='font-ZonaSemiFont'>
                                We have designed and developed more than 200 web products with booking systems, marketplaces, real estate, and corporate sites among them.
                            </span>
                        </div>
                        <div className="">
                            <ul>
                                <li className='font-ZonaNormalFont'>
                                    <Image src={circle_icons} />
                                    We engineer software of any complexity: from one-page sites to complex eCommerce platforms with high-load fintech applications.
                                </li>
                                <li className='font-ZonaNormalFont'>
                                    <Image src={circle_icons} />
                                    Digital products we create as part of our custom web development services are usually secure, easy to access from all types of devices, and high performing.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container mt-5">
                    <div className={`${style.Proces_des}`}>
                        <p className='font-ZonaSemiFont'>
                            In the process of delivering custom web development services, we use Django and Laravel for the backend and React and Angular for the frontend. Here are a few reasons for that:
                        </p>
                    </div>
                    <div className='grid grid-cols-3 gap-6' style={{ marginTop: "80px" }}>
                        <div className={`${style.icon_box_one}`}>
                            <h6><span className={`${style.one}`}></span></h6>
                            <p className='font-ZonaSemiFont'>
                                They provide diverse development resources, so any of your software ideas can be brought to reality.
                            </p>
                        </div>
                        <div className={`${style.icon_box_one}`}>
                            <h6><span className={`${style.two}`}></span></h6>
                            <p className='font-ZonaSemiFont'>
                                They have big development communities and a lot of pre-built code pieces that speed up the development process.
                            </p>
                        </div>
                        <div className={`${style.icon_box_one}`}>
                            <h6><span className={`${style.three}`}></span></h6>
                            <p className='font-ZonaSemiFont'>
                                They provide tools that help to avoid many common security mistakes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container mt-5" style={{ marginTop: "130px" }}>
                    <div className="grid grid-cols-4 gap-6">
                        <div className={`${style.projectSection}`}>
                            <span className='font-ZonaSemiFont'>50+</span>
                            <p className='font-ZonaNormalFont'>
                                developers in an independent team
                            </p>
                        </div>
                        <div className={`${style.projectSection}`}>
                            <span className='font-ZonaSemiFont'>17+</span>
                            <p className='font-ZonaNormalFont'>
                                years of experience
                            </p>
                        </div>
                        <div className={`${style.projectSection}`}>
                            <span className='font-ZonaSemiFont'>1,500+</span>
                            <p className='font-ZonaNormalFont'>
                                projects
                            </p>
                        </div>
                        <div className={`${style.projectSection}`}>
                            <span className='font-ZonaSemiFont'>60%</span>
                            <p className='font-ZonaNormalFont'>
                                repeat customers
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`${style.time_section}`}>
                <div className="container">
                    <div className="grid grid-cols-2 gap-6">
                        <div className={`${style.time_left_box} flex flex-row`}>
                            <h5 className='font-ZonaSemiFont'>Costs and time</h5>
                            <span className='font-ZonaSemiFont'>*</span>
                        </div>
                        <div className={`${style.time_right_box} flex flex-row`}>
                            <span className='font-ZonaSemiFont'>*</span>
                            <p className='font-ZonaNormalFont'>
                                The upper limit of costs and timeline may vary depending on the app’s complexity
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`${style.dev_section}`}>
                <div className="container">
                    <div className="grid grid-cols-2 gap-6">
                        <div className={`${style.dev_left}`}>
                            <h5 className={`${style.img}`}></h5>
                            <h3 className='font-ZonaSemiFont'>Custom web app development</h3>
                            <span className='font-ZonaNormalFont'>3--4 weeks</span>
                            <h6 className='font-ZonaNormalFont'>$30,000—$50,000+</h6>
                        </div>
                        <div className={`${style.dev_right}`}>
                            <p className='font-ZonaNormalFont'>
                                A web app is a piece of software. Unlike a website, it encourages the user to manipulate the data presented in the web app. Its content is dynamic and interactive. If you need urgent web app development follow.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`${style.pack_section}`}>
                <div className="container">
                    <div className='grid grid-cols-2 gap-6'>
                        <div className={`${style.pack_section_left}`}>
                            <h5 className={`${style.img}`}></h5>
                            <h3 className='font-ZonaSemiFont'>Landing page development</h3>
                            <span className='font-ZonaNormalFont'>1—3 weeks</span>
                            <h6 className='font-ZonaNormalFont'>$2,000—$4,000+</h6>
                            <p className='font-ZonaNormalFont'>
                                A landing page is a single-page website whose purpose is to promote a service or sell a product. It should be well-structured and visually appealing to inspire the user to contact the seller.
                            </p>
                        </div>
                        <div className={`${style.pack_section_left}`}>
                            <h5 className={`${style.imgTwo}`}></h5>
                            <h3 className='font-ZonaSemiFont'>Custom marketplace development</h3>
                            <span className='font-ZonaNormalFont'>2—3 weeks</span>
                            <h6 className='font-ZonaNormalFont'>$25,000—$30,000+</h6>
                            <p className='font-ZonaNormalFont'>
                                We can either create your custom marketplace from scratch, or you can save on costs and take advantage of our special subscription offer. Our development team can build your personalized online store in 15 days or less.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`${style.dev_section} ${style.corporate_section}`}>
                <div className="container">
                    <div className="grid grid-cols-2 gap-6">
                        <div className={`${style.dev_left}`}>
                            <h5 className={`${style.img_corporate_section}`}></h5>
                            <h3 className='font-ZonaSemiFont'>Corporate website development</h3>
                            <span className='font-ZonaNormalFont'>2–4 weeks</span>
                            <h6 className='font-ZonaNormalFont'>$5,000—$8,000+</h6>
                        </div>
                        <div className={`${style.dev_right}`}>
                            <p className='font-ZonaNormalFont'>
                                A website collects linked web pages containing data in texts, images, videos, and other formats. Its goal is to convey necessary information to its visitors. Our website development services will provide your company with a corporate website that is pleasant to view and read.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`${style.dev_section} ${style.Web_interface_section}`}>
                <div className="container">
                    <div className="grid grid-cols-2 gap-6">
                        <div className={`${style.dev_left}`}>
                            <h5 className={`${style.img_Web_interface_section}`}></h5>
                            <h3 className='font-ZonaSemiFont'>Web interface design</h3>
                            <span className='font-ZonaNormalFont'>3–4 weeks</span>
                            <h6 className='font-ZonaNormalFont'>$5,000—$10,000+</h6>
                        </div>
                        <div className={`${style.dev_right}`}>
                            <p className='font-ZonaNormalFont'>
                                We create unique web designs for any type of product, from landing pages to complex web apps. Should you be interested in web design as a separate service, read more here.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`${style.wondering_section}`}>
                <div className="container">
                    <div className={`${style.wondering_content}`}>
                        <span className='font-ZonaSemiFont'>
                            Wondering how much it would cost to outsource your web development? Fill in the form, and we will help you to calculate!
                        </span>
                        <button className='font-ZonaSemiFont'>Fill in the form</button>
                    </div>
                </div>
            </section>
            <section className={`${style.deliver_section}`}>
                <div className="container">
                    <div className='grid grid-cols-2 gap-6'>
                        <div className={`${style.deliver_head}`}>
                            <span className='font-ZonaSemiFont'>
                                How do we deliver <br /> custom web <br /> development services?
                            </span>
                        </div>
                        <div className={`${style.deliver_content}`}>
                            <ul>
                                <div className={`${style.deliver_inner_content}`}>
                                    <h6 className='font-ZonaSemiFont'>1</h6>
                                    <span className='font-ZonaSemiFont'>Gather requirements</span>
                                    <p className='font-ZonaNormalFont'>
                                        At first, the project manager gathers information about your requirements, business goals, and expectations.
                                    </p>
                                </div>
                                <div className={`${style.deliver_inner_content}`}>
                                    <h6 className='font-ZonaSemiFont'>2</h6>
                                    <span className='font-ZonaSemiFont'>
                                        Create UI/UX design based on the results of analytics
                                    </span>
                                    <p className='font-ZonaNormalFont'>
                                        After analyzing the requirements, we figure out which version of the product we should develop first, mobile or desktop. The analysis also helps us to specify product features. Then UI/UX designers create visuals and a UI Kit that can be used for scaling the design up.
                                    </p>
                                </div>
                                <div className={`${style.deliver_inner_content}`}>
                                    <h6 className='font-ZonaSemiFont'>3</h6>
                                    <span className='font-ZonaSemiFont'>Plan 2–3 week sprints</span>
                                    <p className='font-ZonaNormalFont'>
                                        While delivering custom web development services, we always work with short iterations. By the end of each of them, the customers get tangible results like an update of the site on the development server or an app interface ready for testing.
                                    </p>
                                </div>
                                <div className={`${style.deliver_inner_content}`}>
                                    <h6 className='font-ZonaSemiFont'>4</h6>
                                    <span className='font-ZonaSemiFont'>Establish scalable architecture and write clear code</span>
                                    <p className='font-ZonaNormalFont'>
                                        At this stage, we develop basic features such as registration, authorization, or profile. Then we create the backend and frontend of the product, write code, and run tests and reviews to maintain its quality.
                                    </p>
                                </div>
                                <div className={`${style.deliver_inner_content}`}>
                                    <h6 className='font-ZonaSemiFont'>5</h6>
                                    <span className='font-ZonaSemiFont'>Bring the software into production</span>
                                    <p className='font-ZonaNormalFont'>
                                        Our engineers set up several environments where the created product can be deployed. Usually, we set up three environments: a development environment used by developers, a staging environment where the customers can check our progress, and a production environment, where software becomes available for use.
                                    </p>
                                </div>
                                <div className={`${style.deliver_inner_content}`}>
                                    <h6 className='font-ZonaSemiFont'>5</h6>
                                    <span className='font-ZonaSemiFont'>Provide post-launch maintenance</span>
                                    <p className='font-ZonaNormalFont'>
                                        We guarantee that all the bugs are fixed and the software runs stably. Ronas IT developers are ready to continue developing your site or application after the project work is finished: They adjust it based on user reviews and add new features.
                                    </p>
                                </div>
                                <div className={`${style.deliver_inner_content}`}>
                                    <button className='font-ZonaNormalFont'>Learn more about the Ronas IT services</button>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${style.blog_section}`}>
                <div className="container">
                <h2 className='font-ZonaSemiFont'>Articles</h2>
                    <div className='grid grid-cols-2 gap-6'>
                        <div className={`${style.blog_content_box}`}>
                            <Image src={demoImg} alt="" />
                            <span className='font-ZonaSemiFont'>Tech</span>
                            <h6 className='font-ZonaSemiFont'>Benefits of custom software solutions for small businesses</h6>
                            <p className='font-ZonaNormalFont'>2023-05-31</p>
                        </div>
                        <div className={`${style.blog_content_box}`}>
                            <Image src={demoImg} alt="" />
                            <span className='font-ZonaSemiFont'>Tech</span>
                            <h6 className='font-ZonaSemiFont'>Benefits of custom software solutions for small businesses</h6>
                            <p className='font-ZonaNormalFont'>2023-05-31</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-6'>
                        <div className={`${style.blog_content_box}`}>
                            <Image src={demoImg} alt="" />
                            <span className='font-ZonaSemiFont'>Tech</span>
                            <h6 className='font-ZonaSemiFont'>Benefits of custom software solutions for small businesses</h6>
                            <p className='font-ZonaNormalFont'>2023-05-31</p>
                        </div>
                        <div className={`${style.blog_content_box}`}>
                            <Image src={demoImg} alt="" />
                            <span className='font-ZonaSemiFont'>Tech</span>
                            <h6 className='font-ZonaSemiFont'>Benefits of custom software solutions for small businesses</h6>
                            <p className='font-ZonaNormalFont'>2023-05-31</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${style.portfolio_section}`}>
                <div className="container">
                    <h6 className='font-ZonaSemiFont'>Portfolio</h6>
                    <span className='font-ZonaNormalFont'>We’ve already become a web development company for these clients. Read about real cases if you’re considering outsourcing your web development to Ronas IT.</span>

                    <div className='grid grid-cols-2 gap-6'>
                        <div className={`${style.port_box}`}>
                            <Image src={demoImg} alt="" />
                            <div>
                                <h3 className='font-ZonaSemiFont'>A Mobile first Web app for</h3>
                                <h4 className='font-ZonaSemiFont'>UK Retreats</h4>
                            </div>
                        </div>
                        <div className={`${style.port_box}`}>
                            <Image src={demoImg} alt="" />
                            <div>
                                <h3 className='font-ZonaSemiFont'>A Mobile first Web app for</h3>
                                <h4 className='font-ZonaSemiFont'>UK Retreats</h4>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-6'>
                        <div className={`${style.port_box}`}>
                            <Image src={demoImg} alt="" />
                            <div>
                                <h3 className='font-ZonaSemiFont'>A Mobile first Web app for</h3>
                                <h4 className='font-ZonaSemiFont'>UK Retreats</h4>
                            </div>
                        </div>
                        <div className={`${style.port_box}`}>
                            <Image src={demoImg} alt="" />
                            <div>
                                <h3 className='font-ZonaSemiFont'>A Mobile first Web app for</h3>
                                <h4 className='font-ZonaSemiFont'>UK Retreats</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default index