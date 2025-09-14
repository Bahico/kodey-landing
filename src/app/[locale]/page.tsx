"use client";
import "../home.css";
import Steps from "../home-components/steps";
import Services from "../home-components/services";
import History from "../home-components/history";
import Location from "../home-components/location";
import Internal from "../home-components/internal";
import Contact from "../home-components/contact";
import {useEffect, useRef} from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {TextPlugin} from "gsap/TextPlugin";
import Link from "next/link";
import BackgroundAnimation from "@/app/components/BackgroundAnimation";
import {usePathname} from "next/navigation";
import {useTranslations} from "next-intl";
import {textAnimation, textAnimationTl} from "@/app/functions/text.animation";
import {Employees} from "@/app/home-components/employees";


gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


export default function SimpleHome() {
    const pathname = usePathname();
    const t = useTranslations('home');

    // refs
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const buttonDescriptionRef = useRef<HTMLButtonElement>(null);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const hash = window.location.hash;
            if (hash) {
                const el = document.querySelector(hash);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                }
            }
        }
    }, [pathname]);

    useGSAP(() => {
        const tl = gsap.timeline({
            repeat: 1,
            yoyo: false,
            onComplete: () => {
                tl.restart();
            },
        });

        const tl1 = textAnimation(titleRef.current, elementRef.current);

        textAnimationTl(descriptionRef.current, elementRef.current, tl1);
        textAnimationTl(buttonRef.current, elementRef.current, tl1);
        textAnimationTl(buttonDescriptionRef.current, elementRef.current, tl1);

        // First text animation
        tl.to("#title-home", {
            duration: 1,
            text: "Разработка",
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
                text: "Дизайн",
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
                text: "Поддержка",
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
    });

    return (
        <div className="relative w-full overflow-hidden smooth-scroll">
            <div className="absolute top-[-6%] left-[-90%] w-[1600px] h-[1000px] z-0 flex md:hidden">
                <BackgroundAnimation />
            </div>
            {/* Hero Section */}
            <section className="relative flex justify-center w-full pt-6 sm:pt-8 md:pt-10" ref={elementRef}>
                <div className="container px-4 sm:px-6 lg:px-8 relative">
                    {/*<div className="absolute inset-0 animated-gradient-overlay background-glow"></div>*/}

                    <div
                        className="z-10 flex flex-col lg:flex-row md:items-center justify-between w-full gap-8 lg:gap-0 mt-20 md:mt-0">

                        <div className="flex flex-col relative z-10">
                            <div className="absolute top-0 left-[-40%] w-full hidden md:block z-0">
                                <BackgroundAnimation />
                            </div>
                            <h1
                                ref={titleRef}
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl h-12 md:h-20 z-10 flex mb-4 sm:mb-6 lg:mb-8"
                            >
                                <span id="title-home" className="primary-gradient font-bold"></span>
                                <span className="text-[#242424] ml-2 overflow-hidden flex" id="title-home-separator">|</span>
                            </h1>

                            <h1 ref={descriptionRef} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#929292] mb-4 sm:mb-10 lg:mb-30 z-10 w-[471px] md:w-[850px]">
                                {t('title')}
                            </h1>
                            <Link href="/#contact">
                                <button
                                    ref={buttonRef}
                                    className="z-10 relative btn-gradient text-white px-6 mb-4 sm:px-8 lg:px-30 py-3 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl text-lg sm:text-xl lg:text-2xl font-semibold hover:shadow-lg transition-shadow w-full sm:w-auto">
                                    {t('button')}
                                </button>
                            </Link>
                            <span ref={buttonDescriptionRef} className="text-base sm:text-lg lg:text-xl text-[#929292] md:w-[400px]">
                                {t('description')}
                            </span>
                        </div>

                        <div className="relative">
                            <video
                                className="w-full h-[600px] md:w-[500px] md:h-[750px] lg:w-[583px] lg:h-[875px] lg:mr-[-40px]"
                                autoPlay loop muted
                            >
                                <source src="images/background/af62712a280d485aa53e25537cd5d6d8.webm" type="video/webm" />
                            </video>
                            {/*<video width="320" height="240" controls>*/}
                            {/*    <source src="movie.mp4" type="video/mp4"/>*/}
                            {/*    <source src="movie.ogg" type="video/ogg"/>*/}
                            {/*    Your browser does not support the video tag.*/}
                            {/*</video>*/}

                        </div>
                    </div>
                </div>
            </section>

            {/* Human Factor Section */}
            <Employees />

            {/* Route to Production Section */}
            <Steps />

            {/* Services Section */}
            <Services />

            {/* History Section */}
            <History />

            {/* Location Section */}
            <Location />

            {/* Internal Section */}
            <Internal />

            {/* Contact Section */}
            <Contact />
        </div>
    )
}