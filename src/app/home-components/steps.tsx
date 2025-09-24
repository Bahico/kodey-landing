'use client';
import {useGSAP} from "@gsap/react";
import {GlassElement} from "../components/GlassElement/GlassElement";
import gsap from "gsap";
import {useEffect, useRef, useState} from "react";
import {nowSize} from "@/app/functions/now-size";
import {useTranslations} from 'next-intl';
import "./steps.css";
import {textAnimation, textAnimationTl} from "@/app/functions/text.animation";

export default function Steps() {
    const [activeStep, setActiveStep] = useState(0);
    const t = useTranslations('steps');
    const {md} = nowSize();

    // refs
    const titleRef = useRef<HTMLDivElement>(null);
    const descriptionRef = useRef<HTMLDivElement>(null);
    const elementRef = useRef<HTMLDivElement>(null);

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


    useGSAP(() => {
        const tl = textAnimation(titleRef.current, elementRef.current);
        textAnimationTl(descriptionRef.current, tl);

        setTimeout(() => {
            for (let i = 0; i < steps.length; i++) {
                gsap.to(".scroller", {
                    // xPercent: -100 * (steps.length - 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: `#step-${i}`,
                        endTrigger: `#step-${i + 1}`,
                        start: "10% 180",
                        end: "center center",
                        scroller: "#trigger-1",
                        toggleActions: "play reverse play reverse",
                        scrub: 1,
                        snap: 1 / (steps.length - 1),
                        onToggle: (self) => {
                            if (self.isActive) {
                                setActiveStep(i);
                                scrollTo(i);
                            }
                        }
                    },
                    duration: 0.5,
                    stagger: 0.3,
                    immediateRender: false,
                });
            }
        }, 100);

        // Mobile scroll synchronization
        const setupMobileScrollSync = () => {
            if (md) return; // Only run on mobile

            const stepsIcons = document.querySelector('.steps-icons') as HTMLElement;
            const trigger1 = document.getElementById('trigger-1');

            if (stepsIcons && trigger1) {
                let isScrollingSyncFromIcons = false;
                let isScrollingSyncFromTrigger = false;

                const handleStepsIconsScroll = () => {
                    if (isScrollingSyncFromTrigger) return;
                    isScrollingSyncFromIcons = true;

                    const scrollPercentage = stepsIcons.scrollTop / (stepsIcons.scrollHeight - stepsIcons.clientHeight);
                    const trigger1ScrollTop = scrollPercentage * (trigger1.scrollHeight - trigger1.clientHeight);

                    trigger1.scrollTo({
                        top: trigger1ScrollTop,
                        behavior: 'auto'
                    });

                    setTimeout(() => {
                        isScrollingSyncFromIcons = false;
                    }, 50);
                };

                const handleTrigger1Scroll = () => {
                    if (isScrollingSyncFromIcons) return;
                    isScrollingSyncFromTrigger = true;

                    const scrollPercentage = trigger1.scrollTop / (trigger1.scrollHeight - trigger1.clientHeight);
                    const stepsIconsScrollTop = scrollPercentage * (stepsIcons.scrollHeight - stepsIcons.clientHeight);

                    stepsIcons.scrollTo({
                        top: stepsIconsScrollTop,
                        behavior: 'smooth',
                        // @ts-ignore
                        block: "nearest"
                    });

                    setTimeout(() => {
                        isScrollingSyncFromTrigger = false;
                    }, 50);
                };

                stepsIcons.addEventListener('scroll', handleStepsIconsScroll);
                trigger1.addEventListener('scroll', handleTrigger1Scroll);

                return () => {
                    stepsIcons.removeEventListener('scroll', handleStepsIconsScroll);
                    trigger1.removeEventListener('scroll', handleTrigger1Scroll);
                };
            }
        };

        const timeoutId = setTimeout(() => {
            setupMobileScrollSync();
        }, 300);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [md]);

    const scrollTo = (step: number) => {
        // const stepElement = document.getElementById(`step-image-${step}`);
        // if (stepElement) {
        //     stepElement.scrollIntoView({
        //         behavior: "smooth",
        //         block: "nearest"
        //     });
        // }
    }

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
                    {/* Timeline Steps */}
                    <div
                        className="absolute top-0 md:top-10 z-30 pointer-events-none left-0 w-full md:w-2/4 h-[50px] md:h-1/2 scroll-smoothly rotate-180"></div>
                    <div
                        id="trigger-1"
                        className="snap-mandatory snap-y h-[290px] lg:h-[450px] flex flex-col items-center overflow-y-scroll scrollbar-hide w-full relative z-20"
                    >
                        <div className="snap-center relative w-full flex mb-24 sm:mb-28 lg:mb-36"
                             id="trigger-padding"></div>
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                id={`step-${index}`}
                                className="snap-center scroll-item relative w-3/4 container lg:pr-[30%] mb-6 sm:mb-16 lg:mb-20"
                            >
                                <div
                                    className={`text-xl flex items-center gap-2 sm:text-2xl md:text-3xl select-none lg:text-4xl font-semibold mb-2 sm:mb-3 lg:mb-4 ${activeStep === index ? "primary-gradient lg:text-5xl" : "text-gray-500"}`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width={md ? "80" : "40"}
                                         height={md ? "80" : "40"} viewBox="0 0 80 80" fill="none"
                                         className={`max-w-0 overflow-hidden transition-all duration-700 ${activeStep === index ? "max-w-full" : ""}`}>
                                        <path d="M33.3333 56.6667L50 40.0001" stroke="white" strokeWidth="6.66667"
                                              strokeLinecap="round" strokeLinejoin="round"
                                              className="transition-all duration-700"/>
                                        <path d="M33.3333 56.6667L50 40.0001" stroke="url(#paint0_radial_2226_743)"
                                              strokeWidth="6.66667" strokeLinecap="round" strokeLinejoin="round"
                                              className="transition-all duration-700"/>
                                        <path d="M50 40L33.3333 23.3333" stroke="white" strokeWidth="6.66667"
                                              strokeLinecap="round" strokeLinejoin="round"
                                              className="transition-all duration-700"/>
                                        <path d="M50 40L33.3333 23.3333" stroke="url(#paint1_radial_2226_743)"
                                              strokeWidth="6.66667" strokeLinecap="round" strokeLinejoin="round"
                                              className="transition-all duration-700"/>
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
                                    className={`text-md sm:text-sm select-none leading-relaxed w-[300px] md:w-[550px] ${activeStep === index ? "text-white" : "text-gray-400"}`}
                                >
                                    {step.description}
                                </div>
                            </div>
                        ))}

                        <div
                            id="step-7"
                            className="snap-center relative w-full flex mb-16 sm:mb-22 lg:mb-22 scroll-item container lg:pr-[30%]"
                        ></div>
                    </div>

                    <div className="absolute top-[250px] md:bottom-14 z-20 pointer-events-none left-0 w-full md:w-2/4 h-[50px] md:h-1/2 scroll-smoothly"></div>


                    {/* Interactive Carousel */}
                    <StepImage steps={steps}/>
                </div>
            </div>
        </section>
    );
}

