"use client";
import "../home.css";
import Steps from "../home-components/steps";
import Services from "../home-components/services";
import History from "../home-components/history";
import Location from "../home-components/location";
import Internal from "../home-components/internal";
import Contact from "../home-components/contact";
import { GlassElement } from "../components/GlassElement/GlassElement";
import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import Link from "next/link";
import { nowSize } from "@/app/functions/now-size";
import BackgroundAnimation from "@/app/components/BackgroundAnimation";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";


gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


export default function SimpleHome() {
    const [activeEmployee, setActiveEmployee] = useState(0);
    const { lg } = nowSize();
    const pathname = usePathname();
    const t = useTranslations('home');
    const tHumanFactor = useTranslations('human-factor');

    const employees = [
        {
            name: "Евгений",
            position: "Back-end developer",
            image: "/images/home/f4bdbf1790d07ba513b62e141ee9ed8f8ff6e090.png",
        },
        {
            name: "Кристина",
            position: "Project manager",
            image: "/images/home/Rectangle 15.png",
        },
        {
            name: "Лазиз",
            position: "Project manager",
            image: "/images/home/Rectangle 16.png",
        },
        {
            name: "Александр",
            position: "Full-stack developer",
            image: "/images/home/Rectangle 17.png",
        },
    ];

    const handleEmployeeChange = (index: number) => {
        if (index < 0) {
            setActiveEmployee(employees.length - 1);
        } else if (index >= employees.length) {
            setActiveEmployee(0);
        } else {
            setActiveEmployee(index);
        }
    };

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
            <section className="relative flex justify-center w-full pt-6 sm:pt-8 md:pt-10">
                <div className="container px-4 sm:px-6 lg:px-8 relative">
                    {/*<div className="absolute inset-0 animated-gradient-overlay background-glow"></div>*/}

                    <div
                        className="z-10 flex flex-col lg:flex-row md:items-center justify-between w-full gap-8 lg:gap-0 mt-20 md:mt-0">

                        <div className="flex flex-col relative z-10">
                            <div className="absolute top-0 left-[-40%] w-full hidden md:block z-0">
                                <BackgroundAnimation />
                            </div>
                            <h1
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl h-12 md:h-20 z-10 flex mb-4 sm:mb-6 lg:mb-8"
                            >
                                <span id="title-home" className="primary-gradient font-bold"></span>
                                <span className="text-[#242424] ml-2 overflow-hidden flex" id="title-home-separator">|</span>
                            </h1>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#929292] mb-4 sm:mb-10 lg:mb-30 z-10 w-[471px] md:w-[850px]">
                                {t('title')}
                            </h1>
                            <Link href="/#contact">
                                <button
                                    className="z-10 relative btn-gradient text-white px-6 mb-4 sm:px-8 lg:px-30 py-3 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl text-lg sm:text-xl lg:text-2xl font-semibold hover:shadow-lg transition-shadow w-full sm:w-auto">
                                    {t('button')}
                                </button>
                            </Link>
                            <p className="text-base sm:text-lg lg:text-xl text-[#929292] md:w-[400px]">
                                {t('description')}
                            </p>
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
            <section id="dark-section" className="bg-black text-white w-full flex justify-center rounded-t-[30px] sm:rounded-t-[40px] md:rounded-t-[50px] lg:rounded-t-[60px] relative right-background">
                <div
                    className="absolute top-20 sm:top-40 md:top-60 left-4 sm:left-6 md:left-10 w-[300px] h-[400px] sm:w-[500px] sm:h-[600px] md:w-[700px] md:h-[800px] lg:w-[900px] lg:h-[1000px] z-0">
                    <img
                        src="images/background/background.svg"
                        className="w-3/4 absolute background-1"
                        alt=""
                    />
                </div>

                <div className="container mt-20 sm:mt-30 md:mt-40 flex flex-col items-center z-10 px-4 sm:px-6 lg:px-8">
                    <div
                        className="w-full flex flex-col lg:flex-row justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
                        <div className="flex-1">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 flex">
                                {tHumanFactor('title1')} <span className="text-[#929292] ml-2">{tHumanFactor('title2')}</span>
                            </h2>
                            <p className="text-lg sm:text-xl md:text-2xl text-[#929292] mb-6 sm:mb-8 lg:mb-12">
                                {tHumanFactor('description')}
                            </p>
                            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white mb-8 sm:mb-12 lg:mb-16 pl-0 sm:pl-8 lg:pl-16">
                                {tHumanFactor('description1')}
                                <br />
                                <br />
                                {tHumanFactor('description2')}
                                <br />
                                <br />
                                {tHumanFactor('description3')}
                            </p>
                            <button
                                className="btn-gradient sm:ml-8 lg:ml-16 text-white px-6 sm:px-8 lg:px-20 py-3 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg lg:text-xl font-medium flex items-center gap-2 sm:gap-4 hover:shadow-lg transition-shadow w-full sm:w-auto justify-center lg:justify-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="23" viewBox="0 0 28 23" fill="none">
                                    <path d="M0.438252 10.674C3.24385 9.1286 6.37565 7.83876 9.30185 6.54236C14.3361 4.41896 19.3903 2.33236 24.4955 0.389758C25.4887 0.0587785 27.2735 -0.264861 27.4485 1.20708C27.3526 3.29068 26.9584 5.36208 26.688 7.43348C26.0018 11.9887 25.2085 16.5283 24.435 21.0685C24.1685 22.5808 22.274 23.3637 21.0618 22.3959C18.1486 20.4281 15.213 18.4795 12.337 16.4661C11.3949 15.5088 12.2686 14.1341 13.1099 13.4505C15.5093 11.0859 18.0539 9.07686 20.3279 6.59006C20.9413 5.10884 19.1289 6.35716 18.5311 6.73969C15.2463 9.00329 12.0419 11.4051 8.57869 13.3945C6.80969 14.3683 4.74789 13.5361 2.97969 12.9927C1.39431 12.3363 -0.928908 11.675 0.438092 10.6741L0.438252 10.674Z" fill="white" />
                                </svg>
                                {tHumanFactor('btn')}
                            </button>
                        </div>

                        <div className="flex-1 flex justify-center lg:justify-end pr-0 lg:pr-20 lg:order-last">
                            <div
                                className="rounded-2xl sm:rounded-3xl w-[360px] h-[480px] md:w-[420px] md:h-[560px] lg:w-[480px] lg:h-[640px] relative overflow-hidden scroll-smooth">
                                {employees.map((employee, index) => (
                                    <img
                                        src={employee.image}
                                        key={index}
                                        id={`employee-image-${index}`}
                                        className={`w-full object-cover h-full rounded-2xl sm:rounded-3xl none-select lg:mr-[-40px] absolute top-0 left-0 transition-all duration-700 ${index === activeEmployee ? "opacity-100" : "opacity-0"}`}
                                        alt=""
                                    />
                                ))}

                                <GlassElement
                                    className="flex flex-col justify-center z-10 items-center border border-gray-200 person bg-opacity-30 backdrop-blur-md rounded-xl sm:rounded-2xl h-[70px] sm:h-[80px] lg:h-[100px] w-[calc(100%-32px)] sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)] text-center absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8"
                                    width={lg ? 420 : 320}
                                    height={80}
                                    radius={31}
                                    depth={5}
                                    blur={5}
                                    chromaticAberration={1}
                                >
                                    <div
                                        className="absolute top-0 left-0 h-full flex justify-center items-center cursor-pointer"
                                        onClick={() => handleEmployeeChange(activeEmployee - 1)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="40"
                                            height="40"
                                            viewBox="0 0 40 40"
                                            fill="none"
                                        >
                                            <path
                                                d="M23.3333 11.6667L15 20"
                                                stroke="white"
                                                strokeWidth="3.33333"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M15 20L23.3333 28.3333"
                                                stroke="white"
                                                strokeWidth="3.33333"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <div
                                        className="absolute top-0 right-0 h-full flex justify-center items-center cursor-pointer"
                                        onClick={() => handleEmployeeChange(activeEmployee + 1)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="40"
                                            height="40"
                                            viewBox="0 0 40 40"
                                            fill="none"
                                        >
                                            <path
                                                d="M16.6667 28.3333L25 20"
                                                stroke="white"
                                                strokeWidth="3.33333"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M25 20L16.6667 11.6667"
                                                stroke="white"
                                                strokeWidth="3.33333"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>

                                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-1 sm:mb-2">
                                        {employees[activeEmployee].name}
                                    </h3>
                                    <div
                                        className="text-purple-200 flex gap-2 sm:gap-3 text-sm sm:text-base lg:text-lg">
                                        {"<"}
                                        <span className="text-[#00C8FF]">
                                            {employees[activeEmployee].position}
                                        </span>
                                        {">"}
                                    </div>
                                </GlassElement>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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