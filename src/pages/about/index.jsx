import React, { useEffect, useState } from "react";
import Header from "@/components/header";
import styles from './about.module.css';
import { FaBehance } from "react-icons/fa";


const About = () => {
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.pageYOffset);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <Header />
            <div className="container pt-28 mx-auto lg:px-28 sm:px-4">
                <div className="grid md:grid-cols-6 pt-12">
                    <div className="px-12 m-2 lg:col-span-6 sm:col-span-6 animate__animated animate__fadeInUp">
                        <p className="font-ZonaNormalFont text-lg">About</p>
                    </div>

                    <div className="px-12 pb-12 pt-6 m-2 lg:col-span-6 sm:col-span-4 animate__animated animate__fadeInUp">
                        <h2 className="text-5xl font-ZonaBoldFont leading-tight	mb-12">
                            We design and develop<br /> web and mobile apps<br /> for startups, small and medium<br /> businesses
                        </h2>
                    </div>
                </div>
            </div>

            <div className={styles.image_parallaximage}>
                <div className={styles.parallax_image_parallaximage} style={{ transform: 'translate(0px, 17.1719%)' }}>
                    <div className="smooth-image_smoothimage_image__cNYyP smoothimage_image smooth-image_smoothimage_image_loaded__Vnd8L">
                        <span >
                            <img src="https://ronasit.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fabout-top.d9c56192.jpeg&w=1920&q=75" sizes="100vw" decoding="async" data-nimg="fill" style={{ transform: `translateY(${offset * 0.5}px)` }} alt="Parallax Image" />
                        </span>
                    </div>
                </div>
            </div>


            <div className="container pt-28 mx-auto lg:px-28 sm:px-4">
                <div className="grid md:grid-cols-6">
                    <div className="px-12 m-2 lg:col-span-6 sm:col-span-6 animate__animated animate__fadeInUp">
                        <p className="font-ZonaNormalFont text-lg">Our Goal</p>
                    </div>

                    <div className="px-12 pb-12 pt-6 m-2 lg:col-span-6 sm:col-span-4 animate__animated animate__fadeInUp">
                        <h2 className="text-5xl font-ZonaBoldFont leading-tight	mb-12">
                            We like to see our clients as partners and we do <br /> our best to deliver the product they and their <br /> users are 100% satisfied with. Agile principles,<br /> ongoing communication, transparency <br /> are the cornerstones of each of our projects.
                        </h2>
                    </div>
                </div>
            </div>


            <div className="container mx-auto lg:px-28 sm:px-4">
                <div className="grid md:grid-cols-6 pt-12">
                    <div className="px-2 pb-12 pt-6 m-2 lg:col-span-3 sm:col-span-6 animate__animated animate__fadeInUp">
                        <img src="https://ronasit.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fabout-office-1.6651dd2b.jpeg&w=1920&q=75" />
                    </div>
                    <div className="px-2 pb-12 pt-36 m-2 lg:col-span-3 sm:col-span-6 animate__animated animate__fadeInUp">
                        <img src="https://ronasit.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fabout-office-2.26e18b27.jpeg&w=1920&q=75" />
                    </div>
                </div>
            </div>


            <div className="container mx-auto pt-36 lg:px-28 sm:px-4">
                <div className="grid md:grid-cols-12 pt-12">
                    <div className="px-12 pb-12 m-2 lg:col-span-3 sm:col-span-6 animate__animated animate__fadeInUp">
                        <h2 className="text-7xl font-ZonaSemiFont leading-tight">50+</h2>
                        <p className="font-ZonaNormalFont text-lg">developers in an <br />independent team</p>
                    </div>
                    <div className="px-12 pb-12 m-2 lg:col-span-3 sm:col-span-6 animate__animated animate__fadeInUp">
                        <h2 className="text-7xl font-ZonaSemiFont leading-tight">17+</h2>
                        <p className="font-ZonaNormalFont text-lg">years of experience</p>
                    </div>
                    <div className="px-12 pb-12 m-2 lg:col-span-3 sm:col-span-6 animate__animated animate__fadeInUp">
                        <h2 className="text-7xl font-ZonaSemiFont leading-tight">1,500+</h2>
                        <p className="font-ZonaNormalFont text-lg">projects</p>
                    </div>
                    <div className="px-12 pb-12 m-2 lg:col-span-3 sm:col-span-6 animate__animated animate__fadeInUp">
                        <h2 className="text-7xl font-ZonaSemiFont leading-tight">60%</h2>
                        <p className="font-ZonaNormalFont text-lg">repeat customers</p>
                    </div>
                </div>
            </div>





            <div className="container mx-auto pt-36 lg:px-28 sm:px-4">
                <div className="grid md:grid-cols-12 pt-12">
                    <div className="px-12 pb-12 m-2 lg:col-span-12 sm:col-span-12 animate__animated animate__fadeInUp">
                        <h2 className="text-6xl font-ZonaSemiFont leading-tight">Publications<br />
                            & Awards</h2>
                    </div>

                    <div className="px-12 pb-12 m-2 lg:col-span-4 sm:col-span-4 animate__animated animate__fadeInUp">
                        <div className="h-16 w-16 rounded-full bg-zinc-800 flex items-center justify-center">
                            <FaBehance color="white" size={32} />
                        </div>
                        <p className="font-ZonaNormalFont text-lg py-6 text-white">Behance</p>
                        <h4 className="font-ZonaBoldFont text-4xl">Honorable <br /> Mention</h4>
                        <p className="font-ZonaNormalFont text-lg pb-6 pt-3 text-gray-300">February 2024</p>
                    </div>
                    <div className="px-12 pb-12 m-2 lg:col-span-4 sm:col-span-4 animate__animated animate__fadeInUp">
                        <div className="h-16 w-16 rounded-full bg-zinc-800 flex items-center justify-center">
                            <FaBehance color="white" size={32} />
                        </div>
                        <p className="font-ZonaNormalFont text-lg py-6 text-white">Behance</p>
                        <h4 className="font-ZonaBoldFont text-4xl">UI/UX Gallery</h4>
                        <p className="font-ZonaNormalFont text-lg pb-6 pt-3 text-gray-300">February 2024</p>
                    </div>
                    <div className="px-12 pb-12 m-2 lg:col-span-4 sm:col-span-4 animate__animated animate__fadeInUp">
                        <div className="h-16 w-16 rounded-full bg-zinc-800 flex items-center justify-center">
                            <FaBehance color="white" size={32} />
                        </div>
                        <p className="font-ZonaNormalFont text-lg py-6 text-white">Behance</p>
                        <h4 className="font-ZonaBoldFont text-4xl">Top Mobile App<br /> Development<br /> Company</h4>
                        <p className="font-ZonaNormalFont text-lg pb-6 pt-3 text-gray-300">February 2024</p>
                    </div>



                    <div className="px-12 pb-12 m-2 lg:col-span-4 sm:col-span-4 animate__animated animate__fadeInUp">
                        <div className="h-16 w-16 rounded-full bg-zinc-800 flex items-center justify-center">
                            <FaBehance color="white" size={32} />
                        </div>
                        <p className="font-ZonaNormalFont text-lg py-6 text-white">Behance</p>
                        <h4 className="font-ZonaBoldFont text-4xl">Design,<br /> Development,<br /> Maintenance<br /> Article</h4>
                        <p className="font-ZonaNormalFont text-lg pb-6 pt-3 text-gray-300">February 2024</p>
                    </div>
                    <div className="px-12 pb-12 m-2 lg:col-span-4 sm:col-span-4 animate__animated animate__fadeInUp">
                        <div className="h-16 w-16 rounded-full bg-zinc-800 flex items-center justify-center">
                            <FaBehance color="white" size={32} />
                        </div>
                        <p className="font-ZonaNormalFont text-lg py-6 text-white">Behance</p>
                        <h4 className="font-ZonaBoldFont text-4xl">Top Web<br /> Development<br /> Companies<br /> Award</h4>
                        <p className="font-ZonaNormalFont text-lg pb-6 pt-3 text-gray-300">February 2024</p>
                    </div>
                    <div className="px-12 pb-12 m-2 lg:col-span-4 sm:col-span-4 animate__animated animate__fadeInUp">
                        <div className="h-16 w-16 rounded-full bg-zinc-800 flex items-center justify-center">
                            <FaBehance color="white" size={32} />
                        </div>
                        <p className="font-ZonaNormalFont text-lg py-6 text-white">Behance</p>
                        <h4 className="font-ZonaBoldFont text-4xl">Honorable <br /> Mention</h4>
                        <p className="font-ZonaNormalFont text-lg pb-6 pt-3 text-gray-300">February 2024</p>
                    </div>





                    <div className="px-12 pb-12 m-2 lg:col-span-4 sm:col-span-4 animate__animated animate__fadeInUp">
                        <div className="h-16 w-16 rounded-full bg-zinc-800 flex items-center justify-center">
                            <FaBehance color="white" size={32} />
                        </div>
                        <p className="font-ZonaNormalFont text-lg py-6 text-white">Behance</p>
                        <h4 className="font-ZonaBoldFont text-4xl">Honorable <br /> Mention</h4>
                        <p className="font-ZonaNormalFont text-lg pb-6 pt-3 text-gray-300">February 2024</p>
                    </div>
                    <div className="px-12 pb-12 m-2 lg:col-span-4 sm:col-span-4 animate__animated animate__fadeInUp">
                        <div className="h-16 w-16 rounded-full bg-zinc-800 flex items-center justify-center">
                            <FaBehance color="white" size={32} />
                        </div>
                        <p className="font-ZonaNormalFont text-lg py-6 text-white">Behance</p>
                        <h4 className="font-ZonaBoldFont text-4xl">Honorable <br /> Mention</h4>
                        <p className="font-ZonaNormalFont text-lg pb-6 pt-3 text-gray-300">February 2024</p>
                    </div>
                    <div className="px-12 pb-12 m-2 lg:col-span-4 sm:col-span-4 animate__animated animate__fadeInUp">
                        <div className="h-16 w-16 rounded-full bg-zinc-800 flex items-center justify-center">
                            <FaBehance color="white" size={32} />
                        </div>
                        <p className="font-ZonaNormalFont text-lg py-6 text-white">Behance</p>
                        <h4 className="font-ZonaBoldFont text-4xl">Honorable <br /> Mention</h4>
                        <p className="font-ZonaNormalFont text-lg pb-6 pt-3 text-gray-300">February 2024</p>
                    </div>


                    <div className="px-12 pb-12 m-2 lg:col-span-4 sm:col-span-4 animate__animated animate__fadeInUp">
                        <div className="h-16 w-16 rounded-full bg-zinc-800 flex items-center justify-center">
                            <FaBehance color="white" size={32} />
                        </div>
                        <p className="font-ZonaNormalFont text-lg py-6 text-white">Behance</p>
                        <h4 className="font-ZonaBoldFont text-4xl">Honorable <br /> Mention</h4>
                        <p className="font-ZonaNormalFont text-lg pb-6 pt-3 text-gray-300">February 2024</p>
                    </div>
                    <div className="px-12 pb-12 m-2 lg:col-span-4 sm:col-span-4 animate__animated animate__fadeInUp">
                        <div className="h-16 w-16 rounded-full bg-zinc-800 flex items-center justify-center">
                            <FaBehance color="white" size={32} />
                        </div>
                        <p className="font-ZonaNormalFont text-lg py-6 text-white">Behance</p>
                        <h4 className="font-ZonaBoldFont text-4xl">Honorable <br /> Mention</h4>
                        <p className="font-ZonaNormalFont text-lg pb-6 pt-3 text-gray-300">February 2024</p>
                    </div>
                </div>
            </div>




            <div className="container mx-auto lg:px-28 sm:px-4">
                <div className="grid md:grid-cols-6 pt-12">
                    <div className="px-2 py-6 m-2 lg:col-span-6 sm:col-span-6 flex items-center justify-between">
                        <h2 className="text-5xl font-ZonaBoldFont leading-tight">Latest Posts</h2>
                        <button className="bg-transparent color-white font-ZonaBoldFont border px-12 py-4 border-gray-600" style={{ borderRadius: 30 }}>Read More</button>
                    </div>



                    <div className="px-2 pb-12 m-2 lg:col-span-3 sm:col-span-6 animate__animated animate__fadeInUp">
                        <div className="h-96 bg-white overflow-hidden">
                            <img className="h-full w-full hover:scale-110 transition ease-in-out duration-1000	" src="https://ronasit.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fcover.0ee4b331.webp&w=1920&q=75" />
                        </div>
                        <p className="font-ZonaNormalFont text-lg pb-6 pt-3">Tech</p>
                    </div>


                    <div className="px-2 pb-12 m-2 lg:col-span-3 sm:col-span-6 animate__animated animate__fadeInUp">
                        <div className="h-96 bg-white overflow-hidden">
                            <img className="h-full w-full hover:scale-110 transition ease-in-out duration-1000	" src="https://ronasit.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fcover.9fb96886.webp&w=1920&q=75" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;