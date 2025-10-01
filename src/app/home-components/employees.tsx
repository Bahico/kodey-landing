import {GlassElement} from "@/app/components/GlassElement/GlassElement";
import {useEffect, useRef, useState} from "react";
import {useTranslations} from "next-intl";
import {nowSize} from "@/app/functions/now-size";
import {useGSAP} from "@gsap/react";
import {textAnimation, textAnimationTl} from "@/app/functions/text.animation";

export function Employees() {
    const {lg} = nowSize();
    const t = useTranslations('employees');
    const [activeEmployee, setActiveEmployee] = useState(0);

    // refs
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const infoRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const elementRef = useRef<HTMLDivElement>(null);

    const employees = [
        {
            name: "karen",
            position: "Back-end developer",
            image: "/images/employees/IMG_8413.JPG",
        },
        {
            name: "kristina",
            position: "Project manager",
            image: "/images/employees/photo_2025-09-29_23-19-32.jpg",
        },
        {
            name: "laziz",
            position: "Founder",
            image: "/images/employees/photo_2025-09-29_23-19-44.jpg",
        },
        {
            name: "farrux",
            position: "Frontend Developer",
            image: "/images/employees/photo_2025-09-29_23-19-36.jpg",
        },
        {
            name: "viktor",
            position: "UX/UI Designer",
            image: "/images/employees/photo_2025-09-29_23-19-41.jpg",
        },
    ];

    useGSAP(() => {
        const tl = textAnimation(titleRef.current, elementRef.current);
        textAnimationTl(descriptionRef.current, tl, 0.2);
        textAnimationTl(infoRef.current, tl, 0.2);
        textAnimationTl(buttonRef.current, tl, 0.2);
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveEmployee((currentActiveIndex) =>
                (currentActiveIndex + 1) % employees.length
            );
        }, 5000);

        // Cleanup the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);

    const handleEmployeeChange = (index: number) => {
        if (index < 0) {
            setActiveEmployee(employees.length - 1);
        } else if (index >= employees.length) {
            setActiveEmployee(0);
        } else {
            setActiveEmployee(index);
        }
    };

    return (
        <>
            <section
                id="dark-section"
                ref={elementRef}
                className=" text-white w-full flex justify-center rounded-t-[30px] sm:rounded-t-[40px] md:rounded-t-[50px] lg:rounded-t-[60px] relative right-background"
            >
                <div
                    className="absolute top-20 sm:top-40 md:top-60 left-4 sm:left-6 md:left-10 w-[300px] h-[400px] sm:w-[500px] sm:h-[600px] md:w-[700px] md:h-[800px] lg:w-[900px] lg:h-[1000px] z-0">
                    <img
                        src="/images/background/background.png"
                        className="w-3/4 absolute background-1"
                        alt=""
                    />
                </div>

                <div className="container mt-20 sm:mt-30 md:mt-40 flex flex-col items-center z-10 px-4 sm:px-6 lg:px-8">
                    <div
                        className="w-full flex flex-col lg:flex-row justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
                        <div className="flex-1">
                            <h2 ref={titleRef}
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 flex">
                                {t('title1')}
                                <span className="text-[#929292] ml-2">{t('title2')}</span>
                            </h2>
                            <span ref={descriptionRef}
                                  className="text-lg sm:text-xl block md:text-2xl text-[#929292] mb-6 sm:mb-8 lg:mb-12">
                            {t('description')}
                        </span>
                            <span ref={infoRef}
                                  className="text-base block sm:text-lg md:text-xl leading-relaxed text-white mb-8 sm:mb-12 lg:mb-16 pl-0 sm:pl-8 lg:pl-16">
                            {t('description1')}
                                <br/>
                            <br/>
                                {t('description2')}
                                <br/>
                            <br/>
                                {t('description3')}
                        </span>
                            <button
                                ref={buttonRef}
                                className="btn-gradient sm:ml-8 lg:ml-16 text-white px-6 sm:px-8 lg:px-20 py-3 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg lg:text-xl font-medium flex items-center gap-2 sm:gap-4 hover:shadow-lg transition-shadow w-full sm:w-auto justify-center lg:justify-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="23" viewBox="0 0 28 23"
                                     fill="none">
                                    <path
                                        d="M0.438252 10.674C3.24385 9.1286 6.37565 7.83876 9.30185 6.54236C14.3361 4.41896 19.3903 2.33236 24.4955 0.389758C25.4887 0.0587785 27.2735 -0.264861 27.4485 1.20708C27.3526 3.29068 26.9584 5.36208 26.688 7.43348C26.0018 11.9887 25.2085 16.5283 24.435 21.0685C24.1685 22.5808 22.274 23.3637 21.0618 22.3959C18.1486 20.4281 15.213 18.4795 12.337 16.4661C11.3949 15.5088 12.2686 14.1341 13.1099 13.4505C15.5093 11.0859 18.0539 9.07686 20.3279 6.59006C20.9413 5.10884 19.1289 6.35716 18.5311 6.73969C15.2463 9.00329 12.0419 11.4051 8.57869 13.3945C6.80969 14.3683 4.74789 13.5361 2.97969 12.9927C1.39431 12.3363 -0.928908 11.675 0.438092 10.6741L0.438252 10.674Z"
                                        fill="white"/>
                                </svg>
                                {t('btn')}
                            </button>
                        </div>

                        <div className="flex-1 flex justify-center lg:justify-end pr-0 lg:pr-20 lg:order-last">
                            <div
                                className="rounded-2xl group-black group sm:rounded-3xl w-[360px] h-[480px] md:w-[420px] md:h-[560px] lg:w-[480px] lg:h-[640px] relative overflow-hidden scroll-smooth">
                                {employees.map((employee, index) => (
                                    <img
                                        src={employee.image}
                                        key={index}
                                        id={`employee-image-${index}`}
                                        className={`w-full grayscale group-hover:grayscale-0 black-item object-cover h-full rounded-2xl sm:rounded-3xl none-select lg:mr-[-40px] absolute top-0 left-0 transition-all duration-700 ${index === activeEmployee ? "opacity-100" : "opacity-0"}`}
                                        alt=""
                                    />
                                ))}

                                <div
                                    className="backdrop-blur-xl flex flex-col justify-center z-10 items-center border border-gray-200 person bg-opacity-30 rounded-2xl md:rounded-[31px] h-[100px] w-[325px] lg:w-[420px] text-center absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8"
                                >
                                    <div
                                        className="absolute top-0 left-4 h-full flex justify-center items-center cursor-pointer"
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
                                        className="absolute top-0 right-4 h-full flex justify-center items-center cursor-pointer"
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

                                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">
                                        {t(employees[activeEmployee].name)}
                                    </h3>
                                    <div
                                        className="text-purple-200 flex gap-2 sm:gap-3 text-sm sm:text-base lg:text-lg">
                                        {"<"}
                                        <span className="text-[#00C8FF]">
                                            {employees[activeEmployee].position}
                                        </span>
                                        {">"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}