export default function Steps() {

    const steps = [
        {
            title: "Принятие запроса",
            description: "Мы внимательно изучаем ваш запрос, чтобы понять цель проекта, ваши ожидания и особенности задачи. Это отправная точка для качественной работы.",
            active: true
        },
        {
            title: "Сбор требований",
            description: "Проводим уточняющие вопросы, интервью или брифинг, чтобы зафиксировать все пожелания, ограничения и специфику будущего продукта.",
            active: false
        },
        {
            title: "Согласование ТЗ",
            description: "Формируем техническое задание, в котором чётко прописаны этапы, функции и результаты. Согласовываем его с вами перед стартом проекта.",
            active: false
        },
        {
            title: "Дизайн интерфейса",
            description: "Разрабатываем UX/UI-дизайн, который будет удобен, интуитивен и визуально привлекателен. Создаём прототипы и визуальные решения.",
            active: false
        },
        {
            title: "Разработка",
            description: "На этом этапе проект оживает — программисты реализуют весь функционал согласно ТЗ и дизайн-макетам.",
            active: false
        },
        {
            title: "Тестирование",
            description: "Проверяем работу системы на наличие багов, ошибок и недочётов. Убедимся, что всё работает стабильно на разных устройствах и браузерах.",
            active: false
        },
        {
            title: "Запуск и поддержка",
            description: "Публикуем проект и следим за его корректной работой. Оказываем техническую поддержку, обновления и вносим улучшения по мере необходимости.",
            active: false
        }
    ];

    return (
        <section className="bg-black text-white flex justify-center pt-40">
            <div className="container flex flex-col">
                <div className="mb-20">
                    <h2 className="text-6xl font-bold mb-8">
                        Маршрут <span className="text-gray-400">в продакшн</span>
                    </h2>
                    <p className="text-3xl font-light text-gray-400">
                        Чёткая система, где каждый шаг двигает к результату
                    </p>
                </div>

                <div className="flex items-center gap-40">
                    {/* Timeline Steps */}
                    <div className="flex-1 space-y-12 h-80 snap-y snap-mandatory overflow-y-auto">
                        {steps.map((step, index) => (
                            <div key={index} className="relative snap-start mb-20 ">
                                <div className={`text-4xl font-semibold mb-4 ${step.active ? 'text-blue-400' : 'text-gray-500'}`}>
                                    {step.title}
                                </div>
                                <div className={`text-sm leading-relaxed ${step.active ? 'text-white' : 'text-gray-400'}`}>
                                    {step.description}
                                </div>
                                {index < 6 && (
                                    <div className="absolute left-0 top-16 w-px h-12 bg-gradient-to-b from-gray-600 to-transparent"></div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Interactive Carousel */}
                    <div className="flex-1 relative">
                        <div className="relative w-[549px] h-[568px] z-10 rounded-full overflow-hidden rounded-full border border-gray-600 backdrop-blur-sm">
                            <img src="images/home/5ef3e749c7570d2f0dbd733d4b1f59e6037e1402.png" alt="" className="absolute top-0 left-0 w-full h-[calc(100%+10px)]" />
                        </div>
                        <img src="images/background/background1.svg" alt="" className="absolute top-[-40%] left-[-10%] w-[8000px] h-[1000px] z-0" />
                    </div>
                </div>
            </div>
        </section>
    );
}