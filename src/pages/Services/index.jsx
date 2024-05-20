import React from "react";
import Header from "../../components/header/index";
import Developmenpic from '../../../src/assets/Images/Developmenpic.jpg';
import Nativess from '../../../src/assets/Images/Nativepic.webp'
import bicycle from '../../../src/assets/Images/bicycle.jpg'
import Design from '../../../src/assets/Images/Design.jpg'
import webplatform from '../../../src/assets/Images/webplatform.jpg'
import Strategy from '../../../src/assets/Images/Strategy.jpg'
import Artwork from '../../../src/assets/Images/Artwork.jpg'
import maintenance from '../../../src/assets/Images/Maintenance.jpg'
import CrossyPic from '../../../src/assets/Images/CrossyPic.jpg'
import Image from 'next/image';
import Style from "./services.module.css"

const Services = () => {
    return (
        <>
            {/* <Header /> */}
            <div className="mt-10 md:mt-24 px-4 md:px-0 md:pl-20">
                <p className="font-ZonaNormalFont text-lg md:text-base mb-4 md:mb-8 pl-4 md:pl-10">Services</p>
                <p className="text-5xl md:text-5xl font-ZonaSemiFont pl-4 md:pl-10 md:leading-tight">
                    From proof of concepts <span className="text-neutral-400"> (PoC) </span> and minimum <br />viable products <span className="text-neutral-400"> (MVP) </span> to complex <span className="pr-48"></span>enterprise-level systems – we’ve got <span className="pr-48"></span> everything covered.
                </p>
            </div>

            <div className="container mx-auto">
                <div className="md:flex mt-80">
                    <div className="md:pl-20">
                        <div className="mt-10 md:mt-24">
                            <h3 className="text-4xl font-ZonaSemiFont mb-10">Development</h3>
                            <p className="font-ZonaNormalFont text-xl">Implementing your project with scalable architecture design,modern technology, and an excellent level of data security.</p>
                        </div>
                    </div>
                    <div className="md:w-3/4 pt-20 pr-12">
                        <Image src={Developmenpic} alt="Your Image" className={Style.Developmenpic} />
                    </div>
                </div>
            </div>

            <div class="container mx-auto">
                <div class="md:flex mt-16">
                    <div class="md:w-1/2 px-4 md:pl-20">
                        <div class="mt-10 md:mt-20">
                            <span class="font-ZonaNormalFont pb-10 block">Development</span>
                            <h3 class="text-4xl font-ZonaSemiFont mb-6">Web Services</h3>
                            <p class="font-ZonaNormalFont text-sm">We create web products tailored exclusively for your business goals, be it a high converting landing page, a complex web app to automate your processes or a high-load platform with sensitive data. </p>
                            <button class="font-ZonaNormalFont p-4 pl-10 pr-10 mt-10 border border-gray-500 rounded-full text-white hover:bg-blue-500 hover:text-black hover:border-gray-600">View more</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mx-auto">
                <div class="md:flex mt-24">
                    <div class="md:w-3/2 px-4 md:pl-20">
                        <div class="mt-10 md:mt-20">
                            <span class="font-ZonaNormalFont pb-10 block">Development</span>
                            <h3 class="text-4xl font-ZonaSemiFont mb-6">Native Mobile Development</h3>
                            <p class="font-ZonaThinFont text-sm">We build custom mobile applications for both iOS (with Swift) and Android (with Kotlin) according to Apple and Google guidelines and can get them released to stores quickly.</p>
                            <button class="font-ZonaNormalFont p-4 pl-10 pr-10 mt-12 border border-gray-500 rounded-full text-white hover:bg-blue-500 hover:text-black hover:border-gray-600">Android Development</button>
                        </div>
                        <div>
                            <button class="font-ZonaNormalFont p-4 pl-10 pr-10 mt-5 border border-gray-500 rounded-full text-white hover:bg-blue-500 hover:text-black hover:border-gray-600">iOS Development</button>
                        </div>
                    </div>
                    <div className="md:w-3/4 pt-20 pr-12">
                        <Image src={Nativess} alt="Your Image" className={Style.Nativess} />
                    </div>
                </div>
            </div>

            <div className="container mx-auto">
                <div className="md:flex mt-16">
                    <div className="md:pl-20">
                        <div className="mt-10 md:mt-20">
                            <span class="font-ZonaNormalFont pb-10 block">Development</span>
                            <h3 class="text-4xl font-ZonaSemiFont mb-6">Cross-platform Mobile Development</h3>
                            <p class="font-ZonaThinFont text-sm">With this approach we develop a single app for multiple platforms like Android and iOS using React Native.</p>
                            <button class="font-ZonaNormalFont p-4 pl-10 pr-10 mt-10 border border-gray-500 rounded-full text-white hover:bg-blue-500 hover:text-black hover:border-gray-600">View more</button>
                        </div>

                    </div>
                    <div className="md:w-3/4 pt-20 pl-28">
                        <Image src={bicycle} alt="Your Image" className={Style.bicycle} />
                    </div>
                </div>
            </div>

            <div className="container mx-auto">
                <div className="md:flex mt-16">
                    <div className="md:w-3/4 px-4 md:pl-20">
                        <div className="mt-10 md:mt-96">
                            <h3 className="text-4xl font-ZonaSemiFont mb-10">Design</h3>
                            <p className="font-ZonaNormalFont text-xl">Establishing the right visual connection with your customers and users by creating eye-catching and memorable designs as well as meaningful user experience.</p>
                        </div>
                    </div>
                    <div className="md:w-2/3 pt-20 pr-20">
                        <Image src={webplatform} alt="Your Image" className={Style.webplatform} />
                    </div>
                </div>
            </div>

            <div class="container mx-auto">
                <div class="md:flex mt-16">
                    <div class="md:w-1/2 px-4 md:pl-20">
                        <div class="mt-10 md:mt-20">
                            <span class="font-ZonaNormalFont pb-10 block">Design</span>
                            <h3 class="text-4xl font-ZonaSemiFont mb-6">Websites and Platforms</h3>
                            <p class="font-ZonaThinFont text-sm">We design projects of different complexity and size. No matter if it is a <br /> simple single-page website or a complex admin panel with numerous dashboards – we will make it visually pleasing, consistent, and user <br />-friendly.</p>
                            <button class="font-ZonaNormalFont p-4 pl-10 pr-10 mt-10 border border-gray-500 rounded-full text-white hover:bg-blue-500 hover:text-black hover:border-gray-600">View more</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mx-auto">
                <div class="md:flex mt-32">
                    <div class="md:w-2/3 px-4 md:pl-20">
                        <div class="mt-10 md:mt-20">
                            <span class="font-ZonaNormalFont pb-10 block">Design</span>
                            <h3 class="text-4xl font-ZonaSemiFont mb-6">Mobile Apps</h3>
                            <p class="font-ZonaThinFont text-sm">We don’t simply design beautiful interfaces but craft them in accordance with each platforms’ guidelines to make the use of your app intuitive to users.</p>
                            <button class="font-ZonaNormalFont p-4 pl-10 pr-10 mt-10 border border-gray-500 rounded-full text-white hover:bg-blue-500 hover:text-black hover:border-gray-600">View more</button>
                        </div>
                    </div>
                    <div className="md:w-3/4 pt-20 pr-12">
                        <Image src={Design} alt="Your Image" className={Style.Design} />
                    </div>
                </div>
            </div>

            <div class="container mx-auto">
                <div class="md:flex mt-36">
                    <div class="md:w-1/2 px-4 md:pl-20">
                        <div class="mt-10 md:mt-36">
                            <span class="font-ZonaNormalFont pb-10 block">Design</span>
                            <h3 class="text-4xl font-ZonaSemiFont mb-6">Strategy and Branding</h3>
                            <p class="font-ZonaThinFont text-sm">We identify your brand by developing a logo, corporate identity, user <br />manuals, mockups, and souvenir products.</p>
                            <button class="font-ZonaNormalFont p-4 pl-10 pr-10 mt-10 border border-gray-500 rounded-full text-white hover:bg-blue-500 hover:text-black hover:border-gray-600">View more</button>
                        </div>
                    </div>
                    <div className="md:w-3/4 pt-20 pr-12">
                        <Image src={Strategy} alt="Your Image" className={Style.Strategy} />
                    </div>
                </div>
            </div>

            <div class="container mx-auto">
                <div class="md:flex mt-36">
                    <div class="md:w-1/2 px-4 md:pl-20">
                        <div class="mt-10 md:mt-36">
                            <span class="font-ZonaNormalFont pb-10 block">Design</span>
                            <h3 class="text-4xl font-ZonaSemiFont mb-6">Design Concept</h3>
                            <p class="font-ZonaThinFont text-sm">We’ll make a design concept for a site or mobile application to attract your audience and make your awesome product even more awesome.</p>
                            <button class="font-ZonaNormalFont p-4 pl-10 pr-10 mt-10 border border-gray-500 rounded-full text-white hover:bg-blue-500 hover:text-black hover:border-gray-600">View more</button>
                        </div>
                    </div>
                    <div className="md:w-3/4 pt-20 pr-12">
                        <Image src={Artwork} alt="Your Image" className={Style.Artwork} />
                    </div>
                </div>
            </div>

            <div className="container mx-auto">
                <div className="md:flex mt-16">
                    <div className="md:w-3/4 px-4 md:pl-20">
                        <div className="mt-10 md:mt-96">
                            <h3 className="text-4xl font-ZonaSemiFont mb-10">Maintenance</h3>
                            <p className="font-ZonaNormalFont text-xl">The project can be completed, but the product is never finished. Tweaks, fixes, and updates of the post-release phase are one of our core services.</p>
                        </div>
                    </div>
                    <div className="md:w-2/3 pt-20 pr-20">
                        <Image src={maintenance} alt="Your Image" className={Style.maintenance} />
                    </div>
                </div>
            </div>

            <div class="container mx-auto">
                <div class="md:flex mt-16">
                    <div class="md:w-1/2 px-4 md:pl-20">
                        <div class="mt-10 md:mt-20">
                            <span class="font-ZonaNormalFont pb-10 block">Maintenance</span>
                            <h3 class="text-4xl font-ZonaSemiFont mb-6">Post-release support</h3>
                            <p class="font-ZonaNormalFont text-sm">We help to keep projects up-to-date – from technology updates to new functionality implementation.</p>
                            <button class="font-ZonaNormalFont p-4 pl-10 pr-10 mt-10 border border-gray-500 rounded-full text-white hover:bg-blue-500 hover:text-black hover:border-gray-600">View more</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mx-auto">
                <div class="md:flex mt-16">
                    <div class="md:w-1/2 px-4 md:pl-20">
                        <div class="mt-10 md:mt-20">
                            <span class="font-ZonaNormalFont pb-10 block">Maintenance</span>
                            <h3 class="text-4xl font-ZonaSemiFont mb-6">System Administration Support</h3>
                            <p class="font-ZonaNormalFont text-sm">Every project involves stages of target audience research and prototype testing. The result? A product that suits your users perfectly.</p>
                            <button class="font-ZonaNormalFont p-4 pl-10 pr-10 mt-10 border border-gray-500 rounded-full text-white hover:bg-blue-500 hover:text-black hover:border-gray-600">View more</button>
                        </div>
                    </div>
                    <div className="md:w-2/3 pt-20 pr-20">
                        <Image src={CrossyPic} alt="Your Image" className={Style.CrossyPic} />
                    </div>
                </div>
            </div>

            <div className="mt-10 md:mt-96 px-4 md:px-0 md:pl-16">
                <h1 className="font-ZonaSemiFont text-lg md:text-5xl mb-4 md:mb-8 pl-4 md:pl-10">Benefits working with us</h1>
            </div>
          
           

        </>
    );
};

export default Services;
