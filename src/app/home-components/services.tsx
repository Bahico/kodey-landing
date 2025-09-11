import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";

export default function Services() {
    const t = useTranslations('services');
    const services = [
        {
            title: "Telegram-бот",
            description:
                "Автоматизируем ваши процессы с помощью кастомного Telegram-бота: от простых чат-ответов до интеграции с CRM и API.",
            price: "от XXX XXX сум",
            active: true,
            image: 'bot1.png'
        },
        {
            title: "Landing Page",
            description:
                "Создаём привлекательные лендинги, которые конвертируют посетителей в клиентов. Дизайн, адаптивная верстка, настройка аналитики.",
            price: "от XXX XXX сум",
            active: false,
            image: 'bot3.png'
        },
        {
            title: "Web-сайт",
            description:
                "Полноценные сайты для бизнеса, портфолио или интернет-магазинов. Под ключ, с современным дизайном и SEO-настройками.",
            price: "от XXX XXX сум",
            active: false,
            image: 'bot4.png'
        },
        {
            title: "Мобильное приложение",
            description:
                "Разрабатываем мобильные приложения для iOS и Android с нуля. UX/UI, программирование, тестирование и публикация в сторах.",
            price: "от XXX XXX сум",
            active: false,
            image: 'bot5.png'
        },
        {
            title: "Деплой Telegram-бота",
            description:
                "Развёртывание вашего Telegram-бота на сервере или облаке. Настройка, тестирование и запуск без сбоев.",
            price: "от XXX XXX сум",
            active: false,
            image: 'bot6.png'
        },
        {
            title: "UI / UX Дизайн",
            description:
                "Проектируем удобные и красивые интерфейсы для веба и мобильных приложений. Анализ, прототипирование и дизайн в Figma.",
            price: "от XXX XXX сум",
            active: false,
            image: 'bot7.png'
        },
    ];

    useGSAP(() => {
        const panels = gsap.utils.toArray("#services-container .service");
        const panelsContainer = document.querySelector("#services-container");

        gsap.to(panels, {
            x: () => -1 * (panelsContainer.scrollWidth - innerWidth),
            ease: "none",
            scrollTrigger: {
                trigger: "#services-container",
                pin: true,
                start: "top top",
                scrub: 1,
                end: () => "+=" + (panelsContainer.scrollWidth - innerWidth)
            }
        });

    })

    return (
        <section
            id="services"
            className="bg-black flex justify-center w-full pt-20 sm:pt-30 md:pt-40 h-[2000px] md:h-[2800px] relative"
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
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 text-white">
                        {t('title')} <span className="text-[#929292]">— {t('subtitle')}</span>
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-[#929292]">
                        {t('description')}
                    </p>
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
                                    src={`/images/bot/${service.image}`}
                                    className="grayscale group-hover:grayscale-0 transition-all duration-300 w-2/3 h-full object-contain"
                                    alt=""
                                />
                            </div>

                            <div
                                className="card-shadow p-4 sm:p-6 lg:p-8 h-[280px] sm:h-[320px] md:h-[380px] lg:h-[465px] rounded-xl sm:rounded-2xl flex flex-col justify-end bg-[#0C0C0C99] group-hover:bg-[#0C0C0CE5] transition-all duration-300">
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
