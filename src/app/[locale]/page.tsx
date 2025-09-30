"use client";
import "../home.css";
import Steps from "../home-components/steps";
import Services from "../home-components/services";
import History from "../home-components/history";
import Location from "../home-components/location";
import Internal from "../home-components/internal";
import Contact from "../home-components/contact";
import {useRef} from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {TextPlugin} from "gsap/TextPlugin";
import Link from "next/link";
import BackgroundAnimation from "@/app/components/BackgroundAnimation";
import {useTranslations} from "next-intl";
import {textAnimation, textAnimationTl} from "@/app/functions/text.animation";
import {Employees} from "@/app/home-components/employees";
import {useLocale} from "use-intl";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


export default function SimpleHome() {
    const t = useTranslations('home');
    const locale = useLocale();

    // refs
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const buttonDescriptionRef = useRef<HTMLButtonElement>(null);
    const elementRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const blackRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            repeat: 1,
            yoyo: false,
            onComplete: () => {
                tl.restart();
            },
        });

        const tl1 = textAnimation(titleRef.current, elementRef.current);

        textAnimationTl(descriptionRef.current, tl1);
        textAnimationTl(buttonRef.current, tl1);
        textAnimationTl(buttonDescriptionRef.current, tl1);

        // First text animation
        tl.to("#title-home", {
            duration: 1,
            text: t('development'),
        })
            // Wait a bit
            .to("#title-home", {
                duration: 0.5,
                delay: 0.5,
            })
            // Remove the text
            .to("#title-home", {
                duration: 0.5,
                text: "",
            })
            // Write the second text
            .to("#title-home", {
                duration: 1,
                text: t('design'),
            })
            // Wait a bit
            .to("#title-home", {
                duration: 0.5,
                delay: 0.5,
            })
            // Remove the text
            .to("#title-home", {
                duration: 0.5,
                text: "",
            })
            .to("#title-home", {
                duration: 1,
                text: t('support'),
            })
            // Wait a bit
            .to("#title-home", {
                duration: 0.5,
                delay: 0.5,
            })
            // Remove the text
            .to("#title-home", {
                duration: 0.5,
                text: "",
            });

        const tl2 = gsap.timeline({
            repeat: 1,
            yoyo: false,
            onComplete: () => {
                tl2.restart();
            },
        });

        tl2.to("#title-home-separator", {
            duration: 1,
            maxWidth: "0px",
        })
            .to("#title-home-separator", {
                duration: 0.5,
                maxWidth: "100%",
            })

        gsap.fromTo(
            elementRef.current,
            {
                scale: 1,
                y: 0,
                opacity: 1,
            },
            {
                scale: 0.8,
                y: '-10vh',
                opacity: 0.9,
                scrollTrigger: {
                    trigger: elementRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 0.3,
                    pin: true,
                    pinSpacing: false,
                    markers: false,
                },
            }
        )

        gsap.to(elementRef.current, {
            scrollTrigger: {
                trigger: elementRef.current,
                start: 'top top',
                end: 'bottom top',
                onEnter: () =>
                    gsap.to(elementRef.current, {duration: 1, y: '-50vh', ease: 'power4.out'}),
                onLeaveBack: () =>
                    gsap.to(elementRef.current, {duration: 1, y: '0', ease: 'power4.out'})
            },
        });

        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: triggerRef.current,
                start: 'top 90%',
                end: '40% top',
                scrub: 1.5,
                toggleActions: 'play none reverse none'
            },
        });

        tl3.fromTo(
            blackRef.current,
            {
                // clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                // backgroundColor: '#000',
                y: "-20vh",
                scale: 0.6
            },
            {
                // clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
                // backgroundColor: '#fff',
                scale: 1,
                y: "0",
                // rotation: -15,
                duration: 1.5,
                ease: 'power3.inOut',
            }
        );

    });

    return (
        <div className="relative w-full overflow-hidden smooth-scroll">
            <div className="absolute top-[-6%] left-[-90%] w-[1600px] h-[1000px] z-0 flex md:hidden">
                <BackgroundAnimation/>
            </div>
            {/* Hero Section */}
            <section className="relative flex justify-center w-full pt-6 sm:pt-8 md:pt-10" ref={elementRef}>
                <div className="container px-4 sm:px-6 lg:px-8 relative">
                    {/*<div className="absolute inset-0 animated-gradient-overlay background-glow"></div>*/}

                    <div
                        className="z-10 flex flex-col lg:flex-row md:items-center justify-between w-full gap-8 lg:gap-0 mt-20 md:mt-0">

                        <div className="flex flex-col relative z-10">
                            <div className="absolute top-0 left-[-40%] w-full hidden md:block z-0">
                                <BackgroundAnimation/>
                            </div>
                            <h1
                                ref={titleRef}
                                className="text-4xl md:text-[72px] lg:text-[92px] z-10 flex mb-4 sm:mb-6 lg:mb-8"
                            >
                                <span id="title-home" className="primary-gradient font-bold"></span>
                                <span className="text-[#242424] ml-2 overflow-hidden flex"
                                      id="title-home-separator">|</span>
                            </h1>

                            <h1 ref={descriptionRef}
                                className="text-[30px] md:text-[42px] lg:text-[72px] font-light text-[#929292] mb-4 sm:mb-10 lg:mb-30 z-10 w-[471px] md:w-[850px]">
                                {t('title')}
                            </h1>
                            <Link href={`/${locale}/#contact`}>
                                <button
                                    ref={buttonRef}
                                    className="z-10 relative btn-gradient text-white px-6 mb-4 sm:px-8 lg:px-30 py-3 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl text-lg sm:text-xl lg:text-2xl font-semibold hover:shadow-lg transition-shadow w-full sm:w-auto">
                                    {t('button')}
                                </button>
                            </Link>
                            <span ref={buttonDescriptionRef}
                                  className="text-base sm:text-lg lg:text-xl text-[#929292] md:w-[400px]">
                                {t('description')}
                            </span>
                        </div>

                        <div className="relative">
                            <img src="/video/output7.webp" className="w-full h-[600px] md:w-[500px] md:h-[750px] lg:w-[583px] lg:h-[875px] lg:mr-[-40px]" alt=""/>

                        </div>
                    </div>
                </div>
            </section>

            <div ref={triggerRef} style={{height: "1px"}}></div>
            <div ref={blackRef}
                 className="bg-black w-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px] lg:rounded-[60px]">
                {/* Human Factor Section */}
                <Employees/>

                {/* Route to Production Section */}
                <Steps/>
            </div>

            {/* Services Section */}
            <Services/>

            {/* History Section */}
            <History/>

            {/* Location Section */}
            <Location/>

            {/* Internal Section */}
            <Internal/>


            {/* Contact Section */}
            <Contact/>
        </div>
    )
}