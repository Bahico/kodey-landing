import { useGSAP } from "@gsap/react";
import { GlassElement } from "../components/GlassElement/GlassElement";
import gsap from "gsap";
import { useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Steps() {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            title: "Принятие запроса",
            description: "Мы внимательно изучаем ваш запрос, чтобы понять цель проекта, ваши ожидания и особенности задачи. Это отправная точка для качественной работы.",
            image: "images/home/5ef3e749c7570d2f0dbd733d4b1f59e6037e1402.png",
        },
        {
            title: "Сбор требований",
            description: "Проводим уточняющие вопросы, интервью или брифинг, чтобы зафиксировать все пожелания, ограничения и специфику будущего продукта.",
            image: "images/home/Frame 1337.png"
        },
        {
            title: "Согласование ТЗ",
            description: "Формируем техническое задание, в котором чётко прописаны этапы, функции и результаты. Согласовываем его с вами перед стартом проекта.",
            image: "images/home/Frame 1345.png"
        },
        {
            title: "Дизайн интерфейса",
            description: "Разрабатываем UX/UI-дизайн, который будет удобен, интуитивен и визуально привлекателен. Создаём прототипы и визуальные решения.",
            image: "images/home/Frame 1314.png",
        },
        {
            title: "Разработка",
            description: "На этом этапе проект оживает — программисты реализуют весь функционал согласно ТЗ и дизайн-макетам.",
            image: "images/home/Frame 1346.png",
        },
        {
            title: "Тестирование",
            description: "Проверяем работу системы на наличие багов, ошибок и недочётов. Убедимся, что всё работает стабильно на разных устройствах и браузерах.",
            image: "images/home/Frame 1347.png",
        },
        {
            title: "Запуск и поддержка",
            description: "Публикуем проект и следим за его корректной работой. Оказываем техническую поддержку, обновления и вносим улучшения по мере необходимости.",
            image: "images/home/Frame 1348.png",
        }
    ];

    useGSAP(() => {
        for (let i = 0; i < steps.length; i++) {
            gsap.to(".scroller", {
                scrollTrigger: {
                    trigger: `#step-${i}`,
                    endTrigger: `#step-${i+1}`,
                    start: "center 300",
                    end: "center bottom",
                    scroller: "#trigger-1",
                    scrub: 0.5
                },
                duration: 0.5,
                scrollTo: `#step-image-${i}`,
                ease: 'power2.out',
                stagger: 0.3,
                immediateRender: false,
                // onToggle: (isActive) => {
                //     // if (isActive) {
                //         setActiveStep(i);
                //     // }
                // }
            })
        }

        ScrollTrigger.addEventListener('scrollStart', () => {
            const currentStep = document.querySelector('.scroller');
            setActiveStep(Math.floor(currentStep?.scrollTop / 540) || 0);
        });

        ScrollTrigger.addEventListener('scrollEnd', () => {
            const currentStep = document.querySelector('.scroller');
            console.log(currentStep?.scrollTop / 473, currentStep?.scrollTop)
            setActiveStep(Math.floor(currentStep?.scrollTop / 474) || 0);
        });
    })

    return (
        <section id="steps" className="bg-black text-white flex justify-center pt-20 sm:pt-30 md:pt-40">
            <div className="flex w-full items-center flex-col px-4 sm:px-6 lg:px-8">
                <div className="container mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8">
                        Маршрут <span className="text-gray-400">в продакшн</span>
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-400">
                        Чёткая система, где каждый шаг двигает к результату
                    </p>
                </div>

                <div className="flex w-full h-200 items-center relative">
                    {/* Timeline Steps */}
                    <div id="trigger-1" className="snap-mandatory snap-y h-60 sm:h-70 lg:h-100 flex flex-col items-center overflow-y-scroll scrollbar-hide w-full relative z-10">
                        <div className="snap-center relative w-full flex mb-24 sm:mb-28 lg:mb-36"></div>
                        {steps.map((step, index) => (
                            <div key={index} id={`step-${index}`} className="snap-center relative w-[1400px] pr-[800px] mb-12 sm:mb-16 lg:mb-20">
                                <div className={`text-xl sm:text-2xl md:text-3xl select-none lg:text-4xl font-semibold mb-2 sm:mb-3 lg:mb-4 ${activeStep === index ? 'text-blue-400' : 'text-gray-500'}`}>
                                    {step.title}
                                </div>
                                <div className={`text-xs sm:text-sm select-none leading-relaxed ${activeStep === index ? 'text-white' : 'text-gray-400'}`}>
                                    {step.description}
                                </div>
                                {index < 6 && (
                                    <div className="absolute left-0 top-12 sm:top-14 lg:top-16 w-px h-8 sm:h-10 lg:h-12 bg-gradient-to-b from-gray-600 to-transparent"></div>
                                )}
                            </div>
                        ))}

                        <div id="step-6" className="snap-center relative w-full flex mb-16 sm:mb-22 lg:mb-32"></div>
                        {/* <div className="snap-center snap-always relative w-full flex snap-start mb-14 sm:mb-18 lg:mb-24"></div> */}
                    </div>

                    {/* Interactive Carousel */}
                    <div className="flex absolute right-1/5 top-0 bottom-0 items-center h-full z-0">
                        <GlassElement
                            className="relative scroller w-[280px] snap-mandatory snap-y h-[290px] sm:w-[400px] sm:h-[415px] md:w-[500px] md:h-[520px] lg:w-[549px] lg:h-[568px] z-10 rounded-full overflow-y-auto scrollbar-hide border border-gray-600 backdrop-blur-sm mx-auto lg:mx-0"
                            width={549}
                            height={568}
                            radius={300}
                            depth={10}
                            blur={0}
                            chromaticAberration={0}
                        >
                            {steps.map((step, index) => (
                                <img key={index} src={step.image} id={`step-image-${index}`} alt="" className="w-full snap-start snap-always h-[568px]" />

                            ))}
                        </GlassElement>
                        <img src="images/background/background1.svg" alt="" className="absolute flex top-[-700px] left-0 w-[8000px] h-[2000px] z-0" />
                    </div>
                </div>
            </div>
        </section>
    );
}