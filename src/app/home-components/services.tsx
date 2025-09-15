import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import {useEffect, useRef, useState} from "react";
import {getAxios, photoUrl} from "@/api/api.functions";
import {textAnimation, textAnimationTl} from "@/app/functions/text.animation";

export default function Services() {
    const t = useTranslations('services');
    const [height, setHeight] = useState(0);
    const [services, setServices] = useState([]);

    // refs
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        getAxios('services').then((res: any) => {
            setServices(res.data);
        });
    }, []);

    useGSAP(() => {
        setTimeout(() => {
            const panelsContainer = document.querySelector("#services-container");
            setHeight(panelsContainer.scrollWidth - window.innerWidth + panelsContainer.scrollHeight + 440);

            const panels = gsap.utils.toArray("#services-container .service");
            gsap.to(panels, {
                x: () => -1 * (panelsContainer.scrollWidth - innerWidth),
                ease: "none",
            });
        }, 1000);

    }, [services]);

    useGSAP(() => {
        const tl = textAnimation(titleRef.current, elementRef.current);
        textAnimationTl(descriptionRef.current, elementRef.current, tl);
    });

    return (
        <section
            id="services"
            ref={elementRef}
            className={`bg-black flex justify-center w-full pt-20 sm:pt-30 md:pt-40 relative`}
            style={{ height: `${height}px` }}
        >
            <div
                className="absolute top-20 sm:top-40 md:top-120 left-4 sm:left-6 md:left-10 w-[300px] h-[400px] sm:w-[500px] sm:h-[600px] md:w-[700px] md:h-[800px] lg:w-[900px] lg:h-[1000px] z-0">
                <img
                    src="images/background/background.svg"
                    className="w-3/4 absolute background-1"
                    alt=""
                />
            </div>

            <div className="w-full flex flex-col items-center px-6 lg:px-8 relative">
                <div className="sticky top-5 left-10 container mb-12 sm:mb-16 lg:mb-20">
                    <h2 ref={titleRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 text-white">
                        {t('title')} <span className="text-[#929292]">— {t('subtitle')}</span>
                    </h2>
                    <span ref={descriptionRef} className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-[#929292]">
                        {t('description')}
                    </span>
                </div>

                <div
                    id="services-container"
                    className="services-container w-full flex overflow-hidden pb-6 sm:pb-8 lg:pb-10 gap-4 sm:gap-6 md:gap-8 lg:gap-12"
                >
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group service card-group relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[730px] flex items-end w-[280px] sm:w-[320px] md:w-[380px] lg:w-[465px] min-w-[280px] sm:min-w-[320px] md:min-w-[380px] lg:min-w-[465px] rounded-xl sm:rounded-2xl hover:bg-opacity-90 bg-opacity-60`}
                        >
                            <div
                                className="absolute top-0 w-full h-[320px] sm:h-[400px] md:h-[480px] lg:h-[600px] flex justify-center items-center z-10">
                                <img
                                    src={photoUrl(service.photo)}
                                    className="grayscale group-hover:grayscale-0 transition-all duration-300 w-2/3 h-full object-cover"
                                    alt=""
                                />
                            </div>

                            <div
                                className="card-shadow p-4 w-full sm:p-6 lg:p-8 h-[280px] sm:h-[320px] md:h-[380px] lg:h-[465px] rounded-xl sm:rounded-2xl flex flex-col justify-end bg-[#0C0C0C99] group-hover:bg-[#0C0C0CE5] transition-all duration-300">
                                <div>
                                    <h3
                                        className={`text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 lg:mb-4 text-[#929292] group-hover:text-gray-200 transition-all duration-300`}
                                    >
                                        {service.title}
                                    </h3>
                                    <p
                                        className={`text-xs sm:text-sm mb-2 sm:mb-3 lg:mb-4 text-[#929292] group-hover:text-gray-200 transition-all duration-300`}
                                    >
                                        {service.description}
                                    </p>
                                    <p
                                        className={`text-right text-xs sm:text-sm text-[#929292] group-hover:text-gray-200 transition-all duration-300`}
                                    >
                                        {service.price}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
