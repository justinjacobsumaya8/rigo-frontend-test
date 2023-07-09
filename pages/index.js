import { Plus_Jakarta_Sans } from 'next/font/google';
import Image from 'next/image';

const PLUS_JAKARTA_SANS = Plus_Jakarta_Sans({ subsets: ['latin'] })

export default function Home() {
    return (
        <main className={`${PLUS_JAKARTA_SANS.className}`}>
            <section id="landing-section">
                <div className="relative lg:bg-[url('/images/main-bg.png')] bg-center bg-cover h-screen">
                    <div className="p-5 bg-white absolute w-full z-10 opacity-25"></div>
                    <div className="absolute bg-dark-green text-white h-screen w-full lg:w-[44%]">
                        <div className="text-center lg:text-left px-10 lg:px-16 py-8 mt-8">
                            <h3 className="text-xl lg:text-2xl">Brand New Company</h3>
                        </div>
                        <div className="flex align-middle items-center justify-center h-[70%] lg:h-[80%]">
                            <div className="flex items-stretch justify-between mt-5">
                                <div className="w-[65%] lg:w-full">
                                    <div className="px-9 lg:pt-20 lg:p-32">
                                        <div>
                                            <h1 className="text-3xl lg:text-5xl">Launching 2023</h1>
                                            <p className="mt-9 text-[14px] leading-[22.4px] lg:text-xl lg:pr-0">We are in the middle of updating our website but are still very much available to help you with any upcoming projects.</p>
                                            <p className="mt-5 font-extralight text-[14px] leading-[22.4px] lg:text-lg">Contact us or come and visit our office.</p>
                                        </div>
                                        <div className="my-5 lg:my-9 ml-1 lg:ml-0">
                                            <a href="#" className="bg-visit-office-link text-black text-[10px] rounded-full px-10 py-2 lg:px-12 lg:py-3">
                                                Visit office
                                            </a>
                                        </div>
                                        <div className="lg:mt-20">
                                            <div>
                                                <span className="text-xs lg:text-sm">EMAIL:&nbsp;&nbsp; <span className="font-extralight">test@rigo.agency</span></span>
                                            </div>
                                            <div className="mt-2">
                                                <span className="text-xs lg:text-sm">PHONE:&nbsp;&nbsp; <span className="font-extralight">02071231234</span></span>
                                            </div>
                                            <div className="mt-2">
                                                <span className="text-xs lg:text-sm">ADDRESS:&nbsp;&nbsp; <span className="font-extralight">Big Ben, London, SWA1A OAA</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Image
                                        src="/images/main-bg-cropped.png"
                                        alt="Main BG"
                                        width={0}
                                        height={0}
                                        sizes="100vh"
                                        className="lg:hidden w-32 h-[100%]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="subscribe-section">
                <div className="py-32 px-10 lg:p-40 lg:pb-32 text-center">
                    <h6 className="text-semibold uppercase">Keep up to date - Subscribe to our Newsletter</h6>
                    <p className="mt-5 font-extralight text-md">Receive the latest offers, promotions and the news delivered <br className="hidden lg:block" />straight to your inbox with our exclusive email newsletter.</p>
                    <input type="text" className="border border-black w-full lg:w-[30%] px-4 py-2 text-[10px] mt-10" placeholder="Email Address" />
                </div>
            </section>
            <section id="instagram-section">
                <div className="pb-14">
                    <h3 className="text-xl lg:text-2xl text-center lg:text-left mx-16 my-8">Check out our latest projects on instagram</h3>
                    <div className="overflow-auto whitespace-nowrap flex gap-5">
                        <Image src="/images/instagram/image-4.png" alt="Instagram" width={300} height={300} className="cursor-pointer w-full h-auto" />
                        <Image src="/images/instagram/image-1.png" alt="Instagram" width={300} height={300} className="cursor-pointer w-full h-auto" />
                        <Image src="/images/instagram/image-2.png" alt="Instagram" width={300} height={300} className="cursor-pointer w-full h-auto" />
                        <Image src="/images/instagram/image-3.png" alt="Instagram" width={300} height={300} className="cursor-pointer w-full h-auto" />
                        <Image src="/images/instagram/image-4.png" alt="Instagram" width={300} height={300} className="cursor-pointer w-full h-auto" />
                        <Image src="/images/instagram/image-1.png" alt="Instagram" width={400} height={300} className="cursor-pointer w-full h-auto" />
                    </div>
                </div>
            </section>
            <section id="contact-section">
                <div className="bg-contact-section p-12 lg:p-16">
                    <div className="flex flex-col lg:flex-row justify-between">
                        <div className="flex flex-col lg:flex-row text-center lg:text-left gap-16">
                            <div>
                                <div>
                                    <div className="uppercase font-medium text-[10px] leading-[12px] lg:text-xs">Address</div>
                                    <div className="mt-3 font-extralight text-[10px] leading-[12px] lg:text-xs">
                                        <div>Big Ben,</div>
                                        <div className="mt-2">London, SW1A OAA</div>
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <div className="uppercase font-medium text-[10px] leading-[12px] lg:text-xs">Opening Times:</div>
                                    <div className="font-extralight mt-3 text-[10px] leading-[12px] lg:text-xs">
                                        <div className="mt-2">Mon - Fri: 8am-5:30pm</div>
                                        <div className="mt-2">Saturday: 10am-5pm</div>
                                        <div className="mt-2">Sunday: Closed</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uppercase font-medium text-[10px] leading-[12px] lg:text-xs">Call Us</div>
                                <div className="mt-3 font-extralight text-[10px] leading-[12px] lg:text-xs">02071231234</div>
                            </div>
                        </div>
                        <div className="flex justify-center gap-6 mt-10 lg:mt-0">
                            <a href="#!">
                                <Image src="/icons/instagram.svg" alt="Instagram Icon" width={20} height={20} />
                            </a>
                            <a href="#!">
                                <Image src="/icons/facebook.svg" alt="Facebook Icon" width={20} height={20} />
                            </a>
                            <a href="#!">
                                <Image src="/icons/linkedin.svg" alt="LinkedIn Icon" width={20} height={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section-copyright">
                <div className="bg-dark-green text-white text-center px-10 py-4">
                    <span className="uppercase text-[8px] lg:text-[10px] leading-[12.8px] lg:lleading-4 font-extralight tracking-widest">Copyright ©2023 BRANDNEWCOMPANY.com. All Rights Reserved</span>
                </div>
            </section>
        </main>
    );
};
