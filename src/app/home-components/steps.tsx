'use client';
import {GlassElement} from "../components/GlassElement/GlassElement";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from "gsap";
import {useEffect, useRef, useState} from "react";
import {nowSize} from "@/app/functions/now-size";
import {useTranslations} from 'next-intl';
import "./steps.css";
import {textAnimation, textAnimationTl} from "@/app/functions/text.animation";


export default function Steps() {
    const [activeStep, setActiveStep] = useState(0);
    const t = useTranslations('steps');
    const {md, lg} = nowSize();

    // refs
    const titleRef = useRef<HTMLDivElement>(null);
    const descriptionRef = useRef<HTMLDivElement>(null);
    const elementRef = useRef<HTMLDivElement>(null);
    const scrollTriggersRef = useRef<ScrollTrigger[]>([]);
    const isScrollingRef = useRef(false);

    const steps = [
        {
            title: t('step1.title'),
            description: t('step1.description'),
            image: "/images/home/5ef3e749c7570d2f0dbd733d4b1f59e6037e1402.png",
        },
        {
            title: t('step2.title'),
            description: t('step2.description'),
            image: "/images/home/Frame 1337.png",
        },
        {
            title: t('step3.title'),
            description: t('step3.description'),
            image: "/images/home/Frame 1345.png",
        },
        {
            title: t('step4.title'),
            description: t('step4.description'),
            image: "/images/home/Frame 1314.png",
        },
        {
            title: t('step5.title'),
            description: t('step5.description'),
            image: "/images/home/Frame 1346.png",
        },
        {
            title: t('step6.title'),
            description: t('step6.description'),
            image: "/images/home/Frame 1347.png",
        },
        {
            title: t('step7.title'),
            description: t('step7.description'),
            image: "/images/home/Frame 1348.png",
        },
    ];

    const scrollToImage = (index: number) => {
        if (isScrollingRef.current) return;

        const isMd = window.innerWidth > 768;
        const stepsIcons = document.querySelector(isMd ? '.steps-icons' : '#trigger-2') as HTMLElement;
        const imageElement = document.getElementById(`step-image-${isMd ? 'md' : 'sm'}-${index}`);

        if (imageElement && stepsIcons) {
            isScrollingRef.current = true;
            // const containerHeight = stepsIcons.clientHeight;
            // const imageHeight = imageElement.clientHeight;
            // const imageTop = imageElement.offsetTop;
            //
            // const scrollPosition = imageTop - (containerHeight / 2) + (imageHeight / 2);
            //
            // stepsIcons.scrollTo({
            //     top: scrollPosition,
            //     behavior: "smooth"
            // });

            stepsIcons.scrollTo({
                top: imageElement.offsetTop,
                behavior: 'smooth',
                // @ts-ignore
                block: "nearest"
            });

            setTimeout(() => {
                isScrollingRef.current = false;
            }, 600);
        }
    };

    const scrollToStep = (index: number) => {
        if (isScrollingRef.current) return;

        const stepsIcons = document.querySelector('#trigger-1') as HTMLElement;
        const imageElement = document.getElementById(`step-${index}`);

        if (imageElement && stepsIcons) {
            isScrollingRef.current = true;
            // const containerHeight = stepsIcons.clientHeight;
            // const imageHeight = imageElement.clientHeight;
            // const imageTop = imageElement.offsetTop;
            //
            // const scrollPosition = imageTop - (containerHeight / 2) + (imageHeight / 2);

            // stepsIcons.scrollTo({
            //     top: scrollPosition,
            //     behavior: "smooth"
            // });
            stepsIcons.scrollTo({
                top: imageElement.offsetTop,
                behavior: 'smooth',
                // @ts-ignore
                block: "nearest"
            });

            setTimeout(() => {
                isScrollingRef.current = false;
            }, 600);
        }
    };

    useEffect(() => {
        const tl = textAnimation(titleRef.current, elementRef.current);
        textAnimationTl(descriptionRef.current, tl);

        // Clear old scroll triggers
        scrollTriggersRef.current.forEach(st => st.kill());
        scrollTriggersRef.current = [];

        const trigger1 = document.getElementById('trigger-1');
        const trigger2 = document.getElementById('trigger-2');

        if (!trigger1 || !trigger2) return;

        const ctx = gsap.context(() => {
            steps.forEach((_, i) => {
                const stepElement = document.getElementById(`step-${i}`);
                const imageElement = document.getElementById(`step-image-sm-${i}`);

                const isMd = window.innerWidth > 768;
                if (!stepElement) return;

                const st = ScrollTrigger.create({
                    trigger: stepElement,
                    scroller: trigger1,
                    start: "20% 60%",
                    end: "bottom 40%",
                    markers: true,
                    onEnter: () => {
                        if (isScrollingRef.current) return;
                        setActiveStep(i);
                        scrollToImage(i);
                    },
                    onEnterBack: () => {
                        if (isScrollingRef.current) return;
                        setActiveStep(i);
                        scrollToImage(i);
                    },
                });

                if (!isMd) {
                    const img = ScrollTrigger.create({
                        trigger: imageElement,
                        scroller: trigger2,
                        start: "20% 60%",
                        end: "bottom 40%",
                        markers: true,
                        onEnter: () => {
                            if (isScrollingRef.current) return;
                            scrollToStep(i);
                            setActiveStep(i);
                        },
                        onEnterBack: () => {
                            if (isScrollingRef.current) return;
                            scrollToStep(i);
                            setActiveStep(i);
                        }
                    });
                    scrollTriggersRef.current.push(img);
                }

                scrollTriggersRef.current.push(st);
            });

            // ScrollTrigger.refresh();
        });

        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 1000);

        return () => {
            ctx.revert()
            scrollTriggersRef.current.forEach(st => st.kill());
            scrollTriggersRef.current = [];
        };
    });

    return (
        <section
            id="steps"
            className="bg-black text-white flex justify-center pt-20 sm:pt-30 md:pt-40"
            ref={elementRef}
        >
            <div className="flex w-full items-center flex-col px-4 sm:px-6 lg:px-8">
                <div className="container mb-12 sm:mb-16 lg:mb-20">
                    <h2 ref={titleRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                        {t('title')} <span className="text-[#929292]">{t('subtitle')}</span>
                    </h2>
                    <span ref={descriptionRef}
                          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-[#929292]">
                        {t('description')}
                    </span>
                </div>

                <div className="flex flex-col gap-10 w-full lg:h-150 h-auto justify-center relative">
                    {/* Gradient Overlays */}
                    <div
                        className="absolute top-0 md:top-10 z-30 pointer-events-none left-0 w-full md:w-2/4 h-[80px] md:h-1/2 scroll-smoothly rotate-180"></div>

                    {/* Timeline Steps */}
                    <div
                        id="trigger-1"
                        className="h-[290px] lg:h-[450px] flex flex-col items-center overflow-y-scroll scrollbar-hide w-full relative z-20"
                        style={{scrollBehavior: 'smooth'}}
                    >
                        <div className="relative w-full flex mb-32 sm:mb-36 lg:mb-40" id="trigger-padding"></div>

                        {steps.map((step, index) => (
                            <div
                                key={index}
                                id={`step-${index}`}
                                className="relative w-3/4 container lg:pr-[30%] mb-12 sm:mb-20 lg:mb-28 min-h-[150px] flex flex-col justify-center"
                            >
                                <div
                                    className={`text-xl flex items-center gap-2 sm:text-2xl md:text-3xl select-none lg:text-4xl font-semibold mb-2 sm:mb-3 lg:mb-4 transition-all duration-500 ${
                                        activeStep === index ? "primary-gradient lg:text-5xl" : "text-gray-500"
                                    }`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={md ? "80" : "40"}
                                        height={md ? "80" : "40"}
                                        viewBox="0 0 80 80"
                                        fill="none"
                                        className={`transition-all duration-700 ${
                                            activeStep === index ? "opacity-100 scale-100" : "opacity-0 scale-50 w-0"
                                        }`}
                                    >
                                        <path d="M33.3333 56.6667L50 40.0001" stroke="white" strokeWidth="6.66667"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M33.3333 56.6667L50 40.0001" stroke="url(#paint0_radial_2226_743)"
                                              strokeWidth="6.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M50 40L33.3333 23.3333" stroke="white" strokeWidth="6.66667"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M50 40L33.3333 23.3333" stroke="url(#paint1_radial_2226_743)"
                                              strokeWidth="6.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                        <defs>
                                            <radialGradient id="paint0_radial_2226_743" cx="0" cy="0" r="1"
                                                            gradientTransform="matrix(-32.4573 -13.1155 15.5965 -25.4819 65.3175 54.6992)"
                                                            gradientUnits="userSpaceOnUse">
                                                <stop offset="0.44" stopColor="#00C8FF"/>
                                                <stop offset="1" stopColor="#004DFF"/>
                                            </radialGradient>
                                            <radialGradient id="paint1_radial_2226_743" cx="0" cy="0" r="1"
                                                            gradientTransform="matrix(-32.4573 -13.1155 15.5965 -25.4819 65.3175 38.0324)"
                                                            gradientUnits="userSpaceOnUse">
                                                <stop offset="0.44" stopColor="#00C8FF"/>
                                                <stop offset="1" stopColor="#004DFF"/>
                                            </radialGradient>
                                        </defs>
                                    </svg>
                                    {step.title}
                                </div>
                                <div
                                    className={`text-md sm:text-base md:text-lg select-none leading-relaxed w-[280px] sm:w-[400px] md:w-[550px] transition-all duration-500 ${
                                        activeStep === index ? "text-white opacity-100" : "text-gray-400 opacity-60"
                                    }`}
                                >
                                    {step.description}
                                </div>
                            </div>
                        ))}

                        <div className="relative w-full flex mb-32 sm:mb-36 lg:mb-40"></div>
                    </div>

                    <div className="absolute top-[250px] md:bottom-14 z-20 pointer-events-none left-0 w-full md:w-2/4 h-[80px] md:h-1/2 scroll-smoothly"></div>

                    {/* Interactive Carousel */}
                    <StepImage steps={steps} activeStep={activeStep} />
                </div>
            </div>
        </section>
    );
}

function StepImage({steps, activeStep}: {
    steps: { title: string; description: string; image: string }[];
    activeStep: number;
}) {
        return (
            <>
                <div className="hidden md:flex absolute top-0 bottom-0 justify-center items-center h-full z-10 w-full pointer-events-none">
                    <div className="container flex justify-end relative mr-20">
                        <GlassElement
                            className="relative flex-col steps-icons w-[549px] h-[568px] z-10 rounded-full overflow-y-auto border border-gray-600 scrollbar-hide pointer-events-auto"
                            width={549}
                            height={568}
                            radius={300}
                            depth={20}
                            blur={1}
                            chromaticAberration={0}
                        >
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className="w-full h-[568px] flex justify-center items-center flex-shrink-0"
                                    id={`step-image-md-${index}`}
                                >
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="w-[90%] object-cover transition-opacity duration-500"
                                        style={{
                                            opacity: activeStep === index ? 1 : 0.4
                                        }}
                                    />
                                </div>
                            ))}
                        </GlassElement>
                        <img
                            src="/images/background/background.png"
                            alt=""
                            className="absolute flex top-[-275px] right-[-275px] w-[1100px] h-[1100px] z-0 pointer-events-none"
                        />
                    </div>
                </div>

                <div className="flex md:hidden justify-center items-center relative mb-20 mt-10">
                    <div
                        className="relative w-[268px] h-[268px] z-10 rounded-full overflow-y-auto scrollbar-hide border border-gray-500"
                        id="trigger-2"
                        style={{scrollBehavior: 'smooth'}}
                    >
                        {steps.map((step, index) => (
                            <img
                                key={index}
                                src={step.image}
                                id={`step-image-sm-${index}`}
                                alt={step.title}
                                className="w-full object-contain min-h-[268px] h-[268px] flex-shrink-0 border-0 transition-opacity duration-500"
                                style={{
                                    opacity: activeStep === index ? 1 : 0.4
                                }}
                            />
                        ))}
                    </div>
                    <img
                        src="/images/background/background.png"
                        alt=""
                        className="absolute flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] z-0"
                    />
                </div>
            </>
        )
}