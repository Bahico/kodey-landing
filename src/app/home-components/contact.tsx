import Image from "next/image";

export default function Contact() {
    return (
        <section id="contact" className="flex justify-center pt-40 mb-40">
            <div className="container relative">
                <div className="mb-1 0">
                    <h2 className="text-6xl font-bold mb-4">
                        Отправить <span className="text-gray-400">сигнал</span>
                    </h2>
                    <p className="text-3xl font-light text-gray-400">
                        Опишите задачу — мы на связи и готовы принимать данные
                    </p>
                </div>

                <div className="flex flex-col w-2/3">
                    <h3 className="text-3xl font-semibold text-gray-800 mb-8">Какая задача нас ждет ?</h3>

                    <div className="flex flex-wrap gap-4 mb-12 w-2/3">
                        {[
                            "Telegram - bot", "Telegram - app", "Сайт (лендинг)",
                            "Сайт (многостраничный)", "Мобильное приложение", "CRM",
                            "Аутстафф", "Другое"
                        ].map((service, index) => (
                            <button key={index} className="px-4 py-2 rounded-full shadow-sm shadow-gray-200 transition-colors text-gray-800 font-medium">
                                {service}
                            </button>
                        ))}
                    </div>

                    <div className="space-y-8">
                        <div>
                            <label className="block text-gray-600 text-base mb-2">Имя*</label>
                            <input type="text" className="w-full bg-transparent border-b-2 border-gray-300 text-2xl text-gray-800 py-2 focus:border-blue-500 outline-none" placeholder="Виктор |" />
                        </div>
                        <div>
                            <label className="block text-gray-800 text-2xl mb-2">Телефон*</label>
                            <input type="tel" className="w-full bg-transparent border-b-2 border-gray-300 text-2xl text-gray-800 py-2 focus:border-blue-500 outline-none" />
                        </div>
                        <div>
                            <label className="block text-gray-800 text-2xl mb-2">Email*</label>
                            <input type="email" className="w-full bg-transparent border-b-2 border-gray-300 text-2xl text-gray-800 py-2 focus:border-blue-500 outline-none" />
                        </div>
                        <div>
                            <label className="block text-gray-800 text-2xl mb-2">Краткое техническое задание</label>
                            <textarea className="w-full bg-transparent border-b-2 border-gray-300 text-2xl text-gray-800 py-2 focus:border-blue-500 outline-none resize-none" rows={4}></textarea>
                        </div>
                    </div>

                    <div className="flex gap-8 items-center">
                        <div className="flex items-center gap-4 mt-8 mb-8">
                            <input type="checkbox" className="w-8 h-8 rounded border-2 border-gray-300" />
                            <span className="text-gray-500 text-xl">Я соглашаюсь на обработку персональных данных</span>
                        </div>

                        <button
                            className="text-white rounded-2xl text-2xl font-semibold hover:shadow-lg transition-shadow w-[320px] h-[80px]"
                            style={{
                                background: "radial-gradient(179.26% 210.04% at -91.9% 11.81%, #00C8FF 44%, #004DFF 100%), linear-gradient(0deg, #004DFF 0%, #004DFF 100%), radial-gradient(50% 50% at 50% 50%, #00C8FF 0%, #004DFF 100%);",
                            }}
                        >
                            Оставить заявку
                        </button>
                    </div>
                </div>

                <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-br rounded-3xl overflow-hidden">
                    <Image src="/images/home/48c20b59329df46824f434a9a8326311165d3bc6.png" alt="contact" fill className="object-contain" />
                </div>
            </div>
        </section>
    )
}