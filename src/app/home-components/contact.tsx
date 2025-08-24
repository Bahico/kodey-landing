import Image from "next/image";

export default function Contact() {
    return (
        <section id="contact" className="flex justify-center pt-20 sm:pt-32 md:pt-40 mb-20 sm:mb-32 md:mb-40 px-4 sm:px-6 lg:px-8">
            <div className="container relative w-full">
                <div className="mb-10 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Отправить <span className="text-gray-400">сигнал</span>
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-400">
                        Опишите задачу — мы на связи и готовы принимать данные
                    </p>
                </div>

                <div className="flex flex-col w-full lg:w-2/3">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-6 sm:mb-8">Какая задача нас ждет ?</h3>

                    <div className="flex flex-wrap gap-2 sm:gap-4 mb-8 sm:mb-12 w-full lg:w-2/3">
                        {[
                            "Telegram - bot", "Telegram - app", "Сайт (лендинг)",
                            "Сайт (многостраничный)", "Мобильное приложение", "CRM",
                            "Аутстафф", "Другое"
                        ].map((service, index) => (
                            <button key={index} className="px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow-sm shadow-gray-200 transition-colors text-gray-800 font-medium text-sm sm:text-base">
                                {service}
                            </button>
                        ))}
                    </div>

                    <div className="space-y-6 sm:space-y-8">
                        <div>
                            <label className="block text-gray-600 text-sm sm:text-base mb-2">Имя*</label>
                            <input type="text" className="w-full bg-transparent border-b-2 border-gray-300 text-lg sm:text-xl md:text-2xl text-gray-800 py-2 focus:border-blue-500 outline-none" placeholder="Виктор |" />
                        </div>
                        <div>
                            <label className="block text-gray-800 text-lg sm:text-xl md:text-2xl mb-2">Телефон*</label>
                            <input type="tel" className="w-full bg-transparent border-b-2 border-gray-300 text-lg sm:text-xl md:text-2xl text-gray-800 py-2 focus:border-blue-500 outline-none" />
                        </div>
                        <div>
                            <label className="block text-gray-800 text-lg sm:text-xl md:text-2xl mb-2">Email*</label>
                            <input type="email" className="w-full bg-transparent border-b-2 border-gray-300 text-lg sm:text-xl md:text-2xl text-gray-800 py-2 focus:border-blue-500 outline-none" />
                        </div>
                        <div>
                            <label className="block text-gray-800 text-lg sm:text-xl md:text-2xl mb-2">Краткое техническое задание</label>
                            <textarea className="w-full bg-transparent border-b-2 border-gray-300 text-lg sm:text-xl md:text-2xl text-gray-800 py-2 focus:border-blue-500 outline-none resize-none" rows={4}></textarea>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center">
                        <div className="flex items-start sm:items-center gap-3 sm:gap-4 mt-6 sm:mt-8 mb-6 sm:mb-8">
                            <input type="checkbox" className="w-6 h-6 sm:w-8 sm:h-8 rounded border-2 border-gray-300 mt-1 sm:mt-0" />
                            <span className="text-gray-500 text-sm sm:text-lg md:text-xl">Я соглашаюсь на обработку персональных данных</span>
                        </div>

                        <button
                            className="text-white rounded-2xl text-lg sm:text-xl md:text-2xl font-semibold hover:shadow-lg transition-shadow w-full sm:w-[280px] md:w-[320px] h-[60px] sm:h-[70px] md:h-[80px]"
                            style={{
                                background: "radial-gradient(179.26% 210.04% at -91.9% 11.81%, #00C8FF 44%, #004DFF 100%), linear-gradient(0deg, #004DFF 0%, #004DFF 100%), radial-gradient(50% 50% at 50% 50%, #00C8FF 0%, #004DFF 100%);",
                            }}
                        >
                            Оставить заявку
                        </button>
                    </div>
                </div>

                <div className="lg:absolute top-0 right-0 w-full lg:w-[50%] lg:h-full bg-gradient-to-br rounded-3xl overflow-hidden">
                    <Image src="/images/home/48c20b59329df46824f434a9a8326311165d3bc6.png" alt="contact" width={1000} height={1000} className="object-contain" />
                </div>
            </div>
        </section>
    )
}