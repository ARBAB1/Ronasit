'use client'
import Header from '@/components/header';
import { useState, useEffect, useRef } from 'react';
import StickyCursor from '../../components/stickyCursor/index';
import style from "./index.module.css"
import img_hero from '../../assets/Images/web-development-light.70611adc.svg'
import circle_icons from '../../assets/icon/Untitled-1-removebg-preview.png'
import demoImg from '../../assets/Images/cover.webp'
import cardone from '../../assets/Images/uk-retreats.webp'
import cardtwo from '../../assets/Images/noah.webp'
import cardthree from '../../assets/Images/shipme.webp'
import cardfour from '../../assets/Images/oddscrowd.webp'
import Image from 'next/image';
import Style from '../home.module.css'
import { BsFillStarFill } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";
import SecondaryFooter from '@/components/secondaryFooter';
import Footer from '@/components/footer';




const index = () => {
    const stickyElement = useRef(null);
    const [visibleComponent, setVisibleComponent] = useState(null);
    const handleVisibilityChange = (id) => {
        setTimeout(() => {
          setVisibleComponent(id);
        }, 200);
    };
    const VisibilityObserver = ({ id, children, onVisible, className }) => {
    const componentRef = useRef(null);
    
    useEffect(() => {
        const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            onVisible(id);
            }
        });
        };
    
        const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
        };
    
        const observer = new IntersectionObserver(observerCallback, observerOptions);
    
        if (componentRef.current) {
        observer.observe(componentRef.current);
        }
    
        return () => {
        if (componentRef.current) {
            observer.unobserve(componentRef.current);
        }
        };
    }, [id, onVisible]);
    
    return (
        <div ref={componentRef} id={id} className={className}>
        {children}
        </div>
    );
    };

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
                    <div className={`${style.iconsFlex} grid grid-cols-3 gap-6`} style={{ marginTop: "80px" }}>
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
                    <div className={`${style.projectExplainedFlex} grid grid-cols-4 gap-6`}>
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
                    <div className={`${style.timeSectionFlex} grid grid-cols-2 gap-6`}>
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
                    <div className={`${style.dev_sectionFLex} grid grid-cols-2 gap-6`}>
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
                    <div className={`${style.packSectionFlex} grid grid-cols-2 gap-6`}>
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
                    <div className={`${style.dev_sectionFLex} grid grid-cols-2 gap-6`}>
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
                    <div className={`${style.dev_sectionFLex} grid grid-cols-2 gap-6`}>
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
                    <div className={`${style.deliver_section_flex} grid grid-cols-2 gap-6`}>
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
                    <div className={`${style.articalsFlex} grid grid-cols-2 gap-6`}>
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
                    <div className={`${style.articalsFlex} grid grid-cols-2 gap-6`}>
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

                    <div className={`${style.portFlex} grid grid-cols-2 gap-6`}>
                        <div className={`${style.port_box}`} style={{ background: "#F5F7F9" }}>
                            <Image src={cardone} alt="" />
                            <div>
                                <h3 className='font-ZonaSemiFont'>A Mobile first Web app for</h3>
                                <h4 className='font-ZonaSemiFont'>UK Retreats</h4>
                            </div>
                        </div>
                        <div className={`${style.port_box}`} style={{ background: "#E5D5CA" }}>
                            <Image src={cardtwo} alt="" />
                            <div>
                                <h3 className='font-ZonaSemiFont'>A Mobile first Web app for</h3>
                                <h4 className='font-ZonaSemiFont'>UK Retreats</h4>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-6'>
                        <div className={`${style.port_box}`} style={{ background: "#A8CEE1" }}>
                            <Image src={cardthree} alt="" />
                            <div>
                                <h3 className='font-ZonaSemiFont'>A Mobile first Web app for</h3>
                                <h4 className='font-ZonaSemiFont'>UK Retreats</h4>
                            </div>
                        </div>
                        <div className={`${style.port_box}`} style={{ background: "#EFF2FC" }}>
                            <Image src={cardfour} alt="" />
                            <div>
                                <h3 className='font-ZonaSemiFont'>A Mobile first Web app for</h3>
                                <h4 className='font-ZonaSemiFont'>UK Retreats</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`${style.deliver_section}`}>
                <div className="container">
                    <div className={`${style.deliver_section_flex} grid grid-cols-2 gap-6`}>
                        <div className={`${style.deliver_head}`}>
                            <span className='font-ZonaSemiFont'>
                                What are the <br /> benefits of choosing <br /> us as a web <br /> development <br />company?
                            </span>
                        </div>
                        <div className={`${style.deliver_content}`}>
                            <ul>
                                <div className={`${style.deliver_inner_content}`}>
                                    <div>
                                        <h2 className={`${style.one}`}></h2>
                                    </div>
                                    <p className='font-ZonaNormalFont'>
                                        We keep you updated on the progress of your website development every two weeks or can communicate small updates more frequently if needed.
                                    </p>
                                </div>
                                <div className={`${style.deliver_inner_content}`}>
                                    <div><h2 className={`${style.two}`}></h2></div>
                                    <p className='font-ZonaNormalFont'>
                                        Since 2007, we've been creating robust apps and web products for a variety of industries, so we're up to the challenge.
                                    </p>
                                </div>
                                <div className={`${style.deliver_inner_content}`}>
                                    <div><h2 className={`${style.three}`}></h2></div>
                                    <p className='font-ZonaNormalFont'>
                                        We are always here for you. If you have any concerns, you can contact us and we will respond within 24 hours.
                                    </p>
                                </div>
                                <div className={`${style.deliver_inner_content}`}>
                                    <div><h2 className={`${style.four}`}></h2></div>
                                    <p className='font-ZonaNormalFont'>
                                        We deliver our projects on time. So, once we had 10 weeks to develop a sports application in time for the Super Bowl. You can read about this case here.
                                    </p>
                                </div>
                                <div className={`${style.deliver_inner_content}`}>
                                    <div><h2 className={`${style.five}`}></h2></div>
                                    <p className='font-ZonaNormalFont'>
                                        Our design team consists of experienced professionals who will give your website a unique face. You can check out their work on our Dribbble and Behance profiles.
                                    </p>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`${style.desPackSection}`}>
                <div className="container">
                    <div className={`${style.desPackSectionFlex} grid grid-cols-2 gap-6`}>
                        <div className={`${style.desPackSection_box}`}>
                            <h5 className='font-ZonaSemiFont'>Backend AI integration</h5>
                            <p className='font-ZonaNormalFont'>
                                Our development team can spice up our web design and development services with artificial intelligence implementation. We can find the most suitable way to enhance your web app or website with the latest technologies.
                            </p>
                            <button className='font-ZonaSemiFont'>View More</button>
                        </div>
                        <div className={`${style.desPackSection_box}`}>
                            <h5 className='font-ZonaSemiFont'>Knowledge management system</h5>
                            <p className='font-ZonaNormalFont'>
                                If you are struggling with collecting data from your different sources in one place, our dev team can create a knowledge management system that analyzes processes within your organization. We can create a convenient admin panel that suits your specific needs.
                            </p>
                            <button className='font-ZonaSemiFont'>View More</button>
                        </div>
                    </div>
                    <div className={`${style.desPackSectionFlex} grid grid-cols-2 gap-6 mt-5`}>
                        <div className={`${style.desPackSection_box}`}>
                            <h5 className='font-ZonaSemiFont'>Rapid marketplace roll out</h5>
                            <p className='font-ZonaNormalFont'>
                                Using custom web design services to stand out from other marketplaces can cost extra time and money. Our service for e-commerce combines custom web design with a Shopify backend. Our approach allows you to complete your website development in 15 days or less.

                            </p>
                            <button className='font-ZonaSemiFont'>View More</button>
                        </div>
                        <div className={`${style.desPackSection_box}`}>
                            <h5 className='font-ZonaSemiFont'>DevOps practices</h5>
                            <p className='font-ZonaNormalFont'>
                                Planning to build a website with your in-house development team? We can still help. We can create a development environment so you can make updates and fix bugs without disturbing your users. We can also offer full support and manage development and product environments with our dedicated team.
                            </p>
                            <button className='font-ZonaSemiFont'>View More</button>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container pt-28 mx-auto lg:px-28 sm:px-4">
                <div className="grid md:grid-cols-12">
                    <div className={`p-12 m-2 lg:col-span-3 sm:col-span-12 ${Style.visibleClass}`}>
                        <div className='pb-6'>
                            <div className={`h-16 w-16 bg-white rounded-full mb-4 transition duration-300 ease-in-out ${visibleComponent == "visible1" ? "border-4 border-theme-blue" : ""}`}>
                                <img className='h-full w-full rounded-full' src="https://ronasit.com/_next/image/?url=%2Fimg%2Favatar-1.webp&w=48&q=75" alt="" />
                            </div>
                            <h6 className='font-ZonaNormalFont text-base '>Bob Glazebrook</h6>
                            <p className='font-ZonaNormalFont text-base text-theme-gray'>Principal, Visual<br />Engineering Inc.</p>
                        </div>
                        <div className='pb-6'>
                            <div className={`h-16 w-16 bg-white rounded-full mb-4 transition duration-300 ease-in-out ${visibleComponent == "visible2" ? "border-4 border-theme-blue" : ""}`}>
                                <img className='h-full w-full rounded-full' src="https://ronasit.com/_next/image/?url=%2Fimg%2Favatar-1.webp&w=48&q=75" alt="" />
                            </div>
                            <h6 className='font-ZonaNormalFont text-base '>Bob Glazebrook</h6>
                            <p className='font-ZonaNormalFont text-base text-theme-gray'>Principal, Visual<br />Engineering Inc.</p>
                        </div>
                        <div className='pb-6'>
                            <div className={`h-16 w-16 bg-white rounded-full mb-4 transition duration-300 ease-in-out ${visibleComponent == "visible3" ? "border-4 border-theme-blue" : ""}`}>
                                <img className='h-full w-full rounded-full' src="https://ronasit.com/_next/image/?url=%2Fimg%2Favatar-1.webp&w=48&q=75" alt="" />
                            </div>
                            <h6 className='font-ZonaNormalFont text-base '>Bob Glazebrook</h6>
                            <p className='font-ZonaNormalFont text-base text-theme-gray'>Principal, Visual<br />Engineering Inc.</p>
                        </div>
                        <div className='pb-6'>
                            <div className={`h-16 w-16 bg-white rounded-full mb-4 transition duration-300 ease-in-out ${visibleComponent == "visible4" ? "border-4 border-theme-blue" : ""}`}>
                                <img className='h-full w-full rounded-full' src="https://ronasit.com/_next/image/?url=%2Fimg%2Favatar-1.webp&w=48&q=75" alt="" />
                            </div>
                            <h6 className='font-ZonaNormalFont text-base '>Bob Glazebrook</h6>
                            <p className='font-ZonaNormalFont text-base text-theme-gray'>Principal, Visual<br />Engineering Inc.</p>
                        </div>
                    </div>

                    <div className="p-12 m-2 lg:col-span-9 sm:col-span-12 animate__animated animate__fadeInUp">
                        <VisibilityObserver className='py-72' id="visible1" onVisible={handleVisibilityChange}>
                            <div className='flex items-center py-8'>
                                <div className='px-1'>
                                    <BsFillStarFill color='#ef4335' size={28} />
                                </div>
                                <div className='px-1'>
                                    <BsFillStarFill color='#ef4335' size={28} />
                                </div>
                                <div className='px-1'>
                                    <BsFillStarFill color='#ef4335' size={28} />
                                </div>
                                <div className='px-1'>
                                    <BsFillStarFill color='#ef4335' size={28} />
                                </div>
                                <div className='pl-1 pr-8'>
                                    <BsFillStarFill color='#ef4335' size={28} />
                                </div>


                                <div className='px-6 flex items-end justify-center m-0' style={{ borderLeft: '1px solid hsla(0,0%,100%,.5)' }}>
                                    <h5 className='font-ZonaNormalFont text-3xl'>5.0</h5>
                                </div>
                            </div>
                            <h1 className='font-ZonaSemiFont text-5xl leading-10	leading-snug'>
                                Ronas IT demonstrates an excellent understanding of user needs and all of their designs are creative and elegant in their simplicity. They’re very well thought out and have an excellent response to feedback. All of these qualities are why they’re our go-to user experience experts.
                            </h1>
                        </VisibilityObserver>

                        <VisibilityObserver className='py-72' id="visible2" onVisible={handleVisibilityChange}>
                            <div className='flex items-center py-8'>
                                <div className='px-1'>
                                    <BsFillStarFill color='#ef4335' size={28} />
                                </div>
                                <div className='px-1'>
                                    <BsFillStarFill color='#ef4335' size={28} />
                                </div>
                                <div className='px-1'>
                                    <BsFillStarFill color='#ef4335' size={28} />
                                </div>
                                <div className='px-1'>
                                    <BsFillStarFill color='#ef4335' size={28} />
                                </div>
                                <div className='pl-1 pr-8'>
                                    <BsFillStarFill color='#ef4335' size={28} />
                                </div>


                                <div className='px-6 flex items-end justify-center m-0' style={{ borderLeft: '1px solid hsla(0,0%,100%,.5)' }}>
                                    <h5 className='font-ZonaNormalFont text-3xl'>5.0</h5>
                                </div>
                            </div>
                            <h1 className='font-ZonaSemiFont text-5xl leading-10	leading-snug'>
                                Fantastic service. The guys went above and beyond. They also suggested improvements to my app which I really appreciated - as apposed to doing exactly what I asked, it resulted in a better product. I also had a view of project progress and things that were done and getting done. Very effective.              </h1>
                        </VisibilityObserver>

                        <VisibilityObserver id="visible3" onVisible={handleVisibilityChange} className='py-72'>
                            <div className='flex items-center py-8'>
                                <div className='px-1'>
                                    <BsFillStarFill color='#ef4335' size={28} />
                                </div>
                                <div className='px-1'>
                                    <BsFillStarFill color='#ef4335' size={28} />
                                </div>
                                <div className='px-1'>
                                    <BsFillStarFill color='#ef4335' size={28} />
                                </div>
                                <div className='px-1'>
                                    <BsFillStarFill color='#ef4335' size={28} />
                                </div>
                                <div className='pl-1 pr-8'>
                                    <BsFillStarFill color='#ef4335' size={28} />
                                </div>
                                <div className='px-6 flex items-end justify-center m-0' style={{ borderLeft: '1px solid hsla(0,0%,100%,.5)' }}>
                                    <h5 className='font-ZonaNormalFont text-3xl'>5.0</h5>
                                </div>
                            </div>
                            <h1 className='font-ZonaSemiFont text-5xl leading-10	leading-snug'>
                                A technically skilled team, Ronas IT goes the extra mile to deliver high-quality solutions. With a broad understanding of both the product and current technologies, they provide impactful, timely, and flexible support.              </h1>
                        </VisibilityObserver>

                        <VisibilityObserver id="visible4" onVisible={handleVisibilityChange} className='py-72'>
                            <div className='flex items-center py-8'>
                                <div className='px-1'>
                                    <BsFillStarFill color='#ef4335' size={28} />
                                </div>
                                <div className='px-1'>
                                    <BsFillStarFill color='#ef4335' size={28} />
                                </div>
                                <div className='px-1'>
                                    <BsFillStarFill color='#ef4335' size={28} />
                                </div>
                                <div className='px-1'>
                                    <BsFillStarFill color='#ef4335' size={28} />
                                </div>
                                <div className='pl-1 pr-8'>
                                    <BsFillStarFill color='#ef4335' size={28} />
                                </div>
                                <div className='px-6 flex items-end justify-center m-0' style={{ borderLeft: '1px solid hsla(0,0%,100%,.5)' }}>
                                    <h5 className='font-ZonaNormalFont text-3xl'>5.0</h5>
                                </div>
                            </div>
                            <h1 className='font-ZonaSemiFont text-5xl leading-10	leading-snug'>
                                The quality of their work stands out the most. They’re knowledgeable and provide useful feedback.
                            </h1>
                        </VisibilityObserver>
                    </div>
                </div>
            </div>
            <div className="container pt-28 mx-auto lg:px-28 sm:px-4" style={{ marginTop: "5rem" }}>
                <div className="grid md:grid-cols-12">
                    <div className="p-12 m-2 lg:col-span-3 sm:col-span-12 animate__animated animate__fadeInUp">
                        <p className="font-ZonaBoldFont text-3xl">Numbers</p>
                    </div>
                    <div className="p-12 m-2 lg:col-span-3 sm:col-span-12 animate__animated animate__fadeInUp">
                        <h4 className="font-ZonaBoldFont text-6xl">1870</h4>
                        <p className='font-ZonaNormalFont text-xl pt-2'>reviews<br />across 5 platforms</p>
                    </div>
                    <div className="p-12 m-2 lg:col-span-3 sm:col-span-12 animate__animated animate__fadeInUp">
                        <h4 className="font-ZonaBoldFont text-6xl">Top 50</h4>
                        <p className='font-ZonaNormalFont text-xl pt-2'>app development<br />companies on</p>
                    </div>
                    <div className="p-12 m-2 lg:col-span-3 sm:col-span-12 animate__animated animate__fadeInUp">
                        <h4 className="font-ZonaBoldFont text-6xl">4.9 / 5</h4>
                        <p className='font-ZonaNormalFont text-xl pt-2'>average rate</p>
                    </div>
                    <div className="p-12 m-2 lg:col-span-3 sm:col-span-12 animate__animated animate__fadeInUp">
                    </div>
                    <div className="flex p-12 m-2 grid md:grid-cols-12 lg:col-span-9 sm:col-span-12 animate__animated animate__fadeInUp">
                        <div className='lg:col-span-6'>
                            <div className='flex items-center'>
                                <div className='h-24 w-24 rounded-full border	flex items-center justify-center'>
                                    <SiUpwork color='#14a800' size={42} />
                                </div>
                                <div>
                                    <div className='flex items-center pl-3'>
                                        <div className='px-1'>
                                            <BsFillStarFill color='#ef4335' size={22} />
                                        </div>
                                        <div className='px-1'>
                                            <BsFillStarFill color='#ef4335' size={22} />
                                        </div>
                                        <div className='px-1'>
                                            <BsFillStarFill color='#ef4335' size={22} />
                                        </div>
                                        <div className='px-1'>
                                            <BsFillStarFill color='#ef4335' size={22} />
                                        </div>
                                        <div className='px-1'>
                                            <BsFillStarFill color='#ef4335' size={22} />
                                        </div>
                                        <div className='px-1'>
                                            <p className='font-ZonaNormalFont text-base pt-2'>4.9</p>
                                        </div>
                                    </div>
                                    <div className='pl-4'>
                                        <h6 className='font-ZonaBoldFont text-base pt-2'>1813 reviews</h6>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center mt-12'>
                                <div className='h-24 w-24 rounded-full border	flex items-center justify-center'>
                                    <SiUpwork color='#14a800' size={42} />
                                </div>
                                <div>
                                    <div className='flex items-center pl-3'>
                                        <div className='px-1'>
                                            <BsFillStarFill color='#ef4335' size={22} />
                                        </div>
                                        <div className='px-1'>
                                            <BsFillStarFill color='#ef4335' size={22} />
                                        </div>
                                        <div className='px-1'>
                                            <BsFillStarFill color='#ef4335' size={22} />
                                        </div>
                                        <div className='px-1'>
                                            <BsFillStarFill color='#ef4335' size={22} />
                                        </div>
                                        <div className='px-1'>
                                            <BsFillStarFill color='#ef4335' size={22} />
                                        </div>
                                        <div className='px-1'>
                                            <p className='font-ZonaNormalFont text-base pt-2'>4.9</p>
                                        </div>
                                    </div>
                                    <div className='pl-4'>
                                        <h6 className='font-ZonaBoldFont text-base pt-2'>1813 reviews</h6>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center mt-12'>
                                <div className='h-24 w-24 rounded-full border	flex items-center justify-center'>
                                    <SiUpwork color='#14a800' size={42} />
                                </div>
                                <div>
                                    <div className='flex items-center pl-3'>
                                        <div className='px-1'>
                                            <BsFillStarFill color='#ef4335' size={22} />
                                        </div>
                                        <div className='px-1'>
                                            <BsFillStarFill color='#ef4335' size={22} />
                                        </div>
                                        <div className='px-1'>
                                            <BsFillStarFill color='#ef4335' size={22} />
                                        </div>
                                        <div className='px-1'>
                                            <BsFillStarFill color='#ef4335' size={22} />
                                        </div>
                                        <div className='px-1'>
                                            <BsFillStarFill color='#ef4335' size={22} />
                                        </div>
                                        <div className='px-1'>
                                            <p className='font-ZonaNormalFont text-base pt-2'>4.9</p>
                                        </div>
                                    </div>
                                    <div className='pl-4'>
                                        <h6 className='font-ZonaBoldFont text-base pt-2'>1813 reviews</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='lg:col-span-6'>
                            <div className='flex items-center'>
                                <div className='h-24 w-24 rounded-full border	flex items-center justify-center'>
                                    <SiUpwork color='#14a800' size={42} />
                                </div>
                                <div>
                                    <div className='flex items-center pl-3'>
                                        <div className='px-1'>
                                            <BsFillStarFill color='#ef4335' size={22} />
                                        </div>
                                        <div className='px-1'>
                                            <BsFillStarFill color='#ef4335' size={22} />
                                        </div>
                                        <div className='px-1'>
                                            <BsFillStarFill color='#ef4335' size={22} />
                                        </div>
                                        <div className='px-1'>
                                            <BsFillStarFill color='#ef4335' size={22} />
                                        </div>
                                        <div className='px-1'>
                                            <BsFillStarFill color='#ef4335' size={22} />
                                        </div>
                                        <div className='px-1'>
                                            <p className='font-ZonaNormalFont text-base pt-2'>4.9</p>
                                        </div>
                                    </div>
                                    <div className='pl-4'>
                                        <h6 className='font-ZonaBoldFont text-base pt-2'>1813 reviews</h6>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center mt-12'>
                                <div className='h-24 w-24 rounded-full border	flex items-center justify-center'>
                                    <SiUpwork color='#14a800' size={42} />
                                </div>
                                <div>
                                    <div className='flex items-center pl-3'>
                                        <div className='px-1'>
                                            <BsFillStarFill color='#ef4335' size={22} />
                                        </div>
                                        <div className='px-1'>
                                            <BsFillStarFill color='#ef4335' size={22} />
                                        </div>
                                        <div className='px-1'>
                                            <BsFillStarFill color='#ef4335' size={22} />
                                        </div>
                                        <div className='px-1'>
                                            <BsFillStarFill color='#ef4335' size={22} />
                                        </div>
                                        <div className='px-1'>
                                            <BsFillStarFill color='#ef4335' size={22} />
                                        </div>
                                        <div className='px-1'>
                                            <p className='font-ZonaNormalFont text-base pt-2'>4.9</p>
                                        </div>
                                    </div>
                                    <div className='pl-4'>
                                        <h6 className='font-ZonaBoldFont text-base pt-2'>1813 reviews</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='lg:col-span-4 h-72 flex items-center justify-start'>
                            <img src="https://ronasit.com/_next/static/media/clutch-dark-1.bc510330.svg" alt="" />
                        </div>
                        <div className='lg:col-span-4 h-72 flex items-center justify-center'>
                            <img src="https://ronasit.com/_next/static/media/clutch-dark-1.bc510330.svg" alt="" />
                        </div>
                        <div className='lg:col-span-4 h-72 flex items-center justify-end'>
                            <img src="https://ronasit.com/_next/static/media/clutch-dark-1.bc510330.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <SecondaryFooter />
            <Footer />
        </>
    )
}

export default index