function StepImage({steps}: {
    steps: { title: string; description: string; image: string }[];
    isScrolling?: boolean;
}) {
    const {lg} = nowSize();

    if (lg)
        return (
            <div className="flex absolute top-0 bottom-0 justify-center items-center h-full z-10 w-full">
                <div className="container flex justify-end relative mr-20">
                    <GlassElement
                        className="relative flex-col steps-icons scroller snap-mandatory snap-y w-[549px] h-[568px] z-10 rounded-full overflow-y-auto border border-gray-600 scrollbar-hide"
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
                                className="w-full snap-start snap-always h-[568px] flex justify-center items-center"
                                id={`step-image-${index}`}
                            >
                                <img
                                    src={step.image}
                                    alt=""
                                    className="w-[90%] object-cover"
                                />
                            </div>
                        ))}
                    </GlassElement>
                    <img
                        src="images/background/background.png"
                        alt=""
                        className="absolute flex top-[-275px] right-[-275px] w-[1100px] h-[1100px] z-0"
                    />
                </div>
            </div>
        );
    return (
        <div className="flex justify-center items-center relative mb-20 mt-10">
            <div
                className="relative steps-icons scroller w-[249px] snap-mandatory snap-y h-[268px] z-10 rounded-full overflow-y-auto scrollbar-hide border border-gray-500"
                // width={249}
                // height={268}
                // radius={300}
                // depth={10}
                // blur={0}
                // chromaticAberration={0}
            >
                {steps.map((step, index) => (
                    <img
                        key={index}
                        src={step.image}
                        id={`step-image-${index}`}
                        alt=""
                        className="w-full snap-start snap-always object-contain h-[268px]"
                    />
                ))}
            </div>
            <img
                src="images/background/background.png"
                alt=""
                className="absolute flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] z-0"
            />
        </div>
    );
}
