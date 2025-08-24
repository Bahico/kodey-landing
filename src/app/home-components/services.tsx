export default function Services() {

    const services = [
        {
            title: "Telegram-бот",
            description: "Автоматизируем ваши процессы с помощью кастомного Telegram-бота: от простых чат-ответов до интеграции с CRM и API.",
            price: "от XXX XXX сум",
            active: true
        },
        {
            title: "Landing Page",
            description: "Создаём привлекательные лендинги, которые конвертируют посетителей в клиентов. Дизайн, адаптивная верстка, настройка аналитики.",
            price: "от XXX XXX сум",
            active: false
        },
        {
            title: "Web-сайт",
            description: "Полноценные сайты для бизнеса, портфолио или интернет-магазинов. Под ключ, с современным дизайном и SEO-настройками.",
            price: "от XXX XXX сум",
            active: false
        },
        {
            title: "Мобильное приложение",
            description: "Разрабатываем мобильные приложения для iOS и Android с нуля. UX/UI, программирование, тестирование и публикация в сторах.",
            price: "от XXX XXX сум",
            active: false
        },
        {
            title: "Деплой Telegram-бота",
            description: "Развёртывание вашего Telegram-бота на сервере или облаке. Настройка, тестирование и запуск без сбоев.",
            price: "от XXX XXX сум",
            active: false
        },
        {
            title: "UI / UX Дизайн",
            description: "Проектируем удобные и красивые интерфейсы для веба и мобильных приложений. Анализ, прототипирование и дизайн в Figma.",
            price: "от XXX XXX сум",
            active: false
        }
    ];

    return (
        <section className="bg-black flex justify-center w-full pt-40">
            <div className="container">
                <div className="mb-20">
                    <h2 className="text-6xl font-bold mb-8 text-white">
                        Digital <span className="text-gray-400">— инструментарий</span>
                    </h2>
                    <p className="text-3xl font-light text-gray-400">
                        Всё, что мы умеем — и умеем хорошо
                    </p>
                </div>

                <div className="flex overflow-x-auto pb-10 gap-12 scrollbar-hide">
                    {services.map((service, index) => (
                        <div key={index} className={`group relative h-[730px] flex items-end w-[465px] min-w-[465px] rounded-2xl ${service.active ? 'bg-black bg-opacity-90' : 'bg-black bg-opacity-60'}`}>
                            <div className="absolute top-0 w-full h-[600px] flex justify-center items-center z-10">
                                <img src="images/home/60b300101d6e7d385987432f11adc9d89f983db0.png" className="grayscale group-hover:grayscale-0 transition-all duration-300 w-2/3 h-full object-contain" alt="" />
                            </div>

                            <div className="flex flex-col justify-end p-8 h-[465px] rounded-2xl flex flex-col justify-between bg-[#0C0C0C99] group-hover:bg-[#0C0C0CE5] transition-all duration-300 card-body">
                                <div>
                                    <h3 className={`text-2xl font-semibold mb-4 text-gray-500 group-hover:text-gray-200 transition-all duration-300`}>
                                        {service.title}
                                    </h3>
                                    <p className={`text-sm mb-4 text-gray-400 group-hover:text-gray-200 transition-all duration-300`}>
                                        {service.description}
                                    </p>
                                    <p className={`text-right text-gray-400 group-hover:text-gray-200 transition-all duration-300`}>
